"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginBasic() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Login | GXON HR Management Admin Dashboard Template + RTL";
    
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
                <p>Sign in to access your secure admin dashboard.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label" htmlFor="loginEmail">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    placeholder="info@example.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    placeholder="********"
                    required
                  />
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between">
                    <div className="form-check mb-0">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">
                        {" "}
                        Remember Me{" "}
                      </label>
                    </div>
                    <Link href="/authentication/forgot-password-basic">Forgot Password?</Link>
                  </div>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary waves-effect waves-light w-100">
                    Login
                  </button>
                </div>
                <p className="mb-5 text-center">
                  Don’t have an account? <Link href="/authentication/register-basic">Sign Up here</Link>
                </p>
                <div className="border-bottom position-relative my-3 text-center">
                  <span className="px-3 position-absolute translate-middle top-50 start-50 bg-body">
                    Or Continue With
                  </span>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-5">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-icon btn-subtle-facebook rounded-circle waves-effect waves-light"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-icon btn-subtle-twitter rounded-circle waves-effect waves-light"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a
                    href="javascript:void(0);"
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
