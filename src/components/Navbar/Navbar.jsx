import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icon from react-icons

const Navbar = ({ onHomeClick, onAboutClick, onContactClick }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (handler) => {
    if (location.pathname === "/" && handler) {
      handler();
    }
    setMenuOpen(false); // Close menu on click
  };

  return (
    <div className="py-4 lg:py-6 fixed top-0 left-0 w-full bg-white/30 dark:bg-black/30 backdrop-blur-md z-50">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <p className="text-3xl lg:text-4xl font-semibold">
          Banks<span className="text-primary">Town</span>
        </p>

        {/* Desktop Menu */}
        <ul className="gap-8 hidden sm:flex items-center pr-4">
          <li
            className="hover:border-b-2 border-primary uppercase cursor-pointer"
            onClick={() => handleLinkClick(onHomeClick)}
          >
            <Link to="/">Home</Link>
          </li>
          <li className="hover:border-b-2 border-primary uppercase cursor-pointer">
            <Link to="/menu">Menu</Link>
          </li>
          <li
            className="hover:border-b-2 border-primary uppercase cursor-pointer"
            onClick={() => handleLinkClick(onAboutClick)}
          >
            <Link to="/">About</Link>
          </li>
          <li
            className="hover:border-b-2 border-primary uppercase cursor-pointer"
            onClick={() => handleLinkClick(onContactClick)}
          >
            <Link to="/">Contact</Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="sm:hidden pr-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-gray-800 dark:text-white focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pt-4 pb-6 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-b-lg shadow-md">
          <ul className="flex flex-col space-y-4 text-center">
            <li
              className="uppercase text-lg font-medium hover:text-primary"
              onClick={() => handleLinkClick(onHomeClick)}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="uppercase text-lg font-medium hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              <Link to="/menu">Menu</Link>
            </li>
            <li
              className="uppercase text-lg font-medium hover:text-primary"
              onClick={() => handleLinkClick(onAboutClick)}
            >
              <Link to="/">About</Link>
            </li>
            <li
              className="uppercase text-lg font-medium hover:text-primary"
              onClick={() => handleLinkClick(onContactClick)}
            >
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
