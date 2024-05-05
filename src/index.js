import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Navbar from "./component/navbar";
import JawaBarat from "./component/Jawabarat";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="top-0">
    <Navbar />
    <JawaBarat />
  </div>
);
