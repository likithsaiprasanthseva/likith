"use client";

import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

export default function Page() {
  useEffect(() => {
    // Page-specific initializations
    if (typeof window !== "undefined") {
      if (window.jQuery) {
        if (window.initSelectPicker) window.initSelectPicker();
        if (window.initTooltips) window.initTooltips();
        if (window.initCheckable) window.initCheckable();
      }
      if (window.initCalendar) {
        window.initCalendar();
      }
    }
  }, []);

  return (
    <>
      <Script src="/assets/libs/fullcalendar/index.global.min.js" strategy="lazyOnload" onLoad={() => {
        if (window.initCalendar) window.initCalendar();
      }} />
      <Script src="/assets/js/fullcalendar.js" strategy="lazyOnload" onLoad={() => {
        if (window.initCalendar) window.initCalendar();
      }} />



      <div className="container">

        <div className="app-page-head d-flex align-items-center justify-content-between">
          <div className="clearfix">
            <h1 className="app-page-title">Calendar</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Calendar</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12">

            <div className="card">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-3 p-4 border-end">
                    <button id="openDrawerBtn" className="btn btn-primary waves-effect waves-light w-100" data-bs-toggle="modal" data-bs-target="#modalAddEvent">
                      <i className="fi fi-rr-plus me-1"></i> Add Event
                    </button>
                    <hr className="border-dashed my-4" />
                    <h6 className="mb-3">Draggable Events</h6>
                    <div id="external-events" className="d-grid gap-2">
                      <div className="fc-event cursor-move rounded-2 px-3 py-2 bg-primary-subtle text-primary" data-color="var(--bs-primary)" data-location="Head Office" data-description="Discuss project status and next steps.">
                        <i className="fi fi-rr-plane-departure me-1"></i> Tour & Picnic
                      </div>
                      <div className="fc-event cursor-move rounded-2 px-3 py-2 bg-success-subtle text-success" data-color="var(--bs-success)" data-location="Remote" data-description="Complete assigned tasks and update progress.">
                        <i className="fi fi-rr-workflow-alt me-1"></i> Group Projects
                      </div>
                      <div className="fc-event cursor-move rounded-2 px-3 py-2 bg-info-subtle text-info" data-color="var(--bs-info)" data-location="Conference Room" data-description="Prepare and deliver client presentation.">
                        <i className="fi fi-rr-podium me-1"></i> Presentation
                      </div>
                      <div className="fc-event cursor-move rounded-2 px-3 py-2 bg-warning-subtle text-warning" data-color="var(--bs-warning)" data-location="Personal" data-description="Follow up on pending emails and calls.">
                        <i className="fi fi-rs-massage me-1"></i> Employee Wellness
                      </div>
                      <div className="fc-event cursor-move rounded-2 px-3 py-2 bg-danger-subtle text-danger" data-color="var(--bs-danger)" data-location="Office" data-description="Handle urgent support tickets immediately.">
                        <i className="fi fi-rr-hr me-1"></i> Recruitment
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 p-4">
                    <div id="calendar"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="modalAddEvent" tabindex="-1" aria-labelledby="modalAddEventLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalAddEventLabel">Add Event</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form id="eventForm">
                      <div className="row">
                        <div className="col-12 mb-3">
                          <label className="form-label">Title</label>
                          <input type="text" id="title" className="form-control" required />
                        </div>
                        <div className="col-12 mb-3">
                          <label className="form-label">Label</label>
                          <select id="label" className="form-select">
                            <option value="primary">Primary</option>
                            <option value="success">Success</option>
                            <option value="warning">Warning</option>
                            <option value="danger">Danger</option>
                            <option value="info">Info</option>
                          </select>
                        </div>
                        <div className="col-6 mb-3">
                          <label className="form-label">Start Date</label>
                          <input type="datetime-local" id="eventStartDate" className="form-control" required />
                        </div>
                        <div className="col-6 mb-3">
                          <label className="form-label">End Date</label>
                          <input type="datetime-local" id="eventEndDate" className="form-control" />
                        </div>
                        <div className="col-12 mb-3">
                          <label className="form-label">Event URL</label>
                          <input type="url" id="url" className="form-control" placeholder="https://www.google.com/" />
                        </div>
                        <div className="col-12 mb-3">
                          <label className="form-label">Location</label>
                          <input type="text" id="location" className="form-control" />
                        </div>
                        <div className="col-12 mb-3">
                          <label className="form-label">Description</label>
                          <textarea id="description" className="form-control"></textarea>
                        </div>
                        <div className="col-12">
                          <button type="button" className="btn btn-light waves-effect waves-light" data-bs-dismiss="modal">Close</button>
                          <button type="submit" className="btn btn-primary waves-effect waves-light ms-2" data-bs-dismiss="modal">Add Event</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="eventDetailsModal" tabindex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="eventTitle">Event Title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      <strong className="text-dark">Start:</strong>
                      <span id="eventStart"></span>
                    </p>
                    <p>
                      <strong className="text-dark">End:</strong>
                      <span id="eventEnd"></span>
                    </p>
                    <p>
                      <strong className="text-dark">Location:</strong>
                      <span id="eventLocation"></span>
                    </p>
                    <p className="mb-0">
                      <strong className="text-dark">Description:</strong>
                      <span id="eventDescription"></span>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-light waves-effect waves-light" data-bs-dismiss="modal">Close</button>
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
