// App.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Helmet>
        <title>Auditor Water | Professional Water Audit & Leak Detection</title>
        <meta
          name="description"
          content="Professional water audit, leak detection, and water efficiency services for residential buildings. Save water, reduce costs, and prevent leaks."
        />
        <meta
          name="keywords"
          content="Water Audit, Leak Detection, Water Efficiency, Tank Waterproofing, مدقق مياه, كشف تسربات المياه"
        />
        <meta name="author" content="Auditor Water" />
        <meta property="og:title" content="Auditor Water | Water Audit & Leak Detection" />
        <meta
          property="og:description"
          content="Reliable water auditing and leak detection services for residential buildings."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <Home />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}







