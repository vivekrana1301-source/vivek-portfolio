import React from 'react';
import SkillComp from './SkillComp';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs  } from "react-icons/fa";
import { SiMongodb, SiTailwindcss,SiExpress  } from "react-icons/si";

const Skill = () => {
  return (
    <section className="py-20 flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-200">

      {/* Title */}
      <h2 className="text-3xl font-bold mb-10">
        My Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">

        <SkillComp
          skillName="React"
          icon={<FaReact className="text-blue-500 text-3xl" />}
        />

        <SkillComp
          skillName="Node"
          icon={<FaNodeJs className="text-green-600 text-3xl" />}
        />

        <SkillComp
          skillName="MongoDB"
          icon={<SiMongodb className="text-green-500 text-3xl" />}
        />

        <SkillComp
          skillName="HTML"
          icon={<FaHtml5 className="text-orange-600 text-3xl" />}
        />

        <SkillComp
          skillName="CSS"
          icon={<FaCss3Alt className="text-blue-600 text-3xl" />}
        />

        <SkillComp
          skillName="JavaScript"
          icon={<FaJs className="text-yellow-500 text-3xl" />}
        />

        <SkillComp
          skillName="Tailwind"
          icon={<SiTailwindcss className="text-sky-400 text-3xl" />}
        />

        <SkillComp
  skillName="Express.js"
  icon={<SiExpress className="text-gray-700 text-3xl" />}
/>

      </div>

    </section>
  );
}

export default Skill;