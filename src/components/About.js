import React from "react";
import { bio, skills, workingKnowledge } from "../data";
// import Image from "next/image";
import Skill from "./Skill";
import Contact from "./Contact";
import Headshot from "./Headshot";

const About = () => {
  return (
    <div
      id="about"
      className="md:w-4/5 border-sienna border-2 mx-auto p-8 my-8"
    >
      <h1 className="h1 text-sienna w-full mb-4">Christopher Leja</h1>
      <h2 className="h2 text-blueDark font-semibold mb-4">Software Engineer</h2>
      <div className="w-2/3 sm:w-1/2 mx-auto">
        <Contact />
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-40 h-40 m-auto rounded-full overflow-hidden border-blueDark border-2 relative">
          <Headshot />
        </div>
        <div className="w-full lg:w-3/4 p-4 sm:p-8 my-4 mx-auto border-blueLight border-2">
          {bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <div className="">
        <h1 className="h1 text-blueDark mb-4">Technical Skills</h1>
        <div className="">
          <h2 className="h2 text-sienna mb-4">Proficient In</h2>
          <div className="flex justify-evenly flex-wrap">
            {skills.map(({ name, icon }) => {
              return <Skill key={name} name={name} icon={icon} />;
            })}
          </div>
        </div>
        <div className="">
          <h2 className="h2 text-sienna mb-4">Working Knowledge</h2>
          <div className="flex justify-evenly flex-wrap">
            {workingKnowledge.map(({ name, icon }) => {
              return <Skill key={name} name={name} icon={icon} />;
            })}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
