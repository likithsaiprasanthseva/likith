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
            <h1 className="app-page-title">Payroll</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Payroll</li>
              </ol>
            </nav>
          </div>
          <button type="button" className="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addPayrollModal">
            <i className="fi fi-rr-plus me-1"></i> Add Payroll
          </button>
        </div>

        <div className="row">

          <div className="col-xxl-7 col-xl-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Payroll Summary</h6>
                <select className="selectpicker" data-style={{}}>
                  <option>Yearly</option>
                  <option>Monthly</option>
                  <option>Weekly</option>
                </select>
              </div>
              <div className="card-body px-0 py-2">
                <div id="chartPayrollSummary"></div>
              </div>
            </div>
          </div>

          <div className="col-xxl-5 col-xl-6">
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

          <div className="col-lg-12">
            <div className="card overflow-hidden">
              <div className="card-header d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Payroll List</h6>
                <div className="d-flex gap-3 flex-wrap">
                  <div id="dt_PayrollList_Search"></div>
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
                <table id="dt_PayrollList" className="table display table-row-rounded data-row-checkbox">
                  <thead className="table-light">
                    <tr>
                      <th className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-row-checkbox type="checkbox" />
                        </div>
                      </th>
                      <th className="minw-200px">Name</th>
                      <th className="minw-200px">Department</th>
                      <th className="minw-150px">Total Days</th>
                      <th className="minw-150px">Working Day</th>
                      <th className="minw-150px">Total Salary</th>
                      <th className="minw-150px">Over Time</th>
                      <th>Status</th>
                      <th className="text-end">Action</th>
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
                      <td>30 Dyas</td>
                      <td>27 Days</td>
                      <td>
                        <span className="fw-semibold">$22,250</span>
                      </td>
                      <td>$1500</td>
                      <td>
                        <span className="badge badge-lg bg-primary-subtle text-primary">Completed</span>
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
                      <td>29 Dyas</td>
                      <td>18 Days</td>
                      <td>
                        <span className="fw-semibold">$21,2500</span>
                      </td>
                      <td>$1800</td>
                      <td>
                        <span className="badge badge-lg bg-primary-subtle text-primary">Completed</span>
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
                      <td>28 Dyas</td>
                      <td>4 Days</td>
                      <td>
                        <span className="fw-semibold">$22,250</span>
                      </td>
                      <td>$2900</td>
                      <td>
                        <span className="badge badge-lg bg-danger-subtle text-danger">Reject</span>
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
                      <td>27 Dyas</td>
                      <td>27 Days</td>
                      <td>
                        <span className="fw-semibold">$86,000</span>
                      </td>
                      <td>$400</td>
                      <td>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">Pending</span>
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
                      <td>26 Dyas</td>
                      <td>30 Days</td>
                      <td>
                        <span className="fw-semibold">$12,000</span>
                      </td>
                      <td>$700</td>
                      <td>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">Pending</span>
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
                      <td>25 Dyas</td>
                      <td>22 Days</td>
                      <td>
                        <span className="fw-semibold">$30,000</span>
                      </td>
                      <td>$1500</td>
                      <td>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">Pending</span>
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
                      <td>24 Dyas</td>
                      <td>22 Days</td>
                      <td>
                        <span className="fw-semibold">$22,250</span>
                      </td>
                      <td>$3000</td>
                      <td>
                        <span className="badge badge-lg bg-danger-subtle text-danger">Reject</span>
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
                      <td>23 Dyas</td>
                      <td>2 Days</td>
                      <td>
                        <span className="fw-semibold">$75,200</span>
                      </td>
                      <td>$1400</td>
                      <td>
                        <span className="badge badge-lg bg-primary-subtle text-primary">Completed</span>
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
                      <td>22 Dyas</td>
                      <td>24 Days</td>
                      <td>
                        <span className="fw-semibold">$22,250</span>
                      </td>
                      <td>$800</td>
                      <td>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">Pending</span>
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
                      <td>21 Dyas</td>
                      <td>4 Days</td>
                      <td>
                        <span className="fw-semibold">$45,000</span>
                      </td>
                      <td>$1500</td>
                      <td>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">Pending</span>
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
                      <td>30 Dyas</td>
                      <td>27 Days</td>
                      <td>
                        <span className="fw-semibold">$22,250</span>
                      </td>
                      <td>$1500</td>
                      <td>
                        <span className="badge badge-lg bg-primary-subtle text-primary">Completed</span>
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
                      <td>29 Dyas</td>
                      <td>18 Days</td>
                      <td>
                        <span className="fw-semibold">$21,2500</span>
                      </td>
                      <td>$1800</td>
                      <td>
                        <span className="badge badge-lg bg-primary-subtle text-primary">Completed</span>
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
                      <td>28 Dyas</td>
                      <td>4 Days</td>
                      <td>
                        <span className="fw-semibold">$22,250</span>
                      </td>
                      <td>$2900</td>
                      <td>
                        <span className="badge badge-lg bg-danger-subtle text-danger">Reject</span>
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
                      <td>27 Dyas</td>
                      <td>27 Days</td>
                      <td>
                        <span className="fw-semibold">$86,000</span>
                      </td>
                      <td>$400</td>
                      <td>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">Pending</span>
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
                      <td>26 Dyas</td>
                      <td>30 Days</td>
                      <td>
                        <span className="fw-semibold">$12,000</span>
                      </td>
                      <td>$700</td>
                      <td>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">Pending</span>
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
                      <td>25 Dyas</td>
                      <td>22 Days</td>
                      <td>
                        <span className="fw-semibold">$30,000</span>
                      </td>
                      <td>$1500</td>
                      <td>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">Pending</span>
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
                      <td>24 Dyas</td>
                      <td>22 Days</td>
                      <td>
                        <span className="fw-semibold">$22,250</span>
                      </td>
                      <td>$3000</td>
                      <td>
                        <span className="badge badge-lg bg-danger-subtle text-danger">Reject</span>
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
                      <td>23 Dyas</td>
                      <td>2 Days</td>
                      <td>
                        <span className="fw-semibold">$75,200</span>
                      </td>
                      <td>$1400</td>
                      <td>
                        <span className="badge badge-lg bg-primary-subtle text-primary">Completed</span>
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
                      <td>22 Dyas</td>
                      <td>24 Days</td>
                      <td>
                        <span className="fw-semibold">$22,250</span>
                      </td>
                      <td>$800</td>
                      <td>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">Pending</span>
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
                      <td>21 Dyas</td>
                      <td>4 Days</td>
                      <td>
                        <span className="fw-semibold">$45,000</span>
                      </td>
                      <td>$1500</td>
                      <td>
                        <span className="badge badge-lg bg-secondary-subtle text-secondary">Pending</span>
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

        <div className="modal fade" id="addPayrollModal" tabindex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header py-3">
                <h5 className="modal-title">Add Payroll</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="employee" className="form-label">Employee Name</label>
                    <input type="text" className="form-control" id="employee" placeholder="Enter employee name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="flatpickr_basic" className="form-label">Select Pay Date</label>
                    <input type="month" className="form-control" id="flatpickr_basic" />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="basicSalary" className="form-label">Basic Salary</label>
                      <input type="number" className="form-control" id="basicSalary" placeholder="₹50000" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="hra" className="form-label">HRA</label>
                      <input type="number" className="form-control" id="hra" placeholder="₹10000" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="bonus" className="form-label">Bonus</label>
                      <input type="number" className="form-control" id="bonus" placeholder="₹5000" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="deductions" className="form-label">Deductions</label>
                      <input type="number" className="form-control" id="deductions" placeholder="₹2000" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="netPay" className="form-label">Net Pay</label>
                    <input type="text" className="form-control" id="netPay" placeholder="Auto-calculated" readonly />
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">Generate Payroll</button>
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
