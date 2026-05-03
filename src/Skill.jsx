import { useEffect, useRef, useState } from "react";

export default function Skill() {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 md:px-16"
    >
      {/* Animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(50px);
              filter: blur(5px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className={`text-3xl md:text-4xl font-black mb-12 tracking-wide 
          ${show ? "animate-[fadeUp_0.8s_ease-out]" : "opacity-0"}`}>
          My <span className="text-blue-500">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Skill Card */}
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind",
            "Git",
            "GitHub",
            
          ].map((skill, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl bg-white/5 border border-white/10 
              shadow-[0_0_30px_rgba(255,255,255,0.1)]
              hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]
              hover:scale-105 transition duration-300
              ${show ? "animate-[fadeUp_1s_ease-out]" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-blue-400">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}