/**
 * nested structure
 * <div id="parent">
 *   <div id="child">
 *      <h1>Hi this is heading</h1>
 *    </div>
 * </div>
 *
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hi this is heading nested")
  )
);
// const heading = React.createElement(
//   "h1",
//   { id: "headings" },
//   "Hello world from React"
// );

console.log("parent", parent); //displays object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
