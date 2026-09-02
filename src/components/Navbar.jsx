import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#skill", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="site-nav fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <h1 className="text-2xl font-extrabold sm:text-3xl">
          Vivek
        </h1>

        <div className="nav-actions flex items-center gap-3">
          <button type="button" onClick={toggleTheme} className="theme-toggle" aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"} title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-6 rounded bg-white" />
              <span className="block h-0.5 w-6 rounded bg-white" />
              <span className="block h-0.5 w-6 rounded bg-white" />
            </div>
          </button>
        </div>

        <div className="nav-links hidden items-center gap-6 text-lg md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white transition duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-gray-900/90 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3 text-base">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white transition hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;