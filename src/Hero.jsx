export default function Hero() {
    return (
        <div className="w-full min-h-screen grid md:grid-cols-2 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-16">

            {/* Animation */}
            <style>
                {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
            </style>

            {/* Left Side */}
            <div className="flex flex-col justify-center space-y-6 animate-[fadeUp_1s_ease-out]">

                <p className="text-sm tracking-[6px] text-gray-400 uppercase">
                    Frontend Developer
                </p>

                <h1 className="text-5xl md:text-6xl font-black leading-tight">
                    Hi, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Muhammad SAKHAWAT
                    </span>
                </h1>

                <p className="text-gray-400 max-w-md leading-relaxed">
                    I build modern, responsive and interactive web applications using React & Tailwind CSS.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 pt-2">
                    <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-xl font-semibold shadow-lg">
                        Hire Me
                    </button>

                    <button className="px-6 py-3 border border-gray-500 hover:border-white transition rounded-xl">
                        View Projects
                    </button>
                </div>

            </div>

            {/* Right Side */}
            <div className="flex justify-center items-center animate-[fadeInRight_1.2s_ease-out]">

                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full 
                        bg-gradient-to-tr from-blue-500/30 to-purple-500/30 
backdrop-blur-xl border border-white/10 
shadow-[0_0_40px_rgba(255,255,255,0.15)] 
hover:shadow-[0_0_70px_rgba(255,255,255,0.35)] 
flex items-center justify-center 
hover:scale-110 transition duration-300">

                     <img src="../pic.jpg" alt="" className="rounded-full w-80  " />

                </div>

            </div>

        </div>
    );
}