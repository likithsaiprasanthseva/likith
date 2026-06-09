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

        <div className="app-page-head d-flex align-items-center justify-content-between">
          <div className="clearfix">
            <h1 className="app-page-title">Blog</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Blog</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
            <div className="card card-action action-elevate action-border-primary">
              <div className="card-header border-0 p-0 m-2 position-relative overflow-hidden">
                <img src="/assets/images/blog/blog1.webp" alt="" className="img-fluid rounded" />
                <div className="position-absolute action-visible top-0 start-0 h-100 w-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center">
                  <a href="/pages/blog-details" className="btn btn-icon btn-lg btn-secondary rounded-circle waves-effect waves-light">
                    <i className="fi fi-rr-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <h4>
                  <a href="/pages/blog-details" className="text-dark">Effective Hiring Process for Finding the Right Talent</a>
                </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since.</p>
              </div>
              <div className="card-footer mx-3 px-0 py-3 pb-4">
                <ul className="d-flex list-inline mb-0 gap-3 flex-wrap">
                  <li className="d-flex gap-1 align-items-center">
                    <i className="icon-calendar text-primary"></i>
                    <a className="text-body" href="javascript:void(0)">17 March 2025</a>
                  </li>
                  <li className="d-flex gap-1 align-items-center">
                    <i className="icon-circle-user text-primary"></i> BY
                    <a className="text-body" href="javascript:void(0)"> Roberts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
            <div className="card card-action action-elevate action-border-primary">
              <div className="card-header border-0 p-0 m-2 position-relative overflow-hidden">
                <img src="/assets/images/blog/blog2.webp" alt="" className="img-fluid rounded" />
                <div className="position-absolute action-visible top-0 start-0 h-100 w-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center">
                  <a href="/pages/blog-details" className="btn btn-icon btn-lg btn-secondary rounded-circle waves-effect waves-light">
                    <i className="fi fi-rr-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <h4>
                  <a href="/pages/blog-details" className="text-dark">Employee Onboarding and the Power of First Impressions</a>
                </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since.</p>
              </div>
              <div className="card-footer mx-3 px-0 py-3 pb-4">
                <ul className="d-flex list-inline mb-0 gap-3 flex-wrap">
                  <li className="d-flex gap-1 align-items-center">
                    <i className="icon-calendar text-primary"></i>
                    <a className="text-body" href="javascript:void(0)">17 March 2025</a>
                  </li>
                  <li className="d-flex gap-1 align-items-center">
                    <i className="icon-circle-user text-primary"></i> BY
                    <a className="text-body" href="javascript:void(0)"> Roberts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
            <div className="card card-action action-elevate action-border-primary">
              <div className="card-header border-0 p-0 m-2 position-relative overflow-hidden">
                <img src="/assets/images/blog/blog3.webp" alt="" className="img-fluid rounded" />
                <div className="position-absolute action-visible top-0 start-0 h-100 w-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center">
                  <a href="/pages/blog-details" className="btn btn-icon btn-lg btn-secondary rounded-circle waves-effect waves-light">
                    <i className="fi fi-rr-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <h4>
                  <a href="/pages/blog-details" className="text-dark">Training and Development for a Skilled Workforce</a>
                </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since.</p>
              </div>
              <div className="card-footer mx-3 px-0 py-3 pb-4">
                <ul className="d-flex list-inline mb-0 gap-3 flex-wrap">
                  <li className="d-flex gap-1 align-items-center">
                    <i className="icon-calendar text-primary"></i>
                    <a className="text-body" href="javascript:void(0)">17 March 2025</a>
                  </li>
                  <li className="d-flex gap-1 align-items-center">
                    <i className="icon-circle-user text-primary"></i> BY
                    <a className="text-body" href="javascript:void(0)"> Roberts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
            <div className="card card-action action-elevate action-border-primary">
              <div className="card-header border-0 p-0 m-2 position-relative overflow-hidden">
                <img src="/assets/images/blog/blog4.webp" alt="" className="img-fluid rounded" />
                <div className="position-absolute action-visible top-0 start-0 h-100 w-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center">
                  <a href="/pages/blog-details" className="btn btn-icon btn-lg btn-secondary rounded-circle waves-effect waves-light">
                    <i className="fi fi-rr-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <h4>
                  <a href="/pages/blog-details" className="text-dark">Managing Remote Work with the Right HR Strategy</a>
                </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since.</p>
              </div>
              <div className="card-footer mx-3 px-0 py-3 pb-4">
                <ul className="d-flex list-inline mb-0 gap-3 flex-wrap">
                  <li className="d-flex gap-1 align-items-center">
                    <i className="icon-calendar text-primary"></i>
                    <a className="text-body" href="javascript:void(0)">17 March 2025</a>
                  </li>
                  <li className="d-flex gap-1 align-items-center">
                    <i className="icon-circle-user text-primary"></i> BY
                    <a className="text-body" href="javascript:void(0)"> Roberts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
            <div className="card card-action action-elevate action-border-primary">
              <div className="card-header border-0 p-0 m-2 position-relative overflow-hidden">
                <img src="/assets/images/blog/blog5.webp" alt="" className="img-fluid rounded" />
                <div className="position-absolute action-visible top-0 start-0 h-100 w-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center">
                  <a href="/pages/blog-details" className="btn btn-icon btn-lg btn-secondary rounded-circle waves-effect waves-light">
                    <i className="fi fi-rr-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <h4>
                  <a href="/pages/blog-details" className="text-dark">HR Management the Backbone of Modern Organizations</a>
                </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since.</p>
              </div>
              <div className="card-footer mx-3 px-0 py-3 pb-4">
                <ul className="d-flex list-inline mb-0 gap-3 flex-wrap">
                  <li className="d-flex gap-1 align-items-center">
                    <i className="icon-calendar text-primary"></i>
                    <a className="text-body" href="javascript:void(0)">17 March 2025</a>
                  </li>
                  <li className="d-flex gap-1 align-items-center">
                    <i className="icon-circle-user text-primary"></i> BY
                    <a className="text-body" href="javascript:void(0)"> Roberts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 m-b30">
            <div className="card card-action action-elevate action-border-primary">
              <div className="card-header border-0 p-0 m-2 position-relative overflow-hidden">
                <img src="/assets/images/blog/blog6.webp" alt="" className="img-fluid rounded" />
                <div className="position-absolute action-visible top-0 start-0 h-100 w-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center">
                  <a href="/pages/blog-details" className="btn btn-icon btn-lg btn-secondary rounded-circle waves-effect waves-light">
                    <i className="fi fi-rr-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="card-body px-3 py-2">
                <h4>
                  <a href="/pages/blog-details" className="text-dark">Using HR Analytics for Better Decision Making</a>
                </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since.</p>
              </div>
              <div className="card-footer mx-3 px-0 py-3 pb-4">
                <ul className="d-flex list-inline mb-0 gap-3 flex-wrap">
                  <li className="d-flex gap-1 align-items-center">
                    <i className="icon-calendar text-primary"></i>
                    <a className="text-body" href="javascript:void(0)">17 March 2025</a>
                  </li>
                  <li className="d-flex gap-1 align-items-center">
                    <i className="icon-circle-user text-primary"></i> BY
                    <a className="text-body" href="javascript:void(0)"> Roberts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0)">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0)">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0)">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript:void(0)" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

    
    </>
  );
}
