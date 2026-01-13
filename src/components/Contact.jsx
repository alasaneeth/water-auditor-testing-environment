import React, { useState } from 'react'
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  // Check if environment variables are loaded
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Debug: Check if env variables are loaded
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey ? "Loaded" : "Not loaded");

    // Create the template parameters object
    const templateParams = {
      to_email: "alasaneeth22@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      from_address: formData.address,
      message: formData.message,
      // Add these for debugging
      subject: `New Contact Form Submission from ${formData.name}`,
      reply_to: formData.email,
    };

    emailjs
      .send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setStatus("Message sent successfully!");
          // Reset all form fields including email
          setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus(`Failed to send message. Error: ${error.text || error.message}`);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="bg-blue-600 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-center mb-2">Phone: +966551539303 / +966551539303</p>
      <p className="text-center mb-8">Location: Riyadh, Kingdom of Saudi Arabia</p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          className="bg-white text-gray-800 p-6 rounded-2xl shadow space-y-4"
        >
          <input
            className="w-full border p-3 rounded"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            className="w-full border p-3 rounded"
            placeholder="Address / Location"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <textarea
            className="w-full border p-3 rounded"
            placeholder="Message / Request"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {status && (
            <p className={`text-center font-semibold ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
              {status}
            </p>
          )}
        </form>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow">
          <iframe
            title="Auditor Water Location"
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