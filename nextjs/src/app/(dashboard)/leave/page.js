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
      if (window.initFlatpickr) {
        window.initFlatpickr();
      }
    }
  }, []);

  return (
    <>
      <Script src="/assets/js/dashboard.js" strategy="lazyOnload" onLoad={() => {
        if (window.initDashboardCharts) window.initDashboardCharts();
      }} />
      <Script src="/assets/js/flatpickr.js" strategy="lazyOnload" onLoad={() => {
        if (window.initFlatpickr) window.initFlatpickr();
      }} />


      <div className="container">

        <div className="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
          <div className="clearfix">
            <h1 className="app-page-title">Leaves</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Leaves</li>
              </ol>
            </nav>
          </div>
          <button type="button" className="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addLeaveModal">
            <i className="fi fi-rr-plus me-1"></i> Add Leave
          </button>
        </div>

        <div className="row">

          <div className="col-xxl-3 col-md-6">
            <div className="card card-action action-border-primary">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="clearfix ps-2">
                  <div className="d-flex text-dark align-items-end gap-1 lh-1 mb-1">
                    <span className="fs-2 fw-bold">1192</span>
                    <span className="mb-1">/1206</span>
                  </div>
                  <span className="text-primary">Today Presents</span>
                </div>
                <div className="clearfix">
                  <div id="leavesPresentsScore"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6">
            <div className="card card-action action-border-danger">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="clearfix ps-2">
                  <div className="d-flex text-dark align-items-end gap-1 lh-1 mb-1">
                    <span className="fs-2 fw-bold">128</span>
                    <span className="mb-1">1206</span>
                  </div>
                  <span className="text-danger">Planned Leaves</span>
                </div>
                <div className="clearfix">
                  <div id="leavesPlannedScore"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6">
            <div className="card card-action action-border-info">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="clearfix ps-2">
                  <div className="d-flex text-dark align-items-end gap-1 lh-1 mb-1">
                    <span className="fs-2 fw-bold">12</span>
                    <span className="mb-1">/1206</span>
                  </div>
                  <span className="text-info">Unplanned Leaves</span>
                </div>
                <div className="clearfix">
                  <div id="leavesUnplannedScore"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6">
            <div className="card card-action action-border-secondary">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="clearfix ps-2">
                  <div className="d-flex text-dark align-items-end gap-1 lh-1 mb-1">
                    <span className="fs-2 fw-bold">50</span>
                    <span className="mb-1">/70</span>
                  </div>
                  <span className="text-secondary">Pending Requests</span>
                </div>
                <div className="clearfix">
                  <div id="leavesPendingScore"></div>
                </div>
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
                      <th className="minw-200px">Name</th>
                      <th className="minw-150px">Leave Type</th>
                      <th className="minw-200px">Department</th>
                      <th className="minw-150px">Days</th>
                      <th className="minw-150px">Start</th>
                      <th className="minw-150px">End</th>
                      <th className="minw-100px">Status</th>
                      <th className="minw-100px text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">James Anderson</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-success">Casual Leave</span>
                      </td>
                      <td>Back-End Developer</td>
                      <td>2 Days</td>
                      <td>12 July 2024</td>
                      <td>15 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-primary dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Approved
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary" data-selected="true">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">William Johnson</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-body">Maternity Leave</span>
                      </td>
                      <td>Full-Stack Developer</td>
                      <td>1st Half Day</td>
                      <td>03 July 2024</td>
                      <td>04 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-primary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Approved
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary" data-selected="true">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Benjamin Martinez</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-success">Casual Leave</span>
                      </td>
                      <td>Mobile App Developer</td>
                      <td>4 Days</td>
                      <td>27 July 2024</td>
                      <td>31 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-success btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            New
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success" data-selected="true">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Michael Davis</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-body">Maternity Leave</span>
                      </td>
                      <td>UI/UX Designer</td>
                      <td>2nd Half Day</td>
                      <td>05 June 2024</td>
                      <td>04 June 2025</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-outline-light btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pending
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light" data-selected="true">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar5.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Matthew Taylor</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-warning">Paternity Leave</span>
                      </td>
                      <td>DevOps Engineer</td>
                      <td>1 Days</td>
                      <td>04 Aug 2024</td>
                      <td>05 Aug 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Rejected
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">David Wilson</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-warning">Paternity Leave</span>
                      </td>
                      <td>DevOps Engineer</td>
                      <td>22 Days</td>
                      <td>04 Aug 2024</td>
                      <td>04 Aug 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Rejected
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Anthony Thomas</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-success">Casual Leave</span>
                      </td>
                      <td>Back-End Developer</td>
                      <td>2 Days</td>
                      <td>12 July 2024</td>
                      <td>15 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-success btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            New
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success" data-selected="true">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Christopher Moore</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-body">Maternity Leave</span>
                      </td>
                      <td>Full-Stack Developer</td>
                      <td>1st Half Day</td>
                      <td>03 July 2024</td>
                      <td>04 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-primary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Approved
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary" data-selected="true">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Emma Smith</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-success">Casual Leave</span>
                      </td>
                      <td>Mobile App Developer</td>
                      <td>4 Days</td>
                      <td>27 July 2024</td>
                      <td>31 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Rejected
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">James Anderson</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-body">Maternity Leave</span>
                      </td>
                      <td>UI/UX Designer</td>
                      <td>2nd Half Day</td>
                      <td>05 June 2024</td>
                      <td>05 June 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-outline-light btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pending
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light" data-selected="true">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">James Anderson</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-success">Casual Leave</span>
                      </td>
                      <td>Back-End Developer</td>
                      <td>2 Days</td>
                      <td>12 July 2024</td>
                      <td>15 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-primary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Approved
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary" data-selected="true">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">William Johnson</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-body">Maternity Leave</span>
                      </td>
                      <td>Full-Stack Developer</td>
                      <td>1st Half Day</td>
                      <td>03 July 2024</td>
                      <td>04 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-primary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Approved
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary" data-selected="true">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Benjamin Martinez</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-success">Casual Leave</span>
                      </td>
                      <td>Mobile App Developer</td>
                      <td>4 Days</td>
                      <td>27 July 2024</td>
                      <td>31 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-success btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            New
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success" data-selected="true">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Michael Davis</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-body">Maternity Leave</span>
                      </td>
                      <td>UI/UX Designer</td>
                      <td>2nd Half Day</td>
                      <td>05 June 2024</td>
                      <td>04 June 2025</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-outline-light btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pending
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light" data-selected="true">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar5.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Matthew Taylor</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-warning">Paternity Leave</span>
                      </td>
                      <td>DevOps Engineer</td>
                      <td>1 Days</td>
                      <td>04 Aug 2024</td>
                      <td>05 Aug 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Rejected
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">David Wilson</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-warning">Paternity Leave</span>
                      </td>
                      <td>DevOps Engineer</td>
                      <td>22 Days</td>
                      <td>04 Aug 2024</td>
                      <td>04 Aug 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Rejected
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Anthony Thomas</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-success">Casual Leave</span>
                      </td>
                      <td>Back-End Developer</td>
                      <td>2 Days</td>
                      <td>12 July 2024</td>
                      <td>15 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-success btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            New
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success" data-selected="true">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Christopher Moore</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-body">Maternity Leave</span>
                      </td>
                      <td>Full-Stack Developer</td>
                      <td>1st Half Day</td>
                      <td>03 July 2024</td>
                      <td>04 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-primary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Approved
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary" data-selected="true">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">Emma Smith</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-success">Casual Leave</span>
                      </td>
                      <td>Mobile App Developer</td>
                      <td>4 Days</td>
                      <td>27 July 2024</td>
                      <td>31 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-subtle-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Rejected
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xxs rounded-circle">
                            <img src="assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">James Anderson</div>
                        </div>
                      </td>
                      <td>
                        <span className="text-body">Maternity Leave</span>
                      </td>
                      <td>UI/UX Designer</td>
                      <td>2nd Half Day</td>
                      <td>05 June 2024</td>
                      <td>05 June 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-outline-light btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pending
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-outline-light" data-selected="true">Pending</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">Approved</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Rejected</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">New</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="btn-group float-end">
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        <div className="modal fade" id="addLeaveModal" tabindex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header py-3">
                <h5 className="modal-title">Add Leave Request</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="employeeName" className="form-label">Employee Name</label>
                    <input type="text" className="form-control" id="employeeName" placeholder="Enter employee name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="leaveType" className="form-label">Leave Type</label>
                    <select className="form-select" id="leaveType">
                      <option selected disabled>Select leave type</option>
                      <option>Casual Leave</option>
                      <option>Sick Leave</option>
                      <option>Earned Leave</option>
                      <option>Maternity Leave</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="flatpickr_range" className="form-label">Select Date</label>
                    <input type="datetime-local" id="flatpickr_range" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="leaveReason" className="form-label">Reason</label>
                    <textarea className="form-control" id="leaveReason" rows="3" placeholder="Enter leave reason"></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select">
                      <option>Pending</option>
                      <option>Approved</option>
                      <option>Rejected</option>
                    </select>
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-success">Submit Leave</button>
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
