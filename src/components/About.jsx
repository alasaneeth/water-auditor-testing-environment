import { useSelector } from "react-redux";

function About() {
  const lang = useSelector((state) => state.language.lang);

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        {lang === "en" ? "About Us" : "من نحن"}
      </h2>

      <p className="mb-4">
        {lang === "en"
          ? "We are a professional Water Auditor service dedicated to helping residential buildings detect water leaks, audit water usage, and improve water efficiency."
          : "نحن خدمة تدقيق المياه المحترفة المكرسة لمساعدة المباني السكنية في اكتشاف تسربات المياه، تدقيق استخدام المياه، وتحسين كفاءتها."}
      </p>

      <p className="mb-6">
        {lang === "en"
          ? "Using modern tools and accurate analysis, we provide cost-effective solutions to prevent water loss, repair leaks, and protect your property."
          : "باستخدام أدوات حديثة وتحليل دقيق، نقدم حلولًا فعّالة من حيث التكلفة لمنع فقدان المياه، إصلاح التسربات، وحماية ممتلكاتك."}
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="font-bold text-xl mb-2">
            {lang === "en" ? "Our Mission" : "مهمتنا"}
          </h3>
          <p>
            {lang === "en"
              ? "To provide reliable water auditing and leak detection services that save water, reduce costs, and increase efficiency."
              : "تقديم خدمات تدقيق المياه واكتشاف التسربات بشكل موثوق لتوفير المياه، تقليل التكاليف، وزيادة الكفاءة."}
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h3 className="font-bold text-xl mb-2">
            {lang === "en" ? "Our Vision" : "رؤيتنا"}
          </h3>
          <p>
            {lang === "en"
              ? "A world where every home uses water efficiently and sustainably."
              : "عالم يستخدم فيه كل منزل المياه بكفاءة واستدامة."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
