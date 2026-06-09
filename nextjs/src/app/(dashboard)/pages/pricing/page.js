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
            <h1 className="app-page-title">Pricing</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Pricing</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-12">

            <div className="card">
              <div className="card-header border-0 pt-5 px-xxl-5 pb-2">
                <h3 className="text-center mb-2">Our Pricing Plans</h3>
                <p className="text-center mb-5">Choose the plan that fits your needs</p>
                <div className="form-check form-switch p-0 my-0 d-flex justify-content-center">
                  <label className="form-check-label d-flex fw-semibold align-items-center" htmlFor="switchCheckChecked">
                    <span>Monthly</span>
                    <input className="form-check-input mx-2" type="checkbox" role="switch" id="switchCheckChecked" defaultChecked="" />
                    <span>Annually</span>
                  </label>
                </div>
              </div>
              <div className="card-body">
                <div className="row mx-xxl-5 mb-xxl-5">
                  <div className="col-lg-4">
                    <div className="card overflow-hidden card-action action-border-primary">
                      <div className="card-header bg-light border-0 p-4" style={{backgroundImage: "url(assets/images/background/price.png)", backgroundSize: "cover", backgroundPosition: "center bottom"}}>
                        <h4>Free Trial</h4>
                        <p className="mb-4">Try the course for a limited
                          <br />time at no cost.
                        </p>
                        <div className="display-6 fw-bold text-dark lh-1 price-monthly">$0 <span className="h6">Monthly</span>
                        </div>
                        <div className="display-6 fw-bold text-dark lh-1 price-yearly d-none">$0 <span className="h6">Year</span>
                        </div>
                      </div>
                      <div className="card-body p-4">
                        <ul className="list-inline text-sm">
                          <li className="d-flex gap-2 align-items-center py-1 opacity-50">
                            <i className="fa-regular fa-circle-xmark text-danger"></i>
                            <span className="del">Full Access</span>
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Quizzes
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Community 24/7 Support
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1 opacity-50">
                            <i className="fa-regular fa-circle-xmark text-danger"></i>
                            <span className="del">Downloadable</span>
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1 opacity-50">
                            <i className="fa-regular fa-circle-xmark text-danger"></i>
                            <span className="del">Video Quality 720dpi</span>
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1 opacity-50">
                            <i className="fa-regular fa-circle-xmark text-danger"></i>
                            <span className="del">Source Files</span>
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Free Appointments
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1 opacity-50">
                            <i className="fa-regular fa-circle-xmark text-danger"></i>
                            <span className="del">Lifetime Access</span>
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Certificate of Completion
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1 opacity-50">
                            <i className="fa-regular fa-circle-xmark text-danger"></i>
                            <span className="del">Mentor Support</span>
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Enhanced Security
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer p-4 pt-0 border-0">
                        <a href="javascript:void(0)" className="btn btn-subtle-success btn-lg waves-effect waves-light w-100">Your Current Plan</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card overflow-hidden card-action action-border-primary action-active">
                      <div className="card-header bg-light border-0 p-4" style={{backgroundImage: "url(assets/images/background/price.png)", backgroundSize: "cover", backgroundPosition: "center bottom"}}>
                        <h4>Basic Package</h4>
                        <p className="mb-4">Access to core course materials
                          <br />and quizzes.
                        </p>
                        <div className="display-6 fw-bold text-dark lh-1 price-monthly">$12 <span className="h6">Monthly</span>
                        </div>
                        <div className="display-6 fw-bold text-dark lh-1 price-yearly d-none">$199 <span className="h6">Year</span>
                        </div>
                        <span className="badge bg-primary position-absolute top-0 end-0 mt-3 me-3">Popular</span>
                      </div>
                      <div className="card-body p-4">
                        <ul className="list-inline text-sm">
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Full Access
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Quizzes
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Community 24/7 Support
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1 opacity-50">
                            <i className="fa-regular fa-circle-xmark text-danger"></i>
                            <span className="del">Downloadable</span>
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Video Quality 720dpi
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Source Files
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Free Appointments
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1 opacity-50">
                            <i className="fa-regular fa-circle-xmark text-danger"></i>
                            <span className="del">Lifetime Access</span>
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Certificate of Completion
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1 opacity-50">
                            <i className="fa-regular fa-circle-xmark text-danger"></i>
                            <span className="del">Mentor Support</span>
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Enhanced Security
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer p-4 pt-0 border-0">
                        <a href="javascript:void(0)" className="btn btn-primary btn-lg waves-effect waves-light w-100">Upgrade</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card overflow-hidden card-action action-border-primary">
                      <div className="card-header bg-light border-0 p-4" style={{backgroundImage: "url(assets/images/background/price.png)", backgroundSize: "cover", backgroundPosition: "center bottom"}}>
                        <h4>Pro Plan</h4>
                        <p className="mb-4">Includes assignments, mentor support, and downloadable resources.</p>
                        <div className="display-6 fw-bold text-dark lh-1 price-monthly">$39 <span className="h6">Monthly</span>
                        </div>
                        <div className="display-6 fw-bold text-dark lh-1 price-yearly d-none">$499 <span className="h6">Year</span>
                        </div>
                      </div>
                      <div className="card-body p-4">
                        <ul className="list-inline text-sm">
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Full Access
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Quizzes
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Community 24/7 Support
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Downloadable
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Video Quality 720dpi
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Source Files
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Free Appointments
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Lifetime Access
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Certificate of Completion
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Mentor Support
                          </li>
                          <li className="d-flex gap-2 align-items-center py-1">
                            <i className="fa-regular fa-circle-check text-primary"></i> Enhanced Security
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer p-4 pt-0 border-0">
                        <a href="javascript:void(0)" className="btn btn-subtle-primary btn-lg waves-effect waves-light w-100">Upgrade</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    
    </>
  );
}
