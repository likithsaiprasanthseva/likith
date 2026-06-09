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
            <h1 className="app-page-title">Create Invoice</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Create Invoice</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">

              {/* Page Header */}
              <div className="card-header d-flex flex-wrap gap-2 justify-content-between align-items-center">
                <h4 className="card-title mb-0">Create Invoice</h4>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary btn-sm">Save Draft</button>
                  <button className="btn btn-primary btn-sm">Generate Invoice</button>
                </div>
              </div>

              <div className="card-body">

                {/* Company & Invoice Info */}
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <h6 className="mb-3">Company Information</h6>
                    <div className="mb-3">
                      <label className="form-label">Company Name</label>
                      <input type="text" className="form-control" placeholder="Layoutdrop" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Company Address</label>
                      <textarea className="form-control" rows="3" placeholder="742 Evergreen Avenue, New York, USA"></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Company Email</label>
                      <input type="email" className="form-control" placeholder="accounts@Layoutdrop.com" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h6 className="mb-3">Invoice Details</h6>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Invoice Number</label>
                        <input type="text" className="form-control" placeholder="INV-2026-104" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Invoice Date</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Due Date</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Currency</label>
                        <select className="form-select">
                          <option>USD</option>
                          <option>EUR</option>
                          <option>GBP</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client Info */}
                <div className="mb-4">
                  <h6 className="mb-3">Bill To</h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Client Name</label>
                      <input type="text" className="form-control" placeholder="BlueNova Technologies" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Client Email</label>
                      <input type="email" className="form-control" placeholder="finance@bluenova.com" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Client Address</label>
                      <textarea className="form-control" rows="2" placeholder="18 Silicon Street, San Jose, CA, USA"></textarea>
                    </div>
                  </div>
                </div>

                {/* Invoice Items */}
                <div className="mb-4">
                  <h6 className="mb-3">Invoice Items</h6>

                  <div className="table-responsive">
                    <table className="table table-bordered align-middle">
                      <thead className="table-light">
                        <tr>
                          <th className="minw-250px">Service</th>
                          <th className="minw-250px">Description</th>
                          <th className="minw-150px text-center">Qty</th>
                          <th className="minw-100px text-end">Unit Price</th>
                          <th className="minw-100px text-end">Total</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="text" className="form-control" placeholder="Payroll Processing" />
                          </td>
                          <td>
                            <input type="text" className="form-control" placeholder="Monthly salary & payslip management" />
                          </td>
                          <td className="text-center">
                            <input type="number" className="form-control text-center" value="1" />
                          </td>
                          <td className="text-end">
                            <input type="text" className="form-control text-end" placeholder="$500" />
                          </td>
                          <td className="text-end fw-semibold">$500</td>
                          <td className="text-center">
                            <a href="javascript:void(0)" className="btn btn-icon btn-sm btn-danger">
                              <i className="fi fi-rr-trash"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <button className="btn btn-outline-primary btn-sm mt-2">
                    <i className="fa fa-plus me-1"></i> Add Item
                  </button>
                </div>

                {/* Summary */}
                <div className="row justify-content-end">
                  <div className="col-md-4">
                    <table className="table">
                      <tr>
                        <td>Subtotal</td>
                        <td className="text-end">$500</td>
                      </tr>
                      <tr>
                        <td>Discount</td>
                        <td className="text-end">-$50</td>
                      </tr>
                      <tr>
                        <td>Tax</td>
                        <td className="text-end">$40</td>
                      </tr>
                      <tr className="fw-bold bg-light bg-opacity-50">
                        <td>Total Amount</td>
                        <td className="text-end">$490</td>
                      </tr>
                    </table>
                  </div>
                </div>

                {/* Notes */}
                <div className="mt-4">
                  <label className="form-label">Notes</label>
                  <textarea className="form-control" rows="2" placeholder="This invoice is generated for HR management services."></textarea>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

    
    </>
  );
}
