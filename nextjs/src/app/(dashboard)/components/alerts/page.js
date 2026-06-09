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
          <h1 className="app-page-title">Alerts</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Alerts</li>
            </ol>
          </nav>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Alerts</h6>
                <p className="card-text">Alerts are available for any length of text.</p>
              </div>
              <div className="card-body">
                <div className="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
                <div className="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
                <div className="alert alert-success" role="alert">A simple success alert—check it out!</div>
                <div className="alert alert-danger" role="alert">A simple danger alert—check it out!</div>
                <div className="alert alert-warning" role="alert">A simple warning alert—check it out!</div>
                <div className="alert alert-info" role="alert">A simple info alert—check it out!</div>
                <div className="alert alert-light" role="alert">A simple light alert—check it out!</div>
                <div className="alert alert-dark" role="alert">A simple dark alert—check it out!</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Link color</h6>
                <p className="card-text">Use the <code>.alert-link</code> utility class to provide matching colored links within an alert.</p>
              </div>
              <div className="card-body">
                <div className="alert alert-primary" role="alert">
                  A simple primary alert with <a href="javascript:void(0)" className="alert-link">an example link</a>. Give it a click if you like.
                </div>
                <div className="alert alert-secondary" role="alert">
                  A simple secondary alert with <a href="javascript:void(0)" className="alert-link">an example link</a>. Give it a click if you like.
                </div>
                <div className="alert alert-success" role="alert">
                  A simple success alert with <a href="javascript:void(0)" className="alert-link">an example link</a>. Give it a click if you like.
                </div>
                <div className="alert alert-danger" role="alert">
                  A simple danger alert with <a href="javascript:void(0)" className="alert-link">an example link</a>. Give it a click if you like.
                </div>
                <div className="alert alert-warning" role="alert">
                  A simple warning alert with <a href="javascript:void(0)" className="alert-link">an example link</a>. Give it a click if you like.
                </div>
                <div className="alert alert-info" role="alert">
                  A simple info alert with <a href="javascript:void(0)" className="alert-link">an example link</a>. Give it a click if you like.
                </div>
                <div className="alert alert-light" role="alert">
                  A simple light alert with <a href="javascript:void(0)" className="alert-link">an example link</a>. Give it a click if you like.
                </div>
                <div className="alert alert-dark" role="alert">
                  A simple dark alert with <a href="javascript:void(0)" className="alert-link">an example link</a>. Give it a click if you like.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Icons</h6>
                <p className="card-text">Enhance alerts with icons for better visibility and context.</p>
              </div>
              <div className="card-body">
                <div className="alert alert-primary" role="alert">
                  <i className="fi fi-sr-star me-1"></i> A simple primary alert—check it out!
                </div>
                <div className="alert alert-secondary" role="alert">
                  <i className="fi fi-ss-check-circle me-1"></i> A simple secondary alert—check it out!
                </div>
                <div className="alert alert-success" role="alert">
                  <i className="fi fi-sr-trophy-star me-1"></i> A simple success alert—check it out!
                </div>
                <div className="alert alert-danger" role="alert">
                  <i className="fi fi-ss-octagon-exclamation me-1"></i> A simple danger alert—check it out!
                </div>
                <div className="alert alert-warning" role="alert">
                  <i className="fi fi-ss-triangle-warning me-1"></i> A simple warning alert—check it out!
                </div>
                <div className="alert alert-info" role="alert">
                  <i className="fi fi-sr-info me-1"></i> A simple info alert—check it out!
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Additional content</h6>
                <p className="card-text">Alerts can contain HTML elements like headings, paragraphs, and dividers.</p>
              </div>
              <div className="card-body">
                <div className="alert alert-success" role="alert">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>Aww yeah, you successfully read this alert message. This text is going to run longer so you can see how spacing within an alert works.</p>
                  <hr />
                  <p className="mb-0">Whenever you need, be sure to use margin utilities to keep things tidy.</p>
                </div>
                <div className="alert alert-danger" role="alert">
                  <h4 className="alert-heading">Something Wrong!</h4>
                  <p>Aww yeah, you successfully read this alert message. This text is going to run longer so you can see how spacing within an alert works.</p>
                  <hr />
                  <p className="mb-0">Whenever you need, be sure to use margin utilities to keep things tidy.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Dismissing</h6>
                <p className="card-text">To dismiss an alert, use <code>.alert-dismissible</code> with a close button.</p>
              </div>
              <div className="card-body">
                <div className="alert alert-primary alert-dismissible fade show" role="alert">
                  A simple primary alert—check it out
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                  A simple secondary alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  A simple success alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  A simple danger alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                  A simple warning alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert alert-info alert-dismissible fade show" role="alert">
                  A simple info alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert alert-light alert-dismissible fade show" role="alert">
                  A simple light alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert alert-dark alert-dismissible fade show" role="alert">
                  A simple dark alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Background color</h6>
                <p className="card-text">To dismiss an alert, use <code>.alert-dismissible</code> with a close button.</p>
              </div>
              <div className="card-body">
                <div className="alert text-bg-primary alert-dismissible fade show" role="alert">
                  A simple primary alert—check it out
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert text-bg-secondary alert-dismissible fade show" role="alert">
                  A simple secondary alert—check it out!
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert text-bg-success alert-dismissible fade show" role="alert">
                  A simple success alert—check it out!
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert text-bg-danger alert-dismissible fade show" role="alert">
                  A simple danger alert—check it out!
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert text-bg-warning alert-dismissible fade show" role="alert">
                  A simple warning alert—check it out!
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert text-bg-info alert-dismissible fade show" role="alert">
                  A simple info alert—check it out!
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert text-bg-light alert-dismissible fade show" role="alert">
                  A simple light alert—check it out!
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert text-bg-dark alert-dismissible fade show" role="alert">
                  A simple dark alert—check it out!
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Border</h6>
                <p className="card-text">To dismiss an alert, use <code>.alert-dismissible</code> with a close button.</p>
              </div>
              <div className="card-body">
                <div className="alert border-primary text-primary-emphasis alert-dismissible fade show" role="alert">
                  A simple primary alert—check it out
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-secondary text-secondary-emphasis alert-dismissible fade show" role="alert">
                  A simple secondary alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-success text-success-emphasis alert-dismissible fade show" role="alert">
                  A simple success alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-danger text-danger-emphasis alert-dismissible fade show" role="alert">
                  A simple danger alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-warning text-warning-emphasis alert-dismissible fade show" role="alert">
                  A simple warning alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-info text-info-emphasis alert-dismissible fade show" role="alert">
                  A simple info alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-light text-light-emphasis alert-dismissible fade show" role="alert">
                  A simple light alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-dark text-dark-emphasis alert-dismissible fade show" role="alert">
                  A simple dark alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Border dashed</h6>
                <p className="card-text">Use <code>.border-*</code>, <code>.text-*-emphasis</code>, and <code>.border-dashed</code> for a dashed border in an alert.</p>
              </div>
              <div className="card-body">
                <div className="alert border-primary text-primary-emphasis border-dashed alert-dismissible fade show" role="alert">
                  A simple primary alert—check it out
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-secondary text-secondary-emphasis border-dashed alert-dismissible fade show" role="alert">
                  A simple secondary alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-success text-success-emphasis border-dashed alert-dismissible fade show" role="alert">
                  A simple success alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-danger text-danger-emphasis border-dashed alert-dismissible fade show" role="alert">
                  A simple danger alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-warning text-warning-emphasis border-dashed alert-dismissible fade show" role="alert">
                  A simple warning alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-info text-info-emphasis border-dashed alert-dismissible fade show" role="alert">
                  A simple info alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-light text-light-emphasis border-dashed alert-dismissible fade show" role="alert">
                  A simple light alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="alert border-dark text-dark-emphasis border-dashed alert-dismissible fade show" role="alert">
                  A simple dark alert—check it out!
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    
    </>
  );
}
