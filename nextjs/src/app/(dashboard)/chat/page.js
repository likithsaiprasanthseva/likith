"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [chatSidebarOpen, setChatSidebarOpen] = useState(false);

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

        <div className="row">

          <div className="col-12">
            <div className="card card-body overflow-hidden chat-wrapper p-0">
              <div 
                className={`sidebar-mobile-overlay ${chatSidebarOpen ? "show" : ""}`}
                onClick={() => setChatSidebarOpen(false)}
              ></div>
              <div className={`chat-sidebar ${chatSidebarOpen ? "open" : ""}`}>
                <div className="d-flex p-3 align-items-center justify-content-between">
                  <form className="d-flex align-items-center shadow-sm rounded-2 position-relative w-100" action="#">
                    <button type="button" className="btn btn-sm border-0 position-absolute start-0 ms-3 p-0">
                      <i className="fi fi-rr-search"></i>
                    </button>
                    <input type="text" className="form-control ps-5" placeholder="Search" />
                  </form>
                  <button 
                    type="button" 
                    className="btn btn-sm btn-shadow btn-icon ms-2 btn-close d-inline-flex d-lg-none"
                    onClick={() => setChatSidebarOpen(false)}
                  >
                    <i className="fi fi-sr-cross"></i>
                  </button>
                </div>
                <div className="chat-nav" id="myTab" role="tablist" data-simplebar>
                  <a href="javascript:void(0)" className="chat-nav-item">
                    <div className="avatar rounded-circle avatar-status-success">
                      <img src="/assets/images/avatar/vector/avatar1.webp" alt="" />
                    </div>
                    <div className="chat-avatar-info">
                      <div className="clearfix">
                        <h6 className="name">Alex Storm</h6>
                        <span className="type">Typing...</span>
                      </div>
                      <div className="text-end">
                        <small className="time">02:21 PM</small>
                        <span className="badge badge-sm rounded-pill bg-primary">12</span>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="chat-nav-item active">
                    <div className="avatar rounded-circle avatar-status-success">
                      <img src="/assets/images/avatar/vector/avatar2.webp" alt="" />
                    </div>
                    <div className="chat-avatar-info">
                      <div className="clearfix">
                        <h6 className="name">Jordan Miles</h6>
                        <span className="text">Hey, did you get th..</span>
                      </div>
                      <div className="text-end">
                        <small className="time">02:20 PM</small>
                        <span className="badge badge-sm rounded-pill bg-primary">9</span>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="chat-nav-item">
                    <div className="avatar rounded-circle avatar-status-danger">
                      <img src="/assets/images/avatar/vector/avatar3.webp" alt="" />
                    </div>
                    <div className="chat-avatar-info">
                      <div className="clearfix">
                        <h6 className="name">Liam Carter</h6>
                        <span className="text">Looks great, bro</span>
                      </div>
                      <div className="text-end">
                        <small className="time">02:19 PM</small>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="chat-nav-item">
                    <div className="avatar rounded-circle avatar-status-danger">
                      <img src="/assets/images/avatar/vector/avatar4.webp" alt="" />
                    </div>
                    <div className="chat-avatar-info">
                      <div className="clearfix">
                        <h6 className="name">Noah Blake</h6>
                        <span className="text">Voice message</span>
                      </div>
                      <div className="text-end">
                        <small className="time">01:00 PM</small>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="chat-nav-item">
                    <div className="avatar rounded-circle">
                      <img src="/assets/images/avatar/vector/avatar5.webp" alt="" />
                    </div>
                    <div className="chat-avatar-info">
                      <div className="clearfix">
                        <h6 className="name">Mia Lane</h6>
                        <span className="text">Thanks a lot!</span>
                      </div>
                      <div className="text-end">
                        <small className="time">12:30 PM</small>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="chat-nav-item">
                    <div className="avatar rounded-circle">
                      <img src="/assets/images/avatar/vector/avatar1.webp" alt="" />
                    </div>
                    <div className="chat-avatar-info">
                      <div className="clearfix">
                        <h6 className="name">Jordan Miles</h6>
                        <span className="text">Hey, did you get th..</span>
                      </div>
                      <div className="text-end">
                        <small className="time">11:00 AM</small>
                        <span className="badge badge-sm rounded-pill bg-primary">8</span>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="chat-nav-item">
                    <div className="avatar rounded-circle">
                      <img src="/assets/images/avatar/vector/avatar2.webp" alt="" />
                    </div>
                    <div className="chat-avatar-info">
                      <div className="clearfix">
                        <h6 className="name">Liam Carter</h6>
                        <span className="text">Looks great, bro</span>
                      </div>
                      <div className="text-end">
                        <small className="time">11:00 AM</small>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="chat-nav-item">
                    <div className="avatar rounded-circle">
                      <img src="/assets/images/avatar/vector/avatar3.webp" alt="" />
                    </div>
                    <div className="chat-avatar-info">
                      <div className="clearfix">
                        <h6 className="name">Noah Blake</h6>
                        <span className="text">Voice message</span>
                      </div>
                      <div className="text-end">
                        <small className="time">10:00 AM</small>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="chat-nav-item">
                    <div className="avatar rounded-circle">
                      <img src="/assets/images/avatar/vector/avatar4.webp" alt="" />
                    </div>
                    <div className="chat-avatar-info">
                      <div className="clearfix">
                        <h6 className="name">Mia Lane</h6>
                        <span className="text">Thanks a lot!</span>
                      </div>
                      <div className="text-end">
                        <small className="time">09:00 AM</small>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="chat-nav-item">
                    <div className="avatar rounded-circle">
                      <img src="/assets/images/avatar/vector/avatar5.webp" alt="" />
                    </div>
                    <div className="chat-avatar-info">
                      <div className="clearfix">
                        <h6 className="name">Noah Blake</h6>
                        <span className="text">Voice message</span>
                      </div>
                      <div className="text-end">
                        <small className="time">08:00 AM</small>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="chat-nav-item">
                    <div className="avatar rounded-circle">
                      <img src="/assets/images/avatar/vector/avatar2.webp" alt="" />
                    </div>
                    <div className="chat-avatar-info">
                      <div className="clearfix">
                        <h6 className="name">Liam Carter</h6>
                        <span className="text">Looks great, bro</span>
                      </div>
                      <div className="text-end">
                        <small className="time">11:00 AM</small>
                      </div>
                    </div>
                  </a>
                  <a href="javascript:void(0)" className="chat-nav-item">
                    <div className="avatar rounded-circle">
                      <img src="/assets/images/avatar/vector/avatar3.webp" alt="" />
                    </div>
                    <div className="chat-avatar-info">
                      <div className="clearfix">
                        <h6 className="name">Noah Blake</h6>
                        <span className="text">Voice message</span>
                      </div>
                      <div className="text-end">
                        <small className="time">10:00 AM</small>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="chat-container">
                <div className="chat-header">
                  <div className="d-flex align-items-center gap-3">
                    <button 
                      className="btn btn-white btn-shadow btn-icon waves-effect chat-sidebar-toggler d-lg-none"
                      onClick={() => setChatSidebarOpen(true)}
                    >
                      <i className="fi fi-rs-list"></i>
                    </button>
                    <a href="javascript:void(0)" className="chat-nav-item">
                      <div className="avatar rounded-circle avatar-status-success">
                        <img src="/assets/images/avatar/vector/avatar2.webp" alt="" />
                      </div>
                      <div className="chat-avatar-info">
                        <div className="clearfix">
                          <h6 className="name">Jordan Miles</h6>
                          <span className="text">Hey, did you get th..</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="clearfix">
                    <a href="javascript:void(0)" className="btn btn-white text-success btn-shadow btn-icon waves-effect me-1 d-none d-sm-inline-flex">
                      <i className="fi fi-rr-phone-flip"></i>
                    </a>
                    <a href="javascript:void(0)" className="btn btn-white text-danger btn-shadow btn-icon waves-effect me-1 d-none d-sm-inline-flex">
                      <i className="fi fi-rr-video-camera-alt"></i>
                    </a>
                    <div className="btn-group">
                      <button className="btn btn-white btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fi fi-rr-menu-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)">View Contact</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)">Block Contact</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="javascript:void(0)">Report</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="chat-body">
                  <div className="chat-conversation" data-simplebar>
                    <div className="chat-divider">
                      <div className="chat-date">Today, 25 july</div>
                    </div>
                    <div className="chat-message-right">
                      <div className="chat-message-text">
                        <p>Guysss, next year we go to Japan! ✈️🎉</p>
                        <p>Please help with the task distribution like usual later 🙏</p>
                      </div>
                      <div className="chat-message-text">
                        <p>Also, please help divide the tasks like usual later.</p>
                      </div>
                      <div className="chat-time">10:25 PM</div>
                    </div>
                    <div className="chat-message-left">
                      <div className="chat-message-text">
                        <p>Are you serious???</p>
                      </div>
                      <div className="chat-message-text">
                        <p>Gokilll!!</p>
                      </div>
                      <div className="chat-message-text">
                        <p>Please check the Figma file for me</p>
                      </div>
                      <div className="chat-time">10:30 PM</div>
                    </div>
                    <div className="chat-message-right">
                      <div className="chat-message-text">
                        <p>Guys, let’s plan a trip to Japan next year!</p>
                      </div>
                      <div className="chat-message-text">
                        <p>Also, please help divide the tasks like usual later.</p>
                      </div>
                      <div className="chat-time">10:40 PM</div>
                    </div>
                    <div className="chat-message-left">
                      <div className="chat-message-text">
                        <p>Already checked, looks clean 👌</p>
                        <p>Maybe add a hover effect on the second card?</p>
                      </div>
                      <div className="chat-message-text">
                        <p>I’ll review it in 10 mins ya 🙋‍</p>
                      </div>
                      <div className="chat-message-text">
                        <p>Mantapp guys! Let’s finalize by tonight please 🕙</p>
                      </div>
                      <div className="chat-time">11:00 PM</div>
                    </div>
                  </div>
                  <form className="chat-send-form">
                    <input className="form-control chat-input border-0 shadow-none" placeholder="Type message" />
                    <div className="d-flex">
                      <button type="button" className="btn btn-action-gray btn-icon waves-effect waves-light me-1">
                        <i className="fi fi-rr-add-image"></i>
                      </button>
                      <button type="button" className="btn btn-action-gray btn-icon waves-effect waves-light me-3">
                        <i className="fi fi-rr-link-alt"></i>
                      </button>
                      <button type="button" className="btn btn-primary waves-effect waves-light">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    
    </>
  );
}
