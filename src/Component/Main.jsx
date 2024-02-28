import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Main = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main" style={{ position: "relative" }}>
      {/* Always render the Sidebar */}
      <div className="d-none d-md-block">
        <Sidebar />
      </div>

      {/* Conditional rendering of Sidebar based on isSidebarOpen */}
      <div className="d-md-none d-block">
        {isSidebarOpen && <Sidebar isOpen={isSidebarOpen}  setSidebarOpen={setSidebarOpen} />}
      </div>
      <div className="container py-4">
        <Outlet />
      </div>

      <button
        className="d-md-none d-block btn"
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          padding: "2px 8px 6px 8px",
          borderRadius: "31%",
          background: "#1877f2",
          color: "#fff",
        }}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </button>
    </div>
  );
};

export default Main;
