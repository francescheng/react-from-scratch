import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import App from "./App.jsx";


ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>, document.getElementById("root"));

  console.log("This is your", process.env.PUBLIC_URL);

