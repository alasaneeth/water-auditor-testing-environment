// App.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const lang = useSelector((state) => state.language.lang);

  const isArabic = lang === "ar";

  return (
    <div
      className="font-sans text-gray-800"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Helmet>
        <title>
          {isArabic
            ? "مدقق مياه | تدقيق المياه وكشف التسربات"
            : "Auditor Water | Professional Water Audit & Leak Detection"}
        </title>

        <meta
          name="description"
          content={
            isArabic
              ? "خدمات احترافية لتدقيق المياه وكشف التسربات وتحسين كفاءة استخدام المياه في المباني السكنية."
              : "Professional water audit, leak detection, and water efficiency services for residential buildings."
          }
        />

        <meta
          name="keywords"
          content={
            isArabic
              ? "تدقيق المياه، كشف تسربات، كفاءة المياه، عزل الخزانات، مدقق مياه"
              : "Water Audit, Leak Detection, Water Efficiency, Tank Waterproofing"
          }
        />

        <meta name="author" content="Auditor Water" />
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={
            isArabic
              ? "مدقق مياه | خدمات كشف التسربات"
              : "Auditor Water | Water Audit & Leak Detection"
          }
        />

        <meta
          property="og:description"
          content={
            isArabic
              ? "خدمات موثوقة لتدقيق المياه وكشف التسربات للمباني السكنية."
              : "Reliable water auditing and leak detection services for residential buildings."
          }
        />
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
