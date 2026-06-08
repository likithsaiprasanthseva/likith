"use client";

import { useState } from "react";
import Link from "next/link";

const initialProducts = [
  {
    id: 1,
    name: "Hoodie Tshirt For Men",
    image: "/assets/images/ecommerce/products/grid/pic1.png",
    rating: 4.5,
    reviews: 45,
    originalPrice: "$100.00",
    price: "$80.00",
    discount: "30% Off",
    stars: 5
  },
  {
    id: 2,
    name: "Elegant Red Chair",
    image: "/assets/images/ecommerce/products/grid/pic7.png",
    rating: 4.5,
    reviews: 45,
    originalPrice: "$50.00",
    price: "$30.00",
    discount: "30% Off",
    stars: 5
  },
  {
    id: 3,
    name: "Kids School Bag",
    image: "/assets/images/ecommerce/products/grid/pic14.png",
    rating: 4.5,
    reviews: 45,
    originalPrice: "$40.00",
    price: "$25.00",
    discount: "20% Off",
    stars: 5
  },
  {
    id: 4,
    name: "Luxury Men’s Watch",
    image: "/assets/images/ecommerce/products/grid/pic10.png",
    rating: 4.5,
    reviews: 45,
    originalPrice: "$199.00",
    price: "$99.00",
    discount: "50% Off",
    stars: 5
  },
  {
    id: 5,
    name: "Trendy Ladies Purse",
    image: "/assets/images/ecommerce/products/grid/pic13.png",
    rating: 4.5,
    reviews: 45,
    originalPrice: "$70.00",
    price: "$35.00",
    discount: "50% Off",
    stars: 5
  },
  {
    id: 6,
    name: "Makeup Kit Gift Set",
    image: "/assets/images/ecommerce/products/grid/pic6.png",
    rating: 4.5,
    reviews: 45,
    originalPrice: null,
    price: "$80.00",
    discount: null,
    stars: 5
  },
  {
    id: 7,
    name: "Elegant Yellow Chair",
    image: "/assets/images/ecommerce/products/grid/pic11.png",
    rating: 4.5,
    reviews: 45,
    originalPrice: "$100.00",
    price: "$80.00",
    discount: "30% Off",
    stars: 5
  },
  {
    id: 8,
    name: "Vintage Table Clock",
    image: "/assets/images/ecommerce/products/grid/pic8.png",
    rating: 4.5,
    reviews: 45,
    originalPrice: "$25.00",
    price: "$20.00",
    discount: "30% Off",
    stars: 5
  }
];

export default function ProductsPage() {
  const [products] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [toastMessage, setToastMessage] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const itemsPerPage = 4; // Paginate to 4 items per page to showcase working pagination

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const handleAddToCart = (name) => {
    setCartCount(prev => prev + 1);
    triggerToast(`"${name}" added to cart!`);
  };

  // Filter products by search query
  const filteredProducts = products.filter((prod) =>
    prod.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

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
          <h1 className="app-page-title">Products</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Products
              </li>
            </ol>
          </nav>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-white btn-shadow waves-effect position-relative">
            <i className="fi fi-rr-shopping-cart text-primary"></i>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search Filter Header */}
      <div className="d-flex gap-3 flex-wrap align-items-center justify-content-between border-0 pb-0 mb-4 bg-white p-3 rounded shadow-sm">
        <h6 className="card-title mb-0 text-dark">Available Products Grid</h6>
        <div className="dt-search position-relative">
          <i className="fi fi-rr-search position-absolute start-0 top-50 translate-middle-y ms-2 text-muted" style={{ zIndex: 1, pointerEvents: "none" }}></i>
          <input
            type="search"
            className="form-control form-control-sm ps-4 border-light"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            style={{ height: "31px", fontSize: "12px", minWidth: "220px" }}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="row">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((prod) => (
            <div key={prod.id} className="col-lg-3 col-sm-6 mb-4">
              <div className="bg-light rounded-3 position-relative shadow-sm border border-light overflow-hidden h-100 d-flex flex-column">
                <div className="d-block p-3 border-bottom text-center bg-white">
                  <Link href="/ecommerce/product-details">
                    <img className="img-fluid object-fit-contain" src={prod.image} alt={prod.name} style={{ height: "180px" }} />
                  </Link>
                </div>
                <div className="d-block p-3 d-flex flex-column flex-grow-1">
                  <h6 className="mb-2 text-sm">
                    <Link href="/ecommerce/product-details" className="text-dark hover-primary">
                      {prod.name}
                    </Link>
                  </h6>
                  <div className="d-flex gap-1 align-items-center mb-2 mt-auto">
                    <ul className="d-flex text-warning m-0 text-3xs list-unstyled">
                      {Array.from({ length: prod.stars }).map((_, i) => (
                        <li key={i}>
                          <i className="fa fa-star"></i>
                        </li>
                      ))}
                    </ul>
                    <p className="mb-0 fw-semibold text-3xs text-dark">
                      {prod.rating} <span className="text-body">({prod.reviews} Review)</span>
                    </p>
                  </div>
                  <h6 className="fw-semibold mt-1 mb-3 d-flex align-items-center gap-1 text-dark">
                    {prod.originalPrice && <del className="text-body text-xs fw-normal me-1">{prod.originalPrice}</del>}
                    {prod.price}
                    {prod.discount && <small className="text-success text-xs ms-1">({prod.discount})</small>}
                  </h6>
                  <button
                    onClick={() => handleAddToCart(prod.name)}
                    className="btn btn-white w-100 border-light btn-shadow mt-auto waves-effect"
                  >
                    <i className="fi fi-rr-shopping-cart me-1"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5 text-muted">
            No matching products found.
          </div>
        )}
      </div>

      {/* Pagination navigation */}
      {totalItems > 0 && (
        <nav aria-label="Page navigation" className="mt-2 mb-4">
          <ul className="pagination pagination-sm justify-content-start">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                <i className="fi fi-rr-angle-double-left"></i>
              </button>
            </li>
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
      )}
    </div>
  );
}
