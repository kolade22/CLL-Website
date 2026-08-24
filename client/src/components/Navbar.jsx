import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "text-white bg-accent"
        : "text-gray-700 hover:text-accent hover:bg-gray-100"
    }`;

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-3 items-center gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity shrink-0"
            aria-label="Crest Latitude Limited — Home"
          >
            <img
              src={logo}
              alt="Crest Latitude Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center bg-accent hover:bg-accent-light text-white text-sm font-semibold py-2.5 px-5 rounded-md transition-all duration-200 shadow hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 space-y-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="block text-center mt-3 bg-accent hover:bg-accent-light text-white text-sm font-semibold py-2.5 px-5 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
