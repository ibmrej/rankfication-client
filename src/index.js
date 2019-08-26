import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import Root from "@/components/Root";
import "@/styles.scss";

dotenv.config();

ReactDOM.render(<Root />, document.getElementById("root"));
