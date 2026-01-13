import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../redux/languageSlice";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="flex items-center space-x-3">
          <h1 className="text-lg md:text-xl font-bold">
            {lang === "en" ? "Auditor Water" : "مدقق مياه"}
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:underline">{lang === "en" ? "Home" : "الرئيسية"}</a>
          <a href="#about" className="hover:underline">{lang === "en" ? "About" : "من نحن"}</a>
          <a href="#services" className="hover:underline">{lang === "en" ? "Services" : "خدماتنا"}</a>
          <a href="#contact" className="hover:underline">{lang === "en" ? "Contact" : "تواصل معنا"}</a>
        </div>

        {/* Language Toggle */}
        <button
          onClick={() => dispatch(toggleLanguage())}
          className="ml-4 px-3 py-1 border rounded bg-white text-black"
        >
          {lang === "en" ? "AR" : "EN"}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
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
          <a href="#home" className="block" onClick={() => setIsOpen(false)}>
            {lang === "en" ? "Home" : "الرئيسية"}
          </a>
          <a href="#about" className="block" onClick={() => setIsOpen(false)}>
            {lang === "en" ? "About" : "من نحن"}
          </a>
          <a href="#services" className="block" onClick={() => setIsOpen(false)}>
            {lang === "en" ? "Services" : "خدماتنا"}
          </a>
          <a href="#contact" className="block" onClick={() => setIsOpen(false)}>
            {lang === "en" ? "Contact" : "تواصل معنا"}
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
