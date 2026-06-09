"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewPasswordFrame() {
  const router = useRouter();

  useEffect(() => {
    document.title = "New Password | GXON HR Management Admin Dashboard Template + RTL";
    
    // Page-specific initializations
    if (typeof window !== "undefined" && window.jQuery) {
      if (window.initSelectPicker) window.initSelectPicker();
      if (window.initTooltips) window.initTooltips();
      if (window.initCheckable) window.initCheckable();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/authentication/login-frame");
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
                <p>Enter your email to reset your password.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label" htmlFor="newPassword">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
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
                      I Agree & <a href="javascript:void(0)">Terms and conditions.</a>
                    </label>
                  </div>
                </div>
                <div className="clearfix">
                  <button
                    type="submit"
                    className="btn btn-primary waves-effect waves-light w-100 mb-3"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
