"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const initialProducts = [
  {
    id: 1,
    name: "Smartwatch (Blue Strap)",
    image: "/assets/images/ecommerce/products/pic2.png",
    productId: "PROD201",
    price: "$149.00",
    qty: 40,
    sale: "12%",
    stock: "In Stock",
    date: "02-08-2025"
  },
  {
    id: 2,
    name: "Orange Chair",
    image: "/assets/images/ecommerce/products/pic3.png",
    productId: "PROD202",
    price: "$179.00",
    qty: 25,
    sale: "8%",
    stock: "In Stock",
    date: "06-08-2025"
  },
  {
    id: 3,
    name: "Pink Hoodie",
    image: "/assets/images/ecommerce/products/pic4.png",
    productId: "PROD203",
    price: "$89.00",
    qty: 18,
    sale: "14%",
    stock: "Low Stock",
    date: "11-08-2025"
  },
  {
    id: 4,
    name: "Cosmetic Products (Creams & Tubes Set)",
    image: "/assets/images/ecommerce/products/pic5.png",
    productId: "PROD204",
    price: "$65.00",
    qty: 85,
    sale: "18%",
    stock: "In Stock",
    date: "21-08-2025"
  },
  {
    id: 5,
    name: "Handbags (Green and Pink Tote Bags)",
    image: "/assets/images/ecommerce/products/pic6.png",
    productId: "PROD205",
    price: "$139.00",
    qty: 55,
    sale: "9%",
    stock: "In Stock",
    date: "16-08-2025"
  },
  {
    id: 6,
    name: "Backpack (School Bag with books and stationery)",
    image: "/assets/images/ecommerce/products/pic7.png",
    productId: "PROD206",
    price: "$89.00",
    qty: 45,
    sale: "11%",
    stock: "In Stock",
    date: "17-08-2025"
  },
  {
    id: 7,
    name: "Hoodie Jacket (Zipper Hoodie)",
    image: "/assets/images/ecommerce/products/pic8.png",
    productId: "PROD207",
    price: "$109.00",
    qty: 38,
    sale: "13%",
    stock: "In Stock",
    date: "18-08-2025"
  },
  {
    id: 8,
    name: "Beige Armchair (Single Seater Chair)",
    image: "/assets/images/ecommerce/products/pic9.png",
    productId: "PROD208",
    price: "$229.00",
    qty: 22,
    sale: "7%",
    stock: "Low Stock",
    date: "19-08-2025"
  },
  {
    id: 9,
    name: "Yellow Modern Armchair",
    image: "/assets/images/ecommerce/products/pic10.png",
    productId: "PROD209",
    price: "$239.00",
    qty: 27,
    sale: "6%",
    stock: "In Stock",
    date: "20-08-2025"
  },
  {
    id: 10,
    name: "Red Wingback Chair",
    image: "/assets/images/ecommerce/products/pic11.png",
    productId: "PROD210",
    price: "$259.00",
    qty: 33,
    sale: "9%",
    stock: "In Stock",
    date: "21-08-2025"
  },
  {
    id: 11,
    name: "Alarm Clock (Analog Table Clock)",
    image: "/assets/images/ecommerce/products/pic12.png",
    productId: "PROD211",
    price: "$49.00",
    qty: 65,
    sale: "16%",
    stock: "In Stock",
    date: "22-08-2025"
  },
  {
    id: 12,
    name: "Classic Wrist Watch (Leather Strap Watch)",
    image: "/assets/images/ecommerce/products/pic13.png",
    productId: "PROD212",
    price: "$199.00",
    qty: 42,
    sale: "10%",
    stock: "In Stock",
    date: "23-08-2025"
  },
  {
    id: 13,
    name: "Smartwatch (Black Strap)",
    image: "/assets/images/ecommerce/products/pic14.png",
    productId: "PROD213",
    price: "$159.00",
    qty: 48,
    sale: "14%",
    stock: "In Stock",
    date: "24-08-2025"
  }
];

