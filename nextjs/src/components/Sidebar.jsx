"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ isMobileOpen, onCloseMobile }) {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleExpand = (menuName) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const isActive = (path) => pathname === path;
  const isAnySubActive = (paths) => paths.some((path) => pathname === path);

  const menuItems = [
    {
      type: "dropdown",
      label: "Dashboard",
      icon: "fi fi-rr-apps",
      id: "dashboard",
      subItems: [
        { label: "Dashboard", href: "/" },
        { label: "Dashboard RTL", href: "/index-rtl" },
        { label: "E-Commerce", href: "/ecommerce/ecommerce" },
        { label: "Products", href: "/ecommerce/products" },
        { label: "Product List", href: "/ecommerce/product-list" },
        { label: "Orders", href: "/ecommerce/orders" },
        { label: "Order Details", href: "/ecommerce/order-details" },
        { label: "Transactions", href: "/ecommerce/transactions" },
        { label: "Employee", href: "/employee" },
        { label: "Attendance", href: "/attendance" },
        { label: "Leave", href: "/leave" },
        { label: "Payroll", href: "/payroll" },
        { label: "Recruitment", href: "/recruitment" },
        { label: "Task Management", href: "/task-management" },
        { label: "Analytics", href: "/analytics" },
      ],
    },
    { type: "heading", label: "Apps & Pages" },
    { type: "link", label: "Chat", href: "/chat", icon: "fi fi-rr-comment" },
    { type: "link", label: "Calendar", href: "/calendar", icon: "fi fi-rr-calendar" },
    {
      type: "dropdown",
      label: "Email",
      icon: "fi fi-rr-envelope",
      id: "email",
      subItems: [
        { label: "Inbox", href: "/email/inbox" },
        { label: "Compose", href: "/email/compose" },
        { label: "Read email", href: "/email/read-email" },
      ],
    },
    {
      type: "dropdown",
      label: "Pages",
      icon: "fi fi-rr-file",
      id: "pages",
      subItems: [
        { label: "Pricing", href: "/pages/pricing" },
        { label: "Pricing 2", href: "/pages/pricing-two" },
        { label: "FAQ's", href: "/pages/faq" },
        { label: "Coming Soon", href: "/pages/coming-soon" },
        { label: "Profile", href: "/profile" },
        { label: "Roles Permissions", href: "/roles-permissions" },
        { label: "Settings", href: "/settings" },
      ],
    },
    {
      type: "dropdown",
      label: "Authentication",
      icon: "fi fi-rr-user-key",
      id: "auth",
      subItems: [
        { label: "Login Basic", href: "/authentication/login-basic" },
        { label: "Register Basic", href: "/authentication/register-basic" },
        { label: "Forgot Password", href: "/authentication/forgot-password" },
      ],
    },
    {
      type: "dropdown",
      label: "File Manager",
      icon: "fi fi-rr-folder-open",
      id: "fileManager",
      subItems: [
        { label: "Folders", href: "/file-manager/folders" },
        { label: "Files", href: "/file-manager/files" },
      ],
    },
    {
      type: "dropdown",
      label: "Invoice Manager",
      icon: "fi fi-rs-receipt",
      id: "invoice",
      subItems: [
        { label: "Invoice 1", href: "/invoices/invoice1" },
        { label: "Invoice 2", href: "/invoices/invoice2" },
        { label: "Create Invoice", href: "/invoices/create-invoice" },
      ],
    },
    { type: "heading", label: "Components" },
    {
      type: "dropdown",
      label: "UI Components",
      icon: "fi fi-rr-flux-capacitor",
      id: "uiComponents",
      subItems: [
        { label: "Accordion", href: "/components/accordion" },
        { label: "Alerts", href: "/components/alerts" },
        { label: "Badge", href: "/components/badge" },
        { label: "Buttons", href: "/components/buttons" },
        { label: "Typography", href: "/components/typography" },
      ],
    },
    { type: "heading", label: "Charts & Maps" },
    {
      type: "dropdown",
      label: "Charts",
      icon: "fi fi-rr-chart-pie-alt",
      id: "charts",
      subItems: [
        { label: "Apex Chart", href: "/chart/apexchart" },
        { label: "Chart JS", href: "/chart/chartjs" },
      ],
    },
  ];

  return (
    <>
      <aside className={`app-menubar ${isMobileOpen ? "open" : ""}`} id="appMenubar">
        <div className="app-navbar-brand">
          <Link className="navbar-brand-logo" href="/">
            <img src="/assets/images/logo.svg" alt="GXON Admin Dashboard Logo" />
          </Link>
          <Link className="navbar-brand-mini visible-light" href="/">
            <img src="/assets/images/logo-text.svg" alt="GXON Admin Dashboard Logo" />
          </Link>
          <Link className="navbar-brand-mini visible-dark" href="/">
            <img src="/assets/images/logo-text-white.svg" alt="GXON Admin Dashboard Logo" />
          </Link>
        </div>

        <nav className="app-navbar" style={{ overflowY: "auto", height: "calc(100vh - 120px)" }}>
          <ul className="menubar">
            {menuItems.map((item, idx) => {
              if (item.type === "heading") {
                return (
                  <li className="menu-heading" key={idx}>
                    <span className="menu-label">{item.label}</span>
                  </li>
                );
              }

              if (item.type === "link") {
                const active = isActive(item.href);
                return (
                  <li className={`menu-item ${active ? "active" : ""}`} key={idx}>
                    <Link className="menu-link" href={item.href}>
                      <i className={item.icon}></i>
                      <span className="menu-label">{item.label}</span>
                    </Link>
                  </li>
                );
              }

              if (item.type === "dropdown") {
                const subHrefList = item.subItems.map((s) => s.href);
                const subActive = isAnySubActive(subHrefList);
                const isExpanded = expandedMenus[item.id] ?? subActive;

                return (
                  <li
                    className={`menu-item menu-arrow ${isExpanded ? "open" : ""} ${
                      subActive ? "active" : ""
                    }`}
                    key={idx}
                  >
                    <a
                      className="menu-link"
                      href="#"
                      role="button"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleExpand(item.id);
                      }}
                    >
                      <i className={item.icon}></i>
                      <span className="menu-label">{item.label}</span>
                    </a>
                    <ul className="menu-inner" style={{ display: isExpanded ? "block" : "none" }}>
                      {item.subItems.map((sub, subIdx) => {
                        const active = isActive(sub.href);
                        return (
                          <li className={`menu-item ${active ? "active" : ""}`} key={subIdx}>
                            <Link className="menu-link" href={sub.href}>
                              <span className="menu-label">{sub.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }

              return null;
            })}
          </ul>
        </nav>

        <div className="app-footer">
          <Link href="/pages/faq" className="btn btn-outline-light waves-effect btn-shadow btn-app-nav w-100">
            <i className="fi fi-rs-interrogation text-primary"></i>
            <span className="nav-text">Help and Support</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="sidebar-mobile-overlay show" onClick={onCloseMobile}></div>
      )}
    </>
  );
}
