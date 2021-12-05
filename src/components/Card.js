import React, { useState, useContext } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import AppContext from "../context";
import { Link } from "gatsby";

const Card = ({ project }) => {
  const { title, subtitle, body, url, image, techStack, mobileView } =
    project.node;
  const [expanded, setExpanded] = useState(false);
  const { selected, setSelected, setModalVisible } = useContext(AppContext);

  {
    console.log(project);
  }
  const img = getImage(image);
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 relative p-4 hover:opacity-90">
      <div
        className="border-sienna border-2"
        onClick={() => {
          setSelected(project.node);
          setModalVisible(true);
          setExpanded(!expanded);
        }}
      >
        <GatsbyImage
          as="div"
          image={img}
          alt={title}
          placeholder="blurred"
          width={400}
          height={300}
          loading="lazy"
          className="h-80"
        />
        <div className="bg-blueDark p-4">
          <h2 className="h3 text-almond font-semibold">{title}</h2>
          <h5 className="h5 text-sm text-grayLight">{subtitle}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
