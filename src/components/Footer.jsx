import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Footer() {
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";

  // Motion variants
  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white text-center py-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      © {new Date().getFullYear()}{" "}
      {isArabic
        ? "مدقق المياه السعودية – جميع الحقوق محفوظة"
        : "waterauditorksa - All rights reserved"}
    </motion.footer>
  );
}

export default Footer;
