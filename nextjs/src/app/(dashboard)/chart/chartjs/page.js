"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Chart) {
      const rootStyle = getComputedStyle(document.documentElement);
      const bsBodyBG = rootStyle.getPropertyValue('--bs-body-bg').trim() || '#ffffff';
      const bsPrimary = rootStyle.getPropertyValue('--bs-primary').trim() || '#316AFF';
      const bsSecondary = rootStyle.getPropertyValue('--bs-secondary').trim() || '#FF8110';
      const bsBodyColor = rootStyle.getPropertyValue('--bs-body-color').trim() || '#6c757d';
      const bsBorderColor = rootStyle.getPropertyValue('--bs-border-color').trim() || '#dee2e6';
      const bsHeadingColor = rootStyle.getPropertyValue('--bs-heading-color').trim() || '#212529';
      const bsFontFamily = rootStyle.getPropertyValue('--bs-body-font-family').trim() || '"Plus Jakarta Sans", sans-serif';

      // 1. Company Pay Chart
      let companyPayChart;
      const companyPayCanvas = document.getElementById('companyPayChart');
      if (companyPayCanvas) {
        const centerTextPlugin = {
          id: 'centerTextPlugin',
          afterDraw(chart) {
            const { ctx, chartArea: { left, right, top, bottom } } = chart;
            const centerX = (left + right) / 2;
            const centerY = (top + bottom) / 2;

            const dataset = chart.data.datasets[0];
            const total = dataset.data.reduce((acc, val) => acc + val, 0);

            let displayValue = total;
            let displayLabel = 'Total Data';

            const activeElements = chart.getActiveElements();
            if (activeElements.length > 0) {
              const firstPoint = activeElements[0];
              displayValue = dataset.data[firstPoint.index];
              displayLabel = chart.data.labels[firstPoint.index];
            }

            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            ctx.font = 'bold 26px sans-serif';
            ctx.fillStyle = bsHeadingColor;
            ctx.fillText(displayValue, centerX, centerY - 8);

            ctx.font = '14px sans-serif';
            ctx.fillStyle = bsBodyColor;
            ctx.fillText(displayLabel, centerX, centerY + 14);

            ctx.restore();
          }
        };

        const ctx = companyPayCanvas.getContext('2d');
        companyPayChart = new window.Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Salary', 'Bonus', 'Commission', 'Overtime', 'Reimbursement', 'Benefits'],
            datasets: [{
              data: [600, 643, 1608, 884, 2251, 1447],
              backgroundColor: ['#FF401C', '#22B07E', '#02B4FA', '#FF8110', '#316AFF', '#FDBB1F'],
              borderRadius: 30,
              spacing: 0,
              hoverOffset: 5,
              borderWidth: 2,
              borderColor: '#fff',
              hoverBorderColor: '#fff'
            }]
          },
          options: {
            cutout: '85%',
            devicePixelRatio: 2,
            layout: {
              padding: 10
            },
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                enabled: false,
                callbacks: {
                  label: context => `${context.label}: ${context.formattedValue}`
                }
              }
            }
          },
          plugins: [centerTextPlugin]
        });
      }

      // 2. Employee Type Chart
      let employeeTypeChart;
      const employeeTypeCanvas = document.getElementById('employeeTypeChart');
      if (employeeTypeCanvas) {
        const centerTextPlugin = {
          id: 'centerTextPlugin',
          afterDraw(chart) {
            const { ctx, chartArea: { left, right, top, bottom } } = chart;
            const centerX = (left + right) / 2;
            const centerY = (top + bottom) / 2;

            const dataset = chart.data.datasets[0];
            const total = dataset.data.reduce((acc, val) => acc + val, 0);

            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            ctx.font = 'bold 26px sans-serif';
            ctx.fillStyle = bsHeadingColor;
            ctx.fillText(total, centerX, centerY - 5);

            ctx.font = '14px sans-serif';
            ctx.fillStyle = bsBodyColor;
            ctx.fillText('Employee', centerX, centerY + 18);

            ctx.restore();
          }
        };

        const ctx = employeeTypeCanvas.getContext('2d');
        employeeTypeChart = new window.Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Onsite', 'Remote', 'Hybrid'],
            datasets: [{
              data: [600, 200, 200],
              backgroundColor: ['#316AFF', '#FF8110', '#FDBB1F'],
              borderRadius: 10,
              spacing: 0,
              hoverOffset: 5,
              borderWidth: 5,
              borderColor: '#fff',
              hoverBorderColor: '#fff'
            }]
          },
          options: {
            cutout: '65%',
            devicePixelRatio: 2,
            layout: {
              padding: 20
            },
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                callbacks: {
                  label: context => `${context.label}: ${context.formattedValue}`
                }
              }
            }
          },
          plugins: [centerTextPlugin]
        });
      }

      // 3. Performance Analysis Chart
      let performanceAnalysisChart;
      const performanceAnalysisCanvas = document.getElementById('performanceAnalysisChart');
      if (performanceAnalysisCanvas) {
        const ctx = performanceAnalysisCanvas.getContext('2d');
        performanceAnalysisChart = new window.Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency', 'Design'],
            datasets: [{
              label: 'Product A',
              data: [65, 59, 90, 81, 56, 55],
              fill: true,
              backgroundColor: 'rgba(13, 110, 253, 0.15)',
              borderColor: 'rgba(13, 110, 253, 1)',
              pointBackgroundColor: 'rgba(13, 110, 253, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(13, 110, 253, 1)'
            },
            {
              label: 'Product B',
              data: [28, 48, 40, 19, 96, 27],
              fill: true,
              backgroundColor: 'rgba(25, 135, 84, 0.15)',
              borderColor: 'rgba(25, 135, 84, 1)',
              pointBackgroundColor: 'rgba(25, 135, 84, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(25, 135, 84, 1)'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              line: {
                borderWidth: 2
              }
            },
            plugins: {
              legend: {
                display: false,
                labels: {
                  color: '#495057',
                  font: {
                    size: 12,
                    weight: '500',
                    family: bsFontFamily
                  },
                  padding: 15,
                }
              },
              tooltip: {
                enabled: true,
                backgroundColor: '#fff',
                titleColor: '#212529',
                bodyColor: '#495057',
                borderColor: '#dee2e6',
                borderWidth: 1,
                titleFont: {
                  size: 14,
                  weight: '500',
                  family: bsFontFamily
                },
                bodyFont: {
                  size: 13,
                  family: bsFontFamily
                },
                padding: 10
              }
            },
            scales: {
              r: {
                angleLines: {
                  color: '#dee2e6'
                },
                grid: {
                  color: '#e9ecef'
                },
                pointLabels: {
                  color: 'rgba(33, 37, 41, 0.8)',
                  font: {
                    size: 12,
                    weight: '500',
                    family: bsFontFamily
                  },
                  padding: 8
                },
                ticks: {
                  backdropColor: 'transparent',
                  color: '#6c757d',
                  stepSize: 20,
                  font: {
                    size: 12,
                    family: bsFontFamily
                  }
                },
                suggestedMin: 0,
                suggestedMax: 100
              }
            }
          }
        });
      }

      // 4. Bar Chart
      let barChart;
      const barCanvas = document.getElementById('barChart');
      if (barCanvas) {
        const ctx = barCanvas.getContext('2d');
        barChart = new window.Chart(ctx, {
          type: 'bar',
          data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sst", "Sun"],
            datasets: [{
              label: 'data-1',
              data: [12, 19, 3, 17, 28, 24, 7],
              backgroundColor: bsPrimary
            },
            {
              label: 'data-2',
              data: [30, 29, 5, 5, 20, 3, 10],
              backgroundColor: bsSecondary
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              line: {
                borderWidth: 2
              }
            },
            plugins: {
              legend: {
                display: false,
                labels: {
                  color: bsBodyColor,
                  font: {
                    size: 12,
                    weight: '500',
                    family: bsFontFamily,
                  },
                  padding: 15,
                }
              },
              tooltip: {
                enabled: true,
                backgroundColor: bsBodyBG,
                titleColor: bsHeadingColor,
                bodyColor: bsBodyColor,
                borderColor: bsBorderColor,
                borderWidth: 1,
                titleFont: {
                  size: 14,
                  weight: '500',
                  family: bsFontFamily,
                },
                bodyFont: {
                  size: 13,
                  family: bsFontFamily,
                },
                padding: 10
              }
            },
          }
        });
      }

      // 5. Line Chart
      let lineChart;
      const lineCanvas = document.getElementById('lineChart');
      if (lineCanvas) {
        const ctx = lineCanvas.getContext('2d');
        lineChart = new window.Chart(ctx, {
          type: 'line',
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: 'Dataset 1',
                data: [30, 50, 40, 60, 35, 70, 55],
                borderColor: bsPrimary,
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointBackgroundColor: bsPrimary
              },
              {
                label: 'Dataset 2',
                data: [20, 35, 45, 30, 60, 40, 65],
                borderColor: bsSecondary,
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointBackgroundColor: bsSecondary
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: true },
              tooltip: {
                backgroundColor: bsBodyColor,
                titleColor: bsHeadingColor,
                bodyColor: bsBodyColor,
                borderColor: bsBorderColor,
                borderWidth: 1
              }
            },
            scales: {
              x: {
                grid: {
                  color: '#eee'
                }
              },
              y: {
                beginAtZero: true,
                grid: {
                  color: '#eee'
                }
              }
            }
          }
        });
      }

      if (window.initSelectPicker) {
        window.initSelectPicker();
      }

      return () => {
        if (companyPayChart) companyPayChart.destroy();
        if (employeeTypeChart) employeeTypeChart.destroy();
        if (performanceAnalysisChart) performanceAnalysisChart.destroy();
        if (barChart) barChart.destroy();
        if (lineChart) lineChart.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="app-page-head">
          <h1 className="app-page-title">Chart js</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Chart js
              </li>
            </ol>
          </nav>
        </div>

        <div className="row">
          <div className="col-xxl-5 col-lg-7">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Company Pay</h6>
                <select className="selectpicker" data-style="btn-sm btn-outline-light btn-shadow waves-effect" defaultValue="pending">
                  <option value="pending">2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>
              </div>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-sm-6">
                    <div className="maxw-250px ratio ratio-1x1">
                      <canvas id="companyPayChart"></canvas>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-grid gap-2">
                      <div className="d-flex gap-1 align-items-center mx-1">
                        <i className="fa fa-circle text-danger text-2xs me-1"></i>
                        <strong className="text-dark fw-semibold">15%</strong> Salary
                      </div>
                      <div className="d-flex gap-1 align-items-center mx-1">
                        <i className="fa fa-circle text-success text-2xs me-1"></i>
                        <strong className="text-dark fw-semibold">08%</strong> Bonus
                      </div>
                      <div className="d-flex gap-1 align-items-center mx-1">
                        <i className="fa fa-circle text-info text-2xs me-1"></i>
                        <strong className="text-dark fw-semibold">20%</strong> Commission
                      </div>
                      <div className="d-flex gap-1 align-items-center mx-1">
                        <i className="fa fa-circle text-secondary text-2xs me-1"></i>
                        <strong className="text-dark fw-semibold">11%</strong> Overtime
                      </div>
                      <div className="d-flex gap-1 align-items-center mx-1">
                        <i className="fa fa-circle text-primary text-2xs me-1"></i>
                        <strong className="text-dark fw-semibold">28%</strong> Reimbursement
                      </div>
                      <div className="d-flex gap-1 align-items-center mx-1">
                        <i className="fa fa-circle text-warning text-2xs me-1"></i>
                        <strong className="text-dark fw-semibold">18%</strong> Benefits
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row gy-3 align-items-center">
                  <div className="col-sm-6">
                    <p className="mb-0">2024 Download Report Company Trends and Insights</p>
                  </div>
                  <div className="col-sm-6 text-sm-end">
                    <button type="button" className="btn btn-primary waves-effect waves-light">
                      <i className="fi fi-rr-download me-1"></i> Download Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-lg-5 col-md-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between border-0 pb-0">
                <h6 className="card-title mb-0">Employee Type </h6>
                <div className="btn-group">
                  <button className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fi fi-rr-menu-dots"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">Onsite</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Remote</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Hybrid</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body py-0 px-3 d-flex align-items-center justify-content-center">
                <div className="maxw-250px ratio ratio-1x1">
                  <canvas id="employeeTypeChart"></canvas>
                </div>
              </div>
              <div className="card-footer pt-0 border-0">
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  <div className="d-flex gap-1 align-items-center mx-1">
                    <i className="fa fa-circle text-primary text-2xs"></i>
                    <strong className="text-dark fw-semibold">800</strong> Onsite
                  </div>
                  <div className="d-flex gap-1 align-items-center mx-1">
                    <i className="fa fa-circle text-secondary text-2xs"></i>
                    <strong className="text-dark fw-semibold">105</strong> Remote
                  </div>
                  <div className="d-flex gap-1 align-items-center mx-1">
                    <i className="fa fa-circle text-info text-2xs"></i>
                    <strong className="text-dark fw-semibold">301</strong> Hybrid
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-md-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h6 className="card-title">Performance Analysis</h6>
              </div>
              <div className="card-body">
                <canvas id="performanceAnalysisChart" height="320"></canvas>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h6 className="card-title">Bar Chart</h6>
              </div>
              <div className="card-body">
                <canvas id="barChart" height="320"></canvas>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h6 className="card-title">Line Chart</h6>
              </div>
              <div className="card-body">
                <canvas id="lineChart" height="320"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
