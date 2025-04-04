import React from "react";
import NavbarContainer from "../components/NavbarBlock/NavbarContainer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="text-white">
      <Toaster />
      <NavbarContainer />
      <Outlet />
    </div>
  );
};

export default Layout;
