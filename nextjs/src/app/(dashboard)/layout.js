"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SidebarRight from "@/components/SidebarRight";
import Footer from "@/components/Footer";

export default function DashboardLayout({ children }) {
  const [isSidebarMini, setIsSidebarMini] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth >= 1191) {
      setIsSidebarMini((prev) => {
        const newVal = !prev;
        document.documentElement.setAttribute("data-app-sidebar", newVal ? "mini" : "full");
        return newVal;
      });
    } else {
      setIsMobileOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    // Set default sidebar layout attribute
    document.documentElement.setAttribute("data-app-sidebar", "full");
    
    // Add event listener to handle mouse enter/leave on mini sidebar
    const menubar = document.getElementById("appMenubar");
    if (!menubar) return;

    const handleMouseEnter = () => {
      if (document.documentElement.getAttribute("data-app-sidebar") === "mini") {
        document.documentElement.setAttribute("data-app-sidebar", "mini-hover");
      }
    };

    const handleMouseLeave = () => {
      if (document.documentElement.getAttribute("data-app-sidebar") === "mini-hover") {
        document.documentElement.setAttribute("data-app-sidebar", "mini");
      }
    };

    menubar.addEventListener("mouseenter", handleMouseEnter);
    menubar.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      menubar.removeEventListener("mouseenter", handleMouseEnter);
      menubar.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="page-layout">
      <Header onToggleSidebar={toggleSidebar} isSidebarActive={isSidebarMini || isMobileOpen} />
      <Sidebar isMobileOpen={isMobileOpen} onCloseMobile={() => setIsMobileOpen(false)} />
      <SidebarRight />
      
      <main className="app-wrapper">
        {children}
        <Footer />
      </main>
    </div>
  );
}
