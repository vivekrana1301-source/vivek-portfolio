import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "React Todo App",
    description: "A todo application built with React with add and delete features.",
    github: "https://github.com/vivekrana1301-source/Todo-Redux-app",
  },
  {
    name: "Hotel App",
    description: "Hotel management system backend built using Node.js.",
    github: "https://github.com/vivekrana1301-source/node_hotel",
  },
  {
    name: "Employee Management System",
    description: "Login system and employee management dashboard.",
    github: "https://github.com/vivekrana1301-source/employee-management-system",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-100 to-gray-200">
      
      <h2 className="text-4xl font-bold text-center mb-14">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              {project.name}
            </h3>

            <p className="text-gray-600 mb-6">
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-black px-4 py-2 rounded-lg w-fit hover:bg-gray-800 transition"
            >
              <FaGithub />
              View Code
            </a>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;