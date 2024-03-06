import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/images/KodukkuLogo.svg"


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
      <div className="container py-md-4 py-0">
      <div className="d-md-none d-block
">
      <AppBar
          position="static"
          style={{ background: "#1877F2", borderRadius: "8px", marginBottom:"20px" }}
        >
          <div className="d-flex justify-content-between">
            <div
              className=""
              style={{
                background: "#fff",
                borderRadius: "8px",
                // padding: "10px",
                margin: "10px",
                // width: "30px",
              }}
            >
              <img src={logo} alt="" style={{ width: "27px", margin: "5px" }} />
            </div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </AppBar>
</div>


        <Outlet />
      </div>

      {/* <button
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
      </button> */}
    </div>
  );
};

export default Main;
