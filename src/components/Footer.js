import React from "react";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="my-8">
      <h3 className="h5 text-blueDark font-semibold mb-4">Christopher Leja</h3>
      <h6 className="h6 text-center text-blueDark mb-2">Somerville, MA</h6>
      <p className="text-blueDark text-center mb-4">
        christopher.leja@gmail.com
      </p>
      <div className="w-1/2 mx-auto">
        <Contact />
      </div>
    </div>
  );
};

export default Footer;
