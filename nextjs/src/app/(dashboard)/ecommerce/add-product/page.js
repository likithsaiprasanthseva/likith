"use client";

import { useEffect } from "react";
import Script from "next/script";
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
      <Script src="/assets/libs/tagify/tagify.js" strategy="afterInteractive" />
      <Script src="/assets/js/tagify.js" strategy="lazyOnload" />


      <div className="container">

        <div className="app-page-head d-flex flex-wrap gap-3 align-items-center justify-content-between">
          <div className="clearfix">
            <h1 className="app-page-title">Add Product</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Add Product</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-4 col-xxl-3">
            <div className="row">

              <div className="col-12">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h6 className="card-title">Upload Image</h6>
                  </div>
                  <div className="card-body text-center">
                    <div className="text-center mb-2 border border-dashed rounded-2 py-5">
                      <img width="80" src="/assets/images/icons/picture.png" alt="" />
                    </div>
                    <p className="text-2xs">1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed</p>
                    <div className="text-center pt-2">
                      <form>
                        <input type="file" id="productImage" className="form-control visually-hidden" />
                        <label htmlFor="productImage" className="btn btn-outline-light waves-effect d-block">Upload Image</label>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h6 className="card-title">Product Details</h6>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-12 mb-3">
                        <label className="form-label">Category</label>
                        <select defaultValue="Fashion" className="form-select" aria-label="Default select example">
                          <option>Fashion</option>
                          <option value="Grocery">Grocery</option>
                          <option value="Jewellery">Jewellery</option>
                          <option value="Beauty">Beauty</option>
                        </select>
                      </div>
                      <div className="col-12 mb-3">
                        <label className="form-label">Sub Category</label>
                        <select defaultValue="Electronics" className="form-select" aria-label="Default select example">
                          <option>Electronics</option>
                          <option value="Grocery">Grocery</option>
                          <option value="Jewellery">Jewellery</option>
                          <option value="Beauty">Beauty</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Tags</label>
                        <input className="form-control tagify-input" value='Shirt, Wear, Clothing, Printed' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h6 className="card-title">Product Attribute</h6>
                  </div>
                  <div className="card-body">
                    <div className="row">

                      <div className="col-12 mb-3">
                        <p className="mb-1">Size</p>
                        <div className="mb-0">
                          <input type="radio" className="btn-check" name="options" id="option4" />
                          <label className="btn btn-sm btn-icon waves-effect waves-light btn-primary me-1 mb-1" htmlFor="option4">XS</label>

                          <input type="radio" className="btn-check" name="options" id="option1" defaultChecked />
                          <label className="btn btn-sm btn-icon waves-effect waves-light btn-primary me-1 mb-1" htmlFor="option1">SM</label>

                          <input type="radio" className="btn-check" name="options" id="option2" />
                          <label className="btn btn-sm btn-icon waves-effect waves-light btn-primary me-1 mb-1" htmlFor="option2">LG</label>

                          <input type="radio" className="btn-check" name="options" id="option3" />
                          <label className="btn btn-sm btn-icon waves-effect waves-light btn-primary me-1 mb-1" htmlFor="option3">XL</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <p className="mb-1">Color</p>
                        <input type="color" className="form-control form-control-color" value="#316AFF" title="Choose your color" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-8 col-xxl-9">
            <div className="row">

              <div className="col-12">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h6 className="card-title">Product Information</h6>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <label className="form-label">Product Name</label>
                      <input type="email" className="form-control" placeholder="Product Name" />
                      <p className="mb-0 text-2xs">A product name is required and recommended to be unique.</p>
                    </div>
                    <div className="mb-0">
                      <label className="form-label">Description</label>
                      <textarea className="form-control" rows="6"></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title">Details</h6>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-xxl-3 col-sm-6 mb-3">
                        <label className="form-label">Base Price</label>
                        <input type="email" className="form-control" placeholder="Product Price" />
                        <p className="mb-0 text-2xs">Set the base price of product.</p>
                      </div>
                      <div className="col-xxl-3 col-sm-6 mb-3">
                        <label className="form-label">SKU</label>
                        <input type="email" className="form-control" placeholder="SKU" />
                        <p className="mb-0 text-2xs">Enter the product SKU.</p>
                      </div>
                      <div className="col-xxl-3 col-sm-6 mb-3">
                        <label className="form-label">Qantity</label>
                        <input type="email" className="form-control" placeholder="Qantity" />
                        <p className="mb-0 text-2xs">Enter the product quantity.</p>
                      </div>
                      <div className="col-xxl-3 col-sm-6 mb-3">
                        <label className="form-label">VAT Ammount (%)</label>
                        <input type="email" className="form-control" placeholder="VAT" />
                        <p className="mb-0 text-2xs">Set the product VAT about.</p>
                      </div>
                      <p className="mb-2 mt-2">Discount Type</p>
                      <div className="d-flex flex-wrap align-items-center gap-3">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                          <label className="form-check-label" htmlFor="checkDefault">
                            No Discount
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="checkDefault2" />
                          <label className="form-check-label" htmlFor="checkDefault2">
                            Fixed Discount
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="checkDefault3" />
                          <label className="form-check-label" htmlFor="checkDefault3">
                            Percent Discount
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h6 className="card-title">Shipping</h6>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-xxl-3 col-sm-6 mb-3">
                        <label className="form-label">Width (Inch)</label>
                        <input type="email" className="form-control" placeholder="Width" />
                        <p className="mb-0 text-2xs">Set the product width.</p>
                      </div>
                      <div className="col-xxl-3 col-sm-6 mb-3">
                        <label className="form-label">Height (Inch)</label>
                        <input type="email" className="form-control" placeholder="Height" />
                        <p className="mb-0 text-2xs">Set the product height.</p>
                      </div>
                      <div className="col-xxl-3 col-sm-6 mb-3">
                        <label className="form-label">Weight (KG)</label>
                        <input type="email" className="form-control" placeholder="Weight" />
                        <p className="mb-0 text-2xs">Set the product weight.</p>
                      </div>
                      <div className="col-xxl-3 col-sm-6 mb-3">
                        <label className="form-label">Shipping Cost</label>
                        <input type="email" className="form-control" placeholder="$0.00" />
                        <p className="mb-0 text-2xs">Set the product shipping cost.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-primary waves-effect waves-light">Publish</button>
                <button type="button" className="btn btn-outline-light waves-effect">Save Draft</button>
              </div>
            </div>
          </div>

        </div>

      </div>

    
    </>
  );
}
