import React from "react";
import { useSelector } from "react-redux";
import leakImg from "../assets/leakImg.jpeg";
import AuditImage from "../assets/auditImage.jpg";
import effciantImg from "../assets/effciantImage.jpeg";
import waterProofing from "../assets/waterproofing.jpg";
import WaterLeaks from "../assets/waterLeaks.jpg";
import servicesBg from "../assets/Backround Images/industrial-bg.jpg"

function Services() {
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";

  const services = isArabic
    ? [
        {
          title: "كشف تسربات المياه في المباني السكنية",
          image: leakImg,
          description: "استخدام أحدث التقنيات للكشف الدقيق عن التسربات"
        },
        {
          title: "تدقيق استهلاك المياه",
          image: AuditImage,
          description: "تحليل شامل لاستهلاك المياه وتحديد مجالات التوفير"
        },
        {
          title: "قياس كفاءة المياه وترشيد الاستهلاك",
          image: effciantImg,
          description: "تحسين كفاءة استخدام المياه وتقليل الهدر"
        },
        {
          title: "إصلاح تسربات المياه",
          image: WaterLeaks,
          description: "حلول إصلاح متكاملة باستخدام مواد عالية الجودة"
        },
        {
          title: "عزل الخزانات والأسطح",
          image: waterProofing,
          description: "عزل احترافي لمنع التسربات والحفاظ على المياه"
        },
        {
          title: "استشارات كفاءة المياه",
          image: AuditImage,
          description: "تقديم حلول واستراتيجيات لتحسين كفاءة المياه"
        },
      ]
    : [
        {
          title: "Detecting Water Leaks in Residential Buildings",
          image: leakImg,
          description: "Using latest technologies for precise leak detection"
        },
        {
          title: "Water Usage Auditing",
          image: AuditImage,
          description: "Comprehensive analysis of water consumption"
        },
        {
          title: "Measuring Water Efficiency & Rationalization",
          image: effciantImg,
          description: "Improving water efficiency and reducing waste"
        },
        {
          title: "Repairing Water Leaks",
          image: WaterLeaks,
          description: "Complete repair solutions with high-quality materials"
        },
        {
          title: "Tank & Surface Waterproofing",
          image: waterProofing,
          description: "Professional waterproofing to prevent leaks"
        },
        {
          title: "Water Efficiency Consultations",
          image: AuditImage,
          description: "Strategic solutions for water efficiency improvement"
        },
      ];

  return (
    <section 
      id="services" 
      className="relative py-20 px-6"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.95), rgba(248, 250, 252, 0.97)), url(${servicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            {isArabic ? "خدماتنا المتخصصة" : "Our Specialized Services"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isArabic 
              ? "نقدم مجموعة متكاملة من خدمات المياه المدعومة بأحدث التقنيات والخبرة"
              : "We provide a comprehensive range of water services backed by latest technology and expertise"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">
                    {isArabic ? "تفاصيل الخدمة" : "Service Details"}
                  </span>
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;