export default function ProductListPage() {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [toastMessage, setToastMessage] = useState("");
  const itemsPerPage = 7; // Matches original datatable configs/look and feel

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const handleEditRow = (name) => {
    triggerToast(`Editing details for "${name}"`);
  };

  const handleDeleteRow = (id, name) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setSelectedIds((prev) => prev.filter((itemId) => itemId !== id));
    triggerToast(`"${name}" deleted successfully!`);
  };

  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) return;
    setProducts((prev) => prev.filter((p) => !selectedIds.includes(p.id)));
    triggerToast(`Deleted ${selectedIds.length} selected product(s)`);
    setSelectedIds([]);
  };

  // Filter products by search query
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.productId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  // Reset page if filtered items count is smaller than range
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalItems, totalPages, currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Bulk selection
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const pageIds = paginatedProducts.map((p) => p.id);
      setSelectedIds((prev) => Array.from(new Set([...prev, ...pageIds])));
    } else {
      const pageIds = paginatedProducts.map((p) => p.id);
      setSelectedIds((prev) => prev.filter((id) => !pageIds.includes(id)));
    }
  };

  const handleSelectItem = (id, checked) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((itemId) => itemId !== id));
    }
  };

  const isPageAllSelected = () => {
    if (paginatedProducts.length === 0) return false;
    return paginatedProducts.every((p) => selectedIds.includes(p.id));
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
          <h1 className="app-page-title">Product List</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Product List
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
              <h6 className="card-title mb-0">Product List</h6>
              <div className="d-flex gap-3 flex-wrap align-items-center">
                {selectedIds.length > 0 && (
                  <button
                    type="button"
                    onClick={handleDeleteSelected}
                    className="btn btn-sm btn-danger btn-shadow waves-effect"
                  >
                    Delete Selected ({selectedIds.length})
                  </button>
                )}

                {/* Custom DataTable Search Input */}
                <div id="dt_ProductList_Search">
                  <div className="dt-search position-relative">
                    <i className="fi fi-rr-search position-absolute start-0 top-50 translate-middle-y ms-2 text-muted" style={{ zIndex: 1, pointerEvents: "none" }}></i>
                    <input
                      type="search"
                      className="form-control form-control-sm ps-4 border-light"
                      placeholder="Search name or ID..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      style={{ height: "31px", fontSize: "12px", minWidth: "200px" }}
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
                      <th className="minw-300px">Product Name</th>
                      <th className="minw-150px">Product ID</th>
                      <th className="minw-100px">Price</th>
                      <th className="minw-100px">Quantity</th>
                      <th className="minw-100px">Sale</th>
                      <th className="minw-100px">Stock</th>
                      <th className="minw-150px">Start Date</th>
                      <th className="minw-150px">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedProducts.length > 0 ? (
                      paginatedProducts.map((prod) => (
                        <tr key={prod.id} className={selectedIds.includes(prod.id) ? "table-active" : ""}>
                          <td className="pe-0">
                            <div className="form-check p-0 w-auto d-inline-block">
                              <input
                                className="form-check-input m-0"
                                type="checkbox"
                                checked={selectedIds.includes(prod.id)}
                                onChange={(e) => handleSelectItem(prod.id, e.target.checked)}
                              />
                            </div>
                          </td>
                          <td className="ps-2">
                            <div className="d-flex align-items-center">
                              <div className="d-block me-3 bg-light p-1 rounded-2">
                                <img
                                  src={prod.image}
                                  width="50"
                                  height="50"
                                  alt={prod.name}
                                  className="object-fit-contain"
                                />
                              </div>
                              <div className="clearfix">
                                <Link href="/ecommerce/product-details" className="text-dark hover-primary fw-medium">
                                  {prod.name}
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td>{prod.productId}</td>
                          <td>{prod.price}</td>
                          <td>{prod.qty}</td>
                          <td>{prod.sale}</td>
                          <td>
                            <span
                              className={`badge ${
                                prod.stock === "In Stock"
                                  ? "bg-success-subtle text-success"
                                  : "bg-danger-subtle text-danger"
                              }`}
                            >
                              {prod.stock}
                            </span>
                          </td>
                          <td>{prod.date}</td>
                          <td>
                            <button
                              className="btn btn-white btn-sm btn-shadow btn-icon waves-effect me-1"
                              type="button"
                              onClick={() => handleEditRow(prod.name)}
                              title="Edit"
                            >
                              <i className="icon-square-pen"></i>
                            </button>
                            <button
                              className="btn btn-white btn-sm btn-shadow btn-icon waves-effect text-danger"
                              type="button"
                              onClick={() => handleDeleteRow(prod.id, prod.name)}
                              title="Delete"
                            >
                              <i className="icon-trash-2"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="9" className="text-center py-4 text-muted">
                          No matching products found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Stateful Pagination Controls */}
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
                          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
                          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
