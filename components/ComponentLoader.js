/******************************************
 *  Author : Author
 *  Created On : Thu May 21 2020
 *  File : ComponentLoader.js
 *******************************************/

// This is necessary to load my leaflet-compoment in the browser through componentDidMount
//referring to: https://stackoverflow.com/questions/57704196/leaflet-with-next-js

/*===Put imports here===*/
import Map from "./Leafletmap";
//import React, { Component } from "react";
//import ReactDOM from "react-dom";

/*===Start code here===*/

import React, { useState, useEffect } from "react";

export default function MyComp() {
  const [inBrowser, setInBrowser] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setInBrowser(true);
  });

  if (!inBrowser) {
    console.log("state not true yet");
    return null;
  }
  return <Map />;
}
/*
class MyComp extends React.Component {
  state = {
    inBrowser: false,
  };

  componentDidMount() {
    this.setState({ inBrowser: true });
  }

  render() {
    if (!this.state.inBrowser) {
      return null;
    }

    return <Map />;
  }
}
*/
/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
