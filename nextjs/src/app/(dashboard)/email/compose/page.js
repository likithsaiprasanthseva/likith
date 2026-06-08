"use client";

import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

export default function Page() {
  useEffect(() => {
    let tagifyInstances = [];
    
    const initTagify = () => {
      if (typeof window !== "undefined" && window.Tagify) {
        const tagifyInputs = document.querySelectorAll('.tagify-input');
        tagifyInputs.forEach((el) => {
          if (!el.tagifyInstance) {
            const t = new window.Tagify(el, {
              placeholder: "Type something..."
            });
            el.tagifyInstance = t;
            tagifyInstances.push(t);
          }
        });
      }
    };

    // Try to initialize immediately in case script is already loaded
    initTagify();

    // Listen for custom script load event
    const handleScriptLoad = () => {
      initTagify();
    };
    window.addEventListener('tagify-loaded', handleScriptLoad);

    // Sidebar toggler for mobile mail view
    const sidebarToggler = document.querySelector('.mail-sidebar-toggler');
    const mailSidebar = document.querySelector('.mail-sidebar');
    const overlay = document.querySelector('.mail-wrapper .sidebar-mobile-overlay');
    
    const toggleSidebar = () => {
      if (mailSidebar) mailSidebar.classList.toggle('show');
      if (overlay) overlay.classList.toggle('show');
    };

    if (sidebarToggler) sidebarToggler.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);

    return () => {
      window.removeEventListener('tagify-loaded', handleScriptLoad);
      if (sidebarToggler) sidebarToggler.removeEventListener('click', toggleSidebar);
      if (overlay) overlay.removeEventListener('click', toggleSidebar);
      
      tagifyInstances.forEach(t => {
        try {
          t.destroy();
        } catch (e) {}
      });
    };
  }, []);

  return (
    <>
      {/* Load Tagify CSS */}
      <link rel="stylesheet" href="/assets/libs/tagify/tagify.css" />
      
      {/* Load Tagify Script */}
      <Script 
        src="/assets/libs/tagify/tagify.js" 
        strategy="lazyOnload" 
        onLoad={() => {
          window.dispatchEvent(new Event('tagify-loaded'));
        }} 
      />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card card-body overflow-hidden mail-wrapper p-0">
              <div className="sidebar-mobile-overlay"></div>
              
              <div className="mail-sidebar bg-light">
                <div className="px-3 pt-3 mb-2">
                  <Link href="/email/compose" className="btn btn-primary waves-effect waves-light w-100">
                    Compose
                  </Link>
                </div>
                
                <div className="d-grid gap-2 p-2 mail-nav" id="myTab" role="tablist">
                  <Link href="/email/inbox" className="mail-nav-item">
                    <i className="fi fi-rr-inbox-in me-2"></i> Inbox
                    <span className="badge badge-sm bg-primary-subtle text-primary ms-auto">247</span>
                  </Link>
                  <Link href="/email/inbox" className="mail-nav-item">
                    <i className="fi fi-rr-paper-plane-top me-2"></i> Sent
                  </Link>
                  <Link href="/email/inbox" className="mail-nav-item">
                    <i className="fi fi-rr-blueprint me-2"></i> Drafts
                  </Link>
                  <Link href="/email/inbox" className="mail-nav-item">
                    <i className="fi fi-rr-trash me-2"></i> Trash
                  </Link>
                  <Link href="/email/inbox" className="mail-nav-item">
                    <i className="fi fi-rr-star me-2"></i> Starred
                  </Link>
                  <Link href="/email/inbox" className="mail-nav-item">
                    <i className="fi fi-rr-box me-2"></i> Archive
                  </Link>
                  <Link href="/calendar" className="mail-nav-item">
                    <i className="fi fi-rr-calendar me-2"></i> Scheduled
                  </Link>
                </div>
              </div>

              <div className="mail-body">
                <div className="mail-header">
                  <button className="btn btn-white btn-shadow btn-icon waves-effect mail-sidebar-toggler d-lg-none">
                    <i className="fi fi-rs-list"></i>
                  </button>
                  <h6 className="mb-0 me-auto">New Message</h6>
                </div>
                
                <div className="px-4 py-3">
                  <ul className="list-group list-group-flush border-bottom">
                    <li className="list-group-item d-flex align-items-center px-0 py-0">
                      <span className="text-body minw-100px">To</span>
                      <input 
                        className="form-control border-0 shadow-none tagify-input px-2" 
                        name="basic" 
                        defaultValue="sales@example.com" 
                      />
                    </li>
                    <li className="list-group-item d-flex align-items-center px-0 py-0">
                      <span className="text-body minw-100px">CC</span>
                      <input 
                        className="form-control border-0 shadow-none tagify-input px-2" 
                        name="cc" 
                        defaultValue="sales@example.com, info@example.com" 
                      />
                    </li>
                    <li className="list-group-item d-flex align-items-center px-0 py-2">
                      <span className="text-body minw-100px">Subject</span>
                      <input 
                        type="text" 
                        className="form-control border-0 shadow-none text-dark" 
                        defaultValue="You Made a Sale! – MetroGrid Figma Portfolio" 
                      />
                    </li>
                  </ul>
                </div>
                
                <textarea 
                  className="form-control mail-textarea"
                  defaultValue={`Hi layoutWave,

🎉 Great news — your product has just been sold!
Your design file "MetroGrid – Figma Portfolio Layout" was purchased with a Single License. You've earned $6.50

USD from this sale.

Warm regards,
Team LayoutDrop`}
                />
                
                <div className="d-flex px-4 py-2">
                  <button type="button" className="btn btn-primary waves-effect waves-light">
                    Send Message
                  </button>
                  <button type="button" className="btn btn-action-gray text-dark btn-icon waves-effect waves-light ms-3">
                    <i className="fi fi-rr-link-alt"></i>
                  </button>
                  <button type="button" className="btn btn-action-gray text-dark btn-icon waves-effect waves-light ms-1">
                    <i className="fi fi-rr-add-image"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
