"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";

export default function OrderDetailsPage() {
  const [orderStatus, setOrderStatus] = useState("In Progress");
  const [shippingProgress, setShippingProgress] = useState(50);
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const dropdownRef = useRef(null);

  // Trigger local toast notification
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  // Leaflet map initialization
  useEffect(() => {
    let mapInstance = null;

    if (leafletLoaded && typeof window !== "undefined" && window.L) {
      const L = window.L;
      const mapContainer = document.getElementById("mapLayersControl");

      if (mapContainer && !mapContainer._leaflet_id) {
        // Initialize layers
        const cities = L.layerGroup();
        L.marker([39.61, -105.02]).bindPopup("This is Littleton, CO.").addTo(cities);
        L.marker([39.74, -104.99]).bindPopup("This is Denver, CO.").addTo(cities);
        L.marker([39.73, -104.8]).bindPopup("This is Aurora, CO.").addTo(cities);
        L.marker([39.77, -105.23]).bindPopup("This is Golden, CO.").addTo(cities);

        const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        const osmHOT = L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });

        mapInstance = L.map("mapLayersControl", {
          center: [39.73, -104.99],
          zoom: 10,
          layers: [osm, cities]
        });

        const baseLayers = {
          "OpenStreetMap": osm,
          "OpenStreetMap.HOT": osmHOT
        };

        const overlays = {
          "Cities": cities
        };

        const layerControl = L.control.layers(baseLayers, overlays).addTo(mapInstance);

        const crownHill = L.marker([39.75, -105.09]).bindPopup("This is Crown Hill Park.");
        const rubyHill = L.marker([39.68, -105.00]).bindPopup("This is Ruby Hill Park.");
        const parks = L.layerGroup([crownHill, rubyHill]);

        const openTopoMap = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: "Map data: &copy; OpenTopoMap"
        });

        layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
        layerControl.addOverlay(parks, "Parks");
      }
    }

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, [leafletLoaded]);

  // Action handlers
  const handleMakeReadyToShip = () => {
    if (orderStatus === "In Progress") {
      setOrderStatus("Ready to Ship");
      setShippingProgress(100);
      triggerToast("Order updated: Ready to Ship!");
    } else {
      triggerToast("Order is already ready to ship or delivered.");
    }
  };

  return (
    <div className="container" ref={dropdownRef}>
      {/* Head Link Injection for Leaflet Stylesheet */}
      <link rel="stylesheet" href="/assets/libs/leaflet/leaflet.css" />
      
      {/* Script Loader for Leaflet Library */}
      <Script
        src="/assets/libs/leaflet/leaflet.js"
        strategy="lazyOnload"
        onLoad={() => setLeafletLoaded(true)}
      />

      {/* Toast Alert */}
      {toastMessage && (
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1080 }}>
          <div className="toast show align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
              <div className="toast-body">{toastMessage}</div>
              <button type="button" className="btn-close btn-close-white me-2 m-auto" aria-label="Close" onClick={() => setToastMessage("")}></button>
            </div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
        <div className="clearfix">
          <h1 className="app-page-title">Order Details</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Order Details
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row">
        {/* Left Side Column */}
        <div className="col-lg-8">
          <div className="row">
            
            {/* Order Status Card */}
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between">
                    <div className="clearfix">
                      <div className="d-flex gap-2 mb-2 align-items-center">
                        <h6 class="card-title mb-0">
                          Order No <span className="text-primary">#0255760</span>
                        </h6>
                        <span className={`badge badge-sm ${orderStatus === "In Progress" ? "text-bg-warning" : "text-bg-success"}`}>
                          {orderStatus}
                        </span>
                      </div>
                      <p className="mb-0 text-2xs">Order Created : August 25, 2025 12:50 AM</p>
                    </div>
                    <div className="clearfix d-flex gap-2">
                      <button
                        onClick={() => triggerToast("Refund processed successfully!")}
                        className="btn btn-sm btn-outline-light btn-shadow waves-effect"
                      >
                        Refund
                      </button>
                      <button
                        onClick={() => triggerToast("Return requested successfully!")}
                        className="btn btn-sm btn-outline-light btn-shadow waves-effect"
                      >
                        Return
                      </button>
                      <button
                        onClick={() => triggerToast("Redirecting to Edit Order...")}
                        className="btn btn-sm btn-primary btn-shadow waves-effect"
                      >
                        Edit Order
                      </button>
                    </div>
                  </div>

                  <h6 className="mt-4 mb-3">Progress</h6>
                  <div className="row row-cols-2 row-cols-md-5 g-3">
                    <div className="col">
                      <div className="progress progress-sm bg-light" role="progressbar" aria-label="Progress">
                        <div className="progress-bar progress-bar-striped bg-success" style={{ width: "100%" }}></div>
                      </div>
                      <small>Order Confirming</small>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm bg-light" role="progressbar" aria-label="Progress">
                        <div className="progress-bar progress-bar-striped bg-success" style={{ width: "100%" }}></div>
                      </div>
                      <small>Payment Pending</small>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm bg-light" role="progressbar" aria-label="Progress">
                        <div
                          className={`progress-bar progress-bar-striped ${shippingProgress === 100 ? "bg-success" : "bg-warning"}`}
                          style={{ width: `${shippingProgress}%` }}
                        ></div>
                      </div>
                      <small>Shipping</small>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm bg-light" role="progressbar" aria-label="Progress">
                        <div className="progress-bar progress-bar-striped" style={{ width: "0%" }}></div>
                      </div>
                      <small>Delivered</small>
                    </div>
                  </div>

                  <button
                    onClick={handleMakeReadyToShip}
                    className="btn btn-sm btn-info waves-effect btn-shadow mt-4"
                  >
                    Make As Ready To Ship
                  </button>
                </div>
              </div>
            </div>

            {/* Products Table Card */}
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h6 className="card-title">Product</h6>
                </div>
                <div className="card-body p-2 pb-0">
                  <div className="table-responsive">
                    <table className="table table-row-rounded mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="minw-300px">Product Name & Size</th>
                          <th className="minw-100px">Status</th>
                          <th className="minw-100px">Quantity</th>
                          <th className="minw-100px">Price</th>
                          <th className="minw-100px">Tax</th>
                          <th className="minw-100px">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="d-block me-3 bg-light p-1 rounded-2">
                                <img className="maxw-50px rounded" src="/assets/images/ecommerce/products/pic2.png" alt="Smartwatch" />
                              </div>
                              <div className="clearfix">
                                <h6 className="mb-1">Smartwatch (Blue Strap)</h6>
                                <span className="text-body">Size: L</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge text-bg-success">Ready</span>
                          </td>
                          <td>2</td>
                          <td>$50.00</td>
                          <td>$5.00</td>
                          <td>$55.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="d-block me-3 bg-light p-1 rounded-2">
                                <img className="maxw-50px rounded" src="/assets/images/ecommerce/products/pic3.png" alt="Chair" />
                              </div>
                              <div className="clearfix">
                                <h6 className="mb-1">Orange Chair</h6>
                                <span className="text-body">Size: XL</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge text-bg-warning">Pending</span>
                          </td>
                          <td>1</td>
                          <td>$60.00</td>
                          <td>$3.00</td>
                          <td>$63.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="d-block me-3 bg-light p-1 rounded-2">
                                <img className="maxw-50px rounded" src="/assets/images/ecommerce/products/pic4.png" alt="Hoodie" />
                              </div>
                              <div className="clearfix">
                                <h6 className="mb-1">Pink Hoodie</h6>
                                <span className="text-body">Size: XS</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge text-bg-danger">Canceled</span>
                          </td>
                          <td>1</td>
                          <td>$60.00</td>
                          <td>$3.00</td>
                          <td>$63.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="d-block me-3 bg-light p-1 rounded-2">
                                <img className="maxw-50px rounded" src="/assets/images/ecommerce/products/pic5.png" alt="Cosmetics" />
                              </div>
                              <div className="clearfix">
                                <h6 className="mb-1">Cosmetic Products</h6>
                                <span className="text-body">Size: XXL</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge text-bg-light">Packaging</span>
                          </td>
                          <td>3</td>
                          <td>$75.00</td>
                          <td>$4.00</td>
                          <td>$79.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Timeline Card */}
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-header">
                  <h6 className="card-title mb-0">Order Timeline</h6>
                </div>
                <div className="card-body">
                  <div className="position-relative ms-4">
                    <span className="position-absolute start-0 top-0 border border-light h-100"></span>
                    
                    <div className="position-relative ps-4 mb-5">
                      <div className="position-absolute start-0 avatar avatar-xs bg-light rounded-circle text-white translate-middle-x">
                        <div className="spinner-border spinner-border-sm text-success border-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                      <div className="ms-2">
                        <p className="mb-1 text-2xs fw-semibold">Aug 25, 2025, 11:15 am</p>
                        <h6 className="mb-1 text-dark">The packing has been completed</h6>
                        <p className="mb-0 text-2xs">Confirmed by Sophia Johnson</p>
                      </div>
                    </div>

                    <div className="position-relative ps-4 mb-5">
                      <div className="position-absolute start-0 avatar avatar-xs bg-light rounded-circle text-success translate-middle-x d-flex align-items-center justify-content-center">
                        <i className="fi fi-rs-check-circle" style={{ fontSize: "14px" }}></i>
                      </div>
                      <div className="ms-2">
                        <p className="mb-1 text-2xs fw-semibold">Aug 25, 2025, 11:20 am</p>
                        <h6 className="mb-1 text-dark">The Invoice has been sent to the customer</h6>
                        <p className="mb-2 text-2xs">
                          Invoice email was sent to <a href="#" onClick={(e) => { e.preventDefault(); triggerToast("Sending Invoice..."); }} className="text-secondary">customer@abcstore.com</a>
                        </p>
                        <button onClick={() => triggerToast("Invoice resent successfully!")} className="badge border-0 text-bg-info" style={{ cursor: "pointer" }}>
                          Resend Invoice
                        </button>
                      </div>
                    </div>

                    <div className="position-relative ps-4 mb-5">
                      <div className="position-absolute start-0 avatar avatar-xs bg-light rounded-circle text-success translate-middle-x d-flex align-items-center justify-content-center">
                        <i className="fi fi-rs-check-circle" style={{ fontSize: "14px" }}></i>
                      </div>
                      <div className="ms-2">
                        <p className="mb-1 text-2xs fw-semibold">Aug 25, 2025, 11:25 am</p>
                        <h6 className="mb-1 text-dark">The Invoice has been generated</h6>
                        <p className="mb-2 text-2xs">Invoice created by Sophia Johnson</p>
                        <button onClick={() => triggerToast("Invoice PDF download started.")} className="badge border-0 text-bg-secondary" style={{ cursor: "pointer" }}>
                          Download Invoice
                        </button>
                      </div>
                    </div>

                    <div className="position-relative ps-4 mb-5">
                      <div className="position-absolute start-0 avatar avatar-xs bg-light rounded-circle text-success translate-middle-x d-flex align-items-center justify-content-center">
                        <i className="fi fi-rs-check-circle" style={{ fontSize: "14px" }}></i>
                      </div>
                      <div className="ms-2">
                        <p className="mb-1 text-2xs fw-semibold">Aug 25, 2025, 11:35 am</p>
                        <h6 className="mb-1 text-dark">
                          Order Payment <span className="badge badge-sm text-bg-success ms-1">Paid</span>
                        </h6>
                        <p className="mb-0 text-2xs">Using Visa Card</p>
                      </div>
                    </div>

                    <div className="position-relative ps-4">
                      <div className="position-absolute start-0 avatar avatar-xs bg-light rounded-circle text-success translate-middle-x d-flex align-items-center justify-content-center">
                        <i className="fi fi-rs-check-circle" style={{ fontSize: "14px" }}></i>
                      </div>
                      <div className="ms-2">
                        <p className="mb-1 text-2xs fw-semibold">Aug 25, 2025, 11:40 am</p>
                        <h6 className="mb-2 text-dark">3 Orders confirmed by Sophia Johnson</h6>
                        <button onClick={() => triggerToast("Viewing all 3 orders...")} className="badge border-0 text-bg-primary" style={{ cursor: "pointer" }}>
                          3 Orders
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side Column */}
        <div className="col-lg-4">
          <div className="row">
            
            {/* Order Price Details */}
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h6 className="card-title mb-0">Order Price</h6>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush pb-0">
                    <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                      Sub Total: <span className="text-body">$950.00</span>
                    </li>
                    <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                      Discount: <span className="text-body">-$120.00</span>
                    </li>
                    <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                      Delivery Charge: <span class="text-body">$15.00</span>
                    </li>
                    <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                      Estimated Tax (10%): <span className="text-body">$84.50</span>
                    </li>
                  </ul>
                </div>
                <div className="text-dark card-footer border-0 pt-0 d-flex justify-content-between align-items-center">
                  Total Amount: <p className="mb-0 fw-semibold text-md">$929.50</p>
                </div>
              </div>
            </div>

            {/* Customer Details Card */}
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                  <h6 className="card-title mb-0">Customer Details</h6>
                  <button
                    onClick={() => triggerToast("Editing Customer Details...")}
                    className="btn btn-action-gray btn-sm btn-icon waves-effect waves-light item-edit ms-auto"
                  >
                    <i className="fi fi-rr-pencil"></i>
                  </button>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3">
                    <div className="avatar rounded-circle">
                      <img src="/assets/images/avatar/avatar4.webp" alt="Ava Lewis" />
                    </div>
                    <div>
                      <h6 className="mb-0">Ava Lewis</h6>
                      <a href="mailto:johndoe@example.com" className="text-body text-2xs">johndoe@example.com</a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <h6>Contact Number:</h6>
                  </div>
                  <p className="mb-1 text-2xs">(123) 456-7890</p>
                  
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <h6>Shipping Address:</h6>
                      </div>
                      <p className="mb-1 text-2xs">ABC Store LTD</p>
                      <p className="mb-1 text-2xs">221B Baker Street,</p>
                      <p className="mb-1 text-2xs">London, NW1 6XE,</p>
                      <p className="mb-1 text-2xs">United Kingdom</p>
                      <p className="mb-1 text-2xs">(123) 456-7890</p>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center justify-content-between mt-4">
                        <h6>Billing Address:</h6>
                      </div>
                      <p className="mb-1 text-2xs">Workplace</p>
                      <p className="mb-1 text-2xs">221B Baker Street,</p>
                      <p className="mb-1 text-2xs">London, NW1 6XE,</p>
                      <p className="mb-1 text-2xs">United Kingdom</p>
                      <p className="mb-1 text-2xs">(123) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Layers Card */}
            <div className="col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div id="mapLayersControl" style={{ height: "300px", zIndex: 1 }} className="rounded-3"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
