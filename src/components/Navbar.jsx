import React, { useState } from "react";
import Logo from "../assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="Auditor Water Logo"
            className="w-20 h-20 object-contain"
          />
          <h1 className="text-lg md:text-xl font-bold">
            Auditor Water | مدقق مياه
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:underline hover:text-blue-300 transition-colors">Home</a>
          <a href="#about" className="hover:underline hover:text-blue-300 transition-colors">About</a>
          <a href="#services" className="hover:underline hover:text-blue-300 transition-colors">Services</a>
          <a href="#contact" className="hover:underline hover:text-blue-300 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-6 py-4 space-y-3">
          <a href="#home" className="block hover:underline hover:text-blue-200" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="block hover:underline hover:text-blue-200" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" className="block hover:underline hover:text-blue-200" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#contact" className="block hover:underline hover:text-blue-200" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
