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
            <h1 className="app-page-title">Invoice 1</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Invoice 1</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body p-md-5">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-start mb-5">
                  <div>
                    <h2 className="fw-bold mb-1">Invoice</h2>
                    <p className="mb-0 text-body">Daniel Robertson</p>
                  </div>
                  <div>
                    <img src="/assets/images/logo.svg" alt="Company Logo" />
                  </div>
                </div>

                {/* Client + Invoice Info */}
                <div className="row mb-4">
                  <div className="col-md-6">
                    <p className="mb-1">
                      <strong>Tax ID:</strong> US-9837421
                    </p>
                    <p className="mb-1">
                      <strong>Email:</strong> daniel.robertson@companymail.com
                    </p>
                    <p className="mb-1">
                      <strong>Phone:</strong> +1 212 555 7812
                    </p>
                    <p className="mb-0">
                      <strong>Address:</strong> 128 Madison Avenue, New York, NY 10016
                    </p>
                  </div>
                  <div className="col-md-6 text-md-end mt-3 mt-md-0">
                    <p className="mb-1">
                      <strong>Invoice to:</strong> BlueWave Software LLC
                    </p>
                    <p className="mb-1">
                      <strong>Invoice ID:</strong> BW-INV-1029
                    </p>
                    <p className="mb-1">
                      <strong>Issue Date:</strong> February 10, 2026
                    </p>
                    <p className="mb-0">
                      <strong>Due Date:</strong> February 18, 2026
                    </p>
                  </div>
                </div>

                <hr className="my-4" />

                {/* Description */}
                <h5 className="fw-bold mb-3">Service details</h5>

                <div className="table-responsive mb-4">
                  <table className="table">
                    <thead className="text-body bg-light">
                      <tr>
                        <th className="minw-300px">Description</th>
                        <th className="text-end">Quantity</th>
                        <th className="minw-100px text-end">Unit Price</th>
                        <th className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>SaaS Dashboard UI Design</td>
                        <td className="text-end">18 hours</td>
                        <td className="text-end">$85 / hour</td>
                        <td className="text-end">$1,530.00</td>
                      </tr>
                      <tr>
                        <td>Frontend Component Development</td>
                        <td className="text-end">6 modules</td>
                        <td className="text-end">$180</td>
                        <td className="text-end">$1,080.00</td>
                      </tr>
                      <tr>
                        <td>Quality Assurance & Testing</td>
                        <td className="text-end">5 hours</td>
                        <td className="text-end">$70 / hour</td>
                        <td className="text-end">$350.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Total */}
                <div className="text-end mb-5">
                  <p className="mb-1 fw-semibold">Total amount due:</p>
                  <h3 className="fw-bold">$2,960.00</h3>
                </div>

                <hr className="my-4" />

                {/* Payment Details */}
                <div>
                  <h5 className="fw-bold mb-2">Payment information:</h5>
                  <p className="mb-1">Bank Name: Horizon National Bank</p>
                  <p className="mb-1">SWIFT Code: HNBKUS44</p>
                  <p className="mb-1">Account Number: 4928573106</p>
                  <p className="mb-0">Account Holder: Daniel Robertson</p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

    
    </>
  );
}
