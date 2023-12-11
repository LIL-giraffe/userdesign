import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

// className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'
// {/* <div className="flex justify-center justify-items-center w-full"> */}

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />

      <div className="w-full">
        <Navbar />
        {<Outlet />}
      </div>
    </div>
  );
};

export default Layout;
