import React from 'react'

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <p className="mb-4">
        We are a professional Water Auditor service dedicated to helping residential buildings detect
        water leaks, audit water usage, and improve water efficiency.
      </p>
      <p className="mb-6">
        Using modern tools and accurate analysis, we provide cost-effective solutions to prevent
        water loss, repair leaks, and protect your property.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="font-bold text-xl mb-2">Our Mission</h3>
          <p>To provide reliable water auditing and leak detection services that save water, reduce costs, and increase efficiency.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="font-bold text-xl mb-2">Our Vision</h3>
          <p>A world where every home uses water efficiently and sustainably.</p>
        </div>
      </div>
    </section>
  );
}

export default About