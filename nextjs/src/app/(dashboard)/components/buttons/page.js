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
          <h1 className="app-page-title">Buttons</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Buttons</li>
            </ol>
          </nav>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Buttons Variants</h6>
                <p className="card-text">Bootstrap offers button variants for semantic purposes and customization.</p>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <button type="button" className="btn btn-primary waves-effect waves-light">Primary</button>
                  <button type="button" className="btn btn-secondary waves-effect waves-light">Secondary</button>
                  <button type="button" className="btn btn-success waves-effect waves-light">Success</button>
                  <button type="button" className="btn btn-danger waves-effect waves-light">Danger</button>
                  <button type="button" className="btn btn-warning waves-effect waves-light">Warning</button>
                  <button type="button" className="btn btn-info waves-effect waves-light">Info</button>
                  <button type="button" className="btn btn-light waves-effect waves-light">Light</button>
                  <button type="button" className="btn btn-dark waves-effect waves-light">Dark</button>
                  <button type="button" className="btn btn-white waves-effect waves-light">White</button>

                  <button type="button" className="btn btn-link">Link</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Outline buttons</h6>
                <p className="card-text">Use <code>.btn-outline-*</code> classes for buttons without background colors.</p>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <button type="button" className="btn btn-outline-primary waves-effect waves-light">Primary</button>
                  <button type="button" className="btn btn-outline-secondary waves-effect waves-light">Secondary</button>
                  <button type="button" className="btn btn-outline-success waves-effect waves-light">Success</button>
                  <button type="button" className="btn btn-outline-danger waves-effect waves-light">Danger</button>
                  <button type="button" className="btn btn-outline-warning waves-effect waves-light">Warning</button>
                  <button type="button" className="btn btn-outline-info waves-effect waves-light">Info</button>
                  <button type="button" className="btn btn-outline-light waves-effect waves-light">Light</button>
                  <button type="button" className="btn btn-outline-dark waves-effect waves-light">Dark</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Border Dashed</h6>
                <p className="card-text">Use <code>.border-dashed-*</code> classes for buttons border style dashed.</p>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <button type="button" className="btn btn-outline-primary border-dashed waves-effect waves-light">Primary</button>
                  <button type="button" className="btn btn-outline-secondary border-dashed waves-effect waves-light">Secondary</button>
                  <button type="button" className="btn btn-outline-success border-dashed waves-effect waves-light">Success</button>
                  <button type="button" className="btn btn-outline-danger border-dashed waves-effect waves-light">Danger</button>
                  <button type="button" className="btn btn-outline-warning border-dashed waves-effect waves-light">Warning</button>
                  <button type="button" className="btn btn-outline-info border-dashed waves-effect waves-light">Info</button>
                  <button type="button" className="btn btn-outline-light border-dashed waves-effect waves-light">Light</button>
                  <button type="button" className="btn btn-outline-dark border-dashed waves-effect waves-light">Dark</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Subtle buttons</h6>
                <p className="card-text">Use <code>.btn-subtle-*</code> classes for lightweight buttons with background colors.</p>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <button type="button" className="btn btn-subtle-primary waves-effect waves-light">Primary</button>
                  <button type="button" className="btn btn-subtle-secondary waves-effect waves-light">Secondary</button>
                  <button type="button" className="btn btn-subtle-success waves-effect waves-light">Success</button>
                  <button type="button" className="btn btn-subtle-danger waves-effect waves-light">Danger</button>
                  <button type="button" className="btn btn-subtle-warning waves-effect waves-light">Warning</button>
                  <button type="button" className="btn btn-subtle-info waves-effect waves-light">Info</button>
                  <button type="button" className="btn btn-subtle-light waves-effect waves-light">Light</button>
                  <button type="button" className="btn btn-subtle-dark waves-effect waves-light">Dark</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Hover subtle buttons</h6>
                <p className="card-text">Use <code>.btn-subtle-*</code> classes for lightweight buttons with background colors.</p>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <button type="button" className="btn btn-action-primary waves-effect waves-light">Primary</button>
                  <button type="button" className="btn btn-action-secondary waves-effect waves-light">Secondary</button>
                  <button type="button" className="btn btn-action-success waves-effect waves-light">Success</button>
                  <button type="button" className="btn btn-action-danger waves-effect waves-light">Danger</button>
                  <button type="button" className="btn btn-action-warning waves-effect waves-light">Warning</button>
                  <button type="button" className="btn btn-action-info waves-effect waves-light">Info</button>
                  <button type="button" className="btn btn-action-light waves-effect waves-light">Light</button>
                  <button type="button" className="btn btn-action-dark waves-effect waves-light">Dark</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Rounded buttons</h6>
                <p className="card-text">Use <code>.rounded-pill-*</code> for creating pill-shaped buttons.</p>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <button type="button" className="btn btn-subtle-primary rounded-pill waves-effect waves-light">Primary</button>
                  <button type="button" className="btn btn-subtle-secondary rounded-pill waves-effect waves-light">Secondary</button>
                  <button type="button" className="btn btn-subtle-success rounded-pill waves-effect waves-light">Success</button>
                  <button type="button" className="btn btn-subtle-danger rounded-pill waves-effect waves-light">Danger</button>
                  <button type="button" className="btn btn-subtle-warning rounded-pill waves-effect waves-light">Warning</button>
                  <button type="button" className="btn btn-subtle-info rounded-pill waves-effect waves-light">Info</button>
                  <button type="button" className="btn btn-subtle-light rounded-pill waves-effect waves-light">Light</button>
                  <button type="button" className="btn btn-subtle-dark rounded-pill waves-effect waves-light">Dark</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Social Button</h6>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-4">
                  <div className="d-flex flex-wrap gap-2">
                    <a href="javascript:void(0)" className="btn btn-icon btn-facebook waves-effect waves-light">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-facebook waves-effect waves-light">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-outline-facebook waves-effect waves-light">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-action-facebook waves-effect waves-light">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-facebook rounded-circle waves-effect waves-light">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="javascript:void(0)" className="btn btn-icon btn-twitter waves-effect waves-light">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-twitter waves-effect waves-light">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-outline-twitter waves-effect waves-light">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-action-twitter waves-effect waves-light">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-twitter rounded-circle waves-effect waves-light">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="javascript:void(0)" className="btn btn-icon btn-github waves-effect waves-light">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-github waves-effect waves-light">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-outline-github waves-effect waves-light">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-action-github waves-effect waves-light">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-github rounded-circle waves-effect waves-light">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="javascript:void(0)" className="btn btn-icon btn-instagram waves-effect waves-light">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-instagram waves-effect waves-light">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-outline-instagram waves-effect waves-light">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-action-instagram waves-effect waves-light">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-instagram rounded-circle waves-effect waves-light">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="javascript:void(0)" className="btn btn-icon btn-youtube waves-effect waves-light">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-youtube waves-effect waves-light">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-outline-youtube waves-effect waves-light">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-action-youtube waves-effect waves-light">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-youtube rounded-circle waves-effect waves-light">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="javascript:void(0)" className="btn btn-icon btn-linkedin waves-effect waves-light">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-linkedin waves-effect waves-light">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-outline-linkedin waves-effect waves-light">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-action-linkedin waves-effect waves-light">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-linkedin rounded-circle waves-effect waves-light">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="javascript:void(0)" className="btn btn-icon btn-whatsapp waves-effect waves-light">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-whatsapp waves-effect waves-light">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-outline-whatsapp waves-effect waves-light">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-action-whatsapp waves-effect waves-light">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-whatsapp rounded-circle waves-effect waves-light">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="javascript:void(0)" className="btn btn-icon btn-pinterest waves-effect waves-light">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-pinterest waves-effect waves-light">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-outline-pinterest waves-effect waves-light">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-action-pinterest waves-effect waves-light">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-pinterest rounded-circle waves-effect waves-light">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="javascript:void(0)" className="btn btn-icon btn-snapchat waves-effect waves-light">
                      <i className="fa-brands fa-snapchat"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-snapchat waves-effect waves-light">
                      <i className="fa-brands fa-snapchat"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-outline-snapchat waves-effect waves-light">
                      <i className="fa-brands fa-snapchat"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-action-snapchat waves-effect waves-light">
                      <i className="fa-brands fa-snapchat"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-snapchat rounded-circle waves-effect waves-light">
                      <i className="fa-brands fa-snapchat"></i>
                    </a>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="javascript:void(0)" className="btn btn-icon btn-telegram waves-effect waves-light">
                      <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-telegram waves-effect waves-light">
                      <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-outline-telegram waves-effect waves-light">
                      <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-action-telegram waves-effect waves-light">
                      <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-telegram rounded-circle waves-effect waves-light">
                      <i className="fa-brands fa-telegram"></i>
                    </a>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="javascript:void(0)" className="btn btn-icon btn-tiktok waves-effect waves-light">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-tiktok waves-effect waves-light">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-outline-tiktok waves-effect waves-light">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-action-tiktok waves-effect waves-light">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-tiktok rounded-circle waves-effect waves-light">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="javascript:void(0)" className="btn btn-icon btn-reddit waves-effect waves-light">
                      <i className="fa-brands fa-reddit"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-reddit waves-effect waves-light">
                      <i className="fa-brands fa-reddit"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-outline-reddit waves-effect waves-light">
                      <i className="fa-brands fa-reddit"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-action-reddit waves-effect waves-light">
                      <i className="fa-brands fa-reddit"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-icon btn-subtle-reddit rounded-circle waves-effect waves-light">
                      <i className="fa-brands fa-reddit"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Social Button Size</h6>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-5">
                  <div className="clearfix">
                    <h6 className="card-title mb-3">Size Large</h6>
                    <div className="d-flex flex-wrap gap-2">
                      <a href="javascript:void(0)" className="btn btn-icon btn-lg btn-facebook waves-effect waves-light">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-lg btn-twitter waves-effect waves-light">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-lg btn-github waves-effect waves-light">
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-lg btn-instagram waves-effect waves-light">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-lg btn-youtube waves-effect waves-light">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-lg btn-linkedin waves-effect waves-light">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-lg btn-whatsapp waves-effect waves-light">
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-lg btn-pinterest waves-effect waves-light">
                        <i className="fa-brands fa-pinterest"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-lg btn-snapchat waves-effect waves-light">
                        <i className="fa-brands fa-snapchat"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-lg btn-telegram waves-effect waves-light">
                        <i className="fa-brands fa-telegram"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-lg btn-tiktok waves-effect waves-light">
                        <i className="fa-brands fa-tiktok"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-lg btn-reddit waves-effect waves-light">
                        <i className="fa-brands fa-reddit"></i>
                      </a>
                    </div>
                  </div>
                  <div className="clearfix">
                    <h6 className="card-title mb-3">Size Small</h6>
                    <div className="d-flex flex-wrap gap-2">
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-facebook waves-effect waves-light">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-twitter waves-effect waves-light">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-github waves-effect waves-light">
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-instagram waves-effect waves-light">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-youtube waves-effect waves-light">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-linkedin waves-effect waves-light">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-whatsapp waves-effect waves-light">
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-pinterest waves-effect waves-light">
                        <i className="fa-brands fa-pinterest"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-snapchat waves-effect waves-light">
                        <i className="fa-brands fa-snapchat"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-telegram waves-effect waves-light">
                        <i className="fa-brands fa-telegram"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-tiktok waves-effect waves-light">
                        <i className="fa-brands fa-tiktok"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-reddit waves-effect waves-light">
                        <i className="fa-brands fa-reddit"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Sizes </h6>
                <p className="card-text">Fancy larger or smaller buttons? Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.</p>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-primary btn-lg waves-effect waves-light me-1 mb-1">Large button</button>
                <button type="button" className="btn btn-secondary btn-lg waves-effect waves-light me-1 mb-1">Large button</button>
                <button type="button" className="btn btn-primary btn-sm waves-effect waves-light me-1 mb-1">Small button</button>
                <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light me-1 mb-1">Small button</button>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Block buttons</h6>
                <p className="card-text">Use utilities to create responsive block buttons with better spacing.</p>
              </div>
              <div className="card-body">
                <div className="d-grid gap-2">
                  <button className="btn btn-primary waves-effect waves-light" type="button">Button</button>
                  <button className="btn btn-secondary waves-effect waves-light" type="button">Button</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    
    </>
  );
}
