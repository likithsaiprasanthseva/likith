import re
import os
import sys

def convert_style(match):
    style_str = match.group(1)
    rules = style_str.split(';')
    jsx_styles = []
    for rule in rules:
        if not rule.strip():
            continue
        parts = rule.split(':', 1)
        if len(parts) != 2:
            continue
        key = parts[0].strip()
        val = parts[1].strip()
        
        # Convert css-property to camelCase
        key_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
        # Handle quotes around value
        # Double escape or handle existing single/double quotes
        val_clean = val.replace('"', '\\"')
        jsx_styles.append(f'{key_camel}: "{val_clean}"')
    return "style={{" + ", ".join(jsx_styles) + "}}"

def convert_html_to_jsx(html_content, is_dashboard=True):
    # 1. Extract content of <main class="app-wrapper">...</main> if is_dashboard is True
    if is_dashboard:
        match = re.search(r'<main\s+class="app-wrapper"\s*>(.*?)</main>', html_content, re.DOTALL | re.IGNORECASE)
        if match:
            body_content = match.group(1)
        else:
            # Fallback if no main wrapper
            body_content = html_content
    else:
        # Extract content between <body> and </body>
        match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL | re.IGNORECASE)
        if match:
            body_content = match.group(1)
        else:
            body_content = html_content

    # 2. Convert class to className
    body_content = re.sub(r'\bclass\s*=\s*"([^"]*)"', r'className="\1"', body_content)
    body_content = re.sub(r"\bclass\s*=\s*'([^']*)'", r"className='\1'", body_content)

    # 3. Convert for to htmlFor
    body_content = re.sub(r'\bfor\s*=\s*"([^"]*)"', r'htmlFor="\1"', body_content)
    body_content = re.sub(r"\bfor\s*=\s*'([^']*)'", r"htmlFor='\1'", body_content)

    # 4. Close self-closing tags
    self_closing_tags = ['input', 'img', 'br', 'hr', 'col', 'link', 'meta']
    for tag in self_closing_tags:
        # Replace unclosed tags: e.g. <img src="foo"> -> <img src="foo" />
        body_content = re.sub(r'<' + tag + r'(\b[^>]*?)(?<!/)>', r'<' + tag + r'\1 />', body_content)

    # 5. Convert style attribute to React style object
    body_content = re.sub(r'\bstyle\s*=\s*"([^"]*)"', convert_style, body_content)

    # 6. Convert comments to JSX comments
    body_content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', body_content)

    # 7. Replace local HTML links with Next.js path structures
    def replace_link(m):
        url = m.group(1)
        if url.startswith('http') or url.startswith('#') or url.startswith('javascript:'):
            return m.group(0)
        
        # Convert relative .html links
        clean_url = url
        if clean_url.endswith('.html'):
            clean_url = clean_url[:-5]
        
        if clean_url == 'index':
            clean_url = '/'
        elif clean_url == 'index-rtl':
            clean_url = '/index-rtl'
        else:
            clean_url = '/' + clean_url
            
        return f'href="{clean_url}"'

    body_content = re.sub(r'href\s*=\s*"([^"]*)"', replace_link, body_content)

    # 8. Escape braces { and } in raw text to avoid JSX interpretation
    # A simple way is to temporarily replace them inside tags, then replace in text, then restore
    # For now, let's keep it simple. If we encounter raw `{` or `}` we might have issues, but let's handle common ones.
    
    # 9. Let's return the JSX code wrapped in the React component template
    jsx_template = f'''"use client";

import {{ useEffect }} from "react";
import Link from "next/link";

export default function Page() {{
  useEffect(() => {{
    // Page-specific initializations
    if (typeof window !== "undefined" && window.jQuery) {{
      // Re-trigger selectpicker, tooltips, checkable, etc.
      if (window.initSelectPicker) window.initSelectPicker();
      if (window.initTooltips) window.initTooltips();
      if (window.initCheckable) window.initCheckable();
    }}
  }}, []);

  return (
    <>
{body_content}
    </>
  );
}}
'''
    return jsx_template

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python convert_html_to_jsx.py <input_html_path> <output_jsx_path>")
        sys.exit(1)
        
    input_path = sys.argv[1]
    output_path = sys.argv[2]
    
    # Read HTML
    with open(input_path, 'r', encoding='utf-8') as f:
        html = f.read()
        
    # Convert
    jsx = convert_html_to_jsx(html)
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # Write JSX
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(jsx)
        
    print(f"Successfully converted {input_path} to {output_path}")
