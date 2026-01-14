import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import ContactImage from "../assets/Backround Images/water-contact-bg.jpg"
function Contact() {
  const lang = useSelector((state) => state.language.lang);
  const isArabic = lang === "ar";

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
      to_email: "alasaneeth22@gmail.com",
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
        setStatus(
          isArabic ? "تم إرسال الرسالة بنجاح!" : "Message sent successfully!"
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
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

  return (
    <section id="contact" className="py-16 px-6" 
       style={{
backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.60), rgba(255, 255, 255, 0.70)), url(${ContactImage})`,            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
      <h2 className="text-3xl font-bold text-center mb-6">
        {isArabic ? "تواصل معنا" : "Contact Us"}
      </h2>

      <p className="text-center mb-2">
        {isArabic ? "الهاتف" : "Phone"}: +966551539303
      </p>

      <p className="text-center mb-8">
        {isArabic
          ? "الموقع: الرياض، المملكة العربية السعودية"
          : "Location: Riyadh, Kingdom of Saudi Arabia"}
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          className="bg-white text-gray-800 p-6 rounded-2xl shadow space-y-4"
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading
              ? isArabic
                ? "جاري الإرسال..."
                : "Sending..."
              : isArabic
              ? "إرسال"
              : "Submit"}
          </button>

          {status && (
            <p className="text-center font-semibold text-green-600">
              {status}
            </p>
          )}
        </form>

               {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow">
          <iframe
            title="Water Auditor Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14594.0216762016!2d46.7632912!3d24.7653579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ1JzU1LjMiTiA0NsKwNDUnNDcuOSJF!5e0!3m2!1sen!2sae!4v1705140000000"
            className="w-full h-full min-h-[350px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
