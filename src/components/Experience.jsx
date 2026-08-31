import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Techennia Info Solutions",
      role: "Full Stack Developer Intern",
      duration: "April 2026 - Present",
      responsibilities: [
        "Contributing to a full-stack Hospital Management System spanning patient-facing and administrative workflows across three internal modules",
        "Building responsive frontend interfaces and reusable components with React and TypeScript, integrated with REST APIs",
        "Using AI-assisted tools (Cursor) for code analysis, debugging, and refactoring—with manual validation of all generated code to maintain code quality"
      ],
      technologies: ["React", "Node.js", "TypeScript", "REST APIs", "AI Tools"]
    },
    {
      id: 2,
      company: "Bellurbis Technologies",
      role: "Full Stack Developer Intern",
      duration: "January - April 2026",
      responsibilities: [
        "Developed and maintained full stack web applications using MongoDB, Express.js, React.js, and Node.js",
        "Built REST APIs for CRUD operations and integrated them with frontend components",
        "Assisted in debugging, testing, and improving application performance",
        "Collaborated with senior developers to implement new features and fix bugs"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "TypeScript"]
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-indigo-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-lg text-indigo-600 font-semibold">{exp.company}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 flex items-center">
                📅 {exp.duration}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Responsibility:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start">
                      <span className="text-indigo-600 mr-2 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
