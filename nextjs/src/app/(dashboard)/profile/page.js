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
            <h1 className="app-page-title">Profile</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Profile</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap gap-4 align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="position-relative">
                      <div className="avatar avatar-xxl rounded-circle">
                        <img src="/assets/images/avatar/avatar3.webp" alt="" />
                      </div>
                      <a href="javascript:void(0)" className="avatar avatar-xxs bg-primary rounded-circle text-white position-absolute top-0 end-0">
                        <i className="fi fi-rr-camera"></i>
                      </a>
                    </div>
                    <div className="ms-3">
                      <h4 className="fw-bold mb-0">Emma Smith</h4>
                      <small className="mb-2">Front-End Developer</small>
                      <div className="d-flex flex-wrap gap-1 mt-2">
                        <span className="badge badge-sm px-2 rounded-pill text-bg-primary">Administrator</span>
                        <span className="badge badge-sm px-2 rounded-pill text-bg-secondary">Designer</span>
                        <span className="badge badge-sm px-2 rounded-pill text-bg-success">Active</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 ms-md-auto">
                    <a href="/chat" className="btn btn-primary waves-effect waves-light">Message</a>
                    <button type="button" className="btn btn-outline-secondary waves-effect waves-light">Follow</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h4 className="card-title mb-0">Basic Information</h4>
                    <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect" type="button">
                      <i className="fi fi-rr-pencil"></i>
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <span className="mb-1">Full Name</span>
                      <p className="text-dark fw-semibold mb-0">Emma Smith</p>
                    </div>
                    <div className="mb-3">
                      <span className="mb-1">Email</span>
                      <p className="text-dark fw-semibold mb-0">emma.smith@gmail.com</p>
                    </div>
                    <div className="mb-3">
                      <span className="mb-1">Phone</span>
                      <p className="text-dark fw-semibold mb-0">+1 (123) 456-7890</p>
                    </div>
                    <div className="mb-3">
                      <span className="mb-1">Date of Birth</span>
                      <p className="text-dark fw-semibold mb-0">15 July 1990</p>
                    </div>
                    <div className="mb-2">
                      <span className="mb-1">Joined Date</span>
                      <p className="text-dark fw-semibold mb-0">March 12, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Social Media Links</h4>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap gap-2">
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-subtle-facebook waves-effect waves-light">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-subtle-twitter waves-effect waves-light">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-subtle-instagram waves-effect waves-light">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-subtle-youtube waves-effect waves-light">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-subtle-linkedin waves-effect waves-light">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-subtle-pinterest waves-effect waves-light">
                        <i className="fa-brands fa-pinterest"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-subtle-telegram waves-effect waves-light">
                        <i className="fa-brands fa-telegram"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-subtle-tiktok waves-effect waves-light">
                        <i className="fa-brands fa-tiktok"></i>
                      </a>
                      <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-subtle-reddit waves-effect waves-light">
                        <i className="fa-brands fa-reddit"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Expertise</h4>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center g-2 mb-3">
                      <div className="col-sm-3">Javascript</div>
                      <div className="col-sm-9">
                        <div className="progress progress-sm" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar" style={{width: "75%"}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center g-2 mb-3">
                      <div className="col-sm-3">PHP</div>
                      <div className="col-sm-9">
                        <div className="progress progress-sm" role="progressbar" aria-label="Basic example" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar" style={{width: "87%"}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center g-2 mb-3">
                      <div className="col-sm-3">Photoshop</div>
                      <div className="col-sm-9">
                        <div className="progress progress-sm" role="progressbar" aria-label="Basic example" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar" style={{width: "67%"}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center g-2 mb-3">
                      <div className="col-sm-3">illustrator</div>
                      <div className="col-sm-9">
                        <div className="progress progress-sm" role="progressbar" aria-label="Basic example" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar" style={{width: "84%"}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-sm-12">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Account Settings</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Full Name</label>
                          <input type="text" className="form-control" value="Emma Smith" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" value="emma.smith@gmail.com" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Phone</label>
                          <input type="tel" className="form-control" value="+1 (123) 456-7890" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Role</label>
                          <input type="text" className="form-control" value="Administrator" readonly />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="form-label">Location</label>
                          <input type="text" className="form-control" value="San Francisco" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">New Password</label>
                          <input type="password" className="form-control" placeholder="••••••••" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Bio</label>
                        <textarea className="form-control" rows="5">I manage user roles, oversee platform settings, and ensure everything runs smoothly and securely. With a focus on performance, privacy, and efficiency, I help streamline daily operations so your team can focus on what matters most.</textarea>
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-success waves-effect waves-light">Save Changes</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card border border-danger bg-danger-subtle border-2">
                  <div className="card-header border-0 pb-0">
                    <h5 className="text-danger fw-bold mb-0">Danger Zone</h5>
                    <small>Critical actions that affect your account.</small>
                  </div>
                  <div className="card-body">
                    <div className="d-flex gap-3 justify-content-between align-items-start mb-4 flex-wrap">
                      <div className="pe-3">
                        <h6 className="text-danger mb-1">Delete Account</h6>
                        <p className="mb-0 small">This action is <strong>permanent</strong> and cannot be undone. Please make sure you really want to delete your account.</p>
                      </div>
                      <button className="btn btn-danger waves-effect waves-light">Delete Account</button>
                    </div>
                    <hr className="border-danger my-3" />
                    <div className="d-flex gap-3 justify-content-between align-items-start flex-wrap">
                      <div className="pe-3">
                        <h6 className="text-primary mb-1">Export Your Data</h6>
                        <p className="mb-0 small">Backup your data in case you decide to delete your account later.</p>
                      </div>
                      <button className="btn btn-outline-primary waves-effect waves-light">Export Data</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    
    </>
  );
}
