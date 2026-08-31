import React, { useState } from 'react';
import SkillComp from './SkillComp';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaCode } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiTypescript, SiPostman } from "react-icons/si";

const skillList = [
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'Express.js', icon: <SiExpress className="text-white" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-400" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-300" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
  { name: 'Tools', icon: <FaCode className="text-violet-400" /> },
];

const Skill = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const marqueeSkills = [...skillList, ...skillList];

  return (
    <section className="bg-[#f5f7fb] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex items-center justify-between gap-4">
          <h2 className="text-[10px] font-medium uppercase tracking-[0.45em] text-black/70">
            STACK
          </h2>

          <button
            type="button"
            onClick={() => setShowAllSkills((prev) => !prev)}
            className="text-sm font-medium text-black/80 transition hover:text-black"
          >
            {showAllSkills ? 'Hide skills' : 'All skills'} <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-[#eef1f5] px-3 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.08),inset_0_0_0_1px_rgba(255,255,255,0.6)]">
          <div className="skill-marquee flex w-max gap-4">
            {marqueeSkills.map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="flex-shrink-0">
                <SkillComp skillName={skill.name} icon={skill.icon} />
              </div>
            ))}
          </div>
        </div>

        {showAllSkills && (
          <div className="mt-6 rounded-[28px] border border-slate-200 bg-[#f1f4f8] p-4 sm:p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.75)]">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {skillList.map((skill, index) => (
                <div key={`${skill.name}-grid-${index}`}>
                  <SkillComp skillName={skill.name} icon={skill.icon} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skill;