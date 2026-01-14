import React, { useState } from "react";
import { useSelector } from "react-redux";

// Service Images
import thermalImg from "../assets/serviceImage/themel-detect.png";
import tankImg from "../assets/serviceImage/telecopic-inspection.png";
import irrigationImg from "../assets/serviceImage/irrigation.png";
import auditImg from "../assets/serviceImage/water_auding.png";
import reportImg from "../assets/serviceImage/reporting.png";
import repairImg from "../assets/serviceImage/repair-water-tank.png";

import servicesBg from "../assets/Backround Images/industrial-bg.jpg";

function Services() {
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";
  const [activeService, setActiveService] = useState(null);

  const services = isArabic
    ? [
        {
          title: "كشف التسربات الحرارية",
          image: thermalImg,
          description:
            "تقنية التصوير الحراري المتقدمة لتحديد التسربات المخفية دون تكسير.",
          points: [
            "فحص شبكات المياه الداخلية",
            "كشف تسربات الحمامات والمطابخ",
            "تحليل الرطوبة وفقدان الحرارة",
            "تقارير تصوير حراري عالية الدقة",
          ],
        },
        {
          title: "فحص الخزانات بالتلسكوب",
          image: tankImg,
          description:
            "فحص احترافي للخزانات الأرضية والعلوية باستخدام تقنيات حديثة.",
          points: [
            "تصوير داخلي عالي الدقة",
            "كشف التشققات والعيوب الهيكلية",
            "توثيق النتائج بالصور",
            "فحص آمن دون إتلاف",
          ],
        },
        {
          title: "فحص شبكات الري",
          image: irrigationImg,
          description:
            "تحليل حراري لشبكات الري لاكتشاف التسربات وتحسين الكفاءة.",
          points: [
            "فحص خطوط الري والرشاشات",
            "كشف التسربات السطحية وتحت الأرض",
            "تحليل حرارة التربة",
            "توصيات لتحسين الكفاءة",
          ],
        },
        {
          title: "تدقيق استهلاك المياه",
          image: auditImg,
          description:
            "تقييم شامل لاستهلاك المياه لتحسين الأداء وتقليل الهدر.",
          points: [
            "تحليل الاستهلاك",
            "تحديد الفاقد المائي",
            "توصيات لرفع الكفاءة",
            "دعم أهداف ترشيد المياه",
          ],
        },
        {
          title: "التقارير الفنية",
          image: reportImg,
          description:
            "تقارير هندسية احترافية لدعم اتخاذ القرار وخطط الصيانة.",
          points: [
            "تفاصيل فنية دقيقة",
            "صور حرارية وتلسكوبية",
            "توصيات هندسية واضحة",
            "تقارير ثنائية اللغة عند الطلب",
          ],
        },
        {
          title: "خدمات الإصلاح والعزل",
          image: repairImg,
          description:
            "حلول إصلاح وعزل هندسية بخبرة تزيد عن 20 عاماً.",
          points: [
            "إصلاح التسربات المكتشفة",
            "عزل الحمامات والمطابخ",
            "أنظمة الأسطح (بيتومين، بولي يوريا، إيبوكسي)",
            "ضمان ومواد معتمدة",
          ],
        },
      ]
    : [
        {
          title: "Thermal Leak Detection",
          image: thermalImg,
          description:
            "Advanced thermal imaging technology to identify hidden leaks without demolition.",
          points: [
            "Inspection of internal water networks",
            "Leak detection in bathrooms and kitchens",
            "Identifying heat loss and moisture patterns",
            "High-accuracy thermal imaging reports",
          ],
        },
        {
          title: "Telescopic Tank Inspection",
          image: tankImg,
          description:
            "Specialized inspection for underground and above-ground water tanks.",
          points: [
            "High-resolution internal imaging",
            "Identifying cracks and structural defects",
            "Documented findings with visuals",
            "Non-intrusive and safe inspection process",
          ],
        },
        {
          title: "Irrigation Network Inspection",
          image: irrigationImg,
          description:
            "Thermal analysis of irrigation systems to detect leaks and inefficiencies.",
          points: [
            "Inspection of irrigation lines and sprinklers",
            "Detection of surface and subsurface leaks",
            "Soil temperature analysis",
            "Efficiency improvement recommendations",
          ],
        },
        {
          title: "Water Auditing for Facilities",
          image: auditImg,
          description:
            "Complete assessment of water consumption to improve efficiency.",
          points: [
            "Consumption analysis",
            "Identifying water losses",
            "Efficiency recommendations",
            "Support for water-saving goals",
          ],
        },
        {
          title: "Technical Reporting",
          image: reportImg,
          description:
            "Professional technical reports for decision-making and maintenance planning.",
          points: [
            "Detailed technical findings",
            "Thermal and telescopic images",
            "Clear engineering recommendations",
            "Optional bilingual reporting",
          ],
        },
        {
          title: "Repair & Waterproofing Service",
          image: repairImg,
          description:
            "Engineering-grade repair and waterproofing solutions backed by 20+ years of experience.",
          points: [
            "Fixing leaks identified during inspection",
            "Bathroom & kitchen waterproofing",
            "Roof systems: Bitumen, Polyurea, Epoxy",
            "Warranty & certified materials",
          ],
        },
      ];

  return (
    <section
      id="services"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative py-20 px-6"
      style={{
        backgroundImage: `linear-gradient(rgba(248,250,252,0.96), rgba(248,250,252,0.98)), url(${servicesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {isArabic ? "خدمات مدقق المياه" : "Water Auditor – Services"}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            {isArabic
              ? "مجموعة متكاملة من الخدمات الفنية لاكتشاف ومعالجة مشاكل المياه باستخدام أحدث التقنيات وخبرة هندسية طويلة."
              : "A comprehensive suite of technical services designed to detect, diagnose, and resolve water-related issues using advanced technologies and engineering expertise."}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                <button
                  onClick={() => setActiveService(service)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {isArabic ? "تفاصيل الخدمة →" : "Service Details →"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">
              {activeService.title}
            </h3>

            <ul className="space-y-2 text-gray-700">
              {activeService.points.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-600">✔</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
