"use client";

import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

export default function Page() {
  useEffect(() => {
    // Page-specific initializations
    if (typeof window !== "undefined") {
      if (window.jQuery) {
        if (window.initSelectPicker) window.initSelectPicker();
        if (window.initTooltips) window.initTooltips();
        if (window.initCheckable) window.initCheckable();
      }
      if (window.initDashboardCharts) {
        window.initDashboardCharts();
      }
    }
  }, []);

  return (
    <>
      <Script src="/assets/js/dashboard.js" strategy="lazyOnload" onLoad={() => {
        if (window.initDashboardCharts) window.initDashboardCharts();
      }} />


      <div className="container">

        <div className="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
          <div className="clearfix">
            <h1 className="app-page-title">Recruitment</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Recruitment</li>
              </ol>
            </nav>
          </div>
          <button type="button" className="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#createJobModal">
            <i className="fi fi-rr-plus me-1"></i> Create Job
          </button>
        </div>

        <div className="row">

          <div className="col-xxl-5">
            <div className="row">
              <div className="col-xxl-6 col-lg-4 col-sm-6">
                <div className="card card-action action-border-secondary p-1 position-relative">
                  <div className="card-body d-flex gap-3 align-items-center p-4">
                    <div className="clearfix pe-2 text-secondary">
                      <i className="fi fi-sr-shopping-bag fs-1"></i>
                    </div>
                    <div className="clearfix">
                      <div className="mb-1">Total Job Openings</div>
                      <h3 className="mb-0 fw-bold">1,335</h3>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="action-visible link-secondary position-absolute bottom-0 end-0 mb-2 me-2">
                    View All <i className="fi fi-rr-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-4 col-sm-6">
                <div className="card card-action action-border-warning p-1 position-relative">
                  <div className="card-body d-flex gap-3 align-items-center p-4">
                    <div className="clearfix pe-2 text-warning">
                      <i className="fi fi-sr-document fs-1"></i>
                    </div>
                    <div className="clearfix">
                      <div className="mb-1">Total Application</div>
                      <h3 className="mb-0 fw-bold">35,002</h3>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="action-visible link-warning position-absolute bottom-0 end-0 mb-2 me-2">
                    View All <i className="fi fi-rr-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-4 col-sm-6">
                <div className="card card-action action-border-info p-1 position-relative">
                  <div className="card-body d-flex gap-3 align-items-center p-4">
                    <div className="clearfix pe-2 text-info">
                      <i className="fi fi-sr-users fs-1"></i>
                    </div>
                    <div className="clearfix">
                      <div className="mb-1">Shortlisted </div>
                      <h3 className="mb-0 fw-bold">20,273</h3>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="action-visible link-info position-absolute bottom-0 end-0 mb-2 me-2">
                    View All <i className="fi fi-rr-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-4 col-sm-6">
                <div className="card card-action action-border-primary p-1 position-relative">
                  <div className="card-body d-flex gap-3 align-items-center p-4">
                    <div className="clearfix pe-2 text-primary">
                      <i className="fi fi-sr-headphones fs-1"></i>
                    </div>
                    <div className="clearfix">
                      <div className="mb-1">Interviewed </div>
                      <h3 className="mb-0 fw-bold">12,240</h3>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="action-visible link-primary position-absolute bottom-0 end-0 mb-2 me-2">
                    View All <i className="fi fi-rr-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-4 col-sm-6">
                <div className="card card-action action-border-danger p-1 position-relative">
                  <div className="card-body d-flex gap-3 align-items-center p-4">
                    <div className="clearfix pe-2 text-danger">
                      <i className="fi fi-sr-delete-user fs-1"></i>
                    </div>
                    <div className="clearfix">
                      <div className="mb-1">Rejected</div>
                      <h3 className="mb-0 fw-bold">13,250</h3>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="action-visible link-danger position-absolute bottom-0 end-0 mb-2 me-2">
                    View All <i className="fi fi-rr-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-4 col-sm-6">
                <div className="card card-action action-border-success p-1 position-relative">
                  <div className="card-body d-flex gap-3 align-items-center p-4">
                    <div className="clearfix pe-2 text-success">
                      <i className="fi fi-ss-badget-check-alt fs-1"></i>
                    </div>
                    <div className="clearfix">
                      <div className="mb-1">Hired</div>
                      <h3 className="mb-0 fw-bold">2,724</h3>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="action-visible link-success position-absolute bottom-0 end-0 mb-2 me-2">
                    View All <i className="fi fi-rr-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-7">
            <div className="card bg-gray bg-opacity-10 border-0 shadow-none">
              <div className="card-header d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Interview Schedule</h6>
                <div className="clearfix d-flex align-items-center">
                  <a href="javascript:void(0);" className="btn-link me-4">View All</a>
                  <div className="dropdown">
                    <button className="btn dropdown-toggle btn-white btn-shadow waves-effect btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Last Month
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">Category</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">Published</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">Date Modifed</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body px-3 pb-2">
                <div className="row gx-2">
                  <div className="col-md-6">
                    <ul className="list-group list-group-smooth list-group-unlined mb-0">
                      <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                        <div className="avatar rounded-circle me-1">
                          <img src="assets/images/avatar/avatar1.webp" alt="" />
                        </div>
                        <div className="ms-2 me-auto">
                          <h6 className="mb-0">William Johnson</h6>
                          <small className="text-body">Web Designer</small>
                        </div>
                        <span className="badge badge-lg bg-danger-subtle text-danger">12.30 PM</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                        <div className="avatar rounded-circle me-1">
                          <img src="assets/images/avatar/avatar2.webp" alt="" />
                        </div>
                        <div className="ms-2 me-auto">
                          <h6 className="mb-0">Alexander Brown</h6>
                          <small className="text-body">Front-End Developer</small>
                        </div>
                        <span className="badge badge-lg bg-primary-subtle text-primary">24 July 2024</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                        <div className="avatar rounded-circle me-1">
                          <img src="assets/images/avatar/avatar3.webp" alt="" />
                        </div>
                        <div className="ms-2 me-auto">
                          <h6 className="mb-0">Michael Davis</h6>
                          <small className="text-body">UI/UX Designer</small>
                        </div>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">11.00 AM</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                        <div className="avatar rounded-circle me-1">
                          <img src="assets/images/avatar/avatar4.webp" alt="" />
                        </div>
                        <div className="ms-2 me-auto">
                          <h6 className="mb-0">David Wilson</h6>
                          <small className="text-body">Back-End Developer</small>
                        </div>
                        <span className="badge badge-lg bg-success-subtle text-success">12.30 PM</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-group list-group-smooth list-group-unlined mb-0">
                      <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                        <div className="avatar rounded-circle me-1">
                          <img src="assets/images/avatar/avatar4.webp" alt="" />
                        </div>
                        <div className="ms-2 me-auto">
                          <h6 className="mb-0">David Wilson</h6>
                          <small className="text-body">Back-End Developer</small>
                        </div>
                        <span className="badge badge-lg bg-success-subtle text-success">12.30 - 02.30</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                        <div className="avatar rounded-circle me-1">
                          <img src="assets/images/avatar/avatar1.webp" alt="" />
                        </div>
                        <div className="ms-2 me-auto">
                          <h6 className="mb-0">William Johnson</h6>
                          <small className="text-body">Web Designer</small>
                        </div>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">10.30 AM</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                        <div className="avatar rounded-circle me-1">
                          <img src="assets/images/avatar/avatar2.webp" alt="" />
                        </div>
                        <div className="ms-2 me-auto">
                          <h6 className="mb-0">Alexander Brown</h6>
                          <small className="text-body">Front-End Developer</small>
                        </div>
                        <span className="badge badge-lg bg-primary-subtle text-primary">24 July 2024</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
                        <div className="avatar rounded-circle me-1">
                          <img src="assets/images/avatar/avatar3.webp" alt="" />
                        </div>
                        <div className="ms-2 me-auto">
                          <h6 className="mb-0">Michael Davis</h6>
                          <small className="text-body">UI/UX Designer</small>
                        </div>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">25 Dec 2024</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 my-3">
            <h5 className="fw-bold mb-0">Current Vacancy <span className="text-primary ms-1 text-2xs">74 Job Added</span>
            </h5>
          </div>

          <div className="col-xxl-3 col-md-6">
            <div className="card card-action action-elevate bg-primary-subtle border-0 shadow-none">
              <div className="card-body">
                <div className="d-flex gap-3 align-items-center mb-4">
                  <div className="avatar bg-body rounded-3 p-2">
                    <img src="assets/images/media/figma.png" alt="" />
                  </div>
                  <div className="clearfix">
                    <h6 className="mb-1 text-sm">Figma Designer</h6>
                    <ul className="list-inline list-inline-disc d-flex mb-0">
                      <li>Full Time</li>
                      <li>Remote</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-body p-3 rounded-3 mb-3 d-flex">
                  <div className="text-center w-50">
                    <h2 className="fs-1 fw-bold mb-1">76</h2>
                    <span className="text-primary">Applied</span>
                  </div>
                  <div className="vr"></div>
                  <div className="text-center w-50">
                    <h2 className="fs-1 fw-bold mb-1">14</h2>
                    <span className="text-primary">New</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-2 pt-1 mb-3">
                  <div className="text-start">
                    <span className="text-1xs">Salary</span>
                    <span className="text-sm text-dark d-block fw-semibold">$100K - $200K</span>
                  </div>
                  <div className="text-end">
                    <span className="text-1xs">Location</span>
                    <span className="text-sm text-dark d-block fw-semibold">USA</span>
                  </div>
                </div>
                <a href="/pages/blog" className="btn btn-primary waves-effect waves-light w-100">
                  See Job Post
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6">
            <div className="card card-action action-elevate bg-secondary-subtle border-0 shadow-none">
              <div className="card-body">
                <div className="d-flex gap-3 align-items-center mb-4">
                  <div className="avatar bg-body rounded-3 p-2">
                    <img src="assets/images/media/python.png" alt="" />
                  </div>
                  <div className="clearfix">
                    <h6 className="mb-1 text-sm">Python Developer </h6>
                    <ul className="list-inline list-inline-disc d-flex mb-0">
                      <li>Full Time</li>
                      <li>Remote</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-body p-3 rounded-3 mb-3 d-flex">
                  <div className="text-center w-50">
                    <h2 className="fs-1 fw-bold mb-1">12</h2>
                    <span className="text-primary">Applied</span>
                  </div>
                  <div className="vr"></div>
                  <div className="text-center w-50">
                    <h2 className="fs-1 fw-bold mb-1">07</h2>
                    <span className="text-primary">New</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-2 pt-1 mb-3">
                  <div className="text-start">
                    <span className="text-1xs">Salary</span>
                    <span className="text-sm text-dark d-block fw-semibold">$100K - $200K</span>
                  </div>
                  <div className="text-end">
                    <span className="text-1xs">Location</span>
                    <span className="text-sm text-dark d-block fw-semibold">USA</span>
                  </div>
                </div>
                <a href="/pages/blog" className="btn btn-primary waves-effect waves-light w-100">
                  See Job Post
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6">
            <div className="card card-action action-elevate bg-info-subtle border-0 shadow-none">
              <div className="card-body">
                <div className="d-flex gap-3 align-items-center mb-4">
                  <div className="avatar bg-body rounded-3 p-2">
                    <img src="assets/images/media/code.png" alt="" />
                  </div>
                  <div className="clearfix">
                    <h6 className="mb-1 text-sm">Web Developer</h6>
                    <ul className="list-inline list-inline-disc d-flex mb-0">
                      <li>Full Time</li>
                      <li>Remote</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-body p-3 rounded-3 mb-3 d-flex">
                  <div className="text-center w-50">
                    <h2 className="fs-1 fw-bold mb-1">99</h2>
                    <span className="text-primary">Applied</span>
                  </div>
                  <div className="vr"></div>
                  <div className="text-center w-50">
                    <h2 className="fs-1 fw-bold mb-1">23</h2>
                    <span className="text-primary">New</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-2 pt-1 mb-3">
                  <div className="text-start">
                    <span className="text-1xs">Salary</span>
                    <span className="text-sm text-dark d-block fw-semibold">$100K - $200K</span>
                  </div>
                  <div className="text-end">
                    <span className="text-1xs">Location</span>
                    <span className="text-sm text-dark d-block fw-semibold">USA</span>
                  </div>
                </div>
                <a href="/pages/blog" className="btn btn-primary waves-effect waves-light w-100">
                  See Job Post
                </a>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6">
            <div className="card card-action action-elevate bg-success-subtle border-0 shadow-none">
              <div className="card-body">
                <div className="d-flex gap-3 align-items-center mb-4">
                  <div className="avatar bg-body rounded-3 p-2">
                    <img src="assets/images/media/react.png" alt="" />
                  </div>
                  <div className="clearfix">
                    <h6 className="mb-1 text-sm">React Developer</h6>
                    <ul className="list-inline list-inline-disc d-flex mb-0">
                      <li>Full Time</li>
                      <li>Remote</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-body p-3 rounded-3 mb-3 d-flex">
                  <div className="text-center w-50">
                    <h2 className="fs-1 fw-bold mb-1">46</h2>
                    <span className="text-primary">Applied</span>
                  </div>
                  <div className="vr"></div>
                  <div className="text-center w-50">
                    <h2 className="fs-1 fw-bold mb-1">61</h2>
                    <span className="text-primary">New</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-2 pt-1 mb-3">
                  <div className="text-start">
                    <span className="text-1xs">Salary</span>
                    <span className="text-sm text-dark d-block fw-semibold">$100K - $200K</span>
                  </div>
                  <div className="text-end">
                    <span className="text-1xs">Location</span>
                    <span className="text-sm text-dark d-block fw-semibold">USA</span>
                  </div>
                </div>
                <a href="/pages/blog" className="btn btn-primary waves-effect waves-light w-100">
                  See Job Post
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="card overflow-hidden">
              <div className="card-header d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Employee’s Leave</h6>
                <div className="d-flex gap-3 flex-wrap">
                  <div id="dt_PageEmployeeLeave_Search"></div>
                  <button type="button" className="btn btn-sm btn-outline-light btn-shadow waves-effect">Download Report</button>
                  <select className="selectpicker" data-style={{}}>
                    <option value="pending">2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                  </select>
                </div>
              </div>
              <div className="card-body p-2">
                <table id="dt_PageEmployeeLeave" className="table display table-row-rounded">
                  <thead className="table-light">
                    <tr>
                      <th className="minw-50px pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-row-checkbox type="checkbox" />
                        </div>
                      </th>
                      <th className="minw-200px">Name</th>
                      <th className="minw-200px">Department</th>
                      <th className="minw-150px">Phone No.</th>
                      <th className="minw-200px">Mail ID</th>
                      <th className="minw-150px">Status</th>
                      <th className="minw-200px">Interview schedule</th>
                      <th className="minw-100px text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">James Anderson</div>
                        </div>
                      </td>
                      <td>Back-End Developer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-success dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success" data-selected="true">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-success">Completed</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">William Johnson</div>
                        </div>
                      </td>
                      <td>Full-Stack Developer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-success dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success" data-selected="true">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-success">Completed</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Benjamin Martinez</div>
                        </div>
                      </td>
                      <td>Mobile App Developer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-info dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info" data-selected="true">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-info">Schedule</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Michael Davis</div>
                        </div>
                      </td>
                      <td>UI/UX Designer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-danger">Rejected</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar5.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Matthew Taylor</div>
                        </div>
                      </td>
                      <td>DevOps Engineer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-info">Schedule</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">David Wilson</div>
                        </div>
                      </td>
                      <td>DevOps Engineer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-primary dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary" data-selected="true">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-info">Schedule 2nd Round</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Anthony Thomas</div>
                        </div>
                      </td>
                      <td>Back-End Developer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-danger dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger" data-selected="true">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-danger">Rejected</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Christopher Moore</div>
                        </div>
                      </td>
                      <td>Full-Stack Developer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-success dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success" data-selected="true">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-info">schedule</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Emma Smith</div>
                        </div>
                      </td>
                      <td>Mobile App Developer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-info dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info" data-selected="true">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-success">Completed</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">James Anderson</div>
                        </div>
                      </td>
                      <td>UI/UX Designer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-info">schedule</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">William Johnson</div>
                        </div>
                      </td>
                      <td>Full-Stack Developer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-success dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success" data-selected="true">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-success">Completed</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Benjamin Martinez</div>
                        </div>
                      </td>
                      <td>Mobile App Developer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-info dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info" data-selected="true">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-info">Schedule</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Michael Davis</div>
                        </div>
                      </td>
                      <td>UI/UX Designer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-danger">Rejected</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar5.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Matthew Taylor</div>
                        </div>
                      </td>
                      <td>DevOps Engineer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-info">Schedule</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">David Wilson</div>
                        </div>
                      </td>
                      <td>DevOps Engineer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-primary dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary" data-selected="true">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-info">Schedule 2nd Round</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">William Johnson</div>
                        </div>
                      </td>
                      <td>Full-Stack Developer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-success dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success" data-selected="true">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-success">Completed</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Benjamin Martinez</div>
                        </div>
                      </td>
                      <td>Mobile App Developer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-info dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info" data-selected="true">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-info">Schedule</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Michael Davis</div>
                        </div>
                      </td>
                      <td>UI/UX Designer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-danger">Rejected</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar5.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Matthew Taylor</div>
                        </div>
                      </td>
                      <td>DevOps Engineer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-info">Schedule</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-checkbox type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">David Wilson</div>
                        </div>
                      </td>
                      <td>DevOps Engineer</td>
                      <td>+01 789 456 3201</td>
                      <td>example@mail.com </td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-primary dropdown-toggle waves-effect waves-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Hired</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">Shortlisted</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary" data-selected="true">Interviewed</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-danger">Reject</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-lg bg-info">Schedule 2nd Round</span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 justify-content-end">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button">
                            <i className="fi fi-rr-eye"></i>
                          </button>
                          <div className="btn-group">
                            <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-rr-menu-dots"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        <div className="modal fade" id="createJobModal" tabindex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header py-3">
                <h5 className="modal-title">Create Job</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="jobTitle" className="form-label">Job Title</label>
                    <input type="text" className="form-control" id="jobTitle" placeholder="Enter job title" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="jobDepartment" className="form-label">Department</label>
                    <select className="form-select" id="jobDepartment">
                      <option selected disabled>Select department</option>
                      <option>Human Resources</option>
                      <option>Marketing</option>
                      <option>Development</option>
                      <option>Sales</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="jobType" className="form-label">Job Type</label>
                    <select className="form-select" id="jobType">
                      <option selected disabled>Select type</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Internship</option>
                      <option>Contract</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="location" placeholder="Enter location" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="salaryRange" className="form-label">Salary Range</label>
                    <input type="text" className="form-control" id="salaryRange" placeholder="$40,000 - $60,000" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="flatpickr_basic" className="form-label">Application Deadline</label>
                    <input type="date" className="form-control" id="flatpickr_basic" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="jobDescription" className="form-label">Job Description</label>
                    <textarea className="form-control" id="jobDescription" rows="4" placeholder="Enter job responsibilities and requirements"></textarea>
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary waves-effect waves-light">Post Job</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

    
    </>
  );
}
