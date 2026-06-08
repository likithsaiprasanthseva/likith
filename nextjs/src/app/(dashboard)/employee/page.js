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
            <h1 className="app-page-title">
              <span className="text-primary">1206</span> Employee
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Employee</li>
              </ol>
            </nav>
          </div>
          <button type="button" className="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
            <i className="fi fi-rr-plus me-1"></i> Add Employee
          </button>
        </div>

        <div className="card d-flex flex-row flex-wrap align-items-center h-auto mb-5">
          <ul className="nav nav-underline me-auto px-3 gap-2">
            <li className="nav-item">
              <a className="nav-link border-3 py-3 px-2 active" href="javascript:void(0);">Employee</a>
            </li>
            <li className="nav-item">
              <a className="nav-link border-3 py-3 px-2" href="/leave">Leave Request</a>
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
              <input type="text" className="form-control form-control-lg ps-5 rounded-start-0 border-0 shadow-none bg-transparent" placeholder="Search Employee" />
            </form>
          </div>
        </div>

        <div className="row">

          <div className="col-xxl-3 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0 p-3">
                <span className="badge bg-success-subtle text-success">Active</span>
                <div className="clearfix">
                  <div className="btn-group">
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
                </div>
              </div>
              <div className="card-body p-2 pt-0">
                <div className="text-center mb-3">
                  <div className="avatar avatar-xxl rounded-4 mx-auto mb-3">
                    <img src="assets/images/avatar/avatar3.webp" alt="" />
                  </div>
                  <h5 className="mb-0 fw-bold">Emma Smith</h5>
                  <p className="text-primary mb-0">UI/UX Designer</p>
                </div>
                <div className="p-3 bg-light rounded">
                  <div className="d-flex gap-3">
                    <div className="w-50">
                      <span className="text-1xs">Department</span>
                      <h6 className="mb-0">Designing Team</h6>
                    </div>
                    <div className="w-50">
                      <span className="text-1xs">Hired Date</span>
                      <h6 className="mb-0">12 Aug 2020</h6>
                    </div>
                  </div>
                  <hr className="border-dashed" />
                  <div className="d-grid gap-2">
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-envelope me-2 text-primary"></i>
                      Info@example@mail.com
                    </span>
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-phone-call me-2 text-primary"></i>
                      +01 987 654 3210
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-lg-4 col-md-6">
            <div className="card bg-success-subtle border-0">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0 p-3">
                <span className="badge bg-success-subtle text-success">Active</span>
                <div className="clearfix">
                  <div className="btn-group">
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
                </div>
              </div>
              <div className="card-body p-2 pt-0">
                <div className="text-center mb-3">
                  <div className="avatar avatar-xxl rounded-4 mx-auto mb-3">
                    <img src="assets/images/avatar/avatar1.webp" alt="" />
                  </div>
                  <h5 className="mb-0 fw-bold">William Johnson</h5>
                  <p className="text-primary mb-0">Front-End Developer</p>
                </div>
                <div className="p-3 bg-body rounded">
                  <div className="d-flex gap-3">
                    <div className="w-50">
                      <span className="text-1xs">Department</span>
                      <h6 className="mb-0">Designing Team</h6>
                    </div>
                    <div className="w-50">
                      <span className="text-1xs">Hired Date</span>
                      <h6 className="mb-0">12 Aug 2020</h6>
                    </div>
                  </div>
                  <hr className="border-dashed" />
                  <div className="d-grid gap-2">
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-envelope me-2 text-primary"></i>
                      Info@example@mail.com
                    </span>
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-phone-call me-2 text-primary"></i>
                      +01 987 654 3210
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0 p-3">
                <span className="badge bg-danger-subtle text-danger">On Leave</span>
                <div className="clearfix">
                  <div className="btn-group">
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
                </div>
              </div>
              <div className="card-body p-2 pt-0">
                <div className="text-center mb-3">
                  <div className="avatar avatar-xxl rounded-4 mx-auto mb-3">
                    <img src="assets/images/avatar/avatar8.webp" alt="" />
                  </div>
                  <h5 className="mb-0 fw-bold">Benjamin Martinez</h5>
                  <p className="text-primary mb-0">Web Designer</p>
                </div>
                <div className="p-3 bg-light rounded">
                  <div className="d-flex gap-3">
                    <div className="w-50">
                      <span className="text-1xs">Department</span>
                      <h6 className="mb-0">Designing Team</h6>
                    </div>
                    <div className="w-50">
                      <span className="text-1xs">Hired Date</span>
                      <h6 className="mb-0">12 Aug 2020</h6>
                    </div>
                  </div>
                  <hr className="border-dashed" />
                  <div className="d-grid gap-2">
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-envelope me-2 text-primary"></i>
                      Info@example@mail.com
                    </span>
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-phone-call me-2 text-primary"></i>
                      +01 987 654 3210
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0 p-3">
                <span className="badge bg-success-subtle text-success">Active</span>
                <div className="clearfix">
                  <div className="btn-group">
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
                </div>
              </div>
              <div className="card-body p-2 pt-0">
                <div className="text-center mb-3">
                  <div className="avatar avatar-xxl rounded-4 mx-auto mb-3">
                    <img src="assets/images/avatar/avatar7.webp" alt="" />
                  </div>
                  <h5 className="mb-0 fw-bold">Olivia Clark</h5>
                  <p className="text-primary mb-0">Data Analyst</p>
                </div>
                <div className="p-3 bg-light rounded">
                  <div className="d-flex gap-3">
                    <div className="w-50">
                      <span className="text-1xs">Department</span>
                      <h6 className="mb-0">Designing Team</h6>
                    </div>
                    <div className="w-50">
                      <span className="text-1xs">Hired Date</span>
                      <h6 className="mb-0">12 Aug 2020</h6>
                    </div>
                  </div>
                  <hr className="border-dashed" />
                  <div className="d-grid gap-2">
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-envelope me-2 text-primary"></i>
                      Info@example@mail.com
                    </span>
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-phone-call me-2 text-primary"></i>
                      +01 987 654 3210
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0 p-3">
                <span className="badge bg-danger-subtle text-success">On Leave</span>
                <div className="clearfix">
                  <div className="btn-group">
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
                </div>
              </div>
              <div className="card-body p-2 pt-0">
                <div className="text-center mb-3">
                  <div className="avatar avatar-xxl rounded-4 mx-auto mb-3">
                    <img src="assets/images/avatar/avatar5.webp" alt="" />
                  </div>
                  <h5 className="mb-0 fw-bold">Ava Lewis</h5>
                  <p className="text-primary mb-0">Front-End Developer</p>
                </div>
                <div className="p-3 bg-light rounded">
                  <div className="d-flex gap-3">
                    <div className="w-50">
                      <span className="text-1xs">Department</span>
                      <h6 className="mb-0">Designing Team</h6>
                    </div>
                    <div className="w-50">
                      <span className="text-1xs">Hired Date</span>
                      <h6 className="mb-0">12 Aug 2020</h6>
                    </div>
                  </div>
                  <hr className="border-dashed" />
                  <div className="d-grid gap-2">
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-envelope me-2 text-primary"></i>
                      Info@example@mail.com
                    </span>
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-phone-call me-2 text-primary"></i>
                      +01 987 654 3210
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0 p-3">
                <span className="badge bg-danger-subtle text-danger">On Leave</span>
                <div className="clearfix">
                  <div className="btn-group">
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
                </div>
              </div>
              <div className="card-body p-2 pt-0">
                <div className="text-center mb-3">
                  <div className="avatar avatar-xxl rounded-4 mx-auto mb-3">
                    <img src="assets/images/avatar/avatar2.webp" alt="" />
                  </div>
                  <h5 className="mb-0 fw-bold">Isabella Walker</h5>
                  <p className="text-primary mb-0">UI/UX Designer</p>
                </div>
                <div className="p-3 bg-light rounded">
                  <div className="d-flex gap-3">
                    <div className="w-50">
                      <span className="text-1xs">Department</span>
                      <h6 className="mb-0">Designing Team</h6>
                    </div>
                    <div className="w-50">
                      <span className="text-1xs">Hired Date</span>
                      <h6 className="mb-0">12 Aug 2020</h6>
                    </div>
                  </div>
                  <hr className="border-dashed" />
                  <div className="d-grid gap-2">
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-envelope me-2 text-primary"></i>
                      Info@example@mail.com
                    </span>
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-phone-call me-2 text-primary"></i>
                      +01 987 654 3210
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0 p-3">
                <span className="badge bg-success-subtle text-success">Active</span>
                <div className="clearfix">
                  <div className="btn-group">
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
                </div>
              </div>
              <div className="card-body p-2 pt-0">
                <div className="text-center mb-3">
                  <div className="avatar avatar-xxl rounded-4 mx-auto mb-3">
                    <img src="assets/images/avatar/avatar6.webp" alt="" />
                  </div>
                  <h5 className="mb-0 fw-bold">Alexander Brown</h5>
                  <p className="text-primary mb-0">Data Analyst</p>
                </div>
                <div className="p-3 bg-light rounded">
                  <div className="d-flex gap-3">
                    <div className="w-50">
                      <span className="text-1xs">Department</span>
                      <h6 className="mb-0">Designing Team</h6>
                    </div>
                    <div className="w-50">
                      <span className="text-1xs">Hired Date</span>
                      <h6 className="mb-0">12 Aug 2020</h6>
                    </div>
                  </div>
                  <hr className="border-dashed" />
                  <div className="d-grid gap-2">
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-envelope me-2 text-primary"></i>
                      Info@example@mail.com
                    </span>
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-phone-call me-2 text-primary"></i>
                      +01 987 654 3210
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-lg-4 col-md-6">
            <div className="card bg-danger-subtle border-0">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0 p-3">
                <span className="badge bg-danger-subtle text-danger">On Leave</span>
                <div className="clearfix">
                  <div className="btn-group">
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
                </div>
              </div>
              <div className="card-body p-2 pt-0">
                <div className="text-center mb-3">
                  <div className="avatar avatar-xxl rounded-4 mx-auto mb-3">
                    <img src="assets/images/avatar/avatar4.webp" alt="" />
                  </div>
                  <h5 className="mb-0 fw-bold">Sophia Hall</h5>
                  <p className="text-primary mb-0">Front-End Developer</p>
                </div>
                <div className="p-3 bg-body rounded">
                  <div className="d-flex gap-3">
                    <div className="w-50">
                      <span className="text-1xs">Department</span>
                      <h6 className="mb-0">Designing Team</h6>
                    </div>
                    <div className="w-50">
                      <span className="text-1xs">Hired Date</span>
                      <h6 className="mb-0">12 Aug 2020</h6>
                    </div>
                  </div>
                  <hr className="border-dashed" />
                  <div className="d-grid gap-2">
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-envelope me-2 text-primary"></i>
                      Info@example@mail.com
                    </span>
                    <span className="d-block text-dark">
                      <i className="fi fi-rr-phone-call me-2 text-primary"></i>
                      +01 987 654 3210
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-lg-12">
            <nav aria-label="pagination" className="float-end">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="javascript:void(0);" aria-label="Previous">
                    <i className="fi fi-rr-angle-left me-1"></i>
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="javascript:void(0);">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="javascript:void(0);">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="javascript:void(0);">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="javascript:void(0);" aria-label="Next">
                    Next
                    <i className="fi fi-rr-angle-right ms-1"></i>
                  </a>
                </li>
              </ul>
            </nav>
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
