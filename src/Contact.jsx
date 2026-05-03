import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true);
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full py-20 bg-gray-900 text-white px-6 md:px-16">

      <div className="max-w-xl mx-auto text-center">

        <h2 className={`${show ? "animate-[fadeUp_0.8s]" : "opacity-0"} text-3xl font-black mb-8`}>
          Contact <span className="text-blue-500">Me</span>
        </h2>

        <form className={`space-y-4 ${show ? "animate-[fadeUp_1s]" : "opacity-0"}`}>

          <input type="text" placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none" />

          <input type="email" placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none" />

          <textarea placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none"></textarea>

          <button className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}