import React from "react";
import { Home, Bell, MessageCircle, Settings, User, Users } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";

const navLinks = [
  { name: "Home", link: "/", icon: <Home className="w-6 h-6" /> },
  { name: "Community", link: "/community", icon: <Users className="w-6 h-6" /> },
  { name: "Messages", link: "/messages", icon: <MessageCircle className="w-6 h-6" /> },
  { name: "Notifications", link: "/notifications", icon: <Bell className="w-6 h-6" /> },
  { name: "Settings", link: "/settings", icon: <Settings className="w-6 h-6" /> },
];

const Navbar = () => {
  const location = useLocation();
  const isSignedIn = false

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h2 className="font-bold text-xl">Musically.</h2>

        {/* Desktop Links */}
        <div className="hidden sm:block">
         {isSignedIn ? (
           <ul className="flex md:space-x-4 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "text-blue-600 font-semibold bg-blue-100"
                        : "text-gray-600 hover:text-blue-500"
                    }`
                  }
                >
                  {link.icon}
                  <span className="text-blue-600">
                    {link.link === location.pathname ? link.name : ""}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
         ) : (
         null
         )}
        </div>

        {/* User icons */}
        <div className="flex items-center gap-3">
          {isSignedIn ? (
            <>
            <div className="sm:hidden">
            <NavLink to="/notifications">
              <Bell className="text-gray-600" />
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            <User className="text-gray-600" />
            <p className="text-sm hidden sm:block">@Oluwatobi</p>
          </div>
          </>
          ) : (
            <>
            <Link to='/auth'>
              <button className="bg-gray-800 text-white px-7 py-2 rounded-3xl cursor-pointer hover:opacity-[0.7]">Sign In</button>
            </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
