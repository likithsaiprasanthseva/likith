"use client";

import { useEffect } from "react";
import Script from "next/script";
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
      <Script src="/assets/js/ecommerce.js" strategy="lazyOnload" />


      <div className="container">

        <div className="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
          <div className="clearfix">
            <h1 className="app-page-title">Customers</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Customers</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-4">
            <div className="card">
              <div className="card-header border-0 pb-0 d-flex align-items-center justify-content-between">
                <h6 className="card-title">Customer Rating</h6>
                <div className="btn-group">
                  <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fi fi-rr-menu-dots"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">View Details</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">Download</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body text-center pb-0">
                <h1 className="display-5 fw-bold mb-1">4.8</h1>
                <ul className="d-flex gap-2 text-lg text-warning mb-2 align-items-center list-unstyled justify-content-center">
                  <li>
                    <i className="fi fi-ss-star"></i>
                  </li>
                  <li>
                    <i className="fi fi-ss-star"></i>
                  </li>
                  <li>
                    <i className="fi fi-ss-star"></i>
                  </li>
                  <li>
                    <i className="fi fi-ss-star"></i>
                  </li>
                  <li>
                    <i className="fi fi-rs-star-sharp-half-stroke"></i>
                  </li>
                  <li>
                    <span className="text-body text-2xs">(520)</span>
                  </li>
                </ul>
                <p className="mb-0">
                  <span className="badge bg-success-subtle text-success me-1">
                    <i className="fi fi-rr-arrow-small-up scale-3x"></i> + 40%
                  </span>
                  Last month
                </p>
                <div className="d-flex justify-content-center flex-wrap" id="ratingChart"></div>
              </div>
              <div className="card-footer border-0">
                <a href="javascript:void(0)" className="btn btn-lg btn-primary waves-effect w-100">
                  <i className="fi fi-rr-download me-1"></i> Download
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h6 className="card-title">New Customers</h6>
              </div>
              <div className="card-body p-2">
                <div id="newCustomersChart"></div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="card overflow-hidden">
              <div className="card-header d-flex flex-wrap gap-3 align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Customer List</h6>
                <div className="clearfix d-flex align-items-center gap-2">
                  <div className="dropdown">
                    <button className="btn dropdown-toggle btn-white btn-shadow waves-effect btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      All Status
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">Active</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">Inactive</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)">Pending</a>
                      </li>
                    </ul>
                  </div>
                  <div id="dt_CustomerList_Search"></div>
                </div>
              </div>
              <div className="card-body p-2">
                <table id="dt_CustomerList" className="table display table-row-rounded">
                  <thead className="table-light">
                    <tr>
                      <th>
                        <div className="form-check">
                          <input className="form-check-input" data-row-checkbox="" type="checkbox" />
                        </div>
                      </th>
                      <th className="minw-200px">Name & Profile</th>
                      <th className="minw-150px">Customer ID</th>
                      <th className="minw-150px">Email</th>
                      <th className="minw-150px">Country</th>
                      <th className="minw-150px">Date</th>
                      <th className="minw-150px">Status</th>
                      <th className="minw-150px">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 rounded-circle">
                            <img src="/assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">John Carter</h6>
                          </div>
                        </div>
                      </td>
                      <td>CUST1001</td>
                      <td>john.carter@email.com</td>
                      <td>USA</td>
                      <td>01-08-2025</td>
                      <td>
                        <span className="badge bg-success-subtle text-success">Active</span>
                      </td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                          <i className="icon-eye"></i>
                        </button>
                        <div className="btn-group">
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
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 rounded-circle">
                            <img src="/assets/images/avatar/avatar2.webp" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">Sophia Miller</h6>
                          </div>
                        </div>
                      </td>
                      <td>CUST1002</td>
                      <td>sophia.miller@email.com</td>
                      <td>UK</td>
                      <td>03-08-2025</td>
                      <td>
                        <span className="badge bg-danger-subtle text-danger">Inactive</span>
                      </td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                          <i className="icon-eye"></i>
                        </button>
                        <div className="btn-group">
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
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 rounded-circle">
                            <img src="/assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">David Johnson</h6>
                          </div>
                        </div>
                      </td>
                      <td>CUST1003</td>
                      <td>david.j@email.com</td>
                      <td>Canada</td>
                      <td>05-08-2025</td>
                      <td>
                        <span className="badge bg-success-subtle text-success">Active</span>
                      </td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                          <i className="icon-eye"></i>
                        </button>
                        <div className="btn-group">
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
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 rounded-circle">
                            <img src="/assets/images/avatar/avatar4.webp" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">Emma Wilson</h6>
                          </div>
                        </div>
                      </td>
                      <td>CUST1004</td>
                      <td>emma.w@email.com</td>
                      <td>Australia</td>
                      <td>06-08-2025</td>
                      <td>
                        <span className="badge bg-warning-subtle text-warning">Pending</span>
                      </td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                          <i className="icon-eye"></i>
                        </button>
                        <div className="btn-group">
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
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 rounded-circle">
                            <img src="/assets/images/avatar/avatar5.webp" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">Michael Brown</h6>
                          </div>
                        </div>
                      </td>
                      <td>CUST1005</td>
                      <td>mike.b@email.com</td>
                      <td>Germany</td>
                      <td>09-08-2025</td>
                      <td>
                        <span className="badge bg-success-subtle text-success">Active</span>
                      </td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                          <i className="icon-eye"></i>
                        </button>
                        <div className="btn-group">
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
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 rounded-circle">
                            <img src="/assets/images/avatar/avatar6.webp" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">Olivia Davis</h6>
                          </div>
                        </div>
                      </td>
                      <td>CUST1006</td>
                      <td>olivia.d@email.com</td>
                      <td>France</td>
                      <td>11-08-2025</td>
                      <td>
                        <span className="badge bg-success-subtle text-success">Active</span>
                      </td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                          <i className="icon-eye"></i>
                        </button>
                        <div className="btn-group">
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
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 rounded-circle">
                            <img src="/assets/images/avatar/avatar7.webp" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">James Anderson</h6>
                          </div>
                        </div>
                      </td>
                      <td>CUST1007</td>
                      <td>james.a@email.com</td>
                      <td>USA</td>
                      <td>13-08-2025</td>
                      <td>
                        <span className="badge bg-danger-subtle text-danger">Inactive</span>
                      </td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                          <i className="icon-eye"></i>
                        </button>
                        <div className="btn-group">
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
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 rounded-circle">
                            <img src="/assets/images/avatar/avatar8.webp" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">Isabella Thomas</h6>
                          </div>
                        </div>
                      </td>
                      <td>CUST1008</td>
                      <td>isabella.t@email.com</td>
                      <td>India</td>
                      <td>15-08-2025</td>
                      <td>
                        <span className="badge bg-success-subtle text-success">Active</span>
                      </td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                          <i className="icon-eye"></i>
                        </button>
                        <div className="btn-group">
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
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 rounded-circle">
                            <img src="/assets/images/avatar/avatar9.webp" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">William Martinez</h6>
                          </div>
                        </div>
                      </td>
                      <td>CUST1009</td>
                      <td>william.m@email.com</td>
                      <td>Spain</td>
                      <td>17-08-2025</td>
                      <td>
                        <span className="badge bg-warning-subtle text-warning">Pending</span>
                      </td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                          <i className="icon-eye"></i>
                        </button>
                        <div className="btn-group">
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
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm me-2 rounded-circle">
                            <img src="/assets/images/avatar/avatar10.webp" alt="" />
                          </div>
                          <div className="clearfix">
                            <h6 className="mb-0">Charlotte Rodriguez</h6>
                          </div>
                        </div>
                      </td>
                      <td>CUST1010</td>
                      <td>charlotte.r@email.com</td>
                      <td>Brazil</td>
                      <td>19-08-2025</td>
                      <td>
                        <span className="badge bg-success-subtle text-success">Active</span>
                      </td>
                      <td>
                        <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1" type="button">
                          <i className="icon-eye"></i>
                        </button>
                        <div className="btn-group">
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

        </div>

      </div>

    
    </>
  );
}
