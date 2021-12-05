import React from "react";
import { socials } from "../data";

const Contact = () => {
  return (
    <div className="flex justify-around mb-4">
      {socials.map((s, i) => {
        return (
          <a
            key={i}
            className=""
            href={s.link}
            target="_blank"
            rel="noreferrer"
          >
            {s.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Contact;
