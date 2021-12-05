import React from "react";

const CardLink = ({ title, link }) => {
  return (
    <>
      {link ? (
        <div className="w-3/5 sm:w-1/2 mx-auto mt-4 rounded-full border-2 bg-blueDark hover:opacity-80 mb-8">
          <a aria-label={title} href={link} target="_blank" rel="noreferrer">
            <p className="text-center text-grayLight">{title}</p>
          </a>
        </div>
      ) : null}
    </>
  );
};

export default CardLink;
