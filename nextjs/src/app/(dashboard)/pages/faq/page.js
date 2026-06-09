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
            <h1 className="app-page-title">FAQ</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">FAQ</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-12 mb-5">
            <div className="card p-sm-4 border-0 bg-light" style={{backgroundImage: "url(assets/images/background/faq.png)", backgroundPosition: "center", backgroundSize: "cover"}}>
              <div className="card-body p-md-5">
                <h4 className="text-center text-white mb-2">Have a question? We’re ready to help?</h4>
                <p className="text-center text-white mb-4">Or choose a section to find what you need in seconds.</p>
                <form className="d-flex align-items-center w-lg-500px mx-auto position-relative" action="#">
                  <button type="button" className="btn btn-sm border-0 position-absolute start-0 ms-3 p-0">
                    <i className="fi fi-rr-search"></i>
                  </button>
                  <input type="text" className="form-control ps-5" placeholder="Search articles..." />
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-12 mb-4">
                <h6 className="mb-3">General Questions</h6>
                <div className="accordion" id="accordionCustomPrimary">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomPrimary-collapseOne" aria-expanded="false" aria-controls="CustomPrimary-collapseOne">What is your return policy?</button>
                    </h2>
                    <div id="CustomPrimary-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionCustomPrimary">
                      <div className="accordion-body">
                        We offer a 30-day return policy on all items. Please contact our support for processing your return easily.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomPrimary-collapseTwo" aria-expanded="false" aria-controls="CustomPrimary-collapseTwo">How long does shipping take?</button>
                    </h2>
                    <div id="CustomPrimary-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionCustomPrimary">
                      <div className="accordion-body">
                        Shipping typically takes 5-7 business days, depending on your location and the shipping option chosen.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomPrimary-collapseThree" aria-expanded="false" aria-controls="CustomPrimary-collapseThree">Do you offer customer support?</button>
                    </h2>
                    <div id="CustomPrimary-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionCustomPrimary">
                      <div className="accordion-body">
                        Yes, we offer 24/7 customer support via email and live chat to assist you with any queries you may have.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-4">
                <h6 className="mb-3">Manage Account</h6>
                <div className="accordion" id="accordionCustomPrimary2">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomPrimary-collapseOne2" aria-expanded="false" aria-controls="CustomPrimary-collapseOne2">How do I update my account information?</button>
                    </h2>
                    <div id="CustomPrimary-collapseOne2" className="accordion-collapse collapse" data-bs-parent="#accordionCustomPrimary2">
                      <div className="accordion-body">
                        Go to your account settings, click ‘Edit Profile’, and update your name, email, or contact details. Don’t forget to save your changes.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomPrimary-collapseTwo2" aria-expanded="false" aria-controls="CustomPrimary-collapseTwo2">How can I change my password?</button>
                    </h2>
                    <div id="CustomPrimary-collapseTwo2" className="accordion-collapse collapse" data-bs-parent="#accordionCustomPrimary2">
                      <div className="accordion-body">
                        Navigate to Account Settings &gt; Security &gt; Change Password. Enter your current password, then your new password, and confirm.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomPrimary-collapseThree2" aria-expanded="false" aria-controls="CustomPrimary-collapseThree2">How do I delete my account?</button>
                    </h2>
                    <div id="CustomPrimary-collapseThree2" className="accordion-collapse collapse" data-bs-parent="#accordionCustomPrimary2">
                      <div className="accordion-body">
                        We're sorry to see you go! Please contact our support team or go to Account Settings &gt; Delete Account and follow the on-screen instructions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 mb-4">
                <h6 className="mb-3">Privacy & Security</h6>
                <div className="accordion" id="accordionCustomPrimary3">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomPrimary-collapseOne3" aria-expanded="false" aria-controls="CustomPrimary-collapseOne3">How is my personal data protected?</button>
                    </h2>
                    <div id="CustomPrimary-collapseOne3" className="accordion-collapse collapse" data-bs-parent="#accordionCustomPrimary3">
                      <div className="accordion-body">
                        We use industry-standard encryption and secure servers to protect your data. We do not share your information without your consent.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomPrimary-collapseTwo3" aria-expanded="false" aria-controls="CustomPrimary-collapseTwo3">Can I control who sees my information?</button>
                    </h2>
                    <div id="CustomPrimary-collapseTwo3" className="accordion-collapse collapse" data-bs-parent="#accordionCustomPrimary3">
                      <div className="accordion-body">
                        Yes, you can manage your privacy settings under Account Settings &gt; Privacy to control what information is visible to others.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomPrimary-collapseThree3" aria-expanded="false" aria-controls="CustomPrimary-collapseThree3">How can I delete my data?</button>
                    </h2>
                    <div id="CustomPrimary-collapseThree3" className="accordion-collapse collapse" data-bs-parent="#accordionCustomPrimary3">
                      <div className="accordion-body">
                        You can request data deletion by contacting our support team or using the Delete Account option in your account settings.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card bg-warning bg-opacity-10 shadow-none border-0">
                  <div className="card-body px-4 pb-0 pt-2">
                    <div className="row g-0">
                      <div className="col-md-8 py-3 px-2">
                        <h6 className="card-title fw-bold mb-5">You still have a question?</h6>
                        <div className="row">
                          <div className="col-sm-5 border-end border-dark border-opacity-10">
                            <div className="avatar avatar-sm bg-success shadow-sharp-success rounded-circle text-white mb-3 ms-2">
                              <i className="fi fi-rr-phone-call"></i>
                            </div>
                            <h5 className="mb-1">
                              <a className="text-dark" href="tel:+(01)1234567890">+(01) 123 456 7890</a>
                            </h5>
                            <p className="mb-0">Always here, ready to help</p>
                          </div>
                          <div className="col-sm-7 pt-4 pt-sm-0">
                            <div className="avatar avatar-sm bg-info shadow-sharp-info rounded-circle text-white mb-3 ms-2">
                              <i className="fi fi-rr-envelope"></i>
                            </div>
                            <h5 className="mb-1">
                              <a className="text-dark" href="mailto:support@gmail.com">support@gmail.com</a>
                            </h5>
                            <p className="mb-0">Looking for a quick answer? Let’s connect</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 text-end d-none d-md-block">
                        <img src="/assets/images/media/svg/media2.svg" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title mb-0">Have More Questions?</h6>
                    <p className="mb-0">Send us your question, and we will get back to you shortly.</p>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-sm-6 mb-3">
                          <label htmlFor="userName" className="form-label">Name</label>
                          <input type="text" className="form-control" id="userName" placeholder="Enter your name" required />
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label htmlFor="userEmail" className="form-label">Email</label>
                          <input type="email" className="form-control" id="userEmail" placeholder="Enter your email" required />
                        </div>
                        <div className="col-sm-12 mb-3">
                          <label htmlFor="userSubject" className="form-label">Subject</label>
                          <input type="text" className="form-control" id="userSubject" placeholder="Enter your subject" required />
                        </div>
                        <div className="col-sm-12 mb-3">
                          <label htmlFor="userQuestion" className="form-label">Your Question</label>
                          <textarea className="form-control" id="userQuestion" rows="4" placeholder="Type your question here..." required></textarea>
                        </div>
                        <div className="col-sm-12">
                          <button type="submit" className="btn btn-primary waves-effect waves-light w-100">Submit Question</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card card-action action-elevate bg-primary-subtle border-0 shadow-none text-center">
                  <div className="card-body p-5">
                    <div className="avatar-group justify-content-center mb-3">
                      <div className="avatar avatar-sm rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar4.webp" alt="" />
                      </div>
                      <div className="avatar avatar-sm rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar5.webp" alt="" />
                      </div>
                      <div className="avatar avatar-sm rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar1.webp" alt="" />
                      </div>
                      <div className="avatar avatar-sm rounded-circle border border-2 border-white">
                        <img src="/assets/images/avatar/avatar2.webp" alt="" />
                      </div>
                    </div>
                    <h4>Need more help?</h4>
                    <p className="mb-4">Can’t find your answer here? Chat with our support team anytime.</p>
                    <a href="/chat" className="btn btn-primary waves-effect waves-light w-100">
                      Chat with us
                    </a>
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
