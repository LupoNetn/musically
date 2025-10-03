import React from "react";
import { Home, MessageCircle, Settings, Users } from "lucide-react";
import { NavLink } from "react-router";

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

const MobileNav = () => {
  return (
    <>
      <footer className="sm:hidden fixed bottom-0 inset-x-0 bg-gray-100 p-2 shadow-lg rounded-full z-100">
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
    </>
  );
};

export default MobileNav;
