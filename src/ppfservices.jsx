import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

function Ppf(props) {
  let { projectId } = useParams();

  return (
    <div>
      <h3>Hello World</h3>
    </div>
  );
}

export default hot(Ppf);
