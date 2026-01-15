import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

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
  const reduceMotion = useReducedMotion();
  const [activeService, setActiveService] = useState(null);

  const services = isArabic
    ? [
        {
          title: "كشف التسربات الحرارية",
          image: thermalImg,
          points: [
            "فحص شبكات المياه الداخلية",
            "كشف التسربات دون تكسير",
            "تحليل الرطوبة وفقدان المياه",
            "تقارير دقيقة",
          ],
        },
        {
          title: "فحص الخزانات",
          image: tankImg,
          points: [
            "فحص داخلي عالي الدقة",
            "كشف التشققات",
            "توثيق مصور",
            "فحص آمن",
          ],
        },
        {
          title: "فحص شبكات الري",
          image: irrigationImg,
          points: [
            "فحص خطوط الري",
            "كشف التسربات الأرضية",
            "تحليل التربة",
            "تحسين الكفاءة",
          ],
        },
        {
          title: "تدقيق استهلاك المياه",
          image: auditImg,
          points: [
            "تحليل الاستهلاك",
            "تحديد الهدر",
            "توصيات تحسين",
            "خفض التكاليف",
          ],
        },
        {
          title: "التقارير الفنية",
          image: reportImg,
          points: [
            "تقارير هندسية",
            "صور حرارية",
            "توصيات واضحة",
            "دعم فني",
          ],
        },
        {
          title: "الإصلاح والعزل",
          image: repairImg,
          points: [
            "إصلاح التسربات",
            "عزل احترافي",
            "مواد معتمدة",
            "ضمان جودة",
          ],
        },
      ]
    : [
        {
          title: "Thermal Leak Detection",
          image: thermalImg,
          points: [
            "Internal pipe inspection",
            "Non-invasive leak detection",
            "Moisture & heat analysis",
            "Accurate reports",
          ],
        },
        {
          title: "Tank Inspection",
          image: tankImg,
          points: [
            "High-resolution inspection",
            "Crack detection",
            "Visual documentation",
            "Safe process",
          ],
        },
        {
          title: "Irrigation Inspection",
          image: irrigationImg,
          points: [
            "Pipeline inspection",
            "Underground leak detection",
            "Soil analysis",
            "Efficiency improvement",
          ],
        },
        {
          title: "Water Auditing",
          image: auditImg,
          points: [
            "Consumption analysis",
            "Loss identification",
            "Efficiency advice",
            "Cost reduction",
          ],
        },
        {
          title: "Technical Reports",
          image: reportImg,
          points: [
            "Engineering reports",
            "Thermal images",
            "Clear recommendations",
            "Professional format",
          ],
        },
        {
          title: "Repair & Waterproofing",
          image: repairImg,
          points: [
            "Leak repairs",
            "Professional waterproofing",
            "Certified materials",
            "Quality warranty",
          ],
        },
      ];

  // 🔹 Optimized motion variants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
  };

  const card = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0.25 } : { duration: 0.45 },
    },
  };

  const modal = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

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
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-14"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? false : "visible"}
        viewport={{ once: true, margin: "-120px" }}
        variants={container}
      >
        <motion.h2 className="text-4xl font-bold mb-4" variants={card}>
          {isArabic ? "خدمات مدقق المياه" : "Our Services"}
        </motion.h2>

        <motion.p className="max-w-3xl mx-auto text-gray-600 text-lg" variants={card}>
          {isArabic
            ? "خدمات فنية متكاملة لاكتشاف ومعالجة مشاكل المياه"
            : "Comprehensive technical services for water inspection and efficiency"}
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? false : "visible"}
        viewport={{ once: true, margin: "-120px" }}
        variants={container}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={card}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            whileHover={reduceMotion ? {} : { scale: 1.03 }}
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              decoding="async"
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <button
                onClick={() => setActiveService(service)}
                className="text-blue-600 font-semibold hover:underline"
              >
                {isArabic ? "تفاصيل الخدمة →" : "Service Details →"}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="bg-white rounded-2xl max-w-lg w-full p-6 relative">
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-xl"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-4">{activeService.title}</h3>

              <ul className="space-y-2 text-gray-700">
                {activeService.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-blue-600">✔</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Services;
