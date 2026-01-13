import React from "react";
import { useSelector } from "react-redux";

function WhyChooseUs() {
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";

  const points = isArabic
    ? [
        "كشف دقيق لتسربات المياه باستخدام أدوات احترافية",
        "حلول موفرة للتكاليف تناسب مبناك",
        "استجابة سريعة وخدمات إصلاح فعّالة",
        "تقارير احترافية لكل عملية فحص",
        "خبرة في كفاءة المياه لتقليل الهدر",
      ]
    : [
        "Accurate leak detection using professional tools",
        "Cost-saving solutions tailored to your building",
        "Fast response & efficient repair services",
        "Professional reports for every inspection",
        "Water efficiency expertise to reduce waste",
      ];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        {isArabic ? "لماذا تختارنا" : "Why Choose Us"}
      </h2>

      <ul className="space-y-4">
        {points.map((p, i) => (
          <li
            key={i}
            className="bg-gray-100 p-4 rounded-xl"
          >
            {p}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WhyChooseUs;
