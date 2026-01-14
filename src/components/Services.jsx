import React from "react";
import { useSelector } from "react-redux";
import leakImg from "../assets/serviceImage/detect_leakage.jpeg";
import AuditImage from "../assets/serviceImage/water-audits.png";
import effciantImg from "../assets/serviceImage/measuring-water-efficiancy.png";
import waterProofing from "../assets/serviceImage/water-tang-surface.png";
import WaterLeaks from "../assets/serviceImage/repair-water-leaks.png";
import servicesBg from "../assets/Backround Images/industrial-bg.jpg";

function Services() {
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";

  const services = isArabic
    ? [
        {
          title: "كشف تسربات المياه في المباني السكنية",
          image: leakImg,
          description:
            "تشخيص دقيق لتسربات المياه باستخدام تقنيات متقدمة وخبرة هندسية متخصصة."
        },
        {
          title: "تدقيق استهلاك المياه",
          image: AuditImage,
          description:
            "تحليل فني شامل لاستهلاك المياه لتحديد مصادر الهدر وتحسين الكفاءة."
        },
        {
          title: "قياس كفاءة المياه وترشيد الاستهلاك",
          image: effciantImg,
          description:
            "تقييم هندسي لأداء أنظمة المياه وتقديم حلول فعالة لترشيد الاستهلاك."
        },
        {
          title: "إصلاح تسربات المياه",
          image: WaterLeaks,
          description:
            "تنفيذ أعمال إصلاح احترافية باستخدام مواد وتقنيات عالية الجودة."
        },
        {
          title: "عزل الخزانات والأسطح",
          image: waterProofing,
          description:
            "حلول عزل هندسية متقدمة لحماية المباني ومنع تسرب المياه."
        },
        {
          title: "استشارات كفاءة المياه",
          image: AuditImage,
          description:
            "تقديم استشارات تقنية مبنية على خبرة مهنية تزيد عن 20 عاماً."
        },
      ]
    : [
        {
          title: "Detecting Water Leaks in Residential Buildings",
          image: leakImg,
          description:
            "Precise detection of water leaks using advanced technologies and engineering expertise."
        },
        {
          title: "Water Usage Auditing",
          image: AuditImage,
          description:
            "Comprehensive technical analysis of water consumption to identify losses and inefficiencies."
        },
        {
          title: "Measuring Water Efficiency & Rationalization",
          image: effciantImg,
          description:
            "Engineering-based evaluation to improve system performance and reduce water waste."
        },
        {
          title: "Repairing Water Leaks",
          image: WaterLeaks,
          description:
            "Professional repair solutions delivered with high-quality materials and proven techniques."
        },
        {
          title: "Tank & Surface Waterproofing",
          image: waterProofing,
          description:
            "Advanced waterproofing solutions designed to protect structures and prevent leakage."
        },
        {
          title: "Water Efficiency Consultations",
          image: AuditImage,
          description:
            "Expert technical consultations supported by more than 20 years of professional experience."
        },
      ];

  return (
    <section
      id="services"
      className="relative py-20 px-6"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.95), rgba(248, 250, 252, 0.97)), url(${servicesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            {isArabic ? "خدماتنا المتخصصة" : "Our Specialized Services"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isArabic
              ? "يقدم مدقق المياه مجموعة متكاملة من الخدمات التقنية المصممة لاكتشاف وتشخيص ومعالجة مشاكل المياه بدقة وخبرة هندسية، مدعومة بأكثر من 20 عاماً من الخبرة المهنية وباستخدام أحدث التقنيات."
              : "Water Auditor provides a comprehensive suite of technical services designed to detect, diagnose, and resolve water-related issues with precision and engineering expertise, supported by more than 20 years of professional experience and advanced technologies."}
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
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
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
