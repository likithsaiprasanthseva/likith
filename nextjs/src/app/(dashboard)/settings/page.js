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

        <div className="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
          <div className="clearfix">
            <h1 className="app-page-title">Settings</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Settings</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-underline card-header-tabs" id="settingsTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#general">General</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#users">Users</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#appearance">Appearance</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#notifications">Notifications</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#integrations">Integrations</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#security">Security</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#backup">Backup</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#developer">Developer</a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="general">
                    <h5 className="mb-3">General Settings</h5>
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Website Name</label>
                          <input type="text" className="form-control" placeholder="My Website" />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Contact Email</label>
                          <input type="email" className="form-control" placeholder="admin@example.com" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Logo Upload</label>
                        <input type="file" className="form-control" />
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Timezone</label>
                          <select className="form-select">
                            <option>UK</option>
                            <option>UTC</option>
                            <option>America/New_York</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Language</label>
                          <select className="form-select">
                            <option>English</option>
                            <option>USA</option>
                            <option>French</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="users">
                    <h5 className="mb-3">User & Authentication</h5>
                    <form>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="twofa" />
                        <label className="form-check-label" htmlFor="twofa">Enable Two-Factor Authentication</label>
                      </div>
                      <div className="form-check mb-4">
                        <input className="form-check-input" type="checkbox" id="socialLogin" />
                        <label className="form-check-label" htmlFor="socialLogin">Enable Social Logins (Google, FB)</label>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password Minimum Length</label>
                        <input type="number" className="form-control" value="8" />
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="appearance">
                    <h5 className="mb-3">Appearance</h5>
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Theme Mode</label>
                          <select className="form-select">
                            <option>Light</option>
                            <option>Dark</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Font Family</label>
                          <select className="form-select">
                            <option>Segoe UI</option>
                            <option>Roboto</option>
                            <option>Inter</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Primary Color</label>
                          <input type="color" className="form-control form-control-color" value="#316AFF" />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="notifications">
                    <h5 className="mb-3">Notifications</h5>
                    <form>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="emailNoti" defaultChecked />
                        <label className="form-check-label" htmlFor="emailNoti">Email Notifications</label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="pushNoti" />
                        <label className="form-check-label" htmlFor="pushNoti">Push Notifications</label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" id="smsNoti" />
                        <label className="form-check-label" htmlFor="smsNoti">SMS Alerts</label>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="integrations">
                    <h5 className="mb-3">Integrations & APIs</h5>
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Google Analytics ID</label>
                        <input type="text" className="form-control" placeholder="UA-XXXXXXX" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">SMTP Host</label>
                        <input type="text" className="form-control" placeholder="smtp.example.com" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Payment Gateway Key</label>
                        <input type="password" className="form-control" placeholder="********" />
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="security">
                    <h5 className="mb-3">Security Settings</h5>
                    <form>
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="captcha" />
                        <label className="form-check-label" htmlFor="captcha">Enable Captcha</label>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Session Timeout (minutes)</label>
                        <input type="number" className="form-control" value="30" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">IP Whitelist</label>
                        <textarea className="form-control" rows="2" placeholder="192.168.1.1, 10.0.0.5"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="backup">
                    <h5 className="mb-3">Data & Backup</h5>
                    <button className="btn btn-primary me-2">Backup Now</button>
                    <button className="btn btn-outline-secondary me-2">Export Data</button>
                    <button className="btn btn-outline-danger">Clear Cache</button>
                  </div>
                  <div className="tab-pane fade" id="developer">
                    <h5 className="mb-3">Developer Settings</h5>
                    <form>
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="debugMode" />
                        <label className="form-check-label" htmlFor="debugMode">Enable Debug Mode</label>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">API Key</label>
                        <input type="text" className="form-control" placeholder="Enter API Key" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Webhook URL</label>
                        <input type="url" className="form-control" placeholder="https://example.com/webhook" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    
    </>
  );
}
