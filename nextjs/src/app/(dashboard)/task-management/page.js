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
      if (window.initTask) {
        window.initTask();
      }
    }
  }, []);

  return (
    <>
      <Script src="/assets/js/dashboard.js" strategy="lazyOnload" />
      <Script src="/assets/js/task.js" strategy="lazyOnload" onLoad={() => {
        if (window.initTask) window.initTask();
      }} />


      <div className="container">

        <div className="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
          <div className="clearfix">
            <h1 className="app-page-title">Task Management</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Task Management</li>
              </ol>
            </nav>
          </div>
          <button type="button" className="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addTaskModal">
            <i className="fi fi-rr-plus me-1"></i> Add Task
          </button>
        </div>

        <div className="card d-flex flex-row flex-wrap align-items-center h-auto mb-5">
          <ul className="nav nav-underline me-auto px-3 gap-2">
            <li className="nav-item">
              <a className="nav-link border-3 py-3 px-2 active" href="javascript:void(0);">Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link border-3 py-3 px-2" href="javascript:void(0);">Timeline</a>
            </li>
            <li className="nav-item">
              <a className="nav-link border-3 py-3 px-2" href="/calendar">Calendar</a>
            </li>
          </ul>
          <div className="d-flex ps-3">
            <div className="d-flex align-items-center me-4">
              <button className="btn btn-link p-0 me-3 text-primary">
                <i className="fi fi-rr-apps text-sm"></i>
              </button>
              <button className="btn btn-link p-0 text-body">
                <i className="fi fi-br-list text-sm"></i>
              </button>
            </div>
            <div className="vr"></div>
            <form className="d-flex align-items-center h-100 w-150px w-lg-300px position-relative" action="#">
              <button type="button" className="btn btn-sm border-0 position-absolute start-0 ms-3 p-0">
                <i className="fi fi-rr-search"></i>
              </button>
              <input type="text" className="form-control form-control-lg ps-5 rounded-start-0 border-0 shadow-none bg-transparent" placeholder="Search Task" />
            </form>
          </div>
        </div>

        <div className="row" id="taskWrapper">

          <div className="col-xxl-3 col-md-6">
            <div className="card bg-primary-subtle border-0 shadow-none border-top border-3 border-primary h-auto">
              <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">New Task</h6>
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
                        <a className="dropdown-item" href="javascript:void(0);">Add</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-3 d-grid gap-3" id="taskWrapper1">
                <div className="card card-action cursor-move action-border-primary h-auto mb-0">
                  <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">Hero Section Design</h6>
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-icon btn-action-primary waves-effect">
                        <i className="fi fi-rr-pencil"></i>
                      </button>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-icon btn-action-gray waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-br-menu-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Add</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2 p-3 text-1xs">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className="d-flex gap-2 mb-3">
                      <div className="text-start w-50">
                        <span>Start Date</span>
                        <span className="text-dark d-block fw-semibold">14 Aug 2024</span>
                      </div>
                      <div className="text-start w-50">
                        <span>End Date</span>
                        <span className="text-dark d-block fw-semibold">20 Aug 2024</span>
                      </div>
                    </div>
                    <div className="progress progress-sm bg-primary-subtle mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{width: "15%"}}></div>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
                      <div className="avatar-group">
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="assets/images/avatar/avatar5.webp" alt="" />
                        </div>
                        <a href="javascript:void(0);" className="avatar avatar-xs rounded-circle bg-primary-subtle text-primary border border-2 border-white">
                          <i className="fi fi-rr-plus text-2xs"></i>
                        </a>
                      </div>
                      <div className="dropdown select-status">
                        <button className="btn btn-sm btn-subtle-primary dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Select Status
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary" data-selected="true">New</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">In Progress</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-action cursor-move action-border-primary h-auto mb-0">
                  <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">Logo Design</h6>
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-icon btn-action-primary waves-effect">
                        <i className="fi fi-rr-pencil"></i>
                      </button>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-icon btn-action-gray waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-br-menu-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Add</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2 p-3 text-1xs">
                    <p>It is a long established fact that a reader will be distracted.</p>
                    <div className="d-flex gap-2 mb-3">
                      <div className="text-start w-50">
                        <span>Start Date</span>
                        <span className="text-dark d-block fw-semibold">14 Aug 2024</span>
                      </div>
                      <div className="text-start w-50">
                        <span>End Date</span>
                        <span className="text-dark d-block fw-semibold">20 Aug 2024</span>
                      </div>
                    </div>
                    <div className="progress progress-sm bg-primary-subtle mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{width: "15%"}}></div>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
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
                        <a href="javascript:void(0);" className="avatar avatar-xs rounded-circle bg-primary-subtle text-primary border border-2 border-white">
                          <i className="fi fi-rr-plus text-2xs"></i>
                        </a>
                      </div>
                      <div className="dropdown select-status">
                        <button className="btn btn-sm btn-subtle-primary dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Select Status
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary" data-selected="true">New</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">In Progress</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-action cursor-move action-border-primary h-auto mb-0">
                  <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">Banner Design</h6>
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-icon btn-action-primary waves-effect">
                        <i className="fi fi-rr-pencil"></i>
                      </button>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-icon btn-action-gray waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-br-menu-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Add</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2 p-3 text-1xs">
                    <p>It is a long established fact that a reader will be distracted.</p>
                    <div className="d-flex gap-2 mb-3">
                      <div className="text-start w-50">
                        <span>Start Date</span>
                        <span className="text-dark d-block fw-semibold">14 Aug 2024</span>
                      </div>
                      <div className="text-start w-50">
                        <span>End Date</span>
                        <span className="text-dark d-block fw-semibold">20 Aug 2024</span>
                      </div>
                    </div>
                    <div className="progress progress-sm bg-primary-subtle mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar" style={{width: "15%"}}></div>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
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
                        <a href="javascript:void(0);" className="avatar avatar-xs rounded-circle bg-primary-subtle text-primary border border-2 border-white">
                          <i className="fi fi-rr-plus text-2xs"></i>
                        </a>
                      </div>
                      <div className="dropdown select-status">
                        <button className="btn btn-sm btn-subtle-primary dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Select Status
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary" data-selected="true">New</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">In Progress</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6">
            <div className="card bg-info-subtle border-0 shadow-none border-top border-3 border-info h-auto">
              <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">In Progress</h6>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-sm btn-icon btn-action-info waves-effect">
                    <i className="fi fi-rr-plus text-2xs"></i>
                  </button>
                  <div className="btn-group">
                    <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fi fi-rr-menu-dots"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">Add</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-3 d-grid gap-3" id="taskWrapper2">
                <div className="card card-action cursor-move action-border-info h-auto mb-0">
                  <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">Website Design</h6>
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-icon btn-action-info waves-effect">
                        <i className="fi fi-rr-pencil"></i>
                      </button>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-icon btn-action-gray waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-br-menu-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Add</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2 p-3 text-1xs">
                    <p>It is a long established fact that a reader will be distracted.</p>
                    <div className="d-flex gap-2 mb-3">
                      <div className="text-start w-50">
                        <span>Start Date</span>
                        <span className="text-dark d-block fw-semibold">14 Aug 2024</span>
                      </div>
                      <div className="text-start w-50">
                        <span>End Date</span>
                        <span className="text-dark d-block fw-semibold">20 Aug 2024</span>
                      </div>
                    </div>
                    <div className="progress progress-sm bg-info-subtle mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-info" style={{width: "15%"}}></div>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
                      <div className="avatar-group">
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="assets/images/avatar/avatar5.webp" alt="" />
                        </div>
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="assets/images/avatar/avatar4.webp" alt="" />
                        </div>
                        <a href="javascript:void(0);" className="avatar avatar-xs rounded-circle bg-info-subtle text-info border border-2 border-white">
                          <i className="fi fi-rr-plus text-2xs"></i>
                        </a>
                      </div>
                      <div className="dropdown select-status">
                        <button className="btn btn-sm btn-subtle-info dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          In Progress
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">New</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info" data-selected="true">In Progress</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-action cursor-move action-border-info h-auto mb-0">
                  <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">Logo Design</h6>
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-icon btn-action-info waves-effect">
                        <i className="fi fi-rr-pencil"></i>
                      </button>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-icon btn-action-gray waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-br-menu-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Add</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2 p-3 text-1xs">
                    <p>It is a long established fact that a reader will be distracted.</p>
                    <div className="d-flex gap-2 mb-3">
                      <div className="text-start w-50">
                        <span>Start Date</span>
                        <span className="text-dark d-block fw-semibold">14 Aug 2024</span>
                      </div>
                      <div className="text-start w-50">
                        <span>End Date</span>
                        <span className="text-dark d-block fw-semibold">20 Aug 2024</span>
                      </div>
                    </div>
                    <div className="progress progress-sm bg-info-subtle mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-info" style={{width: "15%"}}></div>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
                      <div className="avatar-group">
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="assets/images/avatar/avatar2.webp" alt="" />
                        </div>
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="assets/images/avatar/avatar3.webp" alt="" />
                        </div>
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="assets/images/avatar/avatar4.webp" alt="" />
                        </div>
                        <a href="javascript:void(0);" className="avatar avatar-xs rounded-circle bg-info-subtle text-info border border-2 border-white">
                          <i className="fi fi-rr-plus text-2xs"></i>
                        </a>
                      </div>
                      <div className="dropdown select-status">
                        <button className="btn btn-sm btn-subtle-info dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          In Progress
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">New</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info" data-selected="true">In Progress</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-action cursor-move action-border-info h-auto mb-0">
                  <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">Web Development</h6>
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-icon btn-action-info waves-effect">
                        <i className="fi fi-rr-pencil"></i>
                      </button>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-icon btn-action-gray waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-br-menu-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Add</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2 p-3 text-1xs">
                    <div className="d-flex gap-2 mb-3">
                      <div className="text-start w-50">
                        <span>Start Date</span>
                        <span className="text-dark d-block fw-semibold">14 Aug 2024</span>
                      </div>
                      <div className="text-start w-50">
                        <span>End Date</span>
                        <span className="text-dark d-block fw-semibold">20 Aug 2024</span>
                      </div>
                    </div>
                    <div className="progress progress-sm bg-info-subtle mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-info" style={{width: "15%"}}></div>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
                      <div className="avatar-group">
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="assets/images/avatar/avatar5.webp" alt="" />
                        </div>
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="assets/images/avatar/avatar3.webp" alt="" />
                        </div>
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="assets/images/avatar/avatar1.webp" alt="" />
                        </div>
                        <a href="javascript:void(0);" className="avatar avatar-xs rounded-circle bg-info-subtle text-info border border-2 border-white">
                          <i className="fi fi-rr-plus text-2xs"></i>
                        </a>
                      </div>
                      <div className="dropdown select-status">
                        <button className="btn btn-sm btn-subtle-info dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          In Progress
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">New</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info" data-selected="true">In Progress</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6">
            <div className="card bg-secondary-subtle border-0 shadow-none border-top border-3 border-secondary h-auto">
              <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Pending</h6>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-sm btn-icon btn-action-secondary waves-effect">
                    <i className="fi fi-rr-plus text-2xs"></i>
                  </button>
                  <div className="btn-group">
                    <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fi fi-rr-menu-dots"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">Add</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-3 d-grid gap-3" id="taskWrapper3">
                <div className="card card-action cursor-move action-border-secondary h-auto mb-0">
                  <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">Banner Design</h6>
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-icon btn-action-secondary waves-effect">
                        <i className="fi fi-rr-pencil"></i>
                      </button>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-icon btn-action-gray waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-br-menu-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Add</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2 p-3 text-1xs">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className="d-flex gap-2 mb-3">
                      <div className="text-start w-50">
                        <span>Start Date</span>
                        <span className="text-dark d-block fw-semibold">14 Aug 2024</span>
                      </div>
                      <div className="text-start w-50">
                        <span>End Date</span>
                        <span className="text-dark d-block fw-semibold">20 Aug 2024</span>
                      </div>
                    </div>
                    <div className="progress progress-sm bg-secondary-subtle mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-secondary" style={{width: "15%"}}></div>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
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
                        <a href="javascript:void(0);" className="avatar avatar-xs rounded-circle bg-secondary-subtle text-secondary border border-2 border-white">
                          <i className="fi fi-rr-plus text-2xs"></i>
                        </a>
                      </div>
                      <div className="dropdown select-status">
                        <button className="btn btn-sm btn-subtle-secondary dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Pending
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">New</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">In Progress</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Pending</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-action cursor-move action-border-secondary h-auto mb-0">
                  <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">Logo Design</h6>
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-icon btn-action-secondary waves-effect">
                        <i className="fi fi-rr-pencil"></i>
                      </button>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-icon btn-action-gray waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-br-menu-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Add</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2 p-3 text-1xs">
                    <p>It is a long established fact that a reader will be distracted.</p>
                    <div className="d-flex gap-2 mb-3">
                      <div className="text-start w-50">
                        <span>Start Date</span>
                        <span className="text-dark d-block fw-semibold">14 Aug 2024</span>
                      </div>
                      <div className="text-start w-50">
                        <span>End Date</span>
                        <span className="text-dark d-block fw-semibold">20 Aug 2024</span>
                      </div>
                    </div>
                    <div className="progress progress-sm bg-secondary-subtle mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-secondary" style={{width: "15%"}}></div>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
                      <div className="avatar-group">
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="assets/images/avatar/avatar2.webp" alt="" />
                        </div>
                        <div className="avatar avatar-xs rounded-circle border border-2 border-white">
                          <img src="assets/images/avatar/avatar1.webp" alt="" />
                        </div>
                        <a href="javascript:void(0);" className="avatar avatar-xs rounded-circle bg-secondary-subtle text-secondary border border-2 border-white">
                          <i className="fi fi-rr-plus text-2xs"></i>
                        </a>
                      </div>
                      <div className="dropdown select-status">
                        <button className="btn btn-sm btn-subtle-secondary dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Pending
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">New</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">In Progress</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Pending</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-action cursor-move cursor-move action-border-secondary h-auto mb-0">
                  <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">Website Design</h6>
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-icon btn-action-secondary waves-effect">
                        <i className="fi fi-rr-pencil"></i>
                      </button>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-icon btn-action-gray waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-br-menu-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Add</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2 p-3 text-1xs">
                    <p>It is a long established fact that a reader will be distracted.</p>
                    <div className="d-flex gap-2 mb-3">
                      <div className="text-start w-50">
                        <span>Start Date</span>
                        <span className="text-dark d-block fw-semibold">14 Aug 2024</span>
                      </div>
                      <div className="text-start w-50">
                        <span>End Date</span>
                        <span className="text-dark d-block fw-semibold">20 Aug 2024</span>
                      </div>
                    </div>
                    <div className="progress progress-sm bg-secondary-subtle mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-secondary" style={{width: "15%"}}></div>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
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
                        <a href="javascript:void(0);" className="avatar avatar-xs rounded-circle bg-secondary-subtle text-secondary border border-2 border-white">
                          <i className="fi fi-rr-plus text-2xs"></i>
                        </a>
                      </div>
                      <div className="dropdown select-status">
                        <button className="btn btn-sm btn-subtle-secondary dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Pending
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">New</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">In Progress</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary" data-selected="true">Pending</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success">Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-md-6">
            <div className="card bg-success-subtle border-0 shadow-none border-top border-3 border-success h-auto">
              <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Complete</h6>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-sm btn-icon btn-action-success waves-effect">
                    <i className="fi fi-rr-plus text-2xs"></i>
                  </button>
                  <div className="btn-group">
                    <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fi fi-rr-menu-dots"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">Add</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body p-3 d-grid gap-3" id="taskWrapper4">
                <div className="card card-action cursor-move action-border-success h-auto mb-0">
                  <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">React Development</h6>
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-icon btn-action-success waves-effect">
                        <i className="fi fi-rr-pencil"></i>
                      </button>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-icon btn-action-gray waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-br-menu-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Add</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2 p-3 text-1xs">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className="d-flex gap-2 mb-3">
                      <div className="text-start w-50">
                        <span>Start Date</span>
                        <span className="text-dark d-block fw-semibold">14 Aug 2024</span>
                      </div>
                      <div className="text-start w-50">
                        <span>End Date</span>
                        <span className="text-dark d-block fw-semibold">20 Aug 2024</span>
                      </div>
                    </div>
                    <div className="progress progress-sm bg-success-subtle mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-success" style={{width: "15%"}}></div>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
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
                        <a href="javascript:void(0);" className="avatar avatar-xs rounded-circle bg-success-subtle text-success border border-2 border-white">
                          <i className="fi fi-rr-plus text-2xs"></i>
                        </a>
                      </div>
                      <div className="dropdown select-status">
                        <button className="btn btn-sm btn-subtle-success dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Done
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">New</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">In Progress</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success" data-selected="true">Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-action cursor-move action-border-success h-auto mb-0">
                  <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">Banner Design</h6>
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-icon btn-action-success waves-effect">
                        <i className="fi fi-rr-pencil"></i>
                      </button>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-icon btn-action-gray waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-br-menu-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Add</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2 p-3 text-1xs">
                    <p>It is a long established fact that a reader will be distracted.</p>
                    <div className="d-flex gap-2 mb-3">
                      <div className="text-start w-50">
                        <span>Start Date</span>
                        <span className="text-dark d-block fw-semibold">14 Aug 2024</span>
                      </div>
                      <div className="text-start w-50">
                        <span>End Date</span>
                        <span className="text-dark d-block fw-semibold">20 Aug 2024</span>
                      </div>
                    </div>
                    <div className="progress progress-sm bg-success-subtle mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-success" style={{width: "15%"}}></div>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
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
                        <a href="javascript:void(0);" className="avatar avatar-xs rounded-circle bg-success-subtle text-success border border-2 border-white">
                          <i className="fi fi-rr-plus text-2xs"></i>
                        </a>
                      </div>
                      <div className="dropdown select-status">
                        <button className="btn btn-sm btn-subtle-success dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Done
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">New</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">In Progress</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success" data-selected="true">Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-action cursor-move action-border-success h-auto mb-0">
                  <div className="card-header p-3 d-flex align-items-center justify-content-between border-0 pb-0">
                    <h6 className="card-title mb-0">Icon Design</h6>
                    <div className="d-flex">
                      <button type="button" className="btn btn-sm btn-icon btn-action-success waves-effect">
                        <i className="fi fi-rr-pencil"></i>
                      </button>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-icon btn-action-gray waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-br-menu-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Add</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);">Edit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-2 p-3 text-1xs">
                    <p>It is a long established fact that a reader will be distracted.</p>
                    <div className="d-flex gap-2 mb-3">
                      <div className="text-start w-50">
                        <span>Start Date</span>
                        <span className="text-dark d-block fw-semibold">14 Aug 2024</span>
                      </div>
                      <div className="text-start w-50">
                        <span>End Date</span>
                        <span className="text-dark d-block fw-semibold">20 Aug 2024</span>
                      </div>
                    </div>
                    <div className="progress progress-sm bg-success-subtle mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-success" style={{width: "15%"}}></div>
                    </div>
                    <div className="d-flex gap-2 justify-content-between">
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
                        <a href="javascript:void(0);" className="avatar avatar-xs rounded-circle bg-success-subtle text-success border border-2 border-white">
                          <i className="fi fi-rr-plus text-2xs"></i>
                        </a>
                      </div>
                      <div className="dropdown select-status">
                        <button className="btn btn-sm btn-subtle-success dropdown-toggle waves-effect waves-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Done
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-primary">New</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-info">In Progress</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-secondary">Pending</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0);" data-className="btn-subtle-success" data-selected="true">Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="modal fade" id="addTaskModal" tabindex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header py-3">
                <h5 className="modal-title">Add Employee</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="taskTitle" className="form-label">Task Title</label>
                    <input type="text" className="form-control" id="taskTitle" placeholder="Enter task title" />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="assignedTo" className="form-label">Assign To</label>
                      <select className="form-select" id="assignedTo">
                        <option selected disabled>Select Employee</option>
                        <option>John Doe</option>
                        <option>Jane Smith</option>
                        <option>David Miller</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="priority" className="form-label">Priority</label>
                      <select className="form-select" id="priority">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Urgent</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="startDate" className="form-label">Start Date</label>
                      <input type="date" className="form-control flatpickr-date" id="startDate" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="dueDate" className="form-label">Due Date</label>
                      <input type="date" className="form-control flatpickr-date" id="dueDate" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Task Description</label>
                    <textarea className="form-control" id="description" rows="3" placeholder="Describe the task..."></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select className="form-select" id="status">
                      <option>Not Started</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                      <option>On Hold</option>
                    </select>
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">Create Task</button>
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
