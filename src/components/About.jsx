import { useSelector } from "react-redux";
import aboutBg from "../assets/Backround Images/audit-bg.jpg"

function About() {
  const lang = useSelector((state) => state.language.lang);

  return (
    <section 
      id="about" 
      className="relative py-24 px-6"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.60), rgba(255, 255, 255, 0.70)), url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {lang === "en" ? "About Us" : "من نحن"}
        </h2>

        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-8">
          <p className="mb-4 text-lg leading-relaxed">
            {lang === "en"
              ? "We are a professional Water Auditor service dedicated to helping residential buildings detect water leaks, audit water usage, and improve water efficiency."
              : "نحن خدمة تدقيق المياه المحترفة المكرسة لمساعدة المباني السكنية في اكتشاف تسربات المياه، تدقيق استخدام المياه، وتحسين كفاءتها."}
          </p>

          <p className="mb-6 text-lg leading-relaxed">
            {lang === "en"
              ? "Using modern tools and accurate analysis, we provide cost-effective solutions to prevent water loss, repair leaks, and protect your property."
              : "باستخدام أدوات حديثة وتحليل دقيق، نقدم حلولًا فعّالة من حيث التكلفة لمنع فقدان المياه، إصلاح التسربات، وحماية ممتلكاتك."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-200">
            <h3 className="font-bold text-2xl mb-4 text-blue-600">
              {lang === "en" ? "Our Mission" : "مهمتنا"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {lang === "en"
                ? "To provide reliable water auditing and leak detection services that save water, reduce costs, and increase efficiency."
                : "تقديم خدمات تدقيق المياه واكتشاف التسربات بشكل موثوق لتوفير المياه، تقليل التكاليف، وزيادة الكفاءة."}
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-200">
            <h3 className="font-bold text-2xl mb-4 text-blue-600">
              {lang === "en" ? "Our Vision" : "رؤيتنا"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {lang === "en"
                ? "A world where every home uses water efficiently and sustainably."
                : "عالم يستخدم فيه كل منزل المياه بكفاءة واستدامة."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;