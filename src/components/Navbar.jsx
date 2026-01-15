import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../redux/languageSlice";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow will-change-transform">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Title (Optional) */}
        {/* <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <h1 className="text-lg md:text-xl font-bold">
            {lang === "en" ? "Water Auditor" : "مدقق مياه"}
          </h1>
        </div> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <motion.a initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} href="#home" className="hover:underline">{lang === "en" ? "Home" : "الرئيسية"}</motion.a>
          <motion.a initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} href="#about" className="hover:underline">{lang === "en" ? "About" : "من نحن"}</motion.a>
          <motion.a initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} href="#services" className="hover:underline">{lang === "en" ? "Services" : "خدماتنا"}</motion.a>
          <motion.a initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} href="#contact" className="hover:underline">{lang === "en" ? "Contact" : "تواصل معنا"}</motion.a>
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
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-900 px-6 py-4 space-y-4 text-white"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
