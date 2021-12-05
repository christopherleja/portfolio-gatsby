import React from "react";

const ResumeItem = ({ job }) => {
  return (
    <div className="p-4 my-4 border-blueLight border-2">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex md:flex-col">
          <h4 className="resume-title resume-company-title">{job.company}</h4>
          <div className="h-8" />
        </div>
        <div className="flex flex-col ">
          <h4 className="resume-title">{job.title}</h4>
          <p className="text-right md:align-middle text-sienna font-semibold">
            {job.year}
          </p>
        </div>
      </div>

      <ul className="list-disc px-4">
        {job?.body?.map((b, i) => {
          return (
            <li key={i} className="py-1 pl-4 list-inside">
              {b}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResumeItem;
