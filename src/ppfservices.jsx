import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

console.log("component did load");

function Ppf(props) {
  return (
    <div>
      <h3>hello world</h3>
    </div>
  )
}

export default hot(Ppf);
