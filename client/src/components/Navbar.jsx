import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // simple SVG icons
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "text-white bg-accent"
        : "text-gray-700 hover:text-accent hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-4 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="Crest Latitude Logo"
              className="h-16 md:h-18 w-auto object-contain"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
