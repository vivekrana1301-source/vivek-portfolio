import React from "react";

const SkillComp = ({ skillName, icon }) => {
  return (
    <div className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-[#1b1b1b] px-4 py-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#202020]">
      <div className="flex h-6 w-6 items-center justify-center text-base">
        {icon}
      </div>

      <span className="whitespace-nowrap text-sm font-medium tracking-[0.08em] text-white/80 uppercase">
        {skillName}
      </span>
    </div>
  );
};

export default SkillComp;