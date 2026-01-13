import React from "react";
import { useSelector } from "react-redux";

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
      className="bg-gray-100 py-20 text-center px-4"
    >
      <h2 className="text-4xl font-bold mb-4">
        {isArabic
          ? "خدمات احترافية لتدقيق المياه وكشف التسربات"
          : "Professional Water Audit & Leak Detection Services"}
      </h2>

      <p className="text-lg mb-6 max-w-2xl mx-auto">
        {isArabic
          ? "نساعد المباني السكنية على تقليل فقدان المياه، تحسين كفاءة الاستخدام، وتوفير التكاليف من خلال حلول تدقيق وإصلاح احترافية."
          : "We help residential buildings reduce water loss, improve water efficiency, and save costs through professional auditing and repair solutions."}
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="tel:+966551539303"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          {isArabic ? "اتصل الآن" : "Call Now"}
        </a>

        <a
          href="https://wa.me/+966551539303"
          className="bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          {isArabic ? "راسلنا واتساب" : "WhatsApp Us"}
        </a>

        <a
          href="#contact"
          className="bg-gray-800 text-white px-6 py-3 rounded-xl"
        >
          {isArabic ? "احجز فحص" : "Book Inspection"}
        </a>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
        {features.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
