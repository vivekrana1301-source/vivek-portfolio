import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import profile from "../assets/tttt.png";

const Hero = () => {
  return (
    <section className="flex items-center justify-between px-10 py-20 bg-gradient-to-r from-gray-100 to-gray-200">

      {/* Left Content */}
      <div className="max-w-lg flex flex-col gap-4">

        <h1 className="text-xl text-blue-500 font-semibold">
          HELLO
        </h1>

        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          I'm Vivek  Rana
        </h2>

        <h3 className="text-2xl text-gray-600">
          MERN Stack Web Developer
        </h3>

       <p className="text-gray-500">
  A Full Stack Developer with a strong foundation in React, JavaScript,
  and modern UI development, along with backend experience in Node.js,
  Express, and databases. I focus on building scalable, secure, and
  responsive web applications while continuously learning new technologies.
</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">

          <a href='#contact' className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Let's Talk
          </a>

          <a href='#projects' className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
            View Projects
          </a>

          <a
            href="https://drive.google.com/file/d/10T8OncxpxBjocabhtJYncdfKvd5xSJj_/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-black transition"
          >
            View Resume
          </a>

        </div>

        {/* Social Icons */}


      </div>

      {/* Right Side Image */}
      <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg border-4 border-blue-400 hover:scale-105 transition-all duration-300 ">
        <img
          src={profile}
          alt="Vivek"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
}

export default Hero;