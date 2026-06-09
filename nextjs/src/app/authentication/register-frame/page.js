"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterFrame() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Register | GXON HR Management Admin Dashboard Template + RTL";
    
    // Page-specific initializations
    if (typeof window !== "undefined" && window.jQuery) {
      if (window.initSelectPicker) window.initSelectPicker();
      if (window.initTooltips) window.initTooltips();
      if (window.initCheckable) window.initCheckable();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="page-layout">
      <div className="auth-frame-wrapper">
        <div className="row g-0 h-100">
          <div className="col-lg-6">
            <div
              className="auth-frame"
              style={{ backgroundImage: "url(/assets/images/auth/auth-frame.webp)" }}
            >
              <div className="clearfix">
                <div className="auth-content">
                  <h1 className="display-6 text-white fw-bold">Welcome Back!</h1>
                  <p className="text-white">
                    Our HR Management & Administration ensure your organization runs smoothly,
                    focusing on people, compliance, and efficiency to drive growth and employee
                    satisfaction.
                  </p>
                </div>
                <div className="auth-imgs position-relative">
                  <img src="/assets/images/auth/img1.png" alt="" className="img-fluid" />
                  <img
                    src="/assets/images/auth/img2.png"
                    alt=""
                    className="img-fluid position1 position-absolute"
                  />
                  <img
                    src="/assets/images/auth/img3.png"
                    alt=""
                    className="img-fluid position2 position-absolute"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="p-4 p-sm-5 maxw-450px m-auto auth-inner" data-simplebar="true">
              <div className="mb-4 text-center">
                <Link href="/" aria-label="GXON logo">
                  <img
                    className="visible-light"
                    src="/assets/images/logo-full.svg"
                    alt="GXON logo"
                  />
                  <img
                    className="visible-dark"
                    src="/assets/images/logo-full-white.svg"
                    alt="GXON logo"
                  />
                </Link>
              </div>
              <div className="text-center mb-5">
                <h5 className="mb-1">Welcome to GXON</h5>
                <p>Sign up to create your secure admin.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label" htmlFor="registerName">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="registerName"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="registerEmail">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="registerEmail"
                    placeholder="info@example.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="registerPassword"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="mb-4">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="termsConditions"
                      name="terms"
                      required
                    />
                    <label className="form-check-label" htmlFor="termsConditions">
                      I agree to <a href="javascript:void(0)">privacy policy & terms</a>
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary waves-effect waves-light w-100">
                    Sign up
                  </button>
                </div>
                <p className="mb-5 text-center">
                  Have any account? <Link href="/authentication/login-frame">Sign In here</Link>
                </p>
                <div className="border-bottom position-relative my-3 text-center">
                  <span className="px-3 position-absolute translate-middle top-50 start-50 bg-body">
                    Or Continue With
                  </span>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-5">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-icon btn-subtle-facebook rounded-circle waves-effect waves-light"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-icon btn-subtle-twitter rounded-circle waves-effect waves-light"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-icon btn-subtle-github rounded-circle waves-effect waves-light"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
