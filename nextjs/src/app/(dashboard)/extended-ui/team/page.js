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

        <div className="app-page-head">
          <h1 className="app-page-title">Team</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Team</li>
            </ol>
          </nav>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="card card-body card-action action-border-primary action-elevate p-2">
              <div className="rounded overflow-hidden position-relative">
                <img src="/assets/images/team/media6.webp" alt="" className="img-fluid w-100" />
                <div className="d-flex flex-wrap gap-2 position-absolute bottom-0 justify-content-center w-100 p-3 action-visible">
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-facebook waves-effect waves-light">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-twitter waves-effect waves-light">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-instagram waves-effect waves-light">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-youtube waves-effect waves-light">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="p-3 pb-2 text-center">
                <h4 className="mb-1">
                  <a className="text-dark" href="javascript:void(0)">David Martinez</a>
                </h4>
                <span>Marketing Mentor</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-body card-action action-border-secondary action-elevate p-2">
              <div className="rounded overflow-hidden position-relative">
                <img src="/assets/images/team/media2.webp" alt="" className="img-fluid w-100" />
                <div className="d-flex flex-wrap gap-2 position-absolute bottom-0 justify-content-center w-100 p-3 action-visible">
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-facebook waves-effect waves-light">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-twitter waves-effect waves-light">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-instagram waves-effect waves-light">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-youtube waves-effect waves-light">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="p-3 pb-2 text-center">
                <h4 className="mb-1">
                  <a className="text-dark" href="javascript:void(0)">Michael Thompson</a>
                </h4>
                <span>Data Scientist</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-body card-action action-border-success action-elevate p-2">
              <div className="rounded overflow-hidden position-relative">
                <img src="/assets/images/team/media3.webp" alt="" className="img-fluid w-100" />
                <div className="d-flex flex-wrap gap-2 position-absolute bottom-0 justify-content-center w-100 p-3 action-visible">
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-facebook waves-effect waves-light">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-twitter waves-effect waves-light">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-instagram waves-effect waves-light">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-youtube waves-effect waves-light">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="p-3 pb-2 text-center">
                <h4 className="mb-1">
                  <a className="text-dark" href="javascript:void(0)">Emily Chen</a>
                </h4>
                <span>Graphic Design</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-body card-action action-border-warning action-elevate p-2">
              <div className="rounded overflow-hidden position-relative">
                <img src="/assets/images/team/media4.webp" alt="" className="img-fluid w-100" />
                <div className="d-flex flex-wrap gap-2 position-absolute bottom-0 justify-content-center w-100 p-3 action-visible">
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-facebook waves-effect waves-light">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-twitter waves-effect waves-light">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-instagram waves-effect waves-light">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-youtube waves-effect waves-light">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="p-3 pb-2 text-center">
                <h4 className="mb-1">
                  <a className="text-dark" href="javascript:void(0)">Alexander Johnson</a>
                </h4>
                <span>Coding Instructor</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="card card-body card-action action-elevate p-2">
              <div className="rounded overflow-hidden">
                <img src="/assets/images/team/media6.webp" alt="" className="img-fluid w-100" />
              </div>
              <div className="p-3 pb-2">
                <h4 className="mb-1">
                  <a className="text-dark" href="javascript:void(0)">David Martinez</a>
                </h4>
                <span>Marketing Mentor</span>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-facebook waves-effect waves-light">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-twitter waves-effect waves-light">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-github waves-effect waves-light">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-instagram waves-effect waves-light">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-youtube waves-effect waves-light">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-body card-action action-elevate p-2">
              <div className="rounded overflow-hidden">
                <img src="/assets/images/team/media2.webp" alt="" className="img-fluid w-100" />
              </div>
              <div className="p-3 pb-2">
                <h4 className="mb-1">
                  <a className="text-dark" href="javascript:void(0)">Michael Thompson</a>
                </h4>
                <span>Data Scientist</span>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-facebook waves-effect waves-light">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-twitter waves-effect waves-light">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-github waves-effect waves-light">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-instagram waves-effect waves-light">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-youtube waves-effect waves-light">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-body card-action action-elevate p-2">
              <div className="rounded overflow-hidden">
                <img src="/assets/images/team/media3.webp" alt="" className="img-fluid w-100" />
              </div>
              <div className="p-3 pb-2">
                <h4 className="mb-1">
                  <a className="text-dark" href="javascript:void(0)">Emily Chen</a>
                </h4>
                <span>Graphic Design</span>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-facebook waves-effect waves-light">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-twitter waves-effect waves-light">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-github waves-effect waves-light">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-instagram waves-effect waves-light">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-youtube waves-effect waves-light">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-body card-action action-elevate p-2">
              <div className="rounded overflow-hidden">
                <img src="/assets/images/team/media4.webp" alt="" className="img-fluid w-100" />
              </div>
              <div className="p-3 pb-2">
                <h4 className="mb-1">
                  <a className="text-dark" href="javascript:void(0)">Alexander Johnson</a>
                </h4>
                <span>Coding Instructor</span>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-facebook waves-effect waves-light">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-twitter waves-effect waves-light">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-github waves-effect waves-light">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-instagram waves-effect waves-light">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-subtle-youtube waves-effect waves-light">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="card card-body card-action action-elevate p-2">
              <div className="rounded overflow-hidden position-relative">
                <img src="/assets/images/team/media6.webp" alt="" className="img-fluid w-100" />
                <div className="d-flex flex-wrap gap-2 position-absolute bottom-0 justify-content-center w-100 p-3 action-visible">
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-facebook waves-effect waves-light">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-twitter waves-effect waves-light">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-instagram waves-effect waves-light">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-youtube waves-effect waves-light">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="p-3 pb-2 text-center">
                <h4 className="mb-1">
                  <a className="text-dark" href="javascript:void(0)">David Martinez</a>
                </h4>
                <span>Marketing Mentor</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-body card-action action-elevate p-2">
              <div className="rounded overflow-hidden position-relative">
                <img src="/assets/images/team/media2.webp" alt="" className="img-fluid w-100" />
                <div className="d-flex flex-wrap gap-2 position-absolute bottom-0 justify-content-center w-100 p-3 action-visible">
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-facebook waves-effect waves-light">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-twitter waves-effect waves-light">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-instagram waves-effect waves-light">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-youtube waves-effect waves-light">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="p-3 pb-2 text-center">
                <h4 className="mb-1">
                  <a className="text-dark" href="javascript:void(0)">Michael Thompson</a>
                </h4>
                <span>Data Scientist</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-body card-action action-elevate p-2">
              <div className="rounded overflow-hidden position-relative">
                <img src="/assets/images/team/media3.webp" alt="" className="img-fluid w-100" />
                <div className="d-flex flex-wrap gap-2 position-absolute bottom-0 justify-content-center w-100 p-3 action-visible">
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-facebook waves-effect waves-light">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-twitter waves-effect waves-light">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-instagram waves-effect waves-light">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-youtube waves-effect waves-light">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="p-3 pb-2 text-center">
                <h4 className="mb-1">
                  <a className="text-dark" href="javascript:void(0)">Emily Chen</a>
                </h4>
                <span>Graphic Design</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card card-body card-action action-elevate p-2">
              <div className="rounded overflow-hidden position-relative">
                <img src="/assets/images/team/media4.webp" alt="" className="img-fluid w-100" />
                <div className="d-flex flex-wrap gap-2 position-absolute bottom-0 justify-content-center w-100 p-3 action-visible">
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-facebook waves-effect waves-light">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-twitter waves-effect waves-light">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-instagram waves-effect waves-light">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="btn btn-icon btn-sm rounded-circle btn-youtube waves-effect waves-light">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="p-3 pb-2 text-center">
                <h4 className="mb-1">
                  <a className="text-dark" href="javascript:void(0)">Alexander Johnson</a>
                </h4>
                <span>Coding Instructor</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    
    </>
  );
}
