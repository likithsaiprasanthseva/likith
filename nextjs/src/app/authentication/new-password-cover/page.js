"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewPasswordCover() {
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
    router.push("/authentication/login-cover");
  };

  return (
    <div className="page-layout">
      <div className="auth-cover-wrapper">
        <div className="row g-0">
          <div className="col-lg-6">
            <div
              className="auth-cover"
              style={{ backgroundImage: "url(/assets/images/auth/auth-cover-bg.png)" }}
            >
              <div className="clearfix">
                <img
                  src="/assets/images/auth/auth.png"
                  alt=""
                  className="img-fluid cover-img ms-5"
                />
                <div className="auth-content">
                  <h1 className="display-6 fw-bold">Welcome Back!</h1>
                  <p>
                    Our HR Management & Administration ensure your organization runs smoothly,
                    focusing on people, compliance, and efficiency to drive growth and employee
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="p-3 p-sm-5 maxw-450px m-auto auth-inner" data-simplebar="true">
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
                <p>Enter your new password to reset your credentials.</p>
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
