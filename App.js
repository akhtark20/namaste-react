import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I m an H1 Tag"),
    React.createElement("h2", { id: "h2tag" }, "I m an H2 Tag"),
  ])
);

console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
