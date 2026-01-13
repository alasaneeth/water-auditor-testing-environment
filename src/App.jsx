// App.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";

// Language context for easy access
const LanguageContext = React.createContext();

export default function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider value={language}>
      <div 
        className="font-sans text-gray-800"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <Helmet>
          <title>
            {language === "en" 
              ? "Auditor Water | Professional Water Audit & Leak Detection"
              : "مدقق مياه | فحص تسربات المياه والتدقيق المائي الاحترافي"
            }
          </title>
          <meta
            name="description"
            content={
              language === "en"
                ? "Professional water audit, leak detection, and water efficiency services for residential buildings. Save water, reduce costs, and prevent leaks."
                : "خدمات التدقيق المائي الاحترافية، كشف تسربات المياه، وخدمات كفاءة استخدام المياه للمباني السكنية. وفر المياه، قلل التكاليف، وامنع التسربات."
            }
          />
          <meta
            name="keywords"
            content="Water Audit, Leak Detection, Water Efficiency, Tank Waterproofing, مدقق مياه, كشف تسربات المياه"
          />
          <meta name="author" content="Auditor Water" />
          <meta 
            property="og:title" 
            content={
              language === "en"
                ? "Auditor Water | Water Audit & Leak Detection"
                : "مدقق مياه | التدقيق المائي وكشف التسربات"
            }
          />
          <meta
            property="og:description"
            content={
              language === "en"
                ? "Reliable water auditing and leak detection services for residential buildings."
                : "خدمات موثوقة للتدقيق المائي وكشف التسربات للمباني السكنية."
            }
          />
          <meta property="og:type" content="website" />
        </Helmet>

        <Navbar language={language} toggleLanguage={toggleLanguage} />
        <Home language={language} />
        <About language={language} />
        <Services language={language} />
        <WhyChooseUs language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </div>
    </LanguageContext.Provider>
  );
}

function Navbar({ language, toggleLanguage }) {
  const navItems = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact"
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      contact: "اتصل بنا"
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">
        {language === "en" ? "Auditor Water | مدقق مياه" : "مدقق مياه | Auditor Water"}
      </h1>
      <div className="flex items-center space-x-4">
        <div className="space-x-4">
          <a href="#home" className="hover:underline">{navItems[language].home}</a>
          <a href="#about" className="hover:underline">{navItems[language].about}</a>
          <a href="#services" className="hover:underline">{navItems[language].services}</a>
          <a href="#contact" className="hover:underline">{navItems[language].contact}</a>
        </div>
        <button
          onClick={toggleLanguage}
          className="ml-4 bg-white text-blue-600 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
        >
          {language === "en" ? "العربية" : "English"}
        </button>
      </div>
    </nav>
  );
}

