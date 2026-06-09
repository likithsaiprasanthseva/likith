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
            <h1 className="app-page-title">Product Details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Product Details</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">

          <div className="col-xl-5 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div id="productCarousel" className="carousel slide text-center" data-bs-ride="carousel" aria-roledescription="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="/assets/images/ecommerce/products/grid/pic1.png" className="d-block img-fluid" alt="Product view 1" />
                    </div>
                    <div className="carousel-item">
                      <img src="/assets/images/ecommerce/products/grid/pic2.png" className="d-block img-fluid" alt="Product view 2" />
                    </div>
                    <div className="carousel-item">
                      <img src="/assets/images/ecommerce/products/grid/pic3.png" className="d-block img-fluid" alt="Product view 3" />
                    </div>
                    <div className="carousel-item">
                      <img src="/assets/images/ecommerce/products/grid/pic4.png" className="d-block img-fluid" alt="Product view 4" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev" aria-label="Previous slide">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next" aria-label="Next slide">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>

                  <div className="mt-3 overflow-auto">
                    <div className="d-flex justify-content-center gap-2" role="tablist" aria-label="Product image thumbnails">
                      <button type="button" className="btn p-0" data-bs-target="#productCarousel" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">
                        <img src="/assets/images/ecommerce/products/grid/pic1.png" alt="Thumbnail 1" width="65" className="img-thumbnail" />
                      </button>
                      <button type="button" className="btn p-0" data-bs-target="#productCarousel" data-bs-slide-to="1" aria-label="Slide 2">
                        <img src="/assets/images/ecommerce/products/grid/pic2.png" alt="Thumbnail 2" width="65" className="img-thumbnail" />
                      </button>
                      <button type="button" className="btn p-0" data-bs-target="#productCarousel" data-bs-slide-to="2" aria-label="Slide 3">
                        <img src="/assets/images/ecommerce/products/grid/pic3.png" alt="Thumbnail 3" width="65" className="img-thumbnail" />
                      </button>
                      <button type="button" className="btn p-0" data-bs-target="#productCarousel" data-bs-slide-to="3" aria-label="Slide 4">
                        <img src="/assets/images/ecommerce/products/grid/pic4.png" alt="Thumbnail 4" width="65" className="img-thumbnail" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-lg-6">
            <div className="card">
              <div className="card-body">
                <span className="badge badge-sm text-bg-success mb-1">New Arrival</span>
                <h2>Hoodie Jacket (Zipper Hoodie)</h2>
                <div className="d-flex align-items-center gap-2">
                  <ul className="d-flex gap-1 text-warning m-0 list-unstyled">
                    <li>
                      <i className="fi fi-ss-star"></i>
                    </li>
                    <li>
                      <i className="fi fi-ss-star"></i>
                    </li>
                    <li>
                      <i className="fi fi-ss-star"></i>
                    </li>
                    <li>
                      <i className="fi fi-ss-star"></i>
                    </li>
                    <li>
                      <i className="fi fi-rs-star-sharp-half-stroke"></i>
                    </li>
                  </ul>
                  <p className="mb-0 text-dark fw-semibold">4.8 <span className="text-muted text-2xs ms-1">(120 Review)</span>
                  </p>
                </div>
                <h3 className="my-4">
                  <span className="fw-bold">$45.00</span>
                  <del className="text-body text-sm ms-1">$60.00</del>
                </h3>
                <div className="row">
                  <div className="col-sm-5 mb-3">
                    <h6>Colors</h6>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="form-check p-0">
                        <input className="btn-check form-check-input visually-hidden" type="radio" value="" id="check1" />
                        <label className="form-check-label btn btn-success btn-sm btn-icon waves-effect rounded-pill" htmlFor="check1"></label>
                      </div>
                      <div className="form-check p-0">
                        <input className="btn-check form-check-input visually-hidden" type="radio" value="" id="check2" />
                        <label className="form-check-label btn btn-info btn-sm btn-icon waves-effect rounded-pill" htmlFor="check2"></label>
                      </div>
                      <div className="form-check p-0">
                        <input className="btn-check form-check-input visually-hidden" type="radio" value="" id="check3" />
                        <label className="form-check-label btn btn-warning btn-sm btn-icon waves-effect rounded-pill" htmlFor="check3"></label>
                      </div>
                      <div className="form-check p-0">
                        <input className="btn-check form-check-input visually-hidden" type="radio" value="" id="check4" />
                        <label className="form-check-label btn btn-danger btn-sm btn-icon waves-effect rounded-pill" htmlFor="check4"></label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 mb-3">
                    <h6>Size</h6>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="form-check p-0">
                        <input className="btn-check form-check-input visually-hidden" type="checkbox" value="" id="check6" />
                        <label className="form-check-label btn btn-outline-light btn-sm btn-icon waves-effect rounded-pill" htmlFor="check6">
                          <span className="text-sm">S</span>
                        </label>
                      </div>
                      <div className="form-check p-0">
                        <input className="btn-check form-check-input visually-hidden" type="checkbox" value="" id="check7" />
                        <label className="form-check-label btn btn-outline-light btn-sm btn-icon waves-effect rounded-pill" htmlFor="check7">
                          <span className="text-sm">M</span>
                        </label>
                      </div>
                      <div className="form-check p-0">
                        <input className="btn-check form-check-input visually-hidden" type="checkbox" value="" id="check8" />
                        <label className="form-check-label btn btn-outline-light btn-sm btn-icon waves-effect rounded-pill" htmlFor="check8">
                          <span className="text-sm">L</span>
                        </label>
                      </div>
                      <div className="form-check p-0">
                        <input className="btn-check form-check-input visually-hidden" type="checkbox" value="" id="check9" />
                        <label className="form-check-label btn btn-outline-light btn-sm btn-icon waves-effect rounded-pill" htmlFor="check9">
                          <span className="text-sm">XL</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 mt-2">
                    <h6 className="mb-3">Quantity</h6>
                    <input type="number" className="form-control" value="1" />
                  </div>
                  <div className="col-12 mt-4">
                    <ul className="d-flex flex-column gap-2 list-unstyled">
                      <li>
                        <i className="fi fi-rs-check-circle me-2 text-success"></i>In Stock
                      </li>
                      <li>
                        <i className="fi fi-rs-check-circle me-2 text-success"></i>Free delivery available
                      </li>
                      <li>
                        <i className="fi fi-rs-check-circle me-2 text-success"></i>Weekend Offer: 25% Discount – Use Code: GXONABC
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2 pt-4">
                  <a href="javascript:void(0)" className="btn btn-secondary waves-effect">
                    <i className="fi fi-rr-shopping-cart me-1"></i> Add To Cart
                  </a>
                  <a href="javascript:void(0)" className="btn btn-light waves-effect">
                    <i className="fi fi-sr-shopping-bag me-1"></i> Buy Now
                  </a>
                  <a href="javascript:void(0)" className="btn bg-danger-subtle btn-icon text-danger waves-effect">
                    <i className="fi fi-bs-heart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-12">
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-underline card-header-tabs" id="myTabDefault" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tabDefault" data-bs-toggle="tab" data-bs-target="#homeDefault" type="button" role="tab" aria-controls="homeDefault" aria-selected="true" tabIndex="-1">Review</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tabDefault" data-bs-toggle="tab" data-bs-target="#profileDefault" type="button" role="tab" aria-controls="profileDefault" aria-selected="false">Descriptions</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="messages-tabDefault" data-bs-toggle="tab" data-bs-target="#messagesDefault" type="button" role="tab" aria-controls="messagesDefault" aria-selected="false" tabIndex="-1">About</button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div className="tab-pane fade active show" id="homeDefault" role="tabpanel" aria-labelledby="home-tabDefault" tabIndex="0">
                    <div className="row">
                      <div className="col-lg-4 mb-3">
                        <div className="border rounded-2 p-3 mb-3">
                          <h1 className="fw-bold display-1 mb-0">4.8</h1>
                          <p className="mb-1">Based On 1,405 Ratings</p>
                          <ul className="d-flex gap-1 text-warning m-0 list-unstyled">
                            <li>
                              <i className="fi fi-ss-star"></i>
                            </li>
                            <li>
                              <i className="fi fi-ss-star"></i>
                            </li>
                            <li>
                              <i className="fi fi-ss-star"></i>
                            </li>
                            <li>
                              <i className="fi fi-ss-star"></i>
                            </li>
                            <li>
                              <i className="fi fi-rs-star-sharp-half-stroke"></i>
                            </li>
                          </ul>
                          <div className="mt-3">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6>5 <i className="fi fi-ss-star text-warning ms-1"></i>
                              </h6>
                              <p className="mb-0 text-2xs">656</p>
                            </div>
                            <div className="progress progress-sm mb-2" role="progressbar" aria-label="Success example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                              <div className="progress-bar bg-secondary" style={{width: "90%"}}></div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6>4 <i className="fi fi-ss-star text-warning ms-1"></i>
                              </h6>
                              <p className="mb-0 text-2xs">562</p>
                            </div>
                            <div className="progress progress-sm mb-2" role="progressbar" aria-label="Success example" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                              <div className="progress-bar bg-success" style={{width: "55%"}}></div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6>3 <i className="fi fi-ss-star text-warning ms-1"></i>
                              </h6>
                              <p className="mb-0 text-2xs">345</p>
                            </div>
                            <div className="progress progress-sm mb-2" role="progressbar" aria-label="Success example" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                              <div className="progress-bar bg-info" style={{width: "40%"}}></div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6>2 <i className="fi fi-ss-star text-warning ms-1"></i>
                              </h6>
                              <p className="mb-0 text-2xs">299</p>
                            </div>
                            <div className="progress progress-sm mb-2" role="progressbar" aria-label="Success example" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                              <div className="progress-bar bg-danger" style={{width: "35%"}}></div>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6> 1<i className="fi fi-ss-star text-warning ms-1"></i>
                              </h6>
                              <p className="mb-0 text-2xs">143</p>
                            </div>
                            <div className="progress progress-sm mb-2" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                              <div className="progress-bar bg-warning" style={{width: "25%"}}></div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h6 className="mb-2">What Customers Like</h6>
                          <ul className="list-group list-group-numbered">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Easy to Use</div>
                              </div>
                              <span className="text-body">89 votes</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Fast Delivery</div>
                              </div>
                              <span className="text-body">59 votes</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Affordable Price</div>
                              </div>
                              <span className="text-body">69 votes</span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4">
                          <h6 className="mb-2">What Need Improvement</h6>
                          <ul className="list-group list-group-numbered">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">App Stability</div>
                              </div>
                              <span className="text-body">18 votes</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Return Policy</div>
                              </div>
                              <span className="text-body">12 votes</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                              <div className="ms-2 me-auto">
                                <div className="fw-bold">Customer Support</div>
                              </div>
                              <span className="text-body">16 votes</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="border rounded-2 p-3 mb-3">
                          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-lg rounded-circle me-2">
                                <img src="/assets/images/avatar/avatar1.webp" alt="" />
                              </div>
                              <div>
                                <h6 className="mb-0">Sarah Lee</h6>
                                <p className="mb-0">2 hours ago</p>
                              </div>
                            </div>
                            <ul className="d-flex gap-1 text-warning m-0 list-unstyled">
                              <li>
                                <i className="fi fi-ss-star"></i>
                              </li>
                              <li>
                                <i className="fi fi-ss-star"></i>
                              </li>
                              <li>
                                <i className="fi fi-ss-star"></i>
                              </li>
                              <li>
                                <i className="fi fi-ss-star"></i>
                              </li>
                              <li>
                                <i className="fi fi-rs-star-sharp-half-stroke"></i>
                              </li>
                            </ul>
                          </div>
                          <h6>Amazing VR Headset</h6>
                          <p className="mb-0">The visuals are stunning and very smooth. The lightweight design makes it super comfortable to use for long sessions. Totally worth the price.</p>
                        </div>
                        <div className="border rounded-2 p-3 mb-3">
                          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-lg rounded-circle me-2">
                                <img src="/assets/images/avatar/avatar2.webp" alt="" />
                              </div>
                              <div>
                                <h6 className="mb-0">Mark Johnson</h6>
                                <p className="mb-0">1 day ago</p>
                              </div>
                            </div>
                            <ul className="d-flex gap-1 text-warning m-0 list-unstyled">
                              <li>
                                <i className="fi fi-ss-star"></i>
                              </li>
                              <li>
                                <i className="fi fi-ss-star"></i>
                              </li>
                              <li>
                                <i className="fi fi-ss-star"></i>
                              </li>
                              <li>
                                <i className="fi fi-ss-star"></i>
                              </li>
                              <li>
                                <i className="fi fi-rs-star-sharp-half-stroke"></i>
                              </li>
                            </ul>
                          </div>
                          <h6>Great Sound Quality</h6>
                          <p className="mb-0">Bought it last week. The audio feels immersive and the build quality is strong. Just wish the battery lasted a little longer.</p>
                        </div>
                        <div className="border rounded-2 p-3 mb-3">
                          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-lg rounded-circle me-2">
                                <img src="/assets/images/avatar/avatar3.webp" alt="" />
                              </div>
                              <div>
                                <h6 className="mb-0">Emily Carter</h6>
                                <p className="mb-0">3 day ago</p>
                              </div>
                            </div>
                            <ul className="d-flex gap-1 text-warning m-0 list-unstyled">
                              <li>
                                <i className="fi fi-ss-star"></i>
                              </li>
                              <li>
                                <i className="fi fi-ss-star"></i>
                              </li>
                              <li>
                                <i className="fi fi-ss-star"></i>
                              </li>
                              <li>
                                <i className="fi fi-ss-star"></i>
                              </li>
                              <li>
                                <i className="fi fi-rs-star-sharp-half-stroke"></i>
                              </li>
                            </ul>
                          </div>
                          <h6>Best VR Experience Ever</h6>
                          <p className="mb-0">This is by far the best VR headset I’ve ever owned. Easy setup and the wireless connection works flawlessly.</p>
                        </div>
                        <div className="border rounded-2 p-3 mb-3 ms-5">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-lg rounded-circle me-2">
                              <img src="/assets/images/avatar/avatar5.webp" alt="" />
                            </div>
                            <div>
                              <h6 className="mb-0">Emily Carter</h6>
                              <p className="mb-0">3 day ago</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <label htmlFor="Reply" className="form-label">Reply</label>
                            <textarea className="form-control" id="Reply" rows="2"></textarea>
                          </div>
                        </div>
                        <div className="col-12 justify-content-end d-flex">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination mb-0">
                              <li className="page-item">
                                <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                                  <i className="fi fi-rr-angle-double-left"></i>
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">1</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">2</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">3</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="javascript:void(0)" aria-label="Next">
                                  <i className="fi fi-rr-angle-double-right"></i>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profileDefault" role="tabpanel" aria-labelledby="profile-tabDefault" tabIndex="0">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                  <div className="tab-pane fade" id="messagesDefault" role="tabpanel" aria-labelledby="messages-tabDefault" tabIndex="0">
                    <h6>Where can I buy this?</h6>
                    <ul>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <li>Phasellus accumsan orci sit amet orci malesuada tristique.</li>
                      <li>Morbi varius odio et lorem ornare, auctor rutrum est rhoncus.</li>
                      <li>Vivamus consequat tortor eu consequat eleifend.</li>
                    </ul>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
