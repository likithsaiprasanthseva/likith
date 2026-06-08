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
      <Script src="/assets/js/todolist.js" strategy="lazyOnload" />



      <div className="container">

        <div className="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
          <div className="clearfix">
            <h1 className="app-page-title">Dashboard</h1>
            <span>Mon, Aug 01, 2024 - Sep 01, 2024 </span>
          </div>
          <button type="button" className="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
            <i className="fi fi-rr-plus me-1"></i> Add Employee
          </button>
        </div>

        <div className="row">

          <div className="col-xxl-9">

            <div className="row">
              <div className="col-6 col-md-4 col-lg">
                <div className="card bg-secondary bg-opacity-05 shadow-none border-0">
                  <div className="card-body">
                    <div className="avatar bg-secondary shadow-secondary rounded-circle text-white mb-3">
                      <i className="fi fi-sr-users"></i>
                    </div>
                    <h3>1206</h3>
                    <h6 className="mb-0">Total Employee</h6>
                    <small className="fw-medium">
                      <span className="text-success">
                        <i className="fi fi-rr-arrow-small-up scale-3x"></i> +5%
                      </span> Last Month
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg">
                <div className="card bg-info bg-opacity-05 shadow-none border-0">
                  <div className="card-body">
                    <div className="avatar bg-info shadow-info rounded-circle text-white mb-3">
                      <i className="fi fi-sr-user-add"></i>
                    </div>
                    <h3>218</h3>
                    <h6 className="mb-0">New Employee</h6>
                    <small className="fw-medium">
                      <span className="text-success">
                        <i className="fi fi-rr-arrow-small-up scale-3x"></i> +3.2%
                      </span> Last Month
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg">
                <div className="card bg-secondary bg-opacity-05 shadow-none border-0">
                  <div className="card-body">
                    <div className="avatar bg-warning shadow-warning rounded-circle text-white mb-3">
                      <i className="fi fi-sr-delete-user"></i>
                    </div>
                    <h3>126</h3>
                    <h6 className="mb-0">On Leave</h6>
                    <small className="fw-medium">
                      <span className="text-danger">
                        <i className="fi fi-rr-arrow-small-down scale-3x"></i> -2%
                      </span> Last Month
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg">
                <div className="card bg-success bg-opacity-05 shadow-none border-0">
                  <div className="card-body">
                    <div className="avatar bg-success shadow-success rounded-circle text-white mb-3">
                      <i className="fi fi-sr-shopping-bag"></i>
                    </div>
                    <h3>776</h3>
                    <h6 className="mb-0">Job Applicants</h6>
                    <small className="fw-medium">
                      <span className="text-success">
                        <i className="fi fi-rr-arrow-small-down scale-3x"></i> +8%
                      </span> Last Month
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg">
                <div className="card bg-danger bg-opacity-05 shadow-none border-0">
                  <div className="card-body">
                    <div className="avatar bg-danger shadow-danger rounded-circle text-white mb-3">
                      <i className="fi fi-sr-clock-three"></i>
                    </div>
                    <h3>1017</h3>
                    <h6 className="mb-0">Over Time</h6>
                    <small className="fw-medium">
                      <span className="text-danger">
                        <i className="fi fi-rr-arrow-small-down scale-3x"></i> -8%
                      </span> Last Month
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3">
            <div className="card overflow-hidden z-1">
              <div className="card-body">
                <div className="w-75">
                  <h6 className="card-title">Create Announcement</h6>
                  <p>Make a announcement to your employee</p>
                </div>
                <img src="assets/images/media/svg/media1.svg" alt="" className="position-absolute bottom-0 end-0 z-n1" />
              </div>
              <div className="card-footer border-0 pt-0">
                <a href="/calendar" className="btn btn-outline-light waves-effect btn-shadow">Create Now</a>
              </div>
            </div>
          </div>

          <div className="col-xxl-7 col-lg-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Employee Structure</h6>
                <button type="button" className="btn btn-sm btn-outline-light btn-shadow waves-effect">Download Report</button>
              </div>
              <div className="card-body p-2">
                <div id="chartEmployee"></div>
              </div>
            </div>
          </div>

          <div className="col-xxl-5 col-lg-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Company Pay</h6>
                <select className="selectpicker" data-style={{}}>
                  <option value="pending">2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>
              </div>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-sm-6">
                    <div className="maxw-250px ratio ratio-1x1">
                      <canvas id="companyPayChart"></canvas>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-grid gap-2">
                      <div className="d-flex gap-1 align-items-center mx-1">
                        <i className="fa fa-circle text-danger text-2xs me-1"></i>
                        <strong className="text-dark fw-semibold">15%</strong> Salary
                      </div>
                      <div className="d-flex gap-1 align-items-center mx-1">
                        <i className="fa fa-circle text-success text-2xs me-1"></i>
                        <strong className="text-dark fw-semibold">08%</strong> Bonus
                      </div>
                      <div className="d-flex gap-1 align-items-center mx-1">
                        <i className="fa fa-circle text-info text-2xs me-1"></i>
                        <strong className="text-dark fw-semibold">20%</strong> Commission
                      </div>
                      <div className="d-flex gap-1 align-items-center mx-1">
                        <i className="fa fa-circle text-secondary text-2xs me-1"></i>
                        <strong className="text-dark fw-semibold">11%</strong> Overtime
                      </div>
                      <div className="d-flex gap-1 align-items-center mx-1">
                        <i className="fa fa-circle text-primary text-2xs me-1"></i>
                        <strong className="text-dark fw-semibold">28%</strong> Reimbursement
                      </div>
                      <div className="d-flex gap-1 align-items-center mx-1">
                        <i className="fa fa-circle text-warning text-2xs me-1"></i>
                        <strong className="text-dark fw-semibold">18%</strong> Benefits
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row gy-3 align-items-center">
                  <div className="col-sm-6">
                    <p className="mb-0">2024 Download Report Company Trends and Insights</p>
                  </div>
                  <div className="col-sm-6 text-sm-end">
                    <button type="button" className="btn btn-primary waves-effect waves-light">
                      <i className="fi fi-rr-download me-1"></i> Download Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-lg-5">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Recent Job Application</h6>
                <a href="/recruitment" className="btn-link">View All</a>
              </div>
              <div className="card-body pb-3">
                <ul className="list-group list-group-hover list-group-smooth list-group-unlined list-group-outer">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="avatar rounded-circle me-1">
                      <img src="assets/images/avatar/avatar1.webp" alt="" />
                    </div>
                    <div className="ms-2 me-auto">
                      <h6 className="mb-0">Sophia Hall</h6>
                      <small>Front-End Developer</small>
                    </div>
                    <div className="dropdown select-status">
                      <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Status
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
                      </ul>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="avatar rounded-circle me-1">
                      <img src="assets/images/avatar/avatar2.webp" alt="" />
                    </div>
                    <div className="ms-2 me-auto">
                      <h6 className="mb-0">Emma Smith</h6>
                      <small>Back-End Developer</small>
                    </div>
                    <div className="dropdown select-status">
                      <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Status
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
                      </ul>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="avatar rounded-circle me-1">
                      <img src="assets/images/avatar/avatar3.webp" alt="" />
                    </div>
                    <div className="ms-2 me-auto">
                      <h6 className="mb-0">Olivia Clark</h6>
                      <small>UI/UX Designer</small>
                    </div>
                    <div className="dropdown select-status">
                      <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Status
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
                      </ul>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="avatar rounded-circle me-1">
                      <img src="assets/images/avatar/avatar4.webp" alt="" />
                    </div>
                    <div className="ms-2 me-auto">
                      <h6 className="mb-0">Ava Lewis</h6>
                      <small>Web Designer</small>
                    </div>
                    <div className="dropdown select-status">
                      <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Status
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
                      </ul>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="avatar rounded-circle me-1">
                      <img src="assets/images/avatar/avatar5.webp" alt="" />
                    </div>
                    <div className="ms-2 me-auto">
                      <h6 className="mb-0">Isabella Walker</h6>
                      <small>Full-Stack Developer</small>
                    </div>
                    <div className="dropdown select-status">
                      <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Status
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
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xxl-8 col-lg-7">
            <div className="card overflow-hidden">
              <div className="card-header d-flex flex-wrap gap-3 align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Employee’s Leave</h6>
                <div id="dt_EmployeeLeave_Search"></div>
              </div>
              <div className="card-body px-3 pt-2 pb-0 gradient-layer">
                <table id="dt_EmployeeLeave" className="table display table-row-rounded">
                  <thead className="table-light">
                    <tr>
                      <th className="minw-150px">Name</th>
                      <th className="minw-200px">Department</th>
                      <th className="minw-150px">Days</th>
                      <th className="minw-150px">Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>William Johnson</td>
                      <td>Back-End Developer</td>
                      <td>2 Days</td>
                      <td>12 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Benjamin Martinez</td>
                      <td>Full-Stack Developer</td>
                      <td>1st Half Day</td>
                      <td>03 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Alexander Brown</td>
                      <td>Mobile App Developer</td>
                      <td>4 Days</td>
                      <td>27 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Michael Davis</td>
                      <td>UI/UX Designer</td>
                      <td>2nd Half Day</td>
                      <td>05 June 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>David Wilson</td>
                      <td>DevOps Engineer</td>
                      <td>1 Days</td>
                      <td>04 Aug 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Brielle Williamson</td>
                      <td>Back-End Developer</td>
                      <td>2 Days</td>
                      <td>12 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Herrod Chandler</td>
                      <td>Full-Stack Developer</td>
                      <td>1st Half Day</td>
                      <td>03 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Rhona Davidson</td>
                      <td>Mobile App Developer</td>
                      <td>4 Days</td>
                      <td>27 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Colleen Hurst</td>
                      <td>UI/UX Designer</td>
                      <td>2nd Half Day</td>
                      <td>27 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Sonya Frost</td>
                      <td>DevOps Engineer</td>
                      <td>1 Days</td>
                      <td>04 Aug 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Jena Gaines</td>
                      <td>Back-End Developer</td>
                      <td>2 Days</td>
                      <td>12 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Quinn Flynn</td>
                      <td>Full-Stack Developer</td>
                      <td>1st Half Day</td>
                      <td>03 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Charde Marshall</td>
                      <td>Mobile App Developer</td>
                      <td>4 Days</td>
                      <td>27 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Haley Kennedy</td>
                      <td>UI/UX Designer</td>
                      <td>2nd Half Day</td>
                      <td>05 June 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Tatyana Fitzpatrick</td>
                      <td>DevOps Engineer</td>
                      <td>1 Days</td>
                      <td>04 Aug 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Michael Silva</td>
                      <td>Back-End Developer</td>
                      <td>2 Days</td>
                      <td>12 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Paul Byrd</td>
                      <td>Full-Stack Developer</td>
                      <td>1st Half Day</td>
                      <td>03 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Gloria Little</td>
                      <td>Mobile App Developer</td>
                      <td>4 Days</td>
                      <td>27 July 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Bradley Greer</td>
                      <td>UI/UX Designer</td>
                      <td>2nd Half Day</td>
                      <td>05 June 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Dai Rios</td>
                      <td>DevOps Engineer</td>
                      <td>1 Days</td>
                      <td>04 Aug 2024</td>
                      <td>
                        <div className="dropdown select-status">
                          <button className="btn btn-sm btn-secondary btn-sm dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Status
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
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Employee Type </h6>
                <div className="btn-group">
                  <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fi fi-rr-menu-dots"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">Onsite</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">Remote</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">Hybrid</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body py-0 px-3 d-flex align-items-center justify-content-center">
                <div className="maxw-250px ratio ratio-1x1">
                  <canvas id="employeeTypeChart"></canvas>
                </div>
              </div>
              <div className="card-footer pt-0 border-0">
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  <div className="d-flex gap-1 align-items-center mx-1">
                    <i className="fa fa-circle text-primary text-2xs"></i>
                    <strong className="text-dark fw-semibold">800</strong> Onsite
                  </div>
                  <div className="d-flex gap-1 align-items-center mx-1">
                    <i className="fa fa-circle text-secondary text-2xs"></i>
                    <strong className="text-dark fw-semibold">105</strong> Remote
                  </div>
                  <div className="d-flex gap-1 align-items-center mx-1">
                    <i className="fa fa-circle text-info text-2xs"></i>
                    <strong className="text-dark fw-semibold">301</strong> Hybrid
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Team</h6>
                <div className="clearfix">
                  <a href="/extended-ui/team" className="btn-link">View All</a>
                </div>
              </div>
              <div className="card-body px-3 pb-3">
                <ul className="list-group list-group-hover list-group-smooth list-group-space-sm">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="me-auto">
                      <h6 className="mb-0">Marketing</h6>
                      <small className="fw-medium text-body d-block">Member <span className="text-primary">03</span>
                      </small>
                    </div>
                    <div className="avatar-group">
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar1.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar2.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar3.webp" alt="" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="me-auto">
                      <h6 className="mb-0">Development</h6>
                      <small className="fw-medium text-body d-block">Member <span className="text-secondary">40</span>
                      </small>
                    </div>
                    <div className="avatar-group">
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar4.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar5.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar1.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar2.webp" alt="" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="me-auto">
                      <h6 className="mb-0">Designing Team</h6>
                      <small className="fw-medium text-body d-block">Member <span className="text-suc">03</span>
                      </small>
                    </div>
                    <div className="avatar-group">
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar3.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar4.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar5.webp" alt="" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="me-auto">
                      <h6 className="mb-0">Management</h6>
                      <small className="fw-medium text-body d-block">Member <span className="text-primary">02</span>
                      </small>
                    </div>
                    <div className="avatar-group">
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar1.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar2.webp" alt="" />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="me-auto">
                      <h6 className="mb-0">Finance</h6>
                      <small className="fw-medium text-body d-block">Member <span className="text-primary">12</span>
                      </small>
                    </div>
                    <div className="avatar-group">
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar5.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar4.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar3.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="assets/images/avatar/avatar2.webp" alt="" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xxl-6">
            <div className="card-group overflow-hidden">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                  <h6 className="card-title mb-0">Schedule</h6>
                  <button type="button" className="btn btn-sm btn-outline-light btn-shadow waves-effect text-primary ms-3">
                    <i className="fi fi-rr-plus text-2xs me-1"></i> Create New
                  </button>
                </div>
                <div className="card-body p-3">
                  <input type="text" className="form-control d-none flatpickr-inline-custom" placeholder="Select Date.." id="dateTimeFlatpickr" />
                </div>
              </div>
              <div className="card">
                <div className="card-body gradient-layer" style={{ height: "325px" }} data-simplebar>
                  <div className="p-3 bg-light bg-opacity-50 mb-2 rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-0">Team Stand Up</h6>
                      <div className="clearfix d-flex align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-action-dark btn-sm btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    </div>
                    <div className="text-2xs d-flex gap-1 align-items-center">
                      <img src="assets/images/icons/google-meet.svg" alt="" />
                      <span>On Google Meet</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="badge bg-white text-black fw-semibold">Marketing</span>
                      <span className="text-primary text-2xs fw-semibold d-flex align-items-center">
                        <i className="fi fi-rr-clock-three me-1"></i> 06:00 - 07:00
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-light bg-opacity-50 mb-2 rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-0">All Hands Meeting</h6>
                      <div className="clearfix d-flex align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-action-dark btn-sm btn-icon waves-effect dropdown-toggle" aria-label="Meeting options menu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    </div>
                    <div className="text-2xs d-flex gap-1 align-items-center">
                      <img src="assets/images/icons/google-meet.svg" alt="" />
                      <span>On Google Meet</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="badge bg-white text-black fw-semibold">Manager</span>
                      <span className="text-primary text-2xs fw-semibold d-flex align-items-center">
                        <i className="fi fi-rr-clock-three me-1"></i> 06:00 - 07:00
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-light bg-opacity-50 mb-2 rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-0">Sprint Planning</h6>
                      <div className="clearfix d-flex align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-action-dark btn-sm btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    </div>
                    <div className="text-2xs d-flex gap-1 align-items-center">
                      <img src="assets/images/icons/google-meet.svg" alt="" />
                      <span>On Google Meet</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="badge bg-white text-black fw-semibold">HR</span>
                      <span className="text-primary text-2xs fw-semibold d-flex align-items-center">
                        <i className="fi fi-rr-clock-three me-1"></i> 06:00 - 07:00
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-light bg-opacity-50 mb-2 rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-0">Team Stand Up</h6>
                      <div className="clearfix d-flex align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-action-dark btn-sm btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    </div>
                    <div className="text-2xs d-flex gap-1 align-items-center">
                      <img src="assets/images/icons/google-meet.svg" alt="" />
                      <span>On Google Meet</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="badge bg-white text-black fw-semibold">Marketing</span>
                      <span className="text-primary text-2xs fw-semibold d-flex align-items-center">
                        <i className="fi fi-rr-clock-three me-1"></i> 06:00 - 07:00
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-light bg-opacity-50 mb-2 rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="mb-0">All Hands Meeting</h6>
                      <div className="clearfix d-flex align-items-center">
                        <div className="btn-group">
                          <button className="btn btn-action-dark btn-sm btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                    </div>
                    <div className="text-2xs d-flex gap-1 align-items-center">
                      <img src="assets/images/icons/google-meet.svg" alt="" />
                      <span>On Google Meet</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="badge bg-white text-black fw-semibold">Manager</span>
                      <span className="text-primary text-2xs fw-semibold d-flex align-items-center">
                        <i className="fi fi-rr-clock-three me-1"></i> 06:00 - 07:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0">
                <h6 className="card-title mb-0">Employee Performance</h6>
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
              <div className="card-body px-2 pb-2 pt-0">
                <table className="table table-sm table-borderless table-row-rounded mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Name</th>
                      <th>Score</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar rounded-circle">
                            <img src="assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Olivia Clark</h6>
                            <small className="text-body">UI/UX Designer</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div id="employeeScore1"></div>
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
                        <div className="d-flex align-items-center">
                          <div className="avatar rounded-circle">
                            <img src="assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Michael Davis</h6>
                            <small className="text-body">Full-Stack Developer</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div id="employeeScore2"></div>
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
                        <div className="d-flex align-items-center">
                          <div className="avatar rounded-circle">
                            <img src="assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Michael Davis</h6>
                            <small className="text-body">Web Designer</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div id="employeeScore3"></div>
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
                        <div className="d-flex align-items-center">
                          <div className="avatar rounded-circle">
                            <img src="assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">David Wilson</h6>
                            <small className="text-body">Back-End Developer</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div id="employeeScore4"></div>
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

          <div className="col-lg-7">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Attendance Rate</h6>
                <a href="javascript:void(0);" className="btn btn-sm btn-outline-light waves-effect btn-shadow">Download Report</a>
              </div>
              <div className="card-body px-1 py-2">
                <div id="chartAttendanceRate"></div>
              </div>
            </div>
          </div>

          <div className="col-xxl-7">
            <div className="card bg-gray bg-opacity-10 border-0 shadow-none">
              <div className="card-header d-flex flex-wrap gap-3 align-items-center justify-content-between border-0 pb-0">
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
                <div className="row gy-2">
                  <div className="col-md-6">
                    <ul className="list-group list-group-smooth list-group-unlined">
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
                    <ul className="list-group list-group-smooth list-group-unlined">
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

          <div className="col-xxl-5">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Task Update</h6>
                <div className="clearfix">
                  <a href="javascript:void(0);" className="btn-link">View All</a>
                  <button type="button" className="btn btn-sm btn-outline-light btn-shadow text-primary waves-effect ms-3" data-bs-toggle="modal" data-bs-target="#todoTaskModal">
                    <i className="fi fi-rr-plus text-2xs me-1"></i> New Task
                  </button>
                </div>
              </div>
              <div className="card-body pb-1 px-2 pt-3 overflow-auto" style={{ height: "325px" }} data-simplebar>
                <ul id="todoList" className="list-group list-group-smooth list-group-unlined todo-nav">
                  <li className="list-group-item d-flex gap-2 align-items-center todo-item mb-1 ps-3 pe-2 py-2">
                    <span className="sortable-handle">
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9998 3.16667C12.7362 3.16667 13.3332 2.56971 13.3332 1.83333C13.3332 1.09695 12.7362 0.5 11.9998 0.5C11.2635 0.5 10.6665 1.09695 10.6665 1.83333C10.6665 2.56971 11.2635 3.16667 11.9998 3.16667Z" fill="var(--bs-body-color)" />
                        <path d="M11.9998 9.26237C12.7362 9.26237 13.3332 8.66542 13.3332 7.92904C13.3332 7.19266 12.7362 6.5957 11.9998 6.5957C11.2635 6.5957 10.6665 7.19266 10.6665 7.92904C10.6665 8.66542 11.2635 9.26237 11.9998 9.26237Z" fill="var(--bs-body-color)" />
                        <path d="M11.9998 15.3571C12.7362 15.3571 13.3332 14.7601 13.3332 14.0238C13.3332 13.2874 12.7362 12.6904 11.9998 12.6904C11.2635 12.6904 10.6665 13.2874 10.6665 14.0238C10.6665 14.7601 11.2635 15.3571 11.9998 15.3571Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 3.16667C5.49818 3.16667 6.09513 2.56971 6.09513 1.83333C6.09513 1.09695 5.49818 0.5 4.7618 0.5C4.02542 0.5 3.42847 1.09695 3.42847 1.83333C3.42847 2.56971 4.02542 3.16667 4.7618 3.16667Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 9.26237C5.49818 9.26237 6.09513 8.66542 6.09513 7.92904C6.09513 7.19266 5.49818 6.5957 4.7618 6.5957C4.02542 6.5957 3.42847 7.19266 3.42847 7.92904C3.42847 8.66542 4.02542 9.26237 4.7618 9.26237Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 15.3571C5.49818 15.3571 6.09513 14.7601 6.09513 14.0238C6.09513 13.2874 5.49818 12.6904 4.7618 12.6904C4.02542 12.6904 3.42847 13.2874 3.42847 14.0238C3.42847 14.7601 4.02542 15.3571 4.7618 15.3571Z" fill="var(--bs-body-color)" />
                      </svg>
                    </span>
                    <input className="form-check-input todo-checkbox check-dark" type="checkbox" />
                    <span className="form-label mb-0">Prepare monthly financial report</span>
                    <span className="todo-time text-body">04:25PM</span>
                    <button type="button" className="btn btn-action-gray btn-sm btn-icon waves-effect waves-light item-delete ms-auto">
                      <i className="fi fi-rr-trash"></i>
                    </button>
                  </li>
                  <li className="list-group-item d-flex gap-2 align-items-center todo-item mb-1 ps-3 pe-2 py-2">
                    <span className="sortable-handle">
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9998 3.16667C12.7362 3.16667 13.3332 2.56971 13.3332 1.83333C13.3332 1.09695 12.7362 0.5 11.9998 0.5C11.2635 0.5 10.6665 1.09695 10.6665 1.83333C10.6665 2.56971 11.2635 3.16667 11.9998 3.16667Z" fill="var(--bs-body-color)" />
                        <path d="M11.9998 9.26237C12.7362 9.26237 13.3332 8.66542 13.3332 7.92904C13.3332 7.19266 12.7362 6.5957 11.9998 6.5957C11.2635 6.5957 10.6665 7.19266 10.6665 7.92904C10.6665 8.66542 11.2635 9.26237 11.9998 9.26237Z" fill="var(--bs-body-color)" />
                        <path d="M11.9998 15.3571C12.7362 15.3571 13.3332 14.7601 13.3332 14.0238C13.3332 13.2874 12.7362 12.6904 11.9998 12.6904C11.2635 12.6904 10.6665 13.2874 10.6665 14.0238C10.6665 14.7601 11.2635 15.3571 11.9998 15.3571Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 3.16667C5.49818 3.16667 6.09513 2.56971 6.09513 1.83333C6.09513 1.09695 5.49818 0.5 4.7618 0.5C4.02542 0.5 3.42847 1.09695 3.42847 1.83333C3.42847 2.56971 4.02542 3.16667 4.7618 3.16667Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 9.26237C5.49818 9.26237 6.09513 8.66542 6.09513 7.92904C6.09513 7.19266 5.49818 6.5957 4.7618 6.5957C4.02542 6.5957 3.42847 7.19266 3.42847 7.92904C3.42847 8.66542 4.02542 9.26237 4.7618 9.26237Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 15.3571C5.49818 15.3571 6.09513 14.7601 6.09513 14.0238C6.09513 13.2874 5.49818 12.6904 4.7618 12.6904C4.02542 12.6904 3.42847 13.2874 3.42847 14.0238C3.42847 14.7601 4.02542 15.3571 4.7618 15.3571Z" fill="var(--bs-body-color)" />
                      </svg>
                    </span>
                    <input className="form-check-input todo-checkbox check-dark" type="checkbox" checked />
                    <span className="form-label mb-0">Develop new marketing strategy</span>
                    <span className="todo-time text-body">04:25PM</span>
                    <button type="button" className="btn btn-action-gray btn-sm btn-icon waves-effect waves-light item-delete ms-auto">
                      <i className="fi fi-rr-trash"></i>
                    </button>
                  </li>
                  <li className="list-group-item d-flex gap-2 align-items-center todo-item mb-1 ps-3 pe-2 py-2">
                    <span className="sortable-handle">
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9998 3.16667C12.7362 3.16667 13.3332 2.56971 13.3332 1.83333C13.3332 1.09695 12.7362 0.5 11.9998 0.5C11.2635 0.5 10.6665 1.09695 10.6665 1.83333C10.6665 2.56971 11.2635 3.16667 11.9998 3.16667Z" fill="var(--bs-body-color)" />
                        <path d="M11.9998 9.26237C12.7362 9.26237 13.3332 8.66542 13.3332 7.92904C13.3332 7.19266 12.7362 6.5957 11.9998 6.5957C11.2635 6.5957 10.6665 7.19266 10.6665 7.92904C10.6665 8.66542 11.2635 9.26237 11.9998 9.26237Z" fill="var(--bs-body-color)" />
                        <path d="M11.9998 15.3571C12.7362 15.3571 13.3332 14.7601 13.3332 14.0238C13.3332 13.2874 12.7362 12.6904 11.9998 12.6904C11.2635 12.6904 10.6665 13.2874 10.6665 14.0238C10.6665 14.7601 11.2635 15.3571 11.9998 15.3571Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 3.16667C5.49818 3.16667 6.09513 2.56971 6.09513 1.83333C6.09513 1.09695 5.49818 0.5 4.7618 0.5C4.02542 0.5 3.42847 1.09695 3.42847 1.83333C3.42847 2.56971 4.02542 3.16667 4.7618 3.16667Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 9.26237C5.49818 9.26237 6.09513 8.66542 6.09513 7.92904C6.09513 7.19266 5.49818 6.5957 4.7618 6.5957C4.02542 6.5957 3.42847 7.19266 3.42847 7.92904C3.42847 8.66542 4.02542 9.26237 4.7618 9.26237Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 15.3571C5.49818 15.3571 6.09513 14.7601 6.09513 14.0238C6.09513 13.2874 5.49818 12.6904 4.7618 12.6904C4.02542 12.6904 3.42847 13.2874 3.42847 14.0238C3.42847 14.7601 4.02542 15.3571 4.7618 15.3571Z" fill="var(--bs-body-color)" />
                      </svg>
                    </span>
                    <input className="form-check-input todo-checkbox check-dark" type="checkbox" />
                    <span className="form-label mb-0">Reply to customer emails</span>
                    <span className="todo-time text-body">04:25PM</span>
                    <button type="button" className="btn btn-action-gray btn-sm btn-icon waves-effect waves-light item-delete ms-auto">
                      <i className="fi fi-rr-trash"></i>
                    </button>
                  </li>
                  <li className="list-group-item d-flex gap-2 align-items-center todo-item mb-1 ps-3 pe-2 py-2">
                    <span className="sortable-handle">
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9998 3.16667C12.7362 3.16667 13.3332 2.56971 13.3332 1.83333C13.3332 1.09695 12.7362 0.5 11.9998 0.5C11.2635 0.5 10.6665 1.09695 10.6665 1.83333C10.6665 2.56971 11.2635 3.16667 11.9998 3.16667Z" fill="var(--bs-body-color)" />
                        <path d="M11.9998 9.26237C12.7362 9.26237 13.3332 8.66542 13.3332 7.92904C13.3332 7.19266 12.7362 6.5957 11.9998 6.5957C11.2635 6.5957 10.6665 7.19266 10.6665 7.92904C10.6665 8.66542 11.2635 9.26237 11.9998 9.26237Z" fill="var(--bs-body-color)" />
                        <path d="M11.9998 15.3571C12.7362 15.3571 13.3332 14.7601 13.3332 14.0238C13.3332 13.2874 12.7362 12.6904 11.9998 12.6904C11.2635 12.6904 10.6665 13.2874 10.6665 14.0238C10.6665 14.7601 11.2635 15.3571 11.9998 15.3571Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 3.16667C5.49818 3.16667 6.09513 2.56971 6.09513 1.83333C6.09513 1.09695 5.49818 0.5 4.7618 0.5C4.02542 0.5 3.42847 1.09695 3.42847 1.83333C3.42847 2.56971 4.02542 3.16667 4.7618 3.16667Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 9.26237C5.49818 9.26237 6.09513 8.66542 6.09513 7.92904C6.09513 7.19266 5.49818 6.5957 4.7618 6.5957C4.02542 6.5957 3.42847 7.19266 3.42847 7.92904C3.42847 8.66542 4.02542 9.26237 4.7618 9.26237Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 15.3571C5.49818 15.3571 6.09513 14.7601 6.09513 14.0238C6.09513 13.2874 5.49818 12.6904 4.7618 12.6904C4.02542 12.6904 3.42847 13.2874 3.42847 14.0238C3.42847 14.7601 4.02542 15.3571 4.7618 15.3571Z" fill="var(--bs-body-color)" />
                      </svg>
                    </span>
                    <input className="form-check-input todo-checkbox check-dark" type="checkbox" />
                    <span className="form-label mb-0">Update website content</span>
                    <span className="todo-time text-body">04:25PM</span>
                    <button type="button" className="btn btn-action-gray btn-sm btn-icon waves-effect waves-light item-delete ms-auto">
                      <i className="fi fi-rr-trash"></i>
                    </button>
                  </li>
                  <li className="list-group-item d-flex gap-2 align-items-center todo-item mb-1 ps-3 pe-2 py-2">
                    <span className="sortable-handle">
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9998 3.16667C12.7362 3.16667 13.3332 2.56971 13.3332 1.83333C13.3332 1.09695 12.7362 0.5 11.9998 0.5C11.2635 0.5 10.6665 1.09695 10.6665 1.83333C10.6665 2.56971 11.2635 3.16667 11.9998 3.16667Z" fill="var(--bs-body-color)" />
                        <path d="M11.9998 9.26237C12.7362 9.26237 13.3332 8.66542 13.3332 7.92904C13.3332 7.19266 12.7362 6.5957 11.9998 6.5957C11.2635 6.5957 10.6665 7.19266 10.6665 7.92904C10.6665 8.66542 11.2635 9.26237 11.9998 9.26237Z" fill="var(--bs-body-color)" />
                        <path d="M11.9998 15.3571C12.7362 15.3571 13.3332 14.7601 13.3332 14.0238C13.3332 13.2874 12.7362 12.6904 11.9998 12.6904C11.2635 12.6904 10.6665 13.2874 10.6665 14.0238C10.6665 14.7601 11.2635 15.3571 11.9998 15.3571Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 3.16667C5.49818 3.16667 6.09513 2.56971 6.09513 1.83333C6.09513 1.09695 5.49818 0.5 4.7618 0.5C4.02542 0.5 3.42847 1.09695 3.42847 1.83333C3.42847 2.56971 4.02542 3.16667 4.7618 3.16667Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 9.26237C5.49818 9.26237 6.09513 8.66542 6.09513 7.92904C6.09513 7.19266 5.49818 6.5957 4.7618 6.5957C4.02542 6.5957 3.42847 7.19266 3.42847 7.92904C3.42847 8.66542 4.02542 9.26237 4.7618 9.26237Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 15.3571C5.49818 15.3571 6.09513 14.7601 6.09513 14.0238C6.09513 13.2874 5.49818 12.6904 4.7618 12.6904C4.02542 12.6904 3.42847 13.2874 3.42847 14.0238C3.42847 14.7601 4.02542 15.3571 4.7618 15.3571Z" fill="var(--bs-body-color)" />
                      </svg>
                    </span>
                    <input className="form-check-input todo-checkbox" type="checkbox" checked />
                    <span className="form-label mb-0">Review employee performance</span>
                    <span className="todo-time text-body text-body">04:25PM</span>
                    <button type="button" className="btn btn-action-gray btn-sm btn-icon waves-effect waves-light item-delete ms-auto">
                      <i className="fi fi-rr-trash"></i>
                    </button>
                  </li>
                  <li className="list-group-item d-flex gap-2 align-items-center todo-item mb-1 ps-3 pe-2 py-2">
                    <span className="sortable-handle">
                      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9998 3.16667C12.7362 3.16667 13.3332 2.56971 13.3332 1.83333C13.3332 1.09695 12.7362 0.5 11.9998 0.5C11.2635 0.5 10.6665 1.09695 10.6665 1.83333C10.6665 2.56971 11.2635 3.16667 11.9998 3.16667Z" fill="var(--bs-body-color)" />
                        <path d="M11.9998 9.26237C12.7362 9.26237 13.3332 8.66542 13.3332 7.92904C13.3332 7.19266 12.7362 6.5957 11.9998 6.5957C11.2635 6.5957 10.6665 7.19266 10.6665 7.92904C10.6665 8.66542 11.2635 9.26237 11.9998 9.26237Z" fill="var(--bs-body-color)" />
                        <path d="M11.9998 15.3571C12.7362 15.3571 13.3332 14.7601 13.3332 14.0238C13.3332 13.2874 12.7362 12.6904 11.9998 12.6904C11.2635 12.6904 10.6665 13.2874 10.6665 14.0238C10.6665 14.7601 11.2635 15.3571 11.9998 15.3571Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 3.16667C5.49818 3.16667 6.09513 2.56971 6.09513 1.83333C6.09513 1.09695 5.49818 0.5 4.7618 0.5C4.02542 0.5 3.42847 1.09695 3.42847 1.83333C3.42847 2.56971 4.02542 3.16667 4.7618 3.16667Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 9.26237C5.49818 9.26237 6.09513 8.66542 6.09513 7.92904C6.09513 7.19266 5.49818 6.5957 4.7618 6.5957C4.02542 6.5957 3.42847 7.19266 3.42847 7.92904C3.42847 8.66542 4.02542 9.26237 4.7618 9.26237Z" fill="var(--bs-body-color)" />
                        <path d="M4.7618 15.3571C5.49818 15.3571 6.09513 14.7601 6.09513 14.0238C6.09513 13.2874 5.49818 12.6904 4.7618 12.6904C4.02542 12.6904 3.42847 13.2874 3.42847 14.0238C3.42847 14.7601 4.02542 15.3571 4.7618 15.3571Z" fill="var(--bs-body-color)" />
                      </svg>
                    </span>
                    <input className="form-check-input todo-checkbox check-success" type="checkbox" checked />
                    <span className="form-label mb-0">Reply to customer emails</span>
                    <span className="todo-time text-body">04:25PM</span>
                    <button type="button" className="btn btn-action-gray btn-sm btn-icon waves-effect waves-light item-delete ms-auto">
                      <i className="fi fi-rr-trash"></i>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="modal fade" id="todoTaskModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header py-3">
                      <h5 className="modal-title">Add New Task</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form id="taskForm">
                        <div className="row">
                          <div className="col-12 mb-3">
                            <input type="text" id="todoInput" className="form-control" placeholder="Add a new task" />
                          </div>
                          <div className="col-12 mb-3">
                            <select id="todoPriority" className="form-select">
                              <option value="default">Default</option>
                              <option value="success">Completed</option>
                              <option value="danger">High Priority</option>
                              <option value="info">Info</option>
                            </select>
                          </div>
                          <div className="col-12 text-end">
                            <button type="button" className="btn btn-light waves-effect waves-light me-2" data-bs-dismiss="modal">Close</button>
                            <button type="button" id="todoAdd" className="btn btn-primary waves-effect waves-light" data-bs-dismiss="modal">Add Task</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="modal fade" id="addEmployeeModal" tabindex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header py-3">
                <h5 className="modal-title">Add Employee</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="email" placeholder="example@email.com" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input type="tel" className="form-control" id="phone" placeholder="+91 9876543210" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="department" className="form-label">Department</label>
                      <select className="form-select" id="department">
                        <option selected disabled>Select Department</option>
                        <option>HR</option>
                        <option>Development</option>
                        <option>Sales</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="designation" className="form-label">Designation</label>
                      <input type="text" className="form-control" id="designation" placeholder="e.g. Software Engineer" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="joiningDate" className="form-label">Joining Date</label>
                      <input type="date" className="form-control flatpickr-date" id="joiningDate" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="status" className="form-label">Employment Status</label>
                      <select className="form-select" id="status">
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Probation</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea className="form-control" id="address" rows="2" placeholder="Enter address"></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="photo" className="form-label">Profile Photo</label>
                    <input className="form-control" type="file" id="photo" />
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-success">Add Employee</button>
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
