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

        <div className="app-page-head">
          <h1 className="app-page-title">Accordion</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Accordion</li>
            </ol>
          </nav>
        </div>

        <div className="row">

          <div className="col-lg-12 mb-5">
            <h6 className="mb-3">Accordion Custom Primary</h6>
            <div className="accordion accordion-custom-button accordion-primary" id="accordionCustomPrimary">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#CustomPrimary-collapseOne" aria-expanded="false" aria-controls="CustomPrimary-collapseOne">Accordion Item #1</button>
                </h2>
                <div id="CustomPrimary-collapseOne" className="accordion-collapse collapse collapse show" data-bs-parent="#accordionCustomPrimary">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomPrimary-collapseTwo" aria-expanded="false" aria-controls="CustomPrimary-collapseTwo">Accordion Item #2</button>
                </h2>
                <div id="CustomPrimary-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionCustomPrimary">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomPrimary-collapseThree" aria-expanded="false" aria-controls="CustomPrimary-collapseThree">Accordion Item #3</button>
                </h2>
                <div id="CustomPrimary-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionCustomPrimary">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-5">
            <h6 className="mb-3">Accordion Custom Secondary</h6>
            <div className="accordion accordion-custom-button accordion-secondary" id="accordionCustomSecondary">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#CustomSecondary-collapseOne" aria-expanded="false" aria-controls="CustomSecondary-collapseOne">Accordion Item #1</button>
                </h2>
                <div id="CustomSecondary-collapseOne" className="accordion-collapse collapse collapse show" data-bs-parent="#accordionCustomSecondary">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomSecondary-collapseTwo" aria-expanded="false" aria-controls="CustomSecondary-collapseTwo">Accordion Item #2</button>
                </h2>
                <div id="CustomSecondary-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionCustomSecondary">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CustomSecondary-collapseThree" aria-expanded="false" aria-controls="CustomSecondary-collapseThree">Accordion Item #3</button>
                </h2>
                <div id="CustomSecondary-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionCustomSecondary">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-5">
            <h6 className="mb-3">Accordion with icon</h6>
            <div className="accordion" id="accordionWithIcon">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#WithIcon-collapseOne" aria-expanded="true" aria-controls="WithIcon-collapseOne">
                    <i className="fi fi-rr-star me-2 scale-2x"></i>
                    Accordion Item #1
                  </button>
                </h2>
                <div id="WithIcon-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionWithIcon">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#WithIcon-collapseTwo" aria-expanded="false" aria-controls="WithIcon-collapseTwo">
                    <i className="fi fi-rr-gift me-2 scale-2x"></i>
                    Accordion Item #2
                  </button>
                </h2>
                <div id="WithIcon-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionWithIcon">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#WithIcon-collapseThree" aria-expanded="false" aria-controls="WithIcon-collapseThree">
                    <i className="fi fi-rr-trophy-star me-2 scale-2x"></i>
                    Accordion Item #3
                  </button>
                </h2>
                <div id="WithIcon-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionWithIcon">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-5">
            <h6 className="mb-3">Default Accordion</h6>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Accordion Item #1</button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Accordion Item #2</button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Accordion Item #3</button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-5">
            <h6 className="mb-3">Flush</h6>
            <div className="accordion accordion-flush p-2 border bg-light rounded" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Accordion Item #1</button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Accordion Item #2</button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Accordion Item #3</button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mb-5">
            <h6 className="mb-3">Always open</h6>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">Accordion Item #1</button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">Accordion Item #2</button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">Accordion Item #3</button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
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
