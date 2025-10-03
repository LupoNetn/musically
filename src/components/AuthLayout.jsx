import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="h-screen flex flex-col pt-9">
      {/* Navbar */}
      <div className="p-4">
        <Navbar />
      </div>

      <main className="flex-1 flex flex-col sm:flex-row relative">
        {/* Left Gradient Section */}
        <div className="relative z-10 w-full sm:w-[450px] lg:w-[600px] h-[220px] sm:h-screen overflow-y-clip flex items-center justify-center">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 via-pink-500 to-indigo-600 bg-[length:200%_200%] animate-gradient-x"></div>

          {/* Animated glowing blobs */}
          <div className="absolute w-72 h-72 bg-fuchsia-500/40 rounded-full blur-3xl animate-blob top-10 left-10"></div>
          <div className="absolute w-80 h-80 bg-pink-500/40 rounded-full blur-3xl animate-blob animation-delay-2000 bottom-20 right-10"></div>
          <div className="absolute w-72 h-72 bg-indigo-500/40 rounded-full blur-3xl animate-blob animation-delay-4000 top-1/3 left-1/3"></div>

          {/* Shimmering overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>

        {/* Right form section */}
        <div className="flex-1 absolute z-20 -bottom-20 sm:bottom-10 lg:bottom-25 lg:left-10 flex items-center justify-center p-6 mx-auto w-full">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-4 mb-10">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
};

export default AuthLayout;
