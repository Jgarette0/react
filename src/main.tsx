import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./css/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const arr = ["foo", "bob", "lee"];

// const [one, , three] = arr;

// console.log(one, three);

// let b = "boy";
// let g = "girl";

// [g, b] = [b, g];
// console.log(b, g);
