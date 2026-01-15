import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import waterBg from "../assets/Backround Images/deepsee-backround.jpg";
import Logo from "../assets/logo.png";

function Home() {
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";

  const features = isArabic
    ? [
        "كشف تسربات المياه بدقة عالية",
        "تدقيق استهلاك المياه وكفاءتها",
        "إصلاح التسربات وعزل الخزانات",
        "توفير المال وتقليل هدر المياه",
      ]
    : [
        "Detect water leaks accurately",
        "Audit water usage and efficiency",
        "Repair leaks and waterproof tanks",
        "Save money & reduce water wastage",
      ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="home"
      className="relative bg-gray-900 py-14 px-4 text-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.60), rgba(255, 255, 255, 0.70)), url(${waterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="max-w-6xl mx-auto relative z-10" variants={itemVariants}>
        {/* Logo */}
        <motion.img
          src={Logo}
          alt="Company Logo"
          className="mx-auto mb-4 w-56 md:w-60 lg:w-60 drop-shadow-lg"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
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
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {isArabic
            ? "نساعد المباني السكنية على تقليل فقدان المياه، تحسين كفاءة الاستخدام، وتوفير التكاليف من خلال حلول تدقيق وإصلاح احترافية."
            : "We help residential buildings reduce water loss, improve water efficiency, and save costs through professional auditing and repair solutions."}
        </motion.p>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-semibold text-lg">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Home;
