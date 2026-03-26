import React from "react";

const SkillComp = ({ skillName, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer">

      {icon}

      <p className="mt-3 font-semibold text-gray-700">
        {skillName}
      </p>

    </div>
  );
};

export default SkillComp;