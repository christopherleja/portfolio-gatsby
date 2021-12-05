import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context";
// import Image from "next/image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RichText from "./RichText";
import CardLink from "./CardLink";

const DetailModal = () => {
  const { selected, setModalVisible, modalVisible } = useContext(AppContext);
  return (
    <>
      {modalVisible && (
        <div
          id="modal"
          className="z-10 absolute w-full h-full delay-600 px-4"
          onClick={() => setModalVisible(false)}
        >
          <div className="project-modal p-8">
            <h1 className="h1 mb-8 text-blueDark">{selected.title}</h1>
            {selected.url && (
              <CardLink
                title={`Visit ${selected.title}`}
                link={selected.url}
                fullWidth
              />
            )}
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 p-8">
                <GatsbyImage
                  image={getImage(selected.image)}
                  // layout="responsive"
                  height={selected.mobileView ? 400 : 300}
                  width={selected.mobileView ? 300 : 400}
                  // objectFit="contain"
                  alt={selected.title}
                />
              </div>
              <div className="w-full lg:w-2/3">
                <RichText text={selected?.expandedDescription} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailModal;
