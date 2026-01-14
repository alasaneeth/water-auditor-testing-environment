import React from "react";
import { useSelector } from "react-redux";

function WhyChooseUs() {
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";

  const points = isArabic
    ? [
        { 
          icon: "🔍", 
          text: "كشف دقيق لتسربات المياه باستخدام أدوات احترافية متطورة" 
        },
        { 
          icon: "💰", 
          text: "حلول موفرة للتكاليف مصممة خصيصاً لمبناك" 
        },
        { 
          icon: "⚡", 
          text: "استجابة سريعة وخدمات إصلاح فعّالة في وقت قياسي" 
        },
        { 
          icon: "📊", 
          text: "تقارير احترافية مفصلة لكل عملية فحص وقياس" 
        },
        { 
          icon: "💧", 
          text: "خبرة متخصصة في كفاءة المياه لتقليل الهدر والاستهلاك" 
        },
        { 
          icon: "🏆", 
          text: "ضمان الجودة وخدمة ما بعد البيع المتميزة" 
        },
      ]
    : [
        { 
          icon: "🔍", 
          text: "Accurate leak detection using advanced professional tools" 
        },
        { 
          icon: "💰", 
          text: "Cost-saving solutions tailored specifically to your building" 
        },
        { 
          icon: "⚡", 
          text: "Fast response & efficient repair services with quick turnaround" 
        },
        { 
          icon: "📊", 
          text: "Detailed professional reports for every inspection" 
        },
        { 
          icon: "💧", 
          text: "Specialized water efficiency expertise to reduce waste" 
        },
        { 
          icon: "🏆", 
          text: "Quality assurance and excellent after-sales service" 
        },
      ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Water-themed background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-300 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-300 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            {isArabic ? "لماذا نحن الخيار الأمثل؟" : "Why We Are The Best Choice?"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isArabic 
              ? "نتميز بخبرة واسعة وتقنيات متطورة لضمان أفضل النتائج لعملائنا"
              : "We excel with extensive experience and advanced technologies to ensure the best results for our clients"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <div
              key={i}
              className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4 rtl:space-x-reverse rtl:space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {point.icon}
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {point.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">{isArabic ? "رضا العملاء" : "Customer Satisfaction"}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">{isArabic ? "مشروع منجز" : "Projects Completed"}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">{isArabic ? "دعم فني" : "Technical Support"}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
            <div className="text-gray-600">{isArabic ? "سنوات خبرة" : "Years Experience"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;