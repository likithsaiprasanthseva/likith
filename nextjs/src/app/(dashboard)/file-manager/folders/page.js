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
            <h1 className="app-page-title">Folders</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Folders</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">

          <div className="col-12 mb-4">
            <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between">
              <form className="d-flex align-items-center h-100 w-lg-250px w-xxl-300px position-relative" action="#">
                <button type="button" className="btn btn-sm border-0 position-absolute start-0 ms-3 p-0">
                  <i className="fi fi-rr-search"></i>
                </button>
                <input type="text" className="form-control ps-5" placeholder="Search folders" data-bs-toggle="modal" />
              </form>
              <button className="btn btn-primary waves-effect">
                <i className="fa fa-folder-plus me-1"></i> Create Folder
              </button>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="row">
              <h6 className="card-title mb-3">Quick Access</h6>
              <div className="d-flex gap-4 mb-5 flex-wrap">
                <a href="javascript:void(0)" className="text-center">
                  <div className="avatar avatar-lg mb-1 border text-primary mx-auto">
                    <i className="fi fi-rr-picture fs-4"></i>
                  </div>
                  <small className="text-body d-block">Images</small>
                </a>
                <a href="javascript:void(0)" className="text-center">
                  <div className="avatar avatar-lg mb-1 border text-secondary mx-auto">
                    <i className="fi fi-rr-film fs-4"></i>
                  </div>
                  <small className="text-body d-block">Videos</small>
                </a>
                <a href="javascript:void(0)" className="text-center">
                  <div className="avatar avatar-lg mb-1 border text-success mx-auto">
                    <i className="fi fi-rr-picture fs-4"></i>
                  </div>
                  <small className="text-body d-block">Music</small>
                </a>
                <a href="javascript:void(0)" className="text-center">
                  <div className="avatar avatar-lg mb-1 border text-danger mx-auto">
                    <i className="fi fi-rr-document fs-4"></i>
                  </div>
                  <small className="text-body d-block">Documents</small>
                </a>
                <a href="javascript:void(0)" className="text-center">
                  <div className="avatar avatar-lg mb-1 border text-info mx-auto">
                    <i className="fi fi-rr-apps-add fs-4"></i>
                  </div>
                  <small className="text-body d-block">Apps</small>
                </a>
                <a href="javascript:void(0)" className="text-center">
                  <div className="avatar avatar-lg mb-1 border text-warning mx-auto">
                    <i className="fi fi-rr-file-zipper fs-4"></i>
                  </div>
                  <small className="text-body d-block">Zip Files</small>
                </a>
                <a href="javascript:void(0)" className="text-center">
                  <div className="avatar avatar-lg mb-1 border text-dark mx-auto">
                    <i className="fi fi-rr-download fs-4"></i>
                  </div>
                  <small className="text-body d-block">Downloads</small>
                </a>
                <a href="javascript:void(0)" className="text-center">
                  <div className="avatar avatar-lg mb-1 border border-dashed text-body mx-auto">
                    <i className="fi fi-rr-plus fs-4"></i>
                  </div>
                  <small className="text-body d-block">Add</small>
                </a>
              </div>

              <h6 className="card-title mb-3">My Folders</h6>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-4">
                      <div className="d-flex flex-column">
                        <div className="avatar avatar-lg text-white mb-3">
                          <img src="/assets/images/icons/folder.svg" alt="" />
                        </div>
                        <div>
                          <h6 className="mb-0">Musics</h6>
                          <small className="text-body mb-0">240 items</small>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-edit me-2"></i>Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-arrows-alt me-2"></i>Move
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-trash me-2"></i>Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between small text-body">
                      <span>Modified</span>
                      <span>6 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-4">
                      <div className="align-items-center gap-3">
                        <div className="avatar avatar-lg text-white mb-3">
                          <img src="/assets/images/icons/folder.svg" alt="" />
                        </div>
                        <div>
                          <h6 className="mb-0">Documents</h6>
                          <small className="text-body mb-0">12 items</small>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-edit me-2"></i>Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-arrows-alt me-2"></i>Move
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-trash me-2"></i>Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between small text-body">
                      <span>Modified</span>
                      <span>2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-4">
                      <div className="d-flex flex-column">
                        <div className="avatar avatar-lg text-white mb-3">
                          <img src="/assets/images/icons/folder.svg" alt="" />
                        </div>
                        <div>
                          <h6 className="mb-0">Projects</h6>
                          <small className="text-body mb-0">8 items</small>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-edit me-2"></i>Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-arrows-alt me-2"></i>Move
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-trash me-2"></i>Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between small text-body">
                      <span>Modified</span>
                      <span>Yesterday</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-4">
                      <div className="d-flex flex-column">
                        <div className="avatar avatar-lg text-white mb-3">
                          <img src="/assets/images/icons/folder.svg" alt="" />
                        </div>
                        <div>
                          <h6 className="mb-0">Invoices</h6>
                          <small className="text-body mb-0">20 items</small>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-edit me-2"></i>Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-arrows-alt me-2"></i>Move
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-trash me-2"></i>Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between small text-body">
                      <span>Modified</span>
                      <span>5 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-4">
                      <div className="d-flex flex-column">
                        <div className="avatar avatar-lg text-white mb-3">
                          <img src="/assets/images/icons/folder.svg" alt="" />
                        </div>
                        <div>
                          <h6 className="mb-0">Archives</h6>
                          <small className="text-body mb-0">4 items</small>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-edit me-2"></i>Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-arrows-alt me-2"></i>Move
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-trash me-2"></i>Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between small text-body">
                      <span>Modified</span>
                      <span>1 week ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between mb-4">
                      <div className="d-flex flex-column">
                        <div className="avatar avatar-lg text-white mb-3">
                          <img src="/assets/images/icons/folder.svg" alt="" />
                        </div>
                        <div>
                          <h6 className="mb-0">Photos</h6>
                          <small className="text-body mb-0">656 items</small>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-edit me-2"></i>Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-arrows-alt me-2"></i>Move
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="javascript:void(0)">
                              <i className="fa fa-trash me-2"></i>Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between small text-body">
                      <span>Modified</span>
                      <span>15 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body mb-1">
                    <div className="overflow-hidden">
                      <div id="storageChart" className="mt-n5 mx-n4"></div>
                    </div>
                    <div className="text-center mt-n4">Total: 256 GB</div>
                  </div>
                  <div className="card-footer pt-0 border-0">
                    <h6 className="card-title mb-2">Storage Usage</h6>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                        <div className="d-flex align-items-center">
                          <div className="avatar me-2 border p-2">
                            <img src="/assets/images/icons/google-drive.svg" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">Google Drive</h6>
                            <small className="text-body">10,689 Files</small>
                          </div>
                        </div>
                        <h6 className="mb-0 ms-auto">12.2 GB / 28GB</h6>
                      </li>
                      <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                        <div className="d-flex align-items-center">
                          <div className="avatar me-2 border p-2">
                            <img src="/assets/images/icons/dropbox.svg" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">Dropbox</h6>
                            <small className="text-body">355 Files</small>
                          </div>
                        </div>
                        <h6 className="mb-0 ms-auto">97 GB / 128GB</h6>
                      </li>
                      <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                        <div className="d-flex align-items-center">
                          <div className="avatar me-2 border p-2">
                            <img src="/assets/images/icons/onedrive.svg" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">OneDrive</h6>
                            <small className="text-body">240 Files</small>
                          </div>
                        </div>
                        <h6 className="mb-0 ms-auto">44 GB / 100 GB</h6>
                      </li>
                    </ul>
                    <div className="text-center border rounded px-4 py-4">
                      <h5>Get More space for files</h5>
                      <p>Unlimited storage built to grow with your business</p>
                      <button type="button" className="btn btn-sm btn-primary waves-effect">Upgrade to Pro</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="card overflow-hidden">
              <div className="card-header d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title">Recent Files</h6>
                <div className="d-flex gap-2 flex-wrap">
                  <div id="dt_Recentfiles_Search"></div>
                  <button type="button" className="btn btn-sm btn-outline-light btn-shadow waves-effect">
                    <i className="fi fi-rr-filter pe-1"></i>Filters
                  </button>
                  <button type="button" className="btn btn-sm btn-outline-light btn-shadow waves-effect">
                    <i className="fi fi-rr-settings-sliders pe-1"></i>Details
                  </button>
                  <button type="button" className="btn btn-sm btn-outline-light btn-shadow waves-effect">
                    <i className="fi fi-rr-folder-download pe-1"></i>Save
                  </button>
                  <button type="button" className="btn btn-sm btn-primary btn-shadow waves-effect">
                    <i className="fi fi-rr-folder-upload pe-1"></i>Upload Files
                  </button>
                </div>
              </div>
              <div className="card-body p-2">
                <table id="dt_Recentfiles" className="table display table-row-rounded data-row-checkbox">
                  <thead className="table-light">
                    <tr>
                      <th className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-row-checkbox type="checkbox" />
                        </div>
                      </th>
                      <th className="minw-250px">File name</th>
                      <th className="minw-150px">File Size</th>
                      <th className="minw-150px">Date Added</th>
                      <th className="minw-150px">Added By</th>
                      <th className="minw-150px">Last Update</th>
                      <th className="minw-150px">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Market Analysis Document 2026</td>
                      <td>671.15 MB</td>
                      <td>05 Jan 2026</td>
                      <td>James Carter</td>
                      <td>21 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <div className="btn-group">
                          <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fi fi-rr-menu-dots"></i>
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">Edit</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">Delete</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Employee Salary Sheet Q1</td>
                      <td>128.40 MB</td>
                      <td>10 Jan 2026</td>
                      <td>Emma Wilson</td>
                      <td>18 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Project Roadmap</td>
                      <td>54.22 MB</td>
                      <td>12 Jan 2026</td>
                      <td>Daniel Smith</td>
                      <td>19 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Client Contract - Alpha</td>
                      <td>12.60 MB</td>
                      <td>14 Jan 2026</td>
                      <td>Olivia Brown</td>
                      <td>20 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>UI Design Assets</td>
                      <td>340.90 MB</td>
                      <td>15 Jan 2026</td>
                      <td>Sophia Miller</td>
                      <td>22 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Marketing Campaign Plan</td>
                      <td>78.50 MB</td>
                      <td>16 Jan 2026</td>
                      <td>Liam Johnson</td>
                      <td>23 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Server Backup File</td>
                      <td>1.25 GB</td>
                      <td>17 Jan 2026</td>
                      <td>Noah Davis</td>
                      <td>24 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>HR Policy Document</td>
                      <td>9.80 MB</td>
                      <td>18 Jan 2026</td>
                      <td>Ava Thompson</td>
                      <td>25 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Sales Performance Report</td>
                      <td>44.70 MB</td>
                      <td>19 Jan 2026</td>
                      <td>William Moore</td>
                      <td>26 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Meeting Minutes</td>
                      <td>3.40 MB</td>
                      <td>20 Jan 2026</td>
                      <td>Isabella Clark</td>
                      <td>26 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Invoice Records</td>
                      <td>22.10 MB</td>
                      <td>21 Jan 2026</td>
                      <td>Lucas Martinez</td>
                      <td>27 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Product Requirement Doc</td>
                      <td>18.75 MB</td>
                      <td>22 Jan 2026</td>
                      <td>Mia Anderson</td>
                      <td>28 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Security Audit Report</td>
                      <td>90.00 MB</td>
                      <td>23 Jan 2026</td>
                      <td>Henry Lee</td>
                      <td>29 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pe-0">
                        <input className="form-check-input" type="checkbox" />
                      </td>
                      <td>Annual Budget Sheet</td>
                      <td>66.30 MB</td>
                      <td>24 Jan 2026</td>
                      <td>Charlotte King</td>
                      <td>30 Jan 2026</td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon me-1">
                          <i className="icon-eye"></i>
                        </button>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon">
                          <i className="fi fi-rr-menu-dots"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

      </div>

    
    </>
  );
}
