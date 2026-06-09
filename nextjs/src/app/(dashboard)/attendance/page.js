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
            <h1 className="app-page-title">Today, 01 July 2024</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Attendance</li>
              </ol>
            </nav>
          </div>
          <button type="button" className="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
            <i className="fi fi-rr-plus me-1"></i> Add Employee
          </button>
        </div>

        <div className="row">

          <div className="col-xxl-9 col-lg-8">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Attendance Rate</h6>
                <a href="javascript:void(0)" className="btn btn-sm btn-outline-light waves-effect btn-shadow">Download Report</a>
              </div>
              <div className="card-body px-1 py-2">
                <div id="chartAttendanceRate"></div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-lg-4">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Employee Type </h6>
                <div className="btn-group">
                  <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fi fi-rr-menu-dots"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">Onsite</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">Remote</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">Hybrid</a>
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

          <div className="col-lg-12">
            <div className="card overflow-hidden">
              <div className="card-header d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Employee Attendance</h6>
                <div className="d-flex gap-3 flex-wrap">
                  <div id="dt_EmployeeAttendance_Search"></div>
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
                <table id="dt_EmployeeAttendance" className="table table-sm display table-row-rounded">
                  <thead className="table-light">
                    <tr>
                      <th className="minw-200px">Employee Name</th>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                      <th>5</th>
                      <th>6</th>
                      <th>7</th>
                      <th>8</th>
                      <th>9</th>
                      <th>10</th>
                      <th>11</th>
                      <th>12</th>
                      <th>13</th>
                      <th>14</th>
                      <th>15</th>
                      <th>16</th>
                      <th>17</th>
                      <th>18</th>
                      <th>19</th>
                      <th>20</th>
                      <th>21</th>
                      <th>22</th>
                      <th>23</th>
                      <th>24</th>
                      <th>25</th>
                      <th>26</th>
                      <th>27</th>
                      <th>28</th>
                      <th>29</th>
                      <th>30</th>
                      <th>31</th>
                      <th>Leave</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">James Anderson</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">5 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">William Johnson</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">3 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Benjamin Martinez</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">12 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Michael Davis</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">7 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar5.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Matthew Taylor</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">2 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">David Wilson</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">4 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Anthony Thomas</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">3 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Christopher Moore</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">1 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Emma Smith</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">5 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">James Anderson</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">5 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">William Johnson</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">3 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Benjamin Martinez</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">12 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Michael Davis</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">7 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar5.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Matthew Taylor</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">2 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">David Wilson</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">4 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Anthony Thomas</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">3 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Christopher Moore</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">1 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Emma Smith</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">5 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">James Anderson</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">5 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">William Johnson</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">3 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Benjamin Martinez</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">12 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Michael Davis</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">7 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar5.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Matthew Taylor</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">2 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">David Wilson</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">4 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Anthony Thomas</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">3 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Christopher Moore</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">1 Day</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center mw-175px">
                          <div className="avatar avatar-xs rounded-circle">
                            <img src="/assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="ms-2 me-auto">
                            <h6 className="mb-0">Emma Smith</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-primary text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-circle-xmark text-danger text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <i className="fi fi-rr-check-circle text-body text-sm"></i>
                      </td>
                      <td>
                        <span className="text-danger">5 Day</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        <div className="modal fade" id="addEmployeeModal" tabIndex="-1" aria-hidden="true">
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
                      <select defaultValue="Select Department" className="form-select" id="department">
                        <option disabled>Select Department</option>
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
