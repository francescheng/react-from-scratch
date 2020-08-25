import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import { useParams } from "react-router-dom";

function Odaiba(props) {
  const { projectId } = useParams();
  return (
    <div>
      <h3>Under Construction</h3>
    </div>
  );
}

export default hot(Odaiba);
