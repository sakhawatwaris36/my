import { useEffect, useRef, useState } from "react";

export default function About() {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true); // sirf 1 dafa show
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
      className="w-full py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 md:px-16"
    >
      {/* Animation */}
      <style>
        {`
          @keyframes revealUp {
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

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div className={`${show ? "animate-[revealUp_0.8s_ease-out]" : "opacity-0"}`}>

          <h2 className="text-3xl md:text-4xl font-black tracking-wide">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            I'm <span className="text-white font-semibold">Muhammad SAKHAWAT</span>,
            a Frontend Developer using React & Tailwind.
          </p>

          {/* Boxes */}
          <div className={`grid grid-cols-2 gap-4 pt-4 ${show ? "animate-[revealUp_1s_ease-out]" : "opacity-0"}`}>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              Experience
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              Projects
            </div>
          </div>

        </div>

        {/* Right */}
        

      </div>
    </section>
  );
}