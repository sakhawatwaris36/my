import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true);
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    { name: "Portfolio Website", desc: "Modern portfolio using React & Tailwind" },
    { name: "Login Page", desc: "Responsive login UI design" },
    { name: "Landing Page", desc: "Animated hero landing page" },
  ];

  return (
    <section ref={ref} className="w-full py-20 bg-black text-white px-6 md:px-16">

      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(50px); }
          to { opacity:1; transform:translateY(0); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto text-center">

        <h2 className={`${show ? "animate-[fadeUp_0.8s]" : "opacity-0"} text-3xl md:text-4xl font-black mb-12`}>
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i}
              className={`${show ? "animate-[fadeUp_1s]" : "opacity-0"}
              p-6 rounded-xl bg-white/5 border border-white/10
              hover:scale-105 transition duration-300
              shadow-[0_0_30px_rgba(255,255,255,0.1)]
              hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <h3 className="text-xl font-bold text-blue-400">{p.name}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>

              <div className="flex gap-3 mt-4 justify-center">
                <button className="px-4 py-2 bg-blue-500 rounded-lg">Live</button>
                <button className="px-4 py-2 border border-gray-500 rounded-lg">Code</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}