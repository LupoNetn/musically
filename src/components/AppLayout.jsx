import React from "react";
import Navbar from "./Navbar";
import { Home, MessageCircle, Settings, Users } from "lucide-react";
import { Outlet, NavLink, useLocation } from "react-router";
import {
  DesktopProfileCard,
  DesktopFavoritesCard,
} from "./DesktopLeftComponents";

const navLinks = [
  { name: "Home", link: "/", icon: <Home className="w-6 h-6" /> },
  {
    name: "Community",
    link: "/community",
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "Messages",
    link: "/messages",
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <Settings className="w-6 h-6" />,
  },
];

const AppLayout = () => {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar (fixed height at top) */}
      <div className="p-4">
        <Navbar />
      </div>

      {/* Main layout takes remaining height */}
      <main className="flex-1 bg-gray-100 p-4 overflow-hidden">
        <div className="md:grid md:grid-cols-9 gap-3 h-full">
          {/* Left Sidebar (scrollable independently) */}
          <div className="hidden md:block md:col-span-2 h-full overflow-y-auto pr-2 scrollbar-hide">
            <div className="flex flex-col gap-4">
              <DesktopProfileCard />
              <DesktopFavoritesCard />
              {/* You can add more cards here */}
            </div>
          </div>

          {/* Main Content (scrollable independently) */}
          <div className="md:col-span-5 h-full overflow-y-auto px-2 scrollbar-hide">
            <Outlet />
          </div>

          {/* Right Sidebar (scrollable independently) */}
          <div className="hidden md:block md:col-span-2 h-full overflow-y-auto pl-2 scrollbar-hide">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-semibold text-gray-700">Trending</h2>
                <ul className="mt-2 text-sm text-gray-600">
                  <li>#Music</li>
                  <li>#Afrobeats</li>
                  <li>#Pop</li>
                  <li>#RnB</li>
                  <li>#Jazz</li>
                  <li>#HipHop</li>
                  <li>#Indie</li>
                  {/* if too many → sidebar becomes scrollable */}
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="font-semibold text-gray-700">Suggestions</h2>
                <p className="text-sm text-gray-500">Follow new creators</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation (fixed bottom) */}
      <footer className="md:hidden fixed bottom-0 inset-x-0 bg-gray-100 p-2 shadow-lg rounded-full">
        <nav>
          <ul className="flex items-center justify-between max-w-md mx-auto">
            {navLinks.map((link) => (
              <li key={link.name} className="flex-1">
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `flex flex-col items-center justify-center gap-1 py-1 transition-colors ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-500 hover:text-blue-500"
                    }`
                  }
                >
                  {link.icon}
                  <span className="text-xs truncate">
                    {link.link === location.pathname ? link.name : ""}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default AppLayout;
