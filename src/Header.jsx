export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-blue-950 to-black backdrop-blur-md border-b border-white/10">

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3
                      animate-[slideDown_0.8s_ease-out]">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-black tracking-widest text-white">
          MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            PORTFOLIO
          </span>
        </h1>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="Header.jsx" className="hover:text-white transition">Home</a>
          <a href="About.jsx" className="hover:text-white transition">About</a>
          <a href="Project.jsx" className="hover:text-white transition">Projects</a>
          <a href="Contact.jsx" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Button */}
        <button className="hidden md:block px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-lg">
          Hire Me
        </button>

        {/* Mobile Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>

      </div>
    </header>
  );
} 