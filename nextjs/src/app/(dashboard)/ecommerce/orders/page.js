"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const initialOrders = [
  {
    id: 1,
    product: "Smart Home Electronics Kit",
    date: "12 July 2025",
    orderId: "#257896",
    qty: "x2",
    price: "$58.00",
    total: "$145.50",
    status: "Confirmed",
    image: "/assets/images/ecommerce/products/list/1.webp"
  },
  {
    id: 2,
    product: "Modern Wooden Office Chair",
    date: "12 July 2025",
    orderId: "#257897",
    qty: "x2",
    price: "$58.00",
    total: "$145.50",
    status: "Shipped",
    image: "/assets/images/ecommerce/products/list/2.webp"
  },
  {
    id: 3,
    product: "Luxury Fashion Hoodie Wear",
    date: "12 July 2025",
    orderId: "#257898",
    qty: "x2",
    price: "$58.00",
    total: "$145.50",
    status: "Pending",
    image: "/assets/images/ecommerce/products/list/3.webp"
  },
  {
    id: 4,
    product: "Organic Beauty Skincare Set",
    date: "12 July 2025",
    orderId: "#257899",
    qty: "x2",
    price: "$58.00",
    total: "$145.50",
    status: "Shipped",
    image: "/assets/images/ecommerce/products/list/4.webp"
  },
  {
    id: 5,
    product: "Professional Sports Fitness Gear",
    date: "12 July 2025",
    orderId: "#257900",
    qty: "x2",
    price: "$58.00",
    total: "$145.50",
    status: "Pending",
    image: "/assets/images/ecommerce/products/list/5.webp"
  },
  {
    id: 6,
    product: "Trendy Travel Luggage Bag",
    date: "12 July 2025",
    orderId: "#257901",
    qty: "x2",
    price: "$58.00",
    total: "$145.50",
    status: "Confirmed",
    image: "/assets/images/ecommerce/products/list/6.webp"
  },
  {
    id: 7,
    product: "Smart Home Electronics Kit",
    date: "12 July 2025",
    orderId: "#257902",
    qty: "x2",
    price: "$58.00",
    total: "$145.50",
    status: "Confirmed",
    image: "/assets/images/ecommerce/products/list/1.webp"
  },
  {
    id: 8,
    product: "Modern Wooden Office Chair",
    date: "12 July 2025",
    orderId: "#257903",
    qty: "x2",
    price: "$58.00",
    total: "$145.50",
    status: "Shipped",
    image: "/assets/images/ecommerce/products/list/2.webp"
  },
  {
    id: 9,
    product: "Luxury Fashion Hoodie Wear",
    date: "12 July 2025",
    orderId: "#257904",
    qty: "x2",
    price: "$58.00",
    total: "$145.50",
    status: "Pending",
    image: "/assets/images/ecommerce/products/list/3.webp"
  }
];

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const itemsPerPage = 6;
  const dropdownRef = useRef(null);

  // Close open action dropdowns if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter orders by search query and status filter
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderId.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus =
      statusFilter === "All Status" ||
      order.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Calculate pagination window
  const totalItems = filteredOrders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  
  // Adjust current page if filters reduce result count
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredOrders.length, totalPages, currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

  // Checkbox management
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const pageIds = paginatedOrders.map(o => o.id);
      setSelectedIds(prev => Array.from(new Set([...prev, ...pageIds])));
    } else {
      const pageIds = paginatedOrders.map(o => o.id);
      setSelectedIds(prev => prev.filter(id => !pageIds.includes(id)));
    }
  };

  const handleSelectItem = (id, checked) => {
    if (checked) {
      setSelectedIds(prev => [...prev, id]);
    } else {
      setSelectedIds(prev => prev.filter(item => item !== id));
    }
  };

  const isPageAllSelected = () => {
    if (paginatedOrders.length === 0) return false;
    return paginatedOrders.every(o => selectedIds.includes(o.id));
  };

  // Actions
  const handleDeleteRow = (id) => {
    setOrders(prev => prev.filter(o => o.id !== id));
    setSelectedIds(prev => prev.filter(item => item !== id));
    triggerToast("Order deleted successfully!");
    setOpenDropdownId(null);
  };

  const handleEditRow = (product) => {
    triggerToast(`Editing details for "${product}"`);
    setOpenDropdownId(null);
  };

  const handleViewDetails = (product) => {
    triggerToast(`Viewing details for "${product}"`);
  };

  const handleDownloadReport = () => {
    // Generate CSV string from orders state
    const headers = ["Order ID", "Product", "Date", "QTY", "Price", "Total Price", "Status"];
    const csvRows = [headers.join(",")];

    orders.forEach(order => {
      const row = [
        order.orderId,
        `"${order.product}"`,
        order.date,
        order.qty,
        order.price,
        order.total,
        order.status
      ];
      csvRows.push(row.join(","));
    });

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "recent_orders_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    triggerToast("Report CSV downloaded successfully!");
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  return (
    <div className="container" ref={dropdownRef}>
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
          <h1 className="app-page-title">Orders</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Orders
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card overflow-hidden">
            {/* Table Control Header */}
            <div className="card-header d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0">
              <h6 className="card-title mb-0">Recent Orders</h6>
              <div className="d-flex gap-3 flex-wrap align-items-center">
                <button
                  type="button"
                  onClick={handleDownloadReport}
                  className="btn btn-sm btn-outline-light btn-shadow waves-effect"
                >
                  Download Report
                </button>
                
                {/* Status Dropdown Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="form-select form-select-sm w-auto btn-shadow border-light text-muted"
                  style={{ minWidth: "120px", height: "31px", fontSize: "12px", cursor: "pointer" }}
                >
                  <option value="All Status">All Status</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Pending">Pending</option>
                </select>

                {/* Custom DataTable Search Input */}
                <div id="dt_RecentOrders_Search">
                  <div className="dt-search position-relative">
                    <i className="fi fi-rr-search position-absolute start-0 top-50 translate-middle-y ms-2 text-muted" style={{ zIndex: 1, pointerEvents: "none" }}></i>
                    <input
                      type="search"
                      className="form-control form-control-sm ps-4 border-light"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      style={{ height: "31px", fontSize: "12px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="card-body p-2">
              <div className="table-responsive">
                <table className="table display table-row-rounded data-row-checkbox">
                  <thead className="table-light">
                    <tr>
                      <th className="pe-0" style={{ width: "40px" }}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={isPageAllSelected()}
                            onChange={handleSelectAll}
                          />
                        </div>
                      </th>
                      <th className="minw-300px">Product</th>
                      <th className="minw-150px">Order ID</th>
                      <th className="minw-100px">QTY</th>
                      <th className="minw-100px">Price</th>
                      <th className="minw-150px">Total Price</th>
                      <th className="minw-150px">Status</th>
                      <th className="minw-150px">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedOrders.length > 0 ? (
                      paginatedOrders.map((order) => (
                        <tr key={order.id} className={selectedIds.includes(order.id) ? "table-active" : ""}>
                          <td className="pe-0">
                            <div className="form-check p-0 w-auto d-inline-block">
                              <input
                                className="form-check-input m-0"
                                type="checkbox"
                                checked={selectedIds.includes(order.id)}
                                onChange={(e) => handleSelectItem(order.id, e.target.checked)}
                              />
                            </div>
                          </td>
                          <td className="ps-2">
                            <div className="d-flex align-items-center">
                              <img
                                src={order.image}
                                width="70"
                                height="70"
                                alt={order.product}
                                className="rounded-3 object-fit-cover"
                              />
                              <div className="ms-2">
                                <h6 className="mb-0">
                                  <a href="#" onClick={(e) => { e.preventDefault(); handleViewDetails(order.product); }} className="text-dark">
                                    {order.product}
                                  </a>
                                </h6>
                                <small className="text-body">{order.date}</small>
                              </div>
                            </div>
                          </td>
                          <td>{order.orderId}</td>
                          <td>{order.qty}</td>
                          <td>{order.price}</td>
                          <td>
                            <strong>{order.total}</strong>
                          </td>
                          <td>
                            <span
                              className={`badge badge-lg ${
                                order.status === "Confirmed"
                                  ? "text-bg-success"
                                  : order.status === "Shipped"
                                  ? "text-bg-info"
                                  : "text-bg-light"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td>
                            <button
                              className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1"
                              type="button"
                              onClick={() => handleViewDetails(order.product)}
                              title="View Details"
                            >
                              <i className="icon-eye"></i>
                            </button>
                            
                            <div className={`btn-group ${openDropdownId === order.id ? "show" : ""}`}>
                              <button
                                className="btn btn-white btn-sm btn-shadow btn-icon waves-effect dropdown-toggle"
                                type="button"
                                onClick={() =>
                                  setOpenDropdownId(openDropdownId === order.id ? null : order.id)
                                }
                                aria-expanded={openDropdownId === order.id}
                              >
                                <i className="fi fi-rr-menu-dots"></i>
                              </button>
                              <ul
                                className={`dropdown-menu dropdown-menu-end ${
                                  openDropdownId === order.id ? "show" : ""
                                }`}
                                style={{
                                  position: "absolute",
                                  inset: "0px 0px auto auto",
                                  margin: "0px",
                                  transform: "translate(0px, 31px)",
                                  display: openDropdownId === order.id ? "block" : "none"
                                }}
                              >
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleEditRow(order.product);
                                    }}
                                  >
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item text-danger"
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleDeleteRow(order.id);
                                    }}
                                  >
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center py-4 text-muted">
                          No matching orders found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Custom Stateful Pagination Controls */}
              {totalItems > 0 && (
                <div className="d-flex flex-wrap align-items-center justify-content-between px-3 py-2 border-top border-light mt-2">
                  <div className="text-muted" style={{ fontSize: "13px" }}>
                    Showing {startIndex + 1} to {endIndex} of {totalItems} entries
                    {selectedIds.length > 0 && (
                      <span className="ms-2 text-primary">
                        ({selectedIds.length} selected)
                      </span>
                    )}
                  </div>
                  <nav aria-label="Page navigation">
                    <ul className="pagination pagination-sm mb-0">
                      {/* First Page */}
                      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(1)}
                          disabled={currentPage === 1}
                        >
                          <i className="fi fi-rr-angle-double-left"></i>
                        </button>
                      </li>
                      {/* Previous Page */}
                      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                        >
                          <i className="fi fi-rr-angle-left"></i>
                        </button>
                      </li>
                      
                      {/* Page Numbers */}
                      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
                        <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(page)}
                          >
                            {page}
                          </button>
                        </li>
                      ))}

                      {/* Next Page */}
                      <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                        >
                          <i className="fi fi-rr-angle-right"></i>
                        </button>
                      </li>
                      {/* Last Page */}
                      <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(totalPages)}
                          disabled={currentPage === totalPages}
                        >
                          <i className="fi fi-rr-angle-double-right"></i>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
