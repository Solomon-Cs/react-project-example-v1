import React from "react";
import "./Tags.css";

const Tags = ({ tagName }) => {
  return (
    <>
      <button className="tag"> {tagName} </button>
    </>
  );
};

export default Tags;
