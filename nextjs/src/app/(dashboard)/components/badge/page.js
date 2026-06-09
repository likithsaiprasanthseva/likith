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
          <h1 className="app-page-title">Badge</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Badge</li>
            </ol>
          </nav>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Background colors</h6>
                <p className="card-text">Bootstrap offers button variants for semantic purposes and customization.</p>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge text-bg-primary">Primary</span>
                  <span className="badge text-bg-secondary">Secondary</span>
                  <span className="badge text-bg-success">Success</span>
                  <span className="badge text-bg-danger">Danger</span>
                  <span className="badge text-bg-warning">Warning</span>
                  <span className="badge text-bg-info">Info</span>
                  <span className="badge text-bg-light">Light</span>
                  <span className="badge text-bg-dark">Dark</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Pill badges</h6>
                <p className="card-text">Use the <code>.rounded-pill</code> to make badges more rounded.</p>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge rounded-pill text-bg-primary">Primary</span>
                  <span className="badge rounded-pill text-bg-secondary">Secondary</span>
                  <span className="badge rounded-pill text-bg-success">Success</span>
                  <span className="badge rounded-pill text-bg-danger">Danger</span>
                  <span className="badge rounded-pill text-bg-warning">Warning</span>
                  <span className="badge rounded-pill text-bg-info">Info</span>
                  <span className="badge rounded-pill text-bg-light">Light</span>
                  <span className="badge rounded-pill text-bg-dark">Dark</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Subtle badge</h6>
                <p className="card-text">Use <code>.bg-*-subtle</code> and <code>.text-*</code> classes for lightweight buttons with background colors.</p>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-primary-subtle text-primary">Primary</span>
                  <span className="badge bg-secondary-subtle text-secondary">Secondary</span>
                  <span className="badge bg-success-subtle text-success">Success</span>
                  <span className="badge bg-danger-subtle text-danger">Danger</span>
                  <span className="badge bg-warning-subtle text-warning">Warning</span>
                  <span className="badge bg-info-subtle text-info">Info</span>
                  <span className="badge bg-light-subtle text-light">Light</span>
                  <span className="badge bg-dark-subtle text-dark">Dark</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Sizes </h6>
                <p className="card-text">Fancy larger or smaller badge? Add <code>.badge-lg</code> or <code>.badge-sm</code> for additional sizes.</p>
              </div>
              <div className="card-body">
                <span className="badge badge-sm text-bg-primary me-1">Primary</span>
                <span className="badge text-bg-secondary me-1">Secondary</span>
                <span className="badge badge-lg text-bg-success me-1">Success</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Positioned</h6>
                <p className="card-text">Use utilities to modify a <code>.badge</code> and position it in the corner of a link or button.</p>
              </div>
              <div className="card-body">

                <button type="button" className="btn btn-primary position-relative me-5">
                  Inbox
                  <span className="position-absolute top-0 start-100 translate-middle badge badge-sm rounded-pill bg-danger">99+
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>

                <button type="button" className="btn btn-primary position-relative">
                  Profile
                  <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </button>

              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <h6 className="card-title">Badge with Avatar</h6>
                <p className="card-text">Displays user identity with avatar and role.</p>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge d-inline-flex align-items-center p-1 pe-2 text-primary bg-primary-subtle border border-primary-subtle rounded-pill">
                    <img className="rounded-circle me-1" width="24" height="24" src="/assets/images/avatar/avatar1.webp" alt="" />Primary
                  </span>
                  <span className="badge d-inline-flex align-items-center p-1 pe-2 text-secondary bg-secondary-subtle border border-secondary-subtle rounded-pill">
                    <img className="rounded-circle me-1" width="24" height="24" src="/assets/images/avatar/avatar2.webp" alt="" />Secondary
                  </span>
                  <span className="badge d-inline-flex align-items-center p-1 pe-2 text-success bg-success-subtle border border-success-subtle rounded-pill">
                    <img className="rounded-circle me-1" width="24" height="24" src="/assets/images/avatar/avatar3.webp" alt="" />Success
                  </span>
                  <span className="badge d-inline-flex align-items-center p-1 pe-2 text-danger bg-danger-subtle border border-danger-subtle rounded-pill">
                    <img className="rounded-circle me-1" width="24" height="24" src="/assets/images/avatar/avatar4.webp" alt="" />Danger
                  </span>
                  <span className="badge d-inline-flex align-items-center p-1 pe-2 text-warning bg-warning-subtle border border-warning-subtle rounded-pill">
                    <img className="rounded-circle me-1" width="24" height="24" src="/assets/images/avatar/avatar5.webp" alt="" />Warning
                  </span>
                  <span className="badge d-inline-flex align-items-center p-1 pe-2 text-info bg-info-subtle border border-info-subtle rounded-pill">
                    <img className="rounded-circle me-1" width="24" height="24" src="/assets/images/avatar/avatar1.webp" alt="" />Info
                  </span>
                  <span className="badge d-inline-flex align-items-center p-1 pe-2 text-dark bg-light-subtle border border-dark-subtle rounded-pill">
                    <img className="rounded-circle me-1" width="24" height="24" src="/assets/images/avatar/avatar2.webp" alt="" />Light
                  </span>
                  <span className="badge d-inline-flex align-items-center p-1 pe-2 text-dark bg-dark-subtle border border-dark-subtle rounded-pill">
                    <img className="rounded-circle me-1" width="24" height="24" src="/assets/images/avatar/avatar3.webp" alt="" /> Dark
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    
    </>
  );
}
