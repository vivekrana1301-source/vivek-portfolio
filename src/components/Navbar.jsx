import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-4 bg-gray-900/80 backdrop-blur-md shadow-xl">

      {/* Logo */}
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
        Vivek
      </h1>

      {/* Links */}
     <div className="flex gap-8 text-lg">

  <a href="#hero" className="text-white transition transform hover:-translate-y-1 hover:text-blue-400 duration-300">
    Home
  </a>

  <a href="#skill" className="text-white transition transform hover:-translate-y-1 hover:text-blue-400 duration-300">
    Skills
  </a>

  <a href="#projects" className="text-white transition transform hover:-translate-y-1 hover:text-blue-400 duration-300">
    Projects
  </a>

  <a href="#contact" className="text-white transition transform hover:-translate-y-1 hover:text-blue-400 duration-300">
    Contact
  </a>

</div>
    </nav>
  );
};

export default Navbar;