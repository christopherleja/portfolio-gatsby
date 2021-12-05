import React from "react";

const Skill = ({ name, icon }) => {
  return (
    <div className="mx-2 p-2">
      {icon}
      <p className="text-blueDark">{name}</p>
    </div>
  );
};

export default Skill;
