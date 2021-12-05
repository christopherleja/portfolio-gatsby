import React from "react";
import PropTypes from "prop-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { GatsbyImage } from "gatsby-plugin-image";

// const website_url = "https://futurefoundry.co"

// const hyperlink = node => {
//   const uri = _.get(node, "data.uri")
//   const value = _.get(node, "content[0].value")

//   return (
//     <a
//       href={uri}
//       target={`${uri.startsWith(website_url) ? "_self" : "_blank"}`}
//       rel={`${uri.startsWith(website_url) ? "" : "noopener noreferrer"}`}
//     >
//       {value}
//     </a>
//   )
// }

// const embeddedAsset = node => {
//   // const title = node?.data?.target?.fields?.title['en-US']
//   // const fluid = useContentfulImage(node?.data?.target?.sys.contentful_id"))
//   return (
//     <Image
//       className="body-image"
//       title={title}
//       fluid={fluid}
//       imgStyle={{ objectFit: "contain" }}
//     />
//   )
// }

const RichText = ({ text }) => {
  console.log({ text });
  return <>{text && renderRichText(text)}</>;
};

export default RichText;
