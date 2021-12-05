import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Card from "./Card";
import DetailModal from "./DetailModal";

const Projects = () => {
  const projects = useStaticQuery(graphql`
    query {
      allContentfulProjects(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            expandedDescription {
              raw
            }
            image {
              file {
                url
                fileName
              }
              title
              description
              gatsbyImageData(resizingBehavior: CROP, placeholder: BLURRED)
            }
            subtitle
            title
            url
            body {
              raw
            }
          }
        }
      }
    }
  `);

  const edges = projects.allContentfulProjects.edges.reverse();

  return (
    <div
      id="projects"
      className="w-full 2xl:w-4/5 mx-auto flex flex-col relative"
    >
      <div className="my-8">
        <h1 className="text-blueDark h1">Projects</h1>
        <div className="flex flex-wrap">
          {edges.map((project, i) => {
            return <Card key={i} project={project} />;
          })}
        </div>
      </div>
      <DetailModal />
    </div>
  );
};

export default Projects;
