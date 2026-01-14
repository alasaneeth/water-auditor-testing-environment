import React from "react";
import { useSelector } from "react-redux";
import waterBg from "../assets/Backround Images/deepsee-backround.jpg";
import Logo from "../assets/logo.png"

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

  return (
    <section
      id="home"
      className="relative bg-gray-900 py-14 px-4 text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.60), rgba(255, 255, 255, 0.70)), url(${waterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* ✅ LOGO */}
        <img
          src={Logo}
          alt="Company Logo"
          className="mx-auto mb-4 w-56 md:w-60 lg:w-60 drop-shadow-lg"
        />

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {isArabic
            ? "خدمات احترافية لتدقيق المياه وكشف التسربات"
            : "Professional Water Audit & Leak Detection Services"}
        </h2>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          {isArabic
            ? "نساعد المباني السكنية على تقليل فقدان المياه، تحسين كفاءة الاستخدام، وتوفير التكاليف من خلال حلول تدقيق وإصلاح احترافية."
            : "We help residential buildings reduce water loss, improve water efficiency, and save costs through professional auditing and repair solutions."}
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-16">
          <a
            href="tel:+966551539303"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            {isArabic ? "اتصل الآن" : "Call Now"}
          </a>

          <a
            href="https://wa.me/+966551539303"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            {isArabic ? "راسلنا واتساب" : "WhatsApp Us"}
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition duration-300"
            >
              <p className="font-semibold text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
