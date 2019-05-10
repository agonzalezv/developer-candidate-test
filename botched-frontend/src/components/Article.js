import React from "react";

const Article = ({ age = "", name = "", gender = "" }) => {
  return (
    <div>
      <h1>{age}</h1>
      <h1>{name}</h1>
      <h4>{gender}</h4>
    </div>
  );
};

export default Article;
