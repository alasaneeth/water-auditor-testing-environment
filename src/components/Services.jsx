import React from "react";

import leakImg from "../assets/leakImg.jpeg";
// import auditImg from "../assets/services/water-audit.jpg";
// import efficiencyImg from "../assets/services/water-efficiency.jpg";
// import repairImg from "../assets/services/repair.jpg";
// import waterproofImg from "../assets/services/waterproofing.jpg";

function Services() {
  const services = [
    {
      title: "Detecting Water Leaks in Residential Buildings",
      image: leakImg,
    },
    {
      title: "Water Usage Auditing",
      image: leakImg,
    },
    {
      title: "Measuring Water Efficiency & Rationalization",
      image: leakImg,
    },
    {
      title: "Repairing Water Leaks",
      image: leakImg,
    },
    {
      title: "Tank & Surface Waterproofing",
      image: leakImg,
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services | خدماتنا
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg text-center">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
