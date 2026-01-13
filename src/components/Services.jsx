import React from 'react'

function Services() {
  const services = [
    "Detecting Water Leaks in Residential Buildings",
    "Water Usage Auditing",
    "Measuring Water Efficiency & Rationalization",
    "Repairing Water Leaks",
    "Tank & Surface Waterproofing",
  ];

  return (
    <section id="services" className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services | خدماتنا</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services