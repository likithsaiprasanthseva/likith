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
            <h1 className="app-page-title">Blog details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Blog details</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-8">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header position-relative border-0 p-0 m-3">
                    <img src="/assets/images/blog/blog-details.webp" className="card-img rounded" alt="..." />
                    <div className="d-flex gap-2 align-items-center position-absolute top-0 end-0 mt-3 me-3">
                      <button className="btn rounded-pill btn-sm btn-primary waves-effect waves-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Like">
                        <i className="fi fi-rr-social-network me-1"></i> Like
                      </button>
                      <button className="btn rounded-pill btn-sm btn-secondary waves-effect waves-light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Share">
                        <i className="fi fi-rs-share me-1"></i> Share
                      </button>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div className="d-flex align-items-center justify-content-between mb-3 mt-3 flex-wrap gap-2">
                      <div className="d-flex align-items-center">
                        <img className="avatar avatar-xxs rounded-circle me-2" src="/assets/images/avatar/avatar1.webp" alt="" />
                        <div className="clearfix">
                          <p className="mb-0 fw-medium">Michael Thompson - <span> 20 July 2025</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <h2 className="mb-3 fw-bold">Effective Hiring Process for Finding the Right Talent</h2>

                    <h6 className="mb-2">Performance Management is More Than Just Appraisals</h6>
                    <p className="mb-2">Performance reviews shouldn’t be annual checkboxes—they should support continuous growth. Real-time feedback and goal-setting drive real results.</p>
                    <p className="mb-2">Company culture shapes how people feel and perform at work. HR silently creates values that define a strong and inclusive workplace. A good onboarding experience sets the tone for long-term employee engagement. It builds trust, clarity, and early confidence.</p>
                    <ul className="list-inline">
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-regular fa-circle-check"></i> HR aligns talent with business goals
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-regular fa-circle-check"></i> Manages employee lifecycle from onboarding to exit
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-regular fa-circle-check"></i> Builds company culture and promotes values
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-regular fa-circle-check"></i> Acts as a bridge between management and employees
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-regular fa-circle-check"></i> Plays a key role in compliance and workplace policies
                      </li>
                    </ul>
                    <p className="mb-2">HR is no longer just an administrative role—it drives business strategy and growth. A strong HR foundation ensures smooth operations and a thriving workforce.</p>


                    <blockquote className="blockquote my-4">
                      <p>“Great organizations are built on great people who are aligned with a common purpose. Hiring the right talent isn't just about filling positions — it's about shaping culture. When you invest in people, you invest in the future of your company.”</p>
                      <cite>Simon Sinek</cite>
                    </blockquote>
                    <p>In the world of HR, identifying the right talent and placing them correctly is the biggest challenge. It’s not just about recruitment, but about building a sustainable culture. An organization can only thrive when its people are motivated and aligned with its vision</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title">Comments <span className="badge badge-sm rounded-pill bg-primary ms-1">5</span>
                    </h6>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush d-flex flex-wrap gap-4">
                      <li className="list-group-item border-0 p-0">
                        <div className="d-flex align-items-start gap-3 flex-wrap">
                          <div className="avatar rounded-circle">
                            <img src="/assets/images/avatar/avatar1.webp" alt="" />
                          </div>
                          <div className="flex-fill w-50">
                            <div className="p-3 bg-light border border-light rounded bg-opacity-50">
                              <div className="d-flex gap-2 mb-2">
                                <span className="fw-semibold">Sophia</span>
                                <span className="text-body text-xs">on December 25, 2024</span>
                              </div>
                              <p className="d-block text-body mb-3">This is a really insightful post, and I appreciate you sharing your perspective. I've learned something new today and will definitely be thinking about this further.</p>
                              <button className="btn btn-sm btn-white waves-effect waves-light">Reply</button>
                            </div>
                            <div className="list-group-item border-0 pe-0 pb-0">
                              <div className="d-flex align-items-start gap-3 flex-wrap">
                                <div className="avatar rounded-circle">
                                  <img src="/assets/images/avatar/avatar2.webp" alt="" />
                                </div>
                                <div className="flex-fill w-50">
                                  <div className="p-3 bg-light border border-light rounded bg-opacity-50">
                                    <div className="d-flex gap-2 mb-2">
                                      <span className="fw-semibold">Mary Brown</span>
                                      <span className="text-body text-xs">on December 25, 2024</span>
                                    </div>
                                    <p className="d-block text-body mb-3">I completely agree with your assessment of the situation. It's important to have these conversations, and I appreciate you bringing this to light.</p>
                                    <button className="btn btn-sm btn-white waves-effect waves-light">Reply</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item border-0 p-0">
                        <div className="d-flex align-items-start gap-3 flex-wrap">
                          <div className="avatar rounded-circle">
                            <img src="/assets/images/avatar/avatar3.webp" alt="" />
                          </div>
                          <div className="flex-fill w-50">
                            <div className="p-3 bg-light border border-light rounded bg-opacity-50">
                              <div className="d-flex gap-2 mb-2">
                                <span className="fw-semibold">Olivia Wilson</span>
                                <span className="text-body text-xs">on December 25, 2024</span>
                              </div>
                              <p className="d-block text-body mb-3">This is a fantastic resource, and I'm so glad I came across it. I'll be sharing this with my network as it's relevant to so many people.</p>
                              <button className="btn btn-sm btn-white waves-effect waves-light">Reply</button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title">Leave a comment </h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="blogFirstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="blogFirstName" />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="blogLastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="blogLastName" />
                      </div>
                      <div className="col-md-12 mb-4">
                        <label htmlFor="blogEmail" className="form-label">Email ID</label>
                        <input type="text" className="form-control" id="blogEmail" />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="blogComment" className="form-label">Write Comment</label>
                        <textarea className="form-control" id="blogComment" rows="4"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer border-0 pt-0">
                    <button className="btn btn-primary waves-effect waves-light">Post Comment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div className="row">
              <div className="col-xl-12">
                <div className="card text-bg-light">
                  <div className="card-body text-center">
                    <h6 className="mb-3"> Stay updated with the latest news and
                      <br />articles — subscribe now!
                    </h6>
                    <div className="d-flex">
                      <input type="text" className="form-control" placeholder="Email Here" />
                      <div className="clearfix ms-2">
                        <button className="btn btn-secondary waves-effect waves-light" type="button">Subscribe</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card overflow-hidden">
                  <div className="card-header justify-content-between d-flex">
                    <h6 className="card-title mb-0"> Recent Posts </h6>
                    <a href="javascript:void(0)" className="btn-link fw-semibold"> View All</a>
                  </div>
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item py-3">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="avatar avatar-xl">
                            <img src="/assets/images/blog/recent/blog1.webp" alt="" />
                          </div>
                          <div className="flex-fill">
                            <a href="javascript:void(0)" className="badge badge-sm bg-info mb-1">Education</a>
                            <h6 className="mb-1">
                              <a href="javascript:void(0)" className="text-dark">Traditional Education Which One</a>
                            </h6>
                            <span className="text-2xs text-body">2024-02-19 10:30 AM</span>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item py-3">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="avatar avatar-xl">
                            <img src="/assets/images/blog/recent/blog2.webp" alt="" />
                          </div>
                          <div className="flex-fill">
                            <a href="javascript:void(0)" className="badge badge-sm bg-success mb-1">Lifestyle</a>
                            <h6 className="mb-1">
                              <a href="javascript:void(0)" className="text-dark">Minimalism: Living More with Less</a>
                            </h6>
                            <span className="text-2xs text-body">2024-02-19 10:30 AM</span>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item py-3">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="avatar avatar-xl">
                            <img src="/assets/images/blog/recent/blog3.webp" alt="" />
                          </div>
                          <div className="flex-fill">
                            <a href="javascript:void(0)" className="badge badge-sm bg-primary mb-1">Technology</a>
                            <h6 className="mb-1">
                              <a href="javascript:void(0)" className="text-dark">The Rise of Augmented Reality</a>
                            </h6>
                            <span className="text-2xs text-body">2024-02-19 10:30 AM</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title mb-0"> Explore Topics </h6>
                  </div>
                  <div className="card-body">
                    <ul className="list-inline mb-0">
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Business Management</a>
                        <span className="ms-auto">(5)</span>
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Personal Development</a>
                        <span className="ms-auto">(7)</span>
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Arts & Design</a>
                        <span className="ms-auto">(2)</span>
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Data Science</a>
                        <span className="ms-auto">(8)</span>
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Marketing</a>
                        <span className="ms-auto">(6)</span>
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Builds Company</a>
                        <span className="ms-auto">(9)</span>
                      </li>
                      <li className="d-flex gap-2 align-items-center py-1">
                        <i className="fa-solid fa-angles-right text-primary"></i>
                        <a href="javascript:void(0)" className="text-body">Management And Employees</a>
                        <span className="ms-auto">(4)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title mb-0">Popular Tags </h6>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap gap-2">
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#HRStrategy</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#HRTrends</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#Leadership</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#Recruitment</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#Onboarding</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#Blogger</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#HRAdmin</a>
                      <a href="javascript:void(0)" className="badge bg-primary-subtle text-primary">#CareerGrowth</a>
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
