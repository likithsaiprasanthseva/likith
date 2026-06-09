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
            <h1 className="app-page-title">Roles Permissions</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Roles Permissions</li>
              </ol>
            </nav>
          </div>
          <button type="button" className="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addRoleModal">
            <i className="fi fi-rr-plus me-1"></i> Add New Role
          </button>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-underline card-header-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="admin-tab" data-bs-toggle="tab" data-bs-target="#admin" type="button" role="tab" aria-controls="admin" aria-selected="false" tabIndex="-1">
                      <i className="fi fi-rr-star scale-1x me-1"></i>
                      Super Admin
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="manager-tab" data-bs-toggle="tab" data-bs-target="#manager" type="button" role="tab" aria-controls="manager" aria-selected="false" tabIndex="-1">
                      <i className="fi fi-rr-admin-alt scale-1x me-1"></i>
                      Manager
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="editor-tab" data-bs-toggle="tab" data-bs-target="#editor" type="button" role="tab" aria-controls="editor" aria-selected="false" tabIndex="-1">
                      <i className="fi fi-rr-vector-alt scale-1x me-1"></i>
                      Editor
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="viewer-tab" data-bs-toggle="tab" data-bs-target="#viewer" type="button" role="tab" aria-controls="viewer" aria-selected="true">
                      <i className="fi fi-rr-overview scale-1x me-1"></i>
                      Viewer
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="guest-tab" data-bs-toggle="tab" data-bs-target="#guest" type="button" role="tab" aria-controls="guest" aria-selected="true">
                      <i className="fi fi-rr-user scale-1x me-1"></i>
                      Guest
                    </button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="admin" role="tabpanel" aria-labelledby="admin-tab" tabIndex="0">
                    <h6 className="mb-3">User Management</h6>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">Create User</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">Edit User</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">Delete User</label>
                    </div>
                    <hr />
                    <h6 className="mb-3">System Settings</h6>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">Change System Settings</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">Manage Roles & Permissions</label>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="manager" role="tabpanel" aria-labelledby="manager-tab" tabIndex="0">
                    <h6 className="mb-3">Project Management</h6>
                    <div className="form-check mb-2 mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">Create Project</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">Edit Project</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Delete Project</label>
                    </div>
                    <hr />
                    <h6 className="mb-3">Team Management</h6>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">Assign Tasks</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Remove Team Members</label>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="editor" role="tabpanel" aria-labelledby="editor-tab" tabIndex="0">
                    <h6 className="mb-3">Content</h6>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">Create Content</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">Edit Content</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Delete Content</label>
                    </div>
                    <hr />
                    <h6 className="mb-3">Media</h6>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Upload Media</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Delete Media</label>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="viewer" role="tabpanel" aria-labelledby="viewer-tab" tabIndex="0">
                    <h6 className="mb-3">Access</h6>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">View Dashboard</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">View Reports</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Export Reports</label>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="guest" role="tabpanel" aria-labelledby="guest-tab" tabIndex="0">
                    <h6 className="mb-3">Access</h6>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" defaultChecked disabled />
                      <label className="form-check-label">Read-Only Access</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" disabled />
                      <label className="form-check-label">Limited Reports</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Role Modal */}
        <div className="modal fade" id="addRoleModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <form className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Role</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Role Name</label>
                  <input type="text" className="form-control" placeholder="Enter role name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows="3" placeholder="Enter role description"></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary">Add Role</button>
              </div>
            </form>
          </div>
        </div>

      </div>

    
    </>
  );
}
