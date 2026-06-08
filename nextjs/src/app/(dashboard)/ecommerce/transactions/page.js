"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const initialTransactions = [
  {
    id: 1,
    invoiceId: "#INV6725",
    customer: "John Carter",
    avatar: "/assets/images/avatar/avatar1.webp",
    status: "Completed",
    amount: "$529.00",
    date: "18 Jul, 2025",
    method: "MasterCard"
  },
  {
    id: 2,
    invoiceId: "#INV6726",
    customer: "Emma Watson",
    avatar: "/assets/images/avatar/avatar2.webp",
    status: "Pending",
    amount: "$312.00",
    date: "19 Jul, 2025",
    method: "PayPal"
  },
  {
    id: 3,
    invoiceId: "#INV6727",
    customer: "Michael Smith",
    avatar: "/assets/images/avatar/avatar3.webp",
    status: "Cancelled",
    amount: "$178.00",
    date: "20 Jul, 2025",
    method: "Visa"
  },
  {
    id: 4,
    invoiceId: "#INV6728",
    customer: "Sophia Johnson",
    avatar: "/assets/images/avatar/avatar4.webp",
    status: "Completed",
    amount: "$850.00",
    date: "21 Jul, 2025",
    method: "Bank Transfer"
  },
  {
    id: 5,
    invoiceId: "#INV6729",
    customer: "William Brown",
    avatar: "/assets/images/avatar/avatar5.webp",
    status: "Pending",
    amount: "$245.00",
    date: "22 Jul, 2025",
    method: "UPI"
  },
  {
    id: 6,
    invoiceId: "#INV6730",
    customer: "Olivia Davis",
    avatar: "/assets/images/avatar/avatar6.webp",
    status: "Completed",
    amount: "$399.00",
    date: "23 Jul, 2025",
    method: "Credit Card"
  },
  {
    id: 7,
    invoiceId: "#INV6731",
    customer: "James Miller",
    avatar: "/assets/images/avatar/avatar7.webp",
    status: "Cancelled",
    amount: "$510.00",
    date: "24 Jul, 2025",
    method: "Cash"
  },
  {
    id: 8,
    invoiceId: "#INV6732",
    customer: "Isabella Wilson",
    avatar: "/assets/images/avatar/avatar8.webp",
    status: "Pending",
    amount: "$685.00",
    date: "25 Jul, 2025",
    method: "PayPal"
  },
  {
    id: 9,
    invoiceId: "#INV6733",
    customer: "Alexander Moore",
    avatar: "/assets/images/avatar/avatar9.webp",
    status: "Completed",
    amount: "$920.00",
    date: "26 Jul, 2025",
    method: "Net Banking"
  },
  {
    id: 10,
    invoiceId: "#INV6734",
    customer: "Mia Taylor",
    avatar: "/assets/images/avatar/avatar10.webp",
    status: "Pending",
    amount: "$370.00",
    date: "27 Jul, 2025",
    method: "Debit Card"
  }
];

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [toastMessage, setToastMessage] = useState("");
  const itemsPerPage = 7; // Matches the DataTable configuration in ecommerce.js

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  // Filter transactions based on search query
  const filteredTransactions = transactions.filter((tx) => {
    const q = searchQuery.toLowerCase();
    return (
      tx.invoiceId.toLowerCase().includes(q) ||
      tx.customer.toLowerCase().includes(q) ||
      tx.method.toLowerCase().includes(q) ||
      tx.status.toLowerCase().includes(q)
    );
  });

  const totalItems = filteredTransactions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  // Adjust page number if items shrink
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredTransactions.length, totalPages, currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);

  const handleDelete = (id, invoiceId) => {
    setTransactions(prev => prev.filter(item => item.id !== id));
    triggerToast(`Transaction ${invoiceId} deleted successfully!`);
  };

  const handleEdit = (invoiceId) => {
    triggerToast(`Editing transaction ${invoiceId}`);
  };

  return (
    <div className="container">
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
          <h1 className="app-page-title">Transactions</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Transactions
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            {/* Card Header with search and page size info */}
            <div className="card-header d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0">
              <h6 className="card-title mb-0">Transactions History</h6>
              <div id="dt_TransactionsHistory_Search">
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

            {/* Table Body */}
            <div className="card-body p-2">
              <div className="table-responsive">
                <table className="table display table-row-rounded">
                  <thead className="table-light">
                    <tr>
                      <th className="minw-150px">Invoice ID</th>
                      <th className="minw-200px">Customer Name</th>
                      <th className="minw-150px">Status</th>
                      <th className="minw-150px">Total Amount</th>
                      <th className="minw-150px">Order Date</th>
                      <th className="minw-200px">Payment Method</th>
                      <th className="minw-150px">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedTransactions.length > 0 ? (
                      paginatedTransactions.map((tx) => (
                        <tr key={tx.id}>
                          <td>{tx.invoiceId}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-2 rounded-circle">
                                <img src={tx.avatar} alt={tx.customer} className="object-fit-cover rounded-circle" width="32" height="32" />
                              </div>
                              <div className="clearfix">
                                <h6 className="mb-0">{tx.customer}</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span
                              className={`badge ${
                                tx.status === "Completed"
                                  ? "bg-success-subtle text-success"
                                  : tx.status === "Pending"
                                  ? "bg-warning-subtle text-warning"
                                  : "bg-danger-subtle text-danger"
                              }`}
                            >
                              {tx.status}
                            </span>
                          </td>
                          <td>{tx.amount}</td>
                          <td>{tx.date}</td>
                          <td>{tx.method}</td>
                          <td>
                            <button
                              onClick={() => handleEdit(tx.invoiceId)}
                              className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1"
                              type="button"
                              title="Edit"
                            >
                              <i className="icon-square-pen"></i>
                            </button>
                            <button
                              onClick={() => handleDelete(tx.id, tx.invoiceId)}
                              className="btn btn-white btn-sm btn-shadow btn-icon waves-effect"
                              type="button"
                              title="Delete"
                            >
                              <i className="icon-trash-2"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center py-4 text-muted">
                          No transactions found.
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
