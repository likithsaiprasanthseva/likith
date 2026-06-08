"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    // Sidebar toggler for mobile mail view
    const sidebarToggler = document.querySelector('.mail-sidebar-toggler');
    const mailSidebar = document.querySelector('.mail-sidebar');
    const overlay = document.querySelector('.mail-wrapper .sidebar-mobile-overlay');
    
    const toggleSidebar = () => {
      if (mailSidebar) mailSidebar.classList.toggle('show');
      if (overlay) overlay.classList.toggle('show');
    };

    if (sidebarToggler) sidebarToggler.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);

    return () => {
      if (sidebarToggler) sidebarToggler.removeEventListener('click', toggleSidebar);
      if (overlay) overlay.removeEventListener('click', toggleSidebar);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card card-body overflow-hidden mail-wrapper p-0">
              <div className="sidebar-mobile-overlay"></div>
              
              <div className="mail-sidebar bg-light">
                <div className="px-3 pt-3 mb-2">
                  <Link href="/email/compose" className="btn btn-primary waves-effect waves-light w-100">
                    Compose
                  </Link>
                </div>
                
                <div className="d-grid gap-2 p-2 mail-nav" id="myTab" role="tablist">
                  <Link href="/email/inbox" className="mail-nav-item active">
                    <i className="fi fi-rr-inbox-in me-2"></i> Inbox
                    <span className="badge badge-sm bg-primary-subtle text-primary ms-auto">247</span>
                  </Link>
                  <Link href="/email/inbox" className="mail-nav-item">
                    <i className="fi fi-rr-paper-plane-top me-2"></i> Sent
                  </Link>
                  <Link href="/email/inbox" className="mail-nav-item">
                    <i className="fi fi-rr-blueprint me-2"></i> Drafts
                  </Link>
                  <Link href="/email/inbox" className="mail-nav-item">
                    <i className="fi fi-rr-trash me-2"></i> Trash
                  </Link>
                  <Link href="/email/inbox" className="mail-nav-item">
                    <i className="fi fi-rr-star me-2"></i> Starred
                  </Link>
                  <Link href="/email/inbox" className="mail-nav-item">
                    <i className="fi fi-rr-box me-2"></i> Archive
                  </Link>
                  <Link href="/calendar" className="mail-nav-item">
                    <i className="fi fi-rr-calendar me-2"></i> Scheduled
                  </Link>
                </div>
              </div>

              <div className="mail-body">
                <div className="mail-header">
                  <div className="d-flex gap-3">
                    <button className="btn btn-white btn-shadow btn-icon waves-effect mail-sidebar-toggler d-lg-none">
                      <i className="fi fi-rs-list"></i>
                    </button>
                    <div className="me-2">
                      <Link href="/email/inbox" className="btn btn-white btn-shadow btn-icon waves-effect me-2">
                        <i className="fi fi-rr-arrow-left"></i>
                      </Link>
                      <button type="button" className="btn btn-action-gray btn-icon waves-effect waves-light">
                        <i className="fi fi-rr-square-info"></i>
                      </button>
                      <button type="button" className="btn btn-action-gray btn-icon waves-effect waves-light me-1">
                        <i className="fi fi-rr-box"></i>
                      </button>
                      <button type="button" className="btn btn-action-gray btn-icon waves-effect waves-light">
                        <i className="fi fi-rr-trash"></i>
                      </button>
                    </div>
                  </div>
                  
                  <form className="d-flex align-items-center h-100 w-200px w-md-250px position-relative me-auto" action="#">
                    <button type="button" className="btn btn-sm border-0 position-absolute start-0 ms-3 p-0">
                      <i className="fi fi-rr-search"></i>
                    </button>
                    <input type="text" className="form-control ps-5" placeholder="Search" />
                  </form>
                  
                  <div className="d-flex align-items-center gap-3">
                    <span>1 - 50 of 570</span>
                    <div className="d-flex gap-2">
                      <button className="btn btn-white btn-shadow btn-icon waves-effect">
                        <i className="fi fi-rr-angle-left text-2xs"></i>
                      </button>
                      <button className="btn btn-white btn-shadow btn-icon waves-effect">
                        <i className="fi fi-rr-angle-right text-2xs"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-bottom p-sm-4 p-3">
                  <div className="d-flex flex-wrap gap-2 align-items-center justify-content-between mb-4">
                    <h4 className="mb-0">💰 You Made a Sale!</h4>
                    <small>Jul 22, 2025, 1:02 AM (23 hours ago)</small>
                  </div>
                  
                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar avatar-sm bg-danger text-danger bg-opacity-10 rounded-circle fw-bold d-flex align-items-center justify-content-center">D</div>
                    <div className="clearfix">
                      <div className="d-flex flex-wrap align-items-center text-sm">
                        <h6 className="mb-0 me-2">LayoutDrop</h6>
                        <a href="#" className="text-1xs">LayoutDrop sales@layoutdrop.com</a>
                      </div>
                      <div className="d-flex flex-wrap text-1xs">
                        <span className="me-1 text-dark text-opacity-75">To: LayoutDrop</span>
                        <span className="me-3">sales@layoutdrop.com</span>
                        <span className="me-1 text-dark text-opacity-75">CC: Wave</span>
                        <span className="me-1">info@yourmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mail-read-wrapper">
                  <div className="text-dark p-sm-4 p-3 pb-0">
                    <p className="mb-4">Hello <strong>LayoutDrop,</strong></p>
                    <p className="mb-4">🎉 Congratulations! You’ve just made a sale on LayoutDrop.</p>
                    <p className="mb-0">Order Summary:</p>
                    <ul className="mb-4">
                      <li>Item Name: LayoutGrid – Figma Portfolio Layout</li>
                      <li>License Type: Single License</li>
                      <li>Transaction ID: DW21987654</li>
                    </ul>
                    <p className="mb-4"><strong>What’s Next?</strong></p>
                    <p className="mb-4">The buyer now has access to your product. You can keep track of your sales and ratings by visiting your Dashboard.</p>
                    <p className="mb-4">Thank you for being a valued creator at LayoutDrop. Keep designing and sharing your amazing work with the world!</p>
                  </div>

                  <div className="p-sm-4 p-3 pt-sm-0">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0 fw-semibold">Attachment</h5>
                      <a href="#" className="btn btn-sm btn-outline-light waves-effect btn-shadow">Download All</a>
                    </div>
                    
                    <div className="p-3 bg-light rounded-2">
                      <div className="row g-2">
                        <div className="col-xxl-4 col-md-6">
                          <div className="d-flex gap-3 p-3 rounded-2 align-items-center bg-body">
                            <div className="avatar bg-body rounded-3">
                              <img src="/assets/images/media/svg/media3.svg" alt="figma file icon" />
                            </div>
                            <div className="clearfix">
                              <h6 className="mb-1 text-sm">layoutgrid.fig</h6>
                              <span className="text-1xs">950KB</span>
                            </div>
                            <button className="btn btn-light text-primary btn-icon waves-effect ms-auto">
                              <i className="fi fi-rr-download"></i>
                            </button>
                          </div>
                        </div>

                        <div className="col-xxl-4 col-md-6">
                          <div className="d-flex gap-3 p-3 rounded-2 align-items-center bg-body">
                            <div className="avatar bg-body rounded-3 border">
                              <img src="/assets/images/media/svg/media4.svg" alt="pdf file icon" />
                            </div>
                            <div className="clearfix">
                              <h6 className="mb-1 text-sm">license.pdf</h6>
                              <span className="text-1xs">120KB</span>
                            </div>
                            <button className="btn btn-light text-primary btn-icon waves-effect ms-auto">
                              <i className="fi fi-rr-download"></i>
                            </button>
                          </div>
                        </div>

                        <div className="col-xxl-4 col-md-6">
                          <div className="d-flex gap-3 p-3 rounded-2 align-items-center bg-body">
                            <div className="avatar bg-body rounded-3">
                              <img src="/assets/images/media/svg/media5.svg" alt="jpg image icon" />
                            </div>
                            <div className="clearfix">
                              <h6 className="mb-1 text-sm">preview.jpg</h6>
                              <span className="text-1xs">950KB</span>
                            </div>
                            <button className="btn btn-light text-primary btn-icon waves-effect ms-auto">
                              <i className="fi fi-rr-download"></i>
                            </button>
                          </div>
                        </div>

                        <div className="col-xxl-4 col-md-6">
                          <div className="d-flex gap-3 p-3 rounded-2 align-items-center bg-body">
                            <div className="avatar bg-body rounded-3">
                              <img src="/assets/images/media/svg/media6.svg" alt="text file icon" />
                            </div>
                            <div className="clearfix">
                              <h6 className="mb-1 text-sm">project.txt</h6>
                              <span className="text-1xs">950KB</span>
                            </div>
                            <button className="btn btn-light text-primary btn-icon waves-effect ms-auto">
                              <i className="fi fi-rr-download"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
