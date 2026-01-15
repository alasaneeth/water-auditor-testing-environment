import { useSelector } from "react-redux";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Droplets,
  FileText,
  Wrench,
  Clock,
  BadgeCheck,
} from "lucide-react";

function WhyChooseUs() {
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";
  const reduceMotion = useReducedMotion();

  const items = isArabic
    ? [
        { icon: ShieldCheck, title: "خبرة معتمدة", desc: "فريق فني مؤهل ومرخص" },
        { icon: Droplets, title: "كشف بدون تكسير", desc: "تقنيات حديثة وآمنة" },
        { icon: FileText, title: "تقارير رسمية", desc: "معتمدة للجهات الحكومية" },
        { icon: Wrench, title: "حلول متكاملة", desc: "كشف، إصلاح، وعزل" },
        { icon: Clock, title: "استجابة سريعة", desc: "خدمة فورية 24/7" },
        { icon: BadgeCheck, title: "ضمان الجودة", desc: "التزام كامل بالمعايير" },
      ]
    : [
        { icon: ShieldCheck, title: "Certified Expertise", desc: "Licensed professional team" },
        { icon: Droplets, title: "No Wall Breaking", desc: "Advanced non-invasive tools" },
        { icon: FileText, title: "Official Reports", desc: "Accepted by authorities" },
        { icon: Wrench, title: "Complete Solutions", desc: "Detection, repair & insulation" },
        { icon: Clock, title: "Fast Response", desc: "24/7 service availability" },
        { icon: BadgeCheck, title: "Quality Guarantee", desc: "Full compliance with standards" },
      ];

  // 🔹 Motion variants (container only)
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0.2 } : { duration: 0.4 },
    },
  };

  return (
    <section
      id="why-us"
      dir={isArabic ? "rtl" : "ltr"}
      className="py-20 px-6 bg-white"
    >
      {/* Header */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-14"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? false : "visible"}
        viewport={{ once: true, margin: "-120px" }}
        variants={container}
      >
        <motion.h2
          variants={card}
          className="text-4xl font-bold mb-4"
        >
          {isArabic ? "لماذا نحن؟" : "Why Choose Us"}
        </motion.h2>

        <motion.p
          variants={card}
          className="text-gray-600 text-lg"
        >
          {isArabic
            ? "نقدم حلول فنية دقيقة بأعلى معايير الجودة"
            : "Delivering precise technical solutions with top quality standards"}
        </motion.p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? false : "visible"}
        viewport={{ once: true, margin: "-120px" }}
        variants={container}
      >
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              variants={card}
              className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default WhyChooseUs;
