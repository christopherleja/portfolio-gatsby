import React from "react";

const Navbar = () => {
  const navArr = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "About",
      link: "#about",
    },
    {
      text: "Projects",
      link: "#projects",
    },
    {
      text: "Resume",
      link: "#resume",
    },
  ];

  return (
    <div className="fixed top-0 h-20 z-20 w-screen flex justify-evenly items-center uppercase bg-black bg-opacity-90">
      <div className="w-0 md:w-1/2">
        <h4 className="h4 text-sienna md:ml-12 float-left hidden md:block">
          Christopher Leja
        </h4>
      </div>
      <ul className="w-full md:w-1/2 justify-evenly flex ">
        {navArr.map((item, i) => {
          return (
            <li
              key={i}
              className="list-none text-blueLight hover:text-blueDark"
            >
              <a href={item.link}>{item.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