function Home({ language }) {
  const content = {
    en: {
      title: "Professional Water Audit & Leak Detection Services",
      description: "We help residential buildings reduce water loss, improve water efficiency, and save costs through professional auditing and repair solutions.",
      call: "Call",
      whatsapp: "WhatsApp",
      inspection: "Inspection",
      features: [
        "Detect water leaks accurately",
        "Audit water usage and efficiency",
        "Repair leaks and waterproof tanks",
        "Save money & reduce water wastage"
      ]
    },
    ar: {
      title: "خدمات التدقيق المائي الاحترافية وكشف التسربات",
      description: "نساعد المباني السكنية على تقليل فقدان المياه، وتحسين كفاءة استخدام المياه، وتوفير التكاليف من خلال حلول التدقيق والإصلاح الاحترافية.",
      call: "اتصال",
      whatsapp: "واتساب",
      inspection: "فحص",
      features: [
        "كشف تسربات المياه بدقة",
        "تدقيق استخدام المياه والكفاءة",
        "إصلاح التسربات وعزل الخزانات",
        "وفر المال وقلل هدر المياه"
      ]
    }
  };

  const current = content[language];

  return (
    <section id="home" className="bg-gray-100 py-20 text-center px-4">
      <h2 className="text-4xl font-bold mb-4">{current.title}</h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        {current.description}
      </p>
      <div className="flex justify-center gap-4">
        <a href="tel:0551539303" className="bg-green-800 text-white px-6 py-3 rounded-xl">
          {current.call}
        </a>
        <a href="https://wa.me/971551539303" className="bg-green-600 text-white px-6 py-3 rounded-xl">
          {current.whatsapp}
        </a>
        <a href="#contact" className="bg-gray-800 text-white px-6 py-3 rounded-xl">
          {current.inspection}
        </a>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
        {current.features.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About({ language }) {
  const content = {
    en: {
      title: "About Us",
      description1: "We are a professional Water Auditor service dedicated to helping residential buildings detect water leaks, audit water usage, and improve water efficiency.",
      description2: "Using modern tools and accurate analysis, we provide cost-effective solutions to prevent water loss, repair leaks, and protect your property.",
      mission: {
        title: "Our Mission",
        text: "To provide reliable water auditing and leak detection services that save water, reduce costs, and increase efficiency."
      },
      vision: {
        title: "Our Vision",
        text: "A world where every home uses water efficiently and sustainably."
      }
    },
    ar: {
      title: "من نحن",
      description1: "نحن خدمة تدقيق مائي احترافية مكرسة لمساعدة المباني السكنية في كشف تسربات المياه، وتدقيق استخدام المياه، وتحسين كفاءة المياه.",
      description2: "باستخدام أدوات حديثة وتحليل دقيق، نقدم حلولاً فعالة من حيث التكلفة لمنع فقدان المياه، وإصلاح التسربات، وحماية ممتلكاتك.",
      mission: {
        title: "مهمتنا",
        text: "تقديم خدمات تدقيق مائي وفحص تسربات موثوقة توفر المياه، وتقلل التكاليف، وتزيد الكفاءة."
      },
      vision: {
        title: "رؤيتنا",
        text: "عالم يستخدم فيه كل منزل المياه بكفاءة واستدامة."
      }
    }
  };

  const current = content[language];

  return (
    <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{current.title}</h2>
      <p className="mb-4">{current.description1}</p>
      <p className="mb-6">{current.description2}</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="font-bold text-xl mb-2">{current.mission.title}</h3>
          <p>{current.mission.text}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="font-bold text-xl mb-2">{current.vision.title}</h3>
          <p>{current.vision.text}</p>
        </div>
      </div>
    </section>
  );
}

function Services({ language }) {
  const services = {
    en: [
      "Detecting Water Leaks in Residential Buildings",
      "Water Usage Auditing",
      "Measuring Water Efficiency & Rationalization",
      "Repairing Water Leaks",
      "Tank & Surface Waterproofing",
    ],
    ar: [
      "كشف تسربات المياه في المباني السكنية",
      "تدقيق استخدام المياه",
      "قياس كفاءة المياه وترشيدها",
      "إصلاح تسربات المياه",
      "عزل الخزانات والأسطح المائية",
    ]
  };

  const currentServices = services[language];

  return (
    <section id="services" className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        {language === "en" ? "Our Services | خدماتنا" : "خدماتنا | Our Services"}
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {currentServices.map((service, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs({ language }) {
  const points = {
    en: [
      "Accurate leak detection using professional tools",
      "Cost-saving solutions tailored to your building",
      "Fast response & efficient repair services",
      "Professional reports for every inspection",
      "Water efficiency expertise to reduce waste",
    ],
    ar: [
      "كشف التسربات بدقة باستخدام أدوات احترافية",
      "حلول موفرة للتكاليف مصممة لمبناك",
      "استجابة سريعة وخدمات إصلاح فعالة",
      "تقارير احترافية لكل عملية فحص",
      "خبرة في كفاءة المياه لتقليل الهدر",
    ]
  };

  const currentPoints = points[language];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        {language === "en" ? "Why Choose Us" : "لماذا تختارنا"}
      </h2>
      <ul className="space-y-4">
        {currentPoints.map((p, i) => (
          <li key={i} className="bg-gray-100 p-4 rounded-xl">{p}</li>
        ))}
      </ul>
    </section>
  );
}

function Contact({ language }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publiKiey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        serviceId,
        templateId,
        {
          to_email: "alasaneeth22@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          from_address: formData.address,
          message: formData.message,
        },
        publiKiey
      )
      .then(
        () => {
          setStatus(language === "en" ? "Message sent successfully!" : "تم إرسال الرسالة بنجاح!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            message: "",
          });
        },
        (error) => {
          setStatus(language === "en" ? "Failed to send message. Try again." : "فشل إرسال الرسالة. حاول مرة أخرى.");
          console.error(error);
        }
      );
  };

  const content = {
    en: {
      title: "Contact Us",
      phone: "Phone: 0551539303 / 0562956775",
      location: "Location: Dubai, UAE",
      namePlaceholder: "Name",
      emailPlaceholder: "Email Address",
      phonePlaceholder: "Phone Number",
      addressPlaceholder: "Address / Location",
      messagePlaceholder: "Message / Request",
      submit: "Submit"
    },
    ar: {
      title: "اتصل بنا",
      phone: "الهاتف: 0551539303 / 0562956775",
      location: "الموقع: دبي، الإمارات العربية المتحدة",
      namePlaceholder: "الاسم",
      emailPlaceholder: "البريد الإلكتروني",
      phonePlaceholder: "رقم الهاتف",
      addressPlaceholder: "العنوان / الموقع",
      messagePlaceholder: "الرسالة / الطلب",
      submit: "إرسال"
    }
  };

  const current = content[language];

  return (
    <section id="contact" className="bg-blue-600 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">{current.title}</h2>
      <p className="text-center mb-2">{current.phone}</p>
      <p className="text-center mb-8">{current.location}</p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          className="bg-white text-gray-800 p-6 rounded-2xl shadow space-y-4"
        >
          <input
            className="w-full border p-3 rounded"
            placeholder={current.namePlaceholder}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            className="w-full border p-3 rounded"
            placeholder={current.emailPlaceholder}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="w-full border p-3 rounded"
            placeholder={current.phonePlaceholder}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            className="w-full border p-3 rounded"
            placeholder={current.addressPlaceholder}
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <textarea
            className="w-full border p-3 rounded"
            placeholder={current.messagePlaceholder}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
            {current.submit}
          </button>

          {status && (
            <p className="text-center text-green-600 font-semibold">{status}</p>
          )}
        </form>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow">
          <iframe
            title="Auditor Water Location"
            src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
            className="w-full h-full min-h-[350px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function Footer({ language }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      © {currentYear} {language === "en" ? "Auditor Water | مدقق مياه" : "مدقق مياه | Auditor Water"}
    </footer>
  );
}