import React from "react";
import "./Tags.css";

const Tags = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#ff3364" },
    CSS: { backgroundColor: "#df35ae" },
    JavaScript: { backgroundColor: "#fff255" },
    React: { backgroundColor: "#afe234" },
    default: { backgroundColor: "#ffffff" },
  };
  return (
    <>
      <button type="button" style={selected ? tagStyle[tagName] : tagStyle.default} className="tag" onClick={() => selectTag(tagName)}>
        {" "}
        {tagName}{" "}
      </button>
    </>
  );
};

export default Tags;
