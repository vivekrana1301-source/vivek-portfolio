import React from 'react';
import profile from "../assets/tttt.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 pb-16 pt-28 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="w-full max-w-2xl text-center lg:text-left">
          <h1 className="text-2xl font-semibold text-blue-500 sm:text-3xl">
            HELLO
          </h1>

          <h2 className="mt-4 text-4xl font-bold leading-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
            I'm Vivek Rana
          </h2>

          <h3 className="mt-4 text-xl text-gray-600 sm:text-2xl">
            MERN Stack Web Developer
          </h3>

          <p className="mt-5 text-base text-gray-600 sm:text-lg">
            Full Stack Developer with 1 year of hands-on experience building responsive and scalable web applications using React, JavaScript, Node.js, Express, and MongoDB. I focus on creating secure, user-friendly applications and continuously improving my development skills.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
            <a href="#contact" className="rounded-lg bg-blue-500 px-6 py-3 text-center text-lg font-medium text-white transition hover:bg-blue-600">
              Let's Talk
            </a>

            <a href="#projects" className="rounded-lg border border-blue-500 px-6 py-3 text-center text-lg font-medium text-blue-500 transition hover:bg-blue-500 hover:text-white">
              View Projects
            </a>

            <a
              href="https://drive.google.com/file/d/17Y-GdMSZQqtGg33ZBRMqYw3xp0j-RnIg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gray-800 px-6 py-3 text-center text-lg font-medium text-white transition hover:bg-black"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-auto">
          <div className="h-64 w-64 overflow-hidden rounded-[45%] border-4 border-blue-400 shadow-lg transition-all duration-300 hover:scale-105 sm:h-80 sm:w-80">
            <img src={profile} alt="Vivek" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;