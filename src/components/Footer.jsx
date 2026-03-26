import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-300 py-6 flex flex-col items-center gap-4">

      {/* Social Icons */}
    <div className="flex gap-6 mt-6 text-2xl text-gray-600">

  <a 
    href="https://www.instagram.com/bipiin.4/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-500"
  >
    <FaInstagram />
  </a>

  <a 
    href="https://www.linkedin.com/in/vivek-rana-844679309/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-600"
  >
    <FaLinkedin />
  </a>

  <a 
    href="mailto:vivekrana1301@gmail.com"
    className="hover:text-red-500"
  >
    <FaEnvelope />
  </a>

</div>

      {/* Copyright */}
      <p className="text-sm">
        © 2026 Vivek Rana. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;