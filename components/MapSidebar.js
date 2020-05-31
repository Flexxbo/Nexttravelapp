/******************************************
 *  Author : Flexxbo
 *  Created On : Sun May 31 2020
 *  File : MapSidebar.js
 *******************************************/

import React, { useState } from "react";

/*===Put imports here===*/

/*===Start code here===*/
/*
const [destination, addDestination] = useState([
  "Havanna",
  "Cienfuegos",
  "Trinidad",
]);

return (
    <div id="MapSidebar">
      <h4 id="Sidebarheader">MapSidebar</h4>
      <div className="SidebarComp">
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times; </span>
        </button>
        <p>Santiago de Cuba</p>
      </div>
      {putSidebar(destination)}
    </div>
  );
*/

let destination = ["Havanna", "Cienfuegos", "Trinidad"];

export default function MapSidebar() {
  return destination.map(function (item, i) {
    //console.log("index", i);
    //console.log("item", item);
    return (
      <div className="SidebarComp" id={i}>
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times; </span>
        </button>
        <p>{item}</p>
      </div>
    );
  });
}
/*
  return (
    <div id="MapSidebar">
      <h4 id="Sidebarheader">MapSidebar</h4>
      <div className="SidebarComp">
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times; </span>
        </button>
        <p>{item}Cuba</p>
      </div>
      {putSidebar(destination)}
    </div>
  );
}

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
