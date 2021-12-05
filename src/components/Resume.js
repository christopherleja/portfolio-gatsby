import React from "react";
import { ed, jobs } from "../data";
import ResumeItem from "./ResumeItem";

const Resume = ({ resume }) => {
  const file = resume?.includes?.Asset[0]?.fields?.file?.url;

  return (
    <div id="resume">
      <h1 className="h1 my-8 text-sienna"> Resumé </h1>
      <div className="flex justify-center">
        <a
          href={file}
          download
          target="_blank"
          rel="noreferrer"
          className="bg-blueDark p-4 rounded-md text-grayLight hover:opacity-80"
          aria-label="Download resumé"
        >
          Download
        </a>
      </div>
      <div className="resume-container">
        <h1 className="h1 text-sienna">Experience</h1>
        {jobs.map((j, i) => (
          <ResumeItem key={i} job={j} />
        ))}
        <div className="mt-8">
          <h1 className="h1 text-sienna mb-8">Education</h1>
          {ed.map((j, i) => (
            <ResumeItem key={i} job={j} />
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Resume;
