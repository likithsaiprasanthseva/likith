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

        <div className="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
          <div className="clearfix">
            <h1 className="app-page-title">Dashboard</h1>
            <span>Mon, Aug 01, 2024 - Sep 01, 2024 </span>
          </div>
          <a href="/ecommerce/add-product" className="btn btn-primary waves-effect waves-light">
            <i className="fi fi-rr-plus me-1"></i> Add Product
          </a>
        </div>

        <div className="row">

          <div className="col-xxl-8">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-header d-flex align-items-start justify-content-between border-0">
                    <div className="clearfix">
                      <h2 className="fw-bold mb-0">$45,250</h2>
                      <span>Total Revenue</span>
                    </div>
                    <span className="badge bg-danger-subtle text-danger">
                      <i className="fi fi-rr-arrow-small-down scale-3x"></i> -2%
                    </span>
                  </div>
                  <div className="card-body">
                    <div id="totalRevenueChart" className="bar-hover"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-header d-flex align-items-start justify-content-between border-0 mb-2">
                    <div className="clearfix">
                      <h2 className="fw-bold mb-0">1206</h2>
                      <span>Order This Month</span>
                    </div>
                    <span className="badge bg-success-subtle text-success">
                      <i className="fi fi-rr-arrow-small-up scale-3x"></i> +5%
                    </span>
                  </div>
                  <div className="card-body pt-5">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6>720 to Goal</h6>
                      <small className="text-body fw-semibold mb-2">70%</small>
                    </div>
                    <div className="progress bg-primary bg-opacity-10 progress-sm" role="progressbar" aria-label="Order This " aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-primary" style={{width: "70%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card">
                  <div className="card-header d-flex align-items-start justify-content-between border-0 mb-2">
                    <div className="clearfix">
                      <h2 className="fw-bold mb-0">2.5k</h2>
                      <span>New Customers</span>
                    </div>
                    <span className="badge bg-success-subtle text-success">
                      <i className="fi fi-rr-arrow-small-up scale-3x"></i> +5%
                    </span>
                  </div>
                  <div className="card-body pt-2">
                    <h6>This Month</h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="avatar-group">
                        <div className="avatar avatar-sm rounded-circle border border-2 border-white">
                          <img src="/assets/images/avatar/avatar1.webp" alt="" />
                        </div>
                        <div className="avatar avatar-sm rounded-circle border border-2 border-white">
                          <img src="/assets/images/avatar/avatar2.webp" alt="" />
                        </div>
                        <div className="avatar avatar-sm rounded-circle border border-2 border-white">
                          <img src="/assets/images/avatar/avatar3.webp" alt="" />
                        </div>
                        <div className="avatar avatar-sm bg-light border border-2 border-white rounded-circle text-dark">
                          <span className="text-2xs fw-bold">10+</span>
                        </div>
                      </div>
                      <a href="/ecommerce/customers" className="btn btn-icon btn-primary rounded-circle waves-effect waves-light">
                        <i className="icon-arrow-up-right text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-12">
            <div className="card bg-success bg-opacity-25 border-0">
              <div className="card-body pb-0 pt-3">
                <div className="row">
                  <div className="col-5 d-flex flex-column justify-content-between pb-3 pt-1">
                    <div className="clearfix">
                      <h2 className="fw-bold mb-0">2,756</h2>
                      <span className="text-success">Products in Stock</span>
                    </div>
                    <div className="clearfix">
                      <a href="javascript:void(0)" className="btn btn-sm btn-white btn-outline-light waves-effect btn-shadow">View All Stock</a>
                    </div>
                  </div>
                  <div className="col-7 text-sm-end align-self-end">
                    <img src="/assets/images/ecommerce/products/pic1.png" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Summery</h6>
                <div id="summeryChartLegend" className="ms-auto me-2"></div>
                <button type="button" className="btn btn-sm btn-outline-light btn-shadow waves-effect">Download Report</button>
              </div>
              <div className="card-body p-2">
                <div id="summeryChart"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Traffic Sources </h6>
                <a href="javascript:void(0)" className="btn-link">View All</a>
              </div>
              <div className="card-body py-0 px-3 d-flex my-3 align-items-center justify-content-center">
                <div className="maxw-250px ratio ratio-1x1">
                  <canvas id="trafficSourcesChart"></canvas>
                </div>
              </div>
              <div className="card-footer pt-0 border-0 px-3">
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  <div className="d-flex gap-1 align-items-center mx-1 text-1xs">
                    <i className="fa fa-circle text-primary text-3xs"></i>
                    <strong className="text-dark fw-semibold">800</strong> Direct
                  </div>
                  <div className="d-flex gap-1 align-items-center mx-1 text-1xs">
                    <i className="fa fa-circle text-primary text-3xs text-opacity-75"></i>
                    <strong className="text-dark fw-semibold">700</strong> Google
                  </div>
                  <div className="d-flex gap-1 align-items-center mx-1 text-1xs">
                    <i className="fa fa-circle text-primary text-3xs text-opacity-50"></i>
                    <strong className="text-dark fw-semibold">500</strong> Social Media
                  </div>
                  <div className="d-flex gap-1 align-items-center mx-1 text-1xs">
                    <i className="fa fa-circle text-primary text-3xs text-opacity-25"></i>
                    <strong className="text-dark fw-semibold">600</strong> Referral
                  </div>
                  <div className="d-flex gap-1 align-items-center mx-1 text-1xs">
                    <i className="fa fa-circle text-primary text-3xs text-opacity-10"></i>
                    <strong className="text-dark fw-semibold">600</strong> Campaigns
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="card overflow-hidden">
              <div className="card-header d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Recent Orders</h6>
                <div className="d-flex gap-3 flex-wrap">
                  <button type="button" className="btn btn-sm btn-outline-light btn-shadow waves-effect">Download Report</button>
                  <select className="selectpicker" data-style={{}}>
                    <option value="All Status">All Status</option>
                    <option>Last Month</option>
                    <option>Category</option>
                    <option>Published</option>
                    <option>Date Modifed</option>
                  </select>
                  <div id="dt_RecentOrders_Search"></div>
                </div>
              </div>
              <div className="card-body p-2">
                <table id="dt_RecentOrders" className="table display table-row-rounded data-row-checkbox">
                  <thead className="table-light">
                    <tr>
                      <th className="pe-0">
                        <div className="form-check">
                          <input className="form-check-input" data-row-checkbox type="checkbox" />
                        </div>
                      </th>
                      <th className="minw-300px">Product</th>
                      <th className="minw-150px">Order ID</th>
                      <th className="minw-100px">QTY</th>
                      <th className="minw-100px">Price</th>
                      <th className="minw-150px">Total Price</th>
                      <th className="minw-100px">Status</th>
                      <th className="minw-150px">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pe-0">
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td className="ps-2">
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/ecommerce/products/list/1.webp" width="70" alt="" className="rounded-3" />
                          <div className="ms-2">
                            <h6 className="mb-0">
                              <a href="/ecommerce/product-details" className="text-dark">Smart Home Electronics Kit</a>
                            </h6>
                            <small className="text-body">12 July 2025</small>
                          </div>
                        </div>
                      </td>
                      <td>#257896</td>
                      <td>x2</td>
                      <td>$58.00</td>
                      <td>
                        <strong>$145.50</strong>
                      </td>
                      <td>
                        <span className="badge badge-lg text-bg-success">Confirmed</span>
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
                      <td className="pe-0">
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td className="ps-2">
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/ecommerce/products/list/2.webp" width="70" alt="" className="rounded-3" />
                          <div className="ms-2">
                            <h6 className="mb-0">
                              <a href="/ecommerce/product-details" className="text-dark">Modern Wooden Office Chair</a>
                            </h6>
                            <small className="text-body">12 July 2025</small>
                          </div>
                        </div>
                      </td>
                      <td>#257896</td>
                      <td>x2</td>
                      <td>$58.00</td>
                      <td>
                        <strong>$145.50</strong>
                      </td>
                      <td>
                        <span className="badge badge-lg text-bg-info">Shipped</span>
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
                      <td className="pe-0">
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td className="ps-2">
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/ecommerce/products/list/3.webp" width="70" alt="" className="rounded-3" />
                          <div className="ms-2">
                            <h6 className="mb-0">
                              <a href="/ecommerce/product-details" className="text-dark">Luxury Fashion Hoodie Wear</a>
                            </h6>
                            <small className="text-body">12 July 2025</small>
                          </div>
                        </div>
                      </td>
                      <td>#257896</td>
                      <td>x2</td>
                      <td>$58.00</td>
                      <td>
                        <strong>$145.50</strong>
                      </td>
                      <td>
                        <span className="badge badge-lg text-bg-light">Pending</span>
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
                      <td className="pe-0">
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td className="ps-2">
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/ecommerce/products/list/4.webp" width="70" alt="" className="rounded-3" />
                          <div className="ms-2">
                            <h6 className="mb-0">
                              <a href="/ecommerce/product-details" className="text-dark">Organic Beauty Skincare Set</a>
                            </h6>
                            <small className="text-body">12 July 2025</small>
                          </div>
                        </div>
                      </td>
                      <td>#257896</td>
                      <td>x2</td>
                      <td>$58.00</td>
                      <td>
                        <strong>$145.50</strong>
                      </td>
                      <td>
                        <span className="badge badge-lg text-bg-info">Shipped</span>
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
                      <td className="pe-0">
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td className="ps-2">
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/ecommerce/products/list/5.webp" width="70" alt="" className="rounded-3" />
                          <div className="ms-2">
                            <h6 className="mb-0">
                              <a href="/ecommerce/product-details" className="text-dark">Professional Sports Fitness Gear</a>
                            </h6>
                            <small className="text-body">12 July 2025</small>
                          </div>
                        </div>
                      </td>
                      <td>#257896</td>
                      <td>x2</td>
                      <td>$58.00</td>
                      <td>
                        <strong>$145.50</strong>
                      </td>
                      <td>
                        <span className="badge badge-lg text-bg-light">Pending</span>
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
                      <td className="pe-0">
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td className="ps-2">
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/ecommerce/products/list/6.webp" width="70" alt="" className="rounded-3" />
                          <div className="ms-2">
                            <h6 className="mb-0">
                              <a href="/ecommerce/product-details" className="text-dark">Trendy Travel Luggage Bag</a>
                            </h6>
                            <small className="text-body">12 July 2025</small>
                          </div>
                        </div>
                      </td>
                      <td>#257896</td>
                      <td>x2</td>
                      <td>$58.00</td>
                      <td>
                        <strong>$145.50</strong>
                      </td>
                      <td>
                        <span className="badge badge-lg text-bg-success">Confirmed</span>
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
                      <td className="pe-0">
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td className="ps-2">
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/ecommerce/products/list/1.webp" width="70" alt="" className="rounded-3" />
                          <div className="ms-2">
                            <h6 className="mb-0">
                              <a href="/ecommerce/product-details" className="text-dark">Smart Home Electronics Kit</a>
                            </h6>
                            <small className="text-body">12 July 2025</small>
                          </div>
                        </div>
                      </td>
                      <td>#257896</td>
                      <td>x2</td>
                      <td>$58.00</td>
                      <td>
                        <strong>$145.50</strong>
                      </td>
                      <td>
                        <span className="badge badge-lg text-bg-success">Confirmed</span>
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
                      <td className="pe-0">
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td className="ps-2">
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/ecommerce/products/list/2.webp" width="70" alt="" className="rounded-3" />
                          <div className="ms-2">
                            <h6 className="mb-0">
                              <a href="/ecommerce/product-details" className="text-dark">Modern Wooden Office Chair</a>
                            </h6>
                            <small className="text-body">12 July 2025</small>
                          </div>
                        </div>
                      </td>
                      <td>#257896</td>
                      <td>x2</td>
                      <td>$58.00</td>
                      <td>
                        <strong>$145.50</strong>
                      </td>
                      <td>
                        <span className="badge badge-lg text-bg-info">Shipped</span>
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
                      <td className="pe-0">
                        <div className="form-check p-0 w-auto d-inline-block">
                          <input className="form-check-input m-0" data-checkbox="" type="checkbox" />
                        </div>
                      </td>
                      <td className="ps-2">
                        <div className="d-flex align-items-center">
                          <img src="/assets/images/ecommerce/products/list/3.webp" width="70" alt="" className="rounded-3" />
                          <div className="ms-2">
                            <h6 className="mb-0">
                              <a href="/ecommerce/product-details" className="text-dark">Luxury Fashion Hoodie Wear</a>
                            </h6>
                            <small className="text-body">12 July 2025</small>
                          </div>
                        </div>
                      </td>
                      <td>#257896</td>
                      <td>x2</td>
                      <td>$58.00</td>
                      <td>
                        <strong>$145.50</strong>
                      </td>
                      <td>
                        <span className="badge badge-lg text-bg-light">Pending</span>
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
