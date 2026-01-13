import React from 'react'

function Home() {
  return (
    <section id="home" className="bg-gray-100 py-20 text-center px-4">
      <h2 className="text-4xl font-bold mb-4">
        Professional Water Audit & Leak Detection Services
      </h2>

      <p className="text-lg mb-6 max-w-2xl mx-auto">
        We help residential buildings reduce water loss, improve water efficiency, and save costs
        through professional auditing and repair solutions.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="tel:+966551539303"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/+966551539303"
          className="bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          WhatsApp Us
        </a>

        <a
          href="#contact"
          className="bg-gray-800 text-white px-6 py-3 rounded-xl"
        >
          Book Inspection
        </a>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
        {[
          "Detect water leaks accurately",
          "Audit water usage and efficiency",
          "Repair leaks and waterproof tanks",
          "Save money & reduce water wastage",
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
