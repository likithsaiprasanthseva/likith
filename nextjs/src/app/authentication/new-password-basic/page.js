"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewPasswordBasic() {
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
    router.push("/authentication/login-basic");
  };

  return (
    <div className="page-layout">
      <div
        className="auth-wrapper min-vh-100 px-2"
        style={{
          backgroundImage: "url(/assets/images/auth/auth.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row g-0 min-vh-100">
          <div className="col-xl-5 col-lg-6 ms-auto px-sm-4 align-self-center py-4">
            <div
              className="card card-body p-4 p-sm-5 maxw-450px m-auto rounded-4 auth-card"
              data-simplebar="true"
            >
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
              <div className="text-center mb-4">
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
