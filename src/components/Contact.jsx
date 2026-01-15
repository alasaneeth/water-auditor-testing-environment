import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import ContactImage from "../assets/Backround Images/water-contact-bg.jpg";
import { useReducedMotion } from "framer-motion";
import { getMotionProps } from "../utils/motionConfig";

function Contact() {
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";
  const reduce = useReducedMotion();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      from_address: formData.address,
      message: formData.message,
      subject: isArabic
        ? `طلب جديد من ${formData.name}`
        : `New Contact Form Submission from ${formData.name}`,
      reply_to: formData.email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus(isArabic ? "تم إرسال الرسالة بنجاح!" : "Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", address: "", message: "" });
      })
      .catch((error) => {
        setStatus(
          isArabic
            ? "فشل في إرسال الرسالة"
            : `Failed to send message. ${error.text || ""}`
        );
      })
      .finally(() => setLoading(false));
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const statusVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-6"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.60), rgba(255, 255, 255, 0.70)), url(${ContactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      {...getMotionProps(reduce)}

    >
      {/* Header */}
      <motion.div className="text-center mb-6" variants={itemVariants}>
        <h2 className="text-3xl font-bold">{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
      </motion.div>

      <motion.div className="text-center mb-8" variants={itemVariants}>
        <p>{isArabic ? "الهاتف" : "Phone"}: +966551539303</p>
        <p>
          {isArabic
            ? "الموقع: الرياض، المملكة العربية السعودية"
            : "Location: Riyadh, Kingdom of Saudi Arabia"}
        </p>
      </motion.div>

      <motion.div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" variants={containerVariants}>
        {/* Contact Form */}
        <motion.form
          onSubmit={sendEmail}
          className="bg-white text-gray-800 p-6 rounded-2xl shadow space-y-4"
          variants={itemVariants}
        >
          <input
            className="w-full border p-3 rounded"
            placeholder={isArabic ? "الاسم" : "Name"}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border p-3 rounded"
            placeholder={isArabic ? "البريد الإلكتروني" : "Email Address"}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border p-3 rounded"
            placeholder={isArabic ? "رقم الهاتف" : "Phone Number"}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border p-3 rounded"
            placeholder={isArabic ? "العنوان / الموقع" : "Address / Location"}
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <textarea
            className="w-full border p-3 rounded"
            placeholder={isArabic ? "الرسالة / الطلب" : "Message / Request"}
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? (isArabic ? "جاري الإرسال..." : "Sending...") : isArabic ? "إرسال" : "Submit"}
          </motion.button>

          <AnimatePresence>
            {status && (
              <motion.p
                className="text-center font-semibold text-green-600 mt-2"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={statusVariants}
              >
                {status}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Google Map */}
        <motion.div className="rounded-2xl overflow-hidden shadow" variants={itemVariants}>
          <iframe
            title="Water Auditor Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14594.0216762016!2d46.7632912!3d24.7653579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ1JzU1LjMiTiA0NsKwNDUnNDcuOSJF!5e0!3m2!1sen!2sae!4v1705140000000"
            className="w-full h-full min-h-[350px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
