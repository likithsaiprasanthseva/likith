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
            <h1 className="app-page-title">Files</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Files</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">

          <h6 className="card-title mb-3">Favorite Files</h6>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <a className="btn btn-action-gray btn-sm btn-icon waves-effect" href="javascript:void(0)">
                    <i className="fi fi-sr-star text-warning"></i>
                  </a>
                  <div className="btn-group">
                    <button className="btn btn-action-gray btn-sm btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                <div className="text-center mb-4">
                  <div className="avatar bg-primary text-white mx-auto mb-3">
                    <i className="fi fi-rr-music-alt"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Musics</h6>
                    <small className="text-body mb-0">240 items <span className="text-dark ms-2">(4 GB)</span>
                    </small>
                  </div>
                </div>
                <div className="d-flex justify-content-between small text-body">
                  <span>Modified</span>
                  <span>2 days ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <a className="btn btn-action-gray btn-sm btn-icon waves-effect" href="javascript:void(0)">
                    <i className="fi fi-sr-star text-warning"></i>
                  </a>
                  <div className="btn-group">
                    <button className="btn btn-action-gray btn-sm btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                <div className="text-center mb-4">
                  <div className="avatar bg-success text-white mx-auto mb-3">
                    <i className="fi fi-rr-picture"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Images</h6>
                    <small className="text-body mb-0">180 items <span className="text-dark ms-2">(2.6 GB)</span>
                    </small>
                  </div>
                </div>
                <div className="d-flex justify-content-between small text-body">
                  <span>Modified</span>
                  <span>Yesterday</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <a className="btn btn-action-gray btn-sm btn-icon waves-effect" href="javascript:void(0)">
                    <i className="fi fi-sr-star text-warning"></i>
                  </a>
                  <div className="btn-group">
                    <button className="btn btn-action-gray btn-sm btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                <div className="text-center mb-4">
                  <div className="avatar bg-warning text-white mx-auto mb-3">
                    <i className="fi fi-rr-file"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Documents</h6>
                    <small className="text-body mb-0">96 items <span className="text-dark ms-2">(1.2 GB)</span>
                    </small>
                  </div>
                </div>
                <div className="d-flex justify-content-between small text-body">
                  <span>Modified</span>
                  <span>3 days ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <a className="btn btn-action-gray btn-sm btn-icon waves-effect" href="javascript:void(0)">
                    <i className="fi fi-sr-star text-warning"></i>
                  </a>
                  <div className="btn-group">
                    <button className="btn btn-action-gray btn-sm btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                <div className="text-center mb-4">
                  <div className="avatar bg-info text-white mx-auto mb-3">
                    <i className="fi fi-rr-video-camera"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Videos</h6>
                    <small className="text-body mb-0">64 items <span className="text-dark ms-2">(8.5 GB)</span>
                    </small>
                  </div>
                </div>
                <div className="d-flex justify-content-between small text-body">
                  <span>Modified</span>
                  <span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>

          <h6 className="card-title mb-3">Files</h6>
          <div className="col-12">
            <div className="card overflow-hidden">
              <div className="card-header d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0">
                <div id="dt_files_Search"></div>
                <div className="d-flex gap-3 flex-wrap">
                  <button type="button" className="btn btn-sm btn-outline-light btn-shadow waves-effect">
                    <i className="fi fi-rr-filter pe-1"></i>Filters
                  </button>
                  <button type="button" className="btn btn-sm btn-primary btn-shadow waves-effect">
                    <i className="fa fa-folder-plus me-1"></i>Create File
                  </button>
                </div>
              </div>
              <div className="card-body p-2">
                <table id="dt_files" className="table display table-row-rounded data-row-checkbox">
                  <thead className="table-light">
                    <tr>
                      <th className="minw-300px">File name</th>
                      <th className="minw-150px">File Size</th>
                      <th className="minw-150px">Date Added</th>
                      <th className="minw-150px">Last Update</th>
                      <th className="minw-150px">Add Favorite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-folder-open"></i>
                          </div>
                          <span>Market Analysis Document 2026</span>
                        </div>
                      </td>
                      <td>671.15 MB</td>
                      <td>05 Jan 2026</td>
                      <td>21 Jan 2026</td>
                      <td>
                        <a className="text-warning" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-document"></i>
                          </div>
                          <span>Employee Salary Sheet Q1</span>
                        </div>
                      </td>
                      <td>128.40 MB</td>
                      <td>10 Jan 2026</td>
                      <td>18 Jan 2026</td>
                      <td>
                        <a className="text-warning" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-file"></i>
                          </div>
                          <span>Project Roadmap</span>
                        </div>
                      </td>
                      <td>54.22 MB</td>
                      <td>12 Jan 2026</td>
                      <td>19 Jan 2026</td>
                      <td>
                        <a className="text-warning" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-file"></i>
                          </div>
                          <span>Client Contract - Alpha</span>
                        </div>
                      </td>
                      <td>12.60 MB</td>
                      <td>14 Jan 2026</td>
                      <td>20 Jan 2026</td>
                      <td>
                        <a className="text-body" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-picture"></i>
                          </div>
                          <span>UI Design Assets</span>
                        </div>
                      </td>
                      <td>340.90 MB</td>
                      <td>15 Jan 2026</td>
                      <td>22 Jan 2026</td>
                      <td>
                        <a className="text-warning" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-megaphone"></i>
                          </div>
                          <span>Marketing Campaign Plan</span>
                        </div>
                      </td>
                      <td>78.50 MB</td>
                      <td>16 Jan 2026</td>
                      <td>23 Jan 2026</td>
                      <td>
                        <a className="text-body" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-database"></i>
                          </div>
                          <span>Website Backup Files</span>
                        </div>
                      </td>
                      <td>1.20 GB</td>
                      <td>18 Jan 2026</td>
                      <td>24 Jan 2026</td>
                      <td>
                        <a className="text-warning" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-receipt"></i>
                          </div>
                          <span>Invoice Report - January</span>
                        </div>
                      </td>
                      <td>25.80 MB</td>
                      <td>19 Jan 2026</td>
                      <td>25 Jan 2026</td>
                      <td>
                        <a className="text-body" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-layout-fluid"></i>
                          </div>
                          <span>Mobile App Wireframes</span>
                        </div>
                      </td>
                      <td>89.10 MB</td>
                      <td>20 Jan 2026</td>
                      <td>26 Jan 2026</td>
                      <td>
                        <a className="text-body" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-palette"></i>
                          </div>
                          <span>Brand Guidelines</span>
                        </div>
                      </td>
                      <td>14.75 MB</td>
                      <td>21 Jan 2026</td>
                      <td>27 Jan 2026</td>
                      <td>
                        <a className="text-warning" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-comment"></i>
                          </div>
                          <span>Client Feedback Notes</span>
                        </div>
                      </td>
                      <td>6.30 MB</td>
                      <td>22 Jan 2026</td>
                      <td>27 Jan 2026</td>
                      <td>
                        <a className="text-body" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-chart-histogram"></i>
                          </div>
                          <span>Sales Performance Sheet</span>
                        </div>
                      </td>
                      <td>42.60 MB</td>
                      <td>23 Jan 2026</td>
                      <td>28 Jan 2026</td>
                      <td>
                        <a className="text-body" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-presentation"></i>
                          </div>
                          <span>Presentation Deck Q1</span>
                        </div>
                      </td>
                      <td>95.40 MB</td>
                      <td>24 Jan 2026</td>
                      <td>28 Jan 2026</td>
                      <td>
                        <a className="text-warning" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-settings"></i>
                          </div>
                          <span>System Logs Backup</span>
                        </div>
                      </td>
                      <td>560.00 MB</td>
                      <td>25 Jan 2026</td>
                      <td>29 Jan 2026</td>
                      <td>
                        <a className="text-warning" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm bg-light text-dark me-2">
                            <i className="fi fi-rr-graduation-cap"></i>
                          </div>
                          <span>Training Material Docs</span>
                        </div>
                      </td>
                      <td>33.25 MB</td>
                      <td>26 Jan 2026</td>
                      <td>30 Jan 2026</td>
                      <td>
                        <a className="text-body" href="javascript:void(0)">
                          <i className="fi fi-sr-star"></i>
                        </a>
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
