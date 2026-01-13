import React from 'react'

function WhyChooseUs() {
  const points = [
    "Accurate leak detection using professional tools",
    "Cost-saving solutions tailored to your building",
    "Fast response & efficient repair services",
    "Professional reports for every inspection",
    "Water efficiency expertise to reduce waste",
  ];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
      <ul className="space-y-4">
        {points.map((p, i) => (
          <li key={i} className="bg-gray-100 p-4 rounded-xl">{p}</li>
        ))}
      </ul>
    </section>
  );
}


export default WhyChooseUs