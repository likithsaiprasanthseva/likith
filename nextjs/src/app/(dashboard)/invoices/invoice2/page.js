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
            <h1 className="app-page-title">Invoice 2</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Invoice 2</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header d-flex flex-wrap gap-2 justify-content-between align-items-center border-0 pb-0">
                <h2 className="card-title">Payroll Invoice</h2>
                <div className="clearfix">
                  <button className="btn btn-primary btn-sm">Download Invoice</button>
                  <button className="btn btn-info btn-sm ms-2">Print</button>
                </div>
              </div>

              <div className="card-body">
                <div className="border bg-light rounded p-sm-4 p-3 bg-opacity-25">
                  <div className="row g-3">

                    {/* Invoice Info */}
                    <div className="col-xl-3 col-md-6">
                      <div className="d-flex gap-4">
                        <h6>Invoice No:</h6>
                        <p className="mb-0">#PAY-INV-2026-045</p>
                      </div>
                      <div className="d-flex gap-4">
                        <h6>Invoice Date:</h6>
                        <p className="mb-0">15 Jan 2026</p>
                      </div>
                      <div className="d-flex gap-4">
                        <h6>Company ID:</h6>
                        <p className="mb-0">CMP-90872</p>
                      </div>
                    </div>

                    {/* Employee Info */}
                    <div className="col-xl-3 col-md-6">
                      <div className="d-flex gap-4">
                        <h6>Employee ID:</h6>
                        <p className="mb-0">EMP-10452</p>
                      </div>
                      <div className="d-flex gap-4">
                        <h6>Pay Period:</h6>
                        <p className="mb-0">Jan 01 – Jan 31, 2026</p>
                      </div>
                      <div className="d-flex gap-4">
                        <h6>Designation:</h6>
                        <p className="mb-0">Senior UI Designer</p>
                      </div>
                    </div>

                    {/* Employee Address */}
                    <div className="col-xl-3 col-md-6">
                      <h6>Employee Details :</h6>
                      <p className="mb-0">
                        Daniel Carter
                        <br />
                        245 Madison Avenue
                        <br />
                        New York, USA
                        <br />
                        daniel.carter@email.com
                        <br />
                        +1 415 889 3321
                      </p>
                    </div>

                    {/* Department */}
                    <div className="col-xl-3 col-md-6">
                      <h6>Department :</h6>
                      <p className="mb-0">
                        Design & Product Team
                        <br />
                        Manager: Olivia Brown
                        <br />
                        Employment Type: Full-Time
                        <br />
                        Contract: Permanent
                        <br />
                        hr@companyname.com
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Salary Table */}
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table card-table mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="minw-50px">No.</th>
                        <th className="minw-200px">Earning / Deduction</th>
                        <th className="minw-150px">Category</th>
                        <th className="minw-100px">Units</th>
                        <th className="minw-100px">Rate</th>
                        <th className="minw-100px">Tax %</th>
                        <th className="minw-150px">Tax Type</th>
                        <th className="minw-150px">Tax Amount</th>
                        <th className="minw-100px">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Base Salary</td>
                        <td>Earnings</td>
                        <td>1 Month</td>
                        <td>$4,200</td>
                        <td>10%</td>
                        <td>Income Tax</td>
                        <td>$420.00</td>
                        <td>$3,780.00</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Performance Bonus</td>
                        <td>Earnings</td>
                        <td>1</td>
                        <td>$600</td>
                        <td>10%</td>
                        <td>Income Tax</td>
                        <td>$60.00</td>
                        <td>$540.00</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Overtime Compensation</td>
                        <td>Earnings</td>
                        <td>8 Hours</td>
                        <td>$45</td>
                        <td>0%</td>
                        <td>—</td>
                        <td>$0.00</td>
                        <td>$360.00</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Health Insurance</td>
                        <td>Deductions</td>
                        <td>1</td>
                        <td>$180</td>
                        <td>0%</td>
                        <td>—</td>
                        <td>$0.00</td>
                        <td>-$180.00</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Retirement Contribution</td>
                        <td>Deductions</td>
                        <td>1</td>
                        <td>$220</td>
                        <td>0%</td>
                        <td>—</td>
                        <td>$0.00</td>
                        <td>-$220.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Summary */}
                <table className="table card-table table-light mb-0">
                  <tbody>
                    <tr>
                      <td className="fw-bold">Gross Earnings</td>
                      <td className="text-end">$5,160.00</td>
                    </tr>
                    <tr>
                      <td>Total Deductions</td>
                      <td className="text-end">$400.00</td>
                    </tr>
                    <tr>
                      <td>Tax Deducted</td>
                      <td className="text-end">$480.00</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Net Pay</td>
                      <td className="fw-bold text-end">$4,280.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="card-footer border-0">
                <p className="mb-1">
                  <strong>Payment Method:</strong> Direct Bank Transfer
                </p>
                <p className="mb-1">
                  <strong>Payment Status:</strong>
                  <span className="badge badge-sm bg-success">Completed</span>
                </p>
                <p className="text-body small mb-0">
                  This is a system-generated payroll invoice. For questions, contact hr@companyname.com
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>

    
    </>
  );
}
