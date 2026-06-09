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
            <h1 className="app-page-title">Blog List</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Blog List</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-8 mb-4">
            <div className="row">
              <div className="col-12 m-b30">
                <div className="card card-action action-elevate action-border-primary">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <div className="card-header border-0 p-0 m-2 position-relative overflow-hidden">
                        <img src="/assets/images/blog/blog1.webp" alt="" className="img-fluid rounded" />
                        <div className="position-absolute action-visible top-0 start-0 h-100 w-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center">
                          <a href="/pages/blog-details" className="btn btn-icon btn-lg btn-secondary rounded-circle waves-effect waves-light">
                            <i className="fi fi-rr-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 py-3 d-flex flex-column">
                      <div className="card-body px-3 py-2">
                        <a href="/pages/blog-details" className="badge badge-sm bg-info mb-1">Education</a>
                        <h4>
                          <a href="/pages/blog-details" className="text-dark">Effective Hiring Process for Finding the Right Talent</a>
                        </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since.</p>
                      </div>
                      <div className="card-footer mx-3 px-0 py-3">
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
              </div>
              <div className="col-12 m-b30">
                <div className="card card-action action-elevate action-border-primary">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <div className="card-header border-0 p-0 m-2 position-relative overflow-hidden">
                        <img src="/assets/images/blog/blog2.webp" alt="" className="img-fluid rounded" />
                        <div className="position-absolute action-visible top-0 start-0 h-100 w-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center">
                          <a href="/pages/blog-details" className="btn btn-icon btn-lg btn-secondary rounded-circle waves-effect waves-light">
                            <i className="fi fi-rr-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 py-3 d-flex flex-column">
                      <div className="card-body px-3 py-2">
                        <a href="/pages/blog-details" className="badge badge-sm bg-success mb-1">Lifestyle</a>
                        <h4>
                          <a href="/pages/blog-details" className="text-dark">Employee Onboarding and the Power of First Impressions</a>
                        </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since.</p>
                      </div>
                      <div className="card-footer mx-3 px-0 py-3">
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
              </div>
              <div className="col-12 m-b30">
                <div className="card card-action action-elevate action-border-primary">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <div className="card-header border-0 p-0 m-2 position-relative overflow-hidden">
                        <img src="/assets/images/blog/blog3.webp" alt="" className="img-fluid rounded" />
                        <div className="position-absolute action-visible top-0 start-0 h-100 w-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center">
                          <a href="/pages/blog-details" className="btn btn-icon btn-lg btn-secondary rounded-circle waves-effect waves-light">
                            <i className="fi fi-rr-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 py-3 d-flex flex-column">
                      <div className="card-body px-3 py-2">
                        <a href="/pages/blog-details" className="badge badge-sm bg-primary mb-1">Technology</a>
                        <h4>
                          <a href="/pages/blog-details" className="text-dark">Training and Development for a Skilled Workforce</a>
                        </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since.</p>
                      </div>
                      <div className="card-footer mx-3 px-0 py-3">
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
              </div>
              <div className="col-12 m-b30">
                <div className="card card-action action-elevate action-border-primary">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <div className="card-header border-0 p-0 m-2 position-relative overflow-hidden">
                        <img src="/assets/images/blog/blog4.webp" alt="" className="img-fluid rounded" />
                        <div className="position-absolute action-visible top-0 start-0 h-100 w-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center">
                          <a href="/pages/blog-details" className="btn btn-icon btn-lg btn-secondary rounded-circle waves-effect waves-light">
                            <i className="fi fi-rr-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 py-3 d-flex flex-column">
                      <div className="card-body px-3 py-2">
                        <a href="/pages/blog-details" className="badge badge-sm bg-danger mb-1">News</a>
                        <h4>
                          <a href="/pages/blog-details" className="text-dark">Managing Remote Work with the Right HR Strategy</a>
                        </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since.</p>
                      </div>
                      <div className="card-footer mx-3 px-0 py-3">
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
              </div>
              <div className="col-12 m-b30">
                <div className="card card-action action-elevate action-border-primary">
                  <div className="row g-0">
                    <div className="col-lg-5">
                      <div className="card-header border-0 p-0 m-2 position-relative overflow-hidden">
                        <img src="/assets/images/blog/blog5.webp" alt="" className="img-fluid rounded" />
                        <div className="position-absolute action-visible top-0 start-0 h-100 w-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center">
                          <a href="/pages/blog-details" className="btn btn-icon btn-lg btn-secondary rounded-circle waves-effect waves-light">
                            <i className="fi fi-rr-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 py-3 d-flex flex-column">
                      <div className="card-body px-3 py-2">
                        <a href="/pages/blog-details" className="badge badge-sm bg-warning mb-1">Blogger</a>
                        <h4>
                          <a href="/pages/blog-details" className="text-dark">HR Management the Backbone of Modern Organizations</a>
                        </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since.</p>
                      </div>
                      <div className="card-footer mx-3 px-0 py-3">
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
          <div className="col-xxl-4">
            <div className="row">
              <div className="col-xl-12">
                <div className="card text-bg-light">
                  <div className="card-body text-center">
                    <h6 className="mb-3"> Stay updated with the latest news and
                      <br />articles — subscribe now!
                    </h6>
                    <div className="d-flex">
                      <input type="text" className="form-control" placeholder="Email Here" />
                      <div className="clearfix ms-2">
                        <button className="btn btn-secondary waves-effect waves-light" type="button">Subscribe</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card overflow-hidden">
                  <div className="card-header justify-content-between d-flex">
                    <h6 className="card-title mb-0"> Recent Posts </h6>
                    <a href="javascript:void(0)" className="btn-link fw-semibold"> View All</a>
                  </div>
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item py-3">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="avatar avatar-xl">
                            <img src="/assets/images/blog/recent/blog1.webp" alt="" />
                          </div>
                          <div className="flex-fill">
                            <a href="/pages/blog-details" className="badge badge-sm bg-info mb-1">Education</a>
                            <h6 className="mb-1">
                              <a href="/pages/blog-details" className="text-dark">Traditional Education Which One</a>
                            </h6>
                            <span className="text-2xs text-body">2024-02-19 10:30 AM</span>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item py-3">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="avatar avatar-xl">
                            <img src="/assets/images/blog/recent/blog2.webp" alt="" />
                          </div>
                          <div className="flex-fill">
                            <a href="/pages/blog-details" className="badge badge-sm bg-success mb-1">Lifestyle</a>
                            <h6 className="mb-1">
                              <a href="/pages/blog-details" className="text-dark">Minimalism: Living More with Less</a>
                            </h6>
                            <span className="text-2xs text-body">2024-02-19 10:30 AM</span>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item py-3">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="avatar avatar-xl">
                            <img src="/assets/images/blog/recent/blog3.webp" alt="" />
                          </div>
                          <div className="flex-fill">
                            <a href="/pages/blog-details" className="badge badge-sm bg-primary mb-1">Technology</a>
                            <h6 className="mb-1">
                              <a href="/pages/blog-details" className="text-dark">The Rise of Augmented Reality</a>
                            </h6>
                            <span className="text-2xs text-body">2024-02-19 10:30 AM</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title mb-0"> Explore Topics </h6>
                  </div>
                  <div className="card-body">
                    <ul className="list-inline mb-0">
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Business Management</a>
                        <span className="ms-auto">(5)</span>
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Personal Development</a>
                        <span className="ms-auto">(7)</span>
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Arts & Design</a>
                        <span className="ms-auto">(2)</span>
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Data Science</a>
                        <span className="ms-auto">(8)</span>
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Marketing</a>
                        <span className="ms-auto">(6)</span>
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Builds Company</a>
                        <span className="ms-auto">(9)</span>
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Management And Employees</a>
                        <span className="ms-auto">(4)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title mb-0">Popular Tags </h6>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap gap-2">
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#HRStrategy</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#HRTrends</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#Leadership</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#Recruitment</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#Onboarding</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#Blogger</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#HRAdmin</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#CareerGrowth</a>
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
