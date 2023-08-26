// React Element is an Object
// Learn about React.createElement in react....
// this can be a single child or and array of childrens... now in array it behaves like siblings...
// always put your app js file after importing the react cdn..
// cross origin
// what ever inside the root will be replaced by the render function..

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
