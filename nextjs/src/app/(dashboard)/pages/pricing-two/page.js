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

        <div className="app-page-head d-flex align-items-center justify-content-between">
          <div className="clearfix">
            <h1 className="app-page-title">Pricing Table</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Pricing Table</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-bordered table-nowrap align-middle bg-body">
                <thead>
                  <tr>
                    <td className="w-50 align-middle minw-350px">
                      <h2 className="mb-1">Simple pricing that grows with you</h2>
                      <p className="mb-0 text-body">Choose a flexible plan designed to help you grow faster, manage work efficiently, and scale without limits.</p>
                    </td>
                    <td className="text-center minw-175px">
                      <span className="badge badge-sm bg-secondary-subtle text-secondary mb-3">FREE</span>
                      <div className="display-6 fw-bold">$0</div>
                      <p className="text-body">For personal use</p>
                      <a href="javascript:void(0)" className="btn btn-sm btn-secondary w-100">Start Free</a>
                    </td>
                    <td className="text-center minw-175px">
                      <span className="badge badge-sm bg-success-subtle text-success mb-3">POPULAR</span>
                      <div className="display-6 fw-bold">$9</div>
                      <p className="text-body">For growing teams</p>
                      <a href="javascript:void(0)" className="btn btn-sm btn-success btn-green w-100">Choose plan</a>
                    </td>
                    <td className="text-center minw-175px">
                      <span className="badge badge-sm bg-primary-subtle text-primary mb-3">ADVANCED</span>
                      <div className="display-6 fw-bold">$16</div>
                      <p className="text-body">For large businesses</p>
                      <a href="javascript:void(0)" className="btn btn-sm btn-primary w-100">Upgrade</a>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-light bg-opacity-50">
                    <th colspan="4" className="px-3 py-1 fw-bold">Core Features</th>
                  </tr>
                  <tr>
                    <td>User access & workspace setup</td>
                    <td className="text-center">Up to 1 user</td>
                    <td className="text-center">Up to 10 users</td>
                    <td className="text-center">Unlimited users</td>
                  </tr>
                  <tr>
                    <td>Cloud storage capacity</td>
                    <td className="text-center">5 GB</td>
                    <td className="text-center">50 GB</td>
                    <td className="text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td>Secure payment integration</td>
                    <td className="text-center text-secondary">
                      <i className="fi fi-rr-minus-circle"></i>
                    </td>
                    <td className="text-center">
                      <i className="fi fi-rs-check-circle"></i>
                    </td>
                    <td className="text-center">
                      <i className="fi fi-rs-check-circle"></i>
                    </td>
                  </tr>
                  <tr className="bg-light bg-opacity-50">
                    <th colspan="4" className="px-3 py-1 fw-bold">Management & Analytics</th>
                  </tr>
                  <tr>
                    <td>Admin control panel</td>
                    <td className="text-center">Basic</td>
                    <td className="text-center">Advanced</td>
                    <td className="text-center">Full access</td>
                  </tr>
                  <tr>
                    <td>Reports & insights</td>
                    <td className="text-center text-secondary">
                      <i className="fi fi-rr-minus-circle"></i>
                    </td>
                    <td className="text-center">Standard</td>
                    <td className="text-center">Advanced</td>
                  </tr>
                  <tr>
                    <td>Custom branding</td>
                    <td className="text-center text-secondary">
                      <i className="fi fi-rr-minus-circle"></i>
                    </td>
                    <td className="text-center text-secondary">
                      <i className="fi fi-rr-minus-circle"></i>
                    </td>
                    <td className="text-center">
                      <i className="fi fi-rs-check-circle"></i>
                    </td>
                  </tr>
                  <tr className="bg-light bg-opacity-50">
                    <th colspan="4" className="px-3 py-1 fw-bold">Support</th>
                  </tr>
                  <tr>
                    <td>Email support</td>
                    <td className="text-center">
                      <i className="fi fi-rs-check-circle"></i>
                    </td>
                    <td className="text-center">
                      <i className="fi fi-rs-check-circle"></i>
                    </td>
                    <td className="text-center">
                      <i className="fi fi-rs-check-circle"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Live chat assistance</td>
                    <td className="text-center text-secondary">
                      <i className="fi fi-rr-minus-circle"></i>
                    </td>
                    <td className="text-center">
                      <i className="fi fi-rs-check-circle"></i>
                    </td>
                    <td className="text-center">
                      <i className="fi fi-rs-check-circle"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Dedicated account manager</td>
                    <td className="text-center text-secondary">
                      <i className="fi fi-rr-minus-circle"></i>
                    </td>
                    <td className="text-center text-secondary">
                      <i className="fi fi-rr-minus-circle"></i>
                    </td>
                    <td className="text-center">
                      <i className="fi fi-rs-check-circle"></i>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td>
                      <a href="javascript:void(0)" className="btn btn-sm btn-secondary w-100">Start free</a>
                    </td>
                    <td>
                      <a href="javascript:void(0)" className="btn btn-sm btn-success w-100">Choose plan</a>
                    </td>
                    <td>
                      <a href="javascript:void(0)" className="btn btn-sm btn-primary w-100">Upgrade</a>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

      </div>

    
    </>
  );
}
