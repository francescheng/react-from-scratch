import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import { useParams } from "react-router-dom";

function Odaiba(props) {
  const { projectId } = useParams();
  return (
    <div>
      <h3>Hello World</h3>
      <p>My projectId is {projectId}.</p>
    </div>
  );
}

export default hot(Odaiba);
