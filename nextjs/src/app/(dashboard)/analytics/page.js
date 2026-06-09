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
            <h1 className="app-page-title">Analytics</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Analytics</li>
              </ol>
            </nav>
          </div>
          <button type="button" className="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
            <i className="fi fi-rr-plus me-1"></i> Add Employee
          </button>
        </div>

        <div className="row">

          <div className="col-xl-6">
            <div className="card bg-warning bg-opacity-25 shadow-none border-0">
              <div className="card-body px-4 pb-0 pt-2">
                <div className="row g-0">
                  <div className="col-sm-7 py-3 px-2">
                    <h6 className="card-title fw-bold mb-2">Employee Satisfied</h6>
                    <h2 className="text-secondary fs-1 fw-bolder mb-3">95.27%</h2>
                    <p className="text-dark fw-semibold mb-0">There are currently <strong className="text-primary">1,204 employees</strong> who are satisfied with working in your office, an increase from last month.</p>
                  </div>
                  <div className="col-sm-5 text-center text-sm-end align-self-end">
                    <img src="/assets/images/media/svg/media2.svg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="card bg-info bg-opacity-25 shadow-none border-0">
              <div className="card-body px-4 py-2">
                <div className="row g-0 align-items-center">
                  <div className="col-md-5 py-3 px-2">
                    <h6 className="card-title fw-bold mb-2">Task Status </h6>
                    <p className="text-dark mb-4">
                      <strong className="text-info">90%</strong> of the work was completed last week, a significant portion of the total task.
                    </p>
                    <a href="/task-management" className="btn btn-info waves-effect waves-light">
                      <i className="fi fi-rr-plus me-1"></i> Add Task
                    </a>
                  </div>
                  <div className="col-md-7 text-center mb-3">
                    <div id="taskStatusChart"></div>
                    <span className="text-info fw-semibold mt-n5 d-block">421/500 Total task done</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Average Team KPI</h6>
                <button type="button" className="btn btn-sm btn-outline-light btn-shadow waves-effect">Download Report</button>
              </div>
              <div className="card-body p-2">
                <div className="d-flex align-items-end gap-1 px-2 mb-2">
                  <h2 className="mb-0">65,276K</h2>
                  <span className="text-success d-flex align-items-center">
                    <i className="fi fi-rr-arrow-small-up"></i> +9%
                  </span>
                  <span>than last year</span>
                </div>
                <div id="averageTeamKPI"></div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6 col-lg-4 order-lg-1 order-xxl-0">
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

          <div className="col-xxl-3 col-md-6 col-lg-4 order-lg-1 order-xxl-0">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Team</h6>
                <div className="clearfix">
                  <a href="javascript:void(0)" className="btn-link">View All</a>
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
                        <img src="/assets/images/avatar/avatar1.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar2.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar3.webp" alt="" />
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
                        <img src="/assets/images/avatar/avatar4.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar5.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar1.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar2.webp" alt="" />
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
                        <img src="/assets/images/avatar/avatar3.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar4.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar5.webp" alt="" />
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
                        <img src="/assets/images/avatar/avatar1.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar2.webp" alt="" />
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
                        <img src="/assets/images/avatar/avatar5.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar4.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar3.webp" alt="" />
                      </div>
                      <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar2.webp" alt="" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xxl-5 col-lg-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0">
                <h6 className="card-title mb-0">Employee Performance</h6>
                <div className="dropdown">
                  <button className="btn dropdown-toggle btn-white btn-shadow waves-effect btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Last Month
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">Last Month</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">Category</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">Published</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">Date Modifed</a>
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
                            <img src="/assets/images/avatar/avatar1.webp" alt="" />
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
                              <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar rounded-circle">
                            <img src="/assets/images/avatar/avatar2.webp" alt="" />
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
                              <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar rounded-circle">
                            <img src="/assets/images/avatar/avatar3.webp" alt="" />
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
                              <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar rounded-circle">
                            <img src="/assets/images/avatar/avatar4.webp" alt="" />
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
                              <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="javascript:void(0)">Delete</a>
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

          <div className="col-xxl-4 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Recent Job Application</h6>
                <a href="javascript:void(0)" className="btn-link">View All</a>
              </div>
              <div className="card-body pb-3">
                <ul className="list-group list-group-hover list-group-smooth list-group-unlined list-group-outer">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="avatar rounded-circle me-1">
                      <img src="/assets/images/avatar/avatar1.webp" alt="" />
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
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-outline-light" data-selected="true">Pending</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-subtle-primary">Approved</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-subtle-secondary">Rejected</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="avatar rounded-circle me-1">
                      <img src="/assets/images/avatar/avatar2.webp" alt="" />
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
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-outline-light">Pending</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-subtle-primary" data-selected="true">Approved</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-subtle-secondary">Rejected</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="avatar rounded-circle me-1">
                      <img src="/assets/images/avatar/avatar3.webp" alt="" />
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
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-outline-light">Pending</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-subtle-primary">Approved</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-subtle-secondary" data-selected="true">Rejected</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="avatar rounded-circle me-1">
                      <img src="/assets/images/avatar/avatar4.webp" alt="" />
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
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-outline-light" data-selected="true">Pending</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-subtle-primary">Approved</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-subtle-secondary">Rejected</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="avatar rounded-circle me-1">
                      <img src="/assets/images/avatar/avatar5.webp" alt="" />
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
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-outline-light">Pending</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-subtle-primary" data-selected="true">Approved</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)" data-class="btn-subtle-secondary">Rejected</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Upcoming Meetings</h6>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-sm btn-icon btn-action-primary waves-effect">
                    <i className="fi fi-rr-plus text-2xs"></i>
                  </button>
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
              </div>
              <div className="card-body gradient-layer" style={{height: "325px"}} data-simplebar>
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
                            <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xs d-flex gap-1 align-items-center">
                    <img src="/assets/images/icons/google-meet.svg" alt="" />
                    <span>On Google Meet</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="badge bg-white text-dark fw-semibold">Marketing</span>
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
                            <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xs d-flex gap-1 align-items-center">
                    <img src="/assets/images/icons/google-meet.svg" alt="" />
                    <span>On Google Meet</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="badge bg-white text-dark fw-semibold">Manager</span>
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
                            <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xs d-flex gap-1 align-items-center">
                    <img src="/assets/images/icons/google-meet.svg" alt="" />
                    <span>On Google Meet</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="badge bg-white text-dark fw-semibold">HR</span>
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
                            <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xs d-flex gap-1 align-items-center">
                    <img src="/assets/images/icons/google-meet.svg" alt="" />
                    <span>On Google Meet</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="badge bg-white text-dark fw-semibold">Marketing</span>
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
                            <a className="dropdown-item" href="javascript:void(0)">Edit</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xs d-flex gap-1 align-items-center">
                    <img src="/assets/images/icons/google-meet.svg" alt="" />
                    <span>On Google Meet</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="badge bg-white text-dark fw-semibold">Manager</span>
                    <span className="text-primary text-2xs fw-semibold d-flex align-items-center">
                      <i className="fi fi-rr-clock-three me-1"></i> 06:00 - 07:00
                    </span>
                  </div>
                </div>
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
