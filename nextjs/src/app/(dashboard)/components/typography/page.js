"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    // Page-specific initializations
    if (typeof window !== "undefined" && window.jQuery) {
      // Re-trigger selectpicker, tooltips, checkable, etc.
      if (window.initSelectPicker) window.initSelectPicker();
      if (window.initTooltips) window.initTooltips();
      if (window.initCheckable) window.initCheckable();
    }
  }, []);

  return (
    <>


      <div className="container">

        <div className="app-page-head">
          <h1 className="app-page-title">Typography</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Typography</li>
            </ol>
          </nav>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="row h-100">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title">Headings</h6>
                    <p className="card-text">All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>
                  </div>
                  <div className="card-body">
                    <h1>h1. Bootstrap heading</h1>
                    <h2>h2. Bootstrap heading</h2>
                    <h3>h3. Bootstrap heading</h3>
                    <h4>h4. Bootstrap heading</h4>
                    <h5>h5. Bootstrap heading</h5>
                    <h6>h6. Bootstrap heading</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title">Customizing headings</h6>
                    <p className="card-text">Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.</p>
                  </div>
                  <div className="card-body">
                    <h3>Fancy display heading <small className="text-body-secondary">With faded secondary text</small>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Display headings</h6>
                <p className="card-text">Traditional heading elements work best for structuring the main content of your page.</p>
              </div>
              <div className="card-body">
                <h1 className="display-1">Display 1</h1>
                <h1 className="display-2">Display 2</h1>
                <h1 className="display-3">Display 3</h1>
                <h1 className="display-4">Display 4</h1>
                <h1 className="display-5">Display 5</h1>
                <h1 className="display-6">Display 6</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row h-100">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title">Lead</h6>
                    <p className="card-text">Make a paragraph stand out by adding <code>.lead</code>.</p>
                  </div>
                  <div className="card-body">
                    <p className="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title">Text utilities</h6>
                    <p className="card-text">Traditional heading elements work best for structuring the main content of your page.</p>
                  </div>
                  <div className="card-body">
                    <p>
                      <abbr title="attribute">attr</abbr>
                    </p>
                    <p>
                      <abbr title="HyperText Markup Language" className="initialism">HTML</abbr>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Inline text elements</h6>
                <p className="card-text">Styling for common inline HTML5 elements.</p>
              </div>
              <div className="card-body">
                <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                <p>
                  <del>This line of text is meant to be treated as deleted text.</del>
                </p>
                <p>
                  <s>This line of text is meant to be treated as no longer accurate.</s>
                </p>
                <p>
                  <ins>This line of text is meant to be treated as an addition to the document.</ins>
                </p>
                <p>
                  <u>This line of text will render as underlined.</u>
                </p>
                <p>
                  <small>This line of text is meant to be treated as fine print.</small>
                </p>
                <p>
                  <strong>This line rendered as bold text.</strong>
                </p>
                <p>
                  <em>This line rendered as italicized text.</em>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Blockquotes </h6>
                <p className="card-text">For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote className="blockquote"&gt;</code> around any HTML as the quote.</p>
              </div>
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Naming a source </h6>
                <p className="card-text">Use <code>&lt;figure&gt;</code> with <code>&lt;figcaption&gt;</code> for blockquote attribution.</p>
              </div>
              <div className="card-body">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                  <cite title="Source Title">Source Title</cite>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Blockquote Center</h6>
                <p className="card-text">Use text utilities as needed to change the alignment of your blockquote.</p>
              </div>
              <div className="card-body">
                <blockquote className="blockquote text-center">
                  <p>A well-known quote, contained in a blockquote element.</p>
                  <cite title="Source Title">Source Title</cite>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Blockquote right</h6>
                <p className="card-text">Use text utilities as needed to change the alignment of your blockquote.</p>
              </div>
              <div className="card-body">
                <blockquote className="blockquote text-end">
                  <p>A well-known quote, contained in a blockquote element.</p>
                  <cite title="Source Title">Source Title</cite>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Unstyled </h6>
                <p className="card-text">Remove the default list-style and left margin on list items.</p>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>This is a list.</li>
                  <li>It appears completely unstyled.</li>
                  <li>Structurally, it's still a list.</li>
                  <li>However, this style only applies to immediate child elements.</li>
                  <li>Nested lists:
                    <ul>
                      <li>are unaffected by this style</li>
                      <li>will still show a bullet</li>
                      <li>and have appropriate left margin</li>
                    </ul>
                  </li>
                  <li>This may still come in handy in some situations.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Description list alignment</h6>
                <p className="card-text">Align terms and descriptions horizontally by using our grid system’s predefined classes.</p>
              </div>
              <div className="card-body">
                <dl className="row">
                  <dt className="col-sm-3">Description lists</dt>
                  <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                  <dt className="col-sm-3">Term</dt>
                  <dd className="col-sm-9">
                    <p>Definition for the term.</p>
                    <p>And some more placeholder definition text.</p>
                  </dd>

                  <dt className="col-sm-3">Another term</dt>
                  <dd className="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

                  <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                  <dd className="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

                  <dt className="col-sm-3">Nesting</dt>
                  <dd className="col-sm-9">
                    <dl className="row">
                      <dt className="col-sm-4">Nested definition list</dt>
                      <dd className="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Inline</h6>
                <p className="card-text">Remove a list’s bullets and apply some light margin with a combination of two classes.</p>
              </div>
              <div className="card-body">
                <ul className="list-inline">
                  <li className="list-inline-item">This is a list item.</li>
                  <li className="list-inline-item">And another one.</li>
                  <li className="list-inline-item">But they're displayed inline.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    
    </>
  );
}
