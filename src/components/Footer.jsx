import React from "react";
import { useSelector } from "react-redux";

function Footer() {
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";

  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      © {new Date().getFullYear()}{" "}
      {isArabic
        ? "مدقق مياه - جميع الحقوق محفوظة"
        : "Water Auditor - All rights reserved"}
    </footer>
  );
}

export default Footer;
