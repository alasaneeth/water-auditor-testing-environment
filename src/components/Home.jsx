import React from "react";
import { useSelector } from "react-redux";
import { motion, useReducedMotion } from "framer-motion";
import waterBg from "../assets/Backround Images/deepsee-backround.jpg";
import Logo from "../assets/logo.png";

function Home() {
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = window.innerWidth >= 1024;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0.3 }
        : { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.3 }
        : { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative py-16 px-4 text-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.65), rgba(255,255,255,0.75)), url(${waterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isDesktop ? "fixed" : "scroll",
      }}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? false : "visible"}
      viewport={{ once: true, margin: "-120px" }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-6xl mx-auto relative z-10 will-change-transform"
        variants={itemVariants}
      >
        {/* Logo */}
        <motion.img
          src={Logo}
          alt="Company Logo"
          loading="eager"
          decoding="async"
          className="mx-auto mb-6 w-52 md:w-60 drop-shadow-md"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={shouldReduceMotion ? false : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          variants={itemVariants}
        >
          {isArabic
            ? "خدمات احترافية لتدقيق المياه وكشف التسربات"
            : "Professional Water Audit & Leak Detection Services"}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {isArabic
            ? "نساعد المباني السكنية على تقليل فقدان المياه وتحسين كفاءة الاستخدام."
            : "We help residential buildings reduce water loss and improve efficiency."}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6 max-w-md mx-auto"
          variants={containerVariants}
        >
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
            variants={itemVariants}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          >
            {isArabic ? "احجز فحص الآن" : "Book Inspection"}
          </motion.a>

          <motion.a
            href="#services"
            className="bg-white text-blue-700 hover:bg-blue-50 border border-blue-300 px-8 py-3 rounded-full font-semibold shadow transition-all duration-300"
            variants={itemVariants}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          >
            {isArabic ? "خدماتنا" : "Our Services"}
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Home;
