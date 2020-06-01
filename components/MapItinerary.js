/******************************************
 *  Author : Flexxbo
 *  Created On : Sun May 31 2020
 *  File : MapItinerary.js
 *******************************************/

/*===Put imports here===*/
import React from "react";

/*===Start code here===*/
let destination = [
  "Havanna",
  "Cienfuegos",
  "Trinidad",
  "Cienfuegos",
  "Trinidad",
  "Cienfuegos",
  "Trinidad",
  "Cienfuegos",
  "Trinidad",
  "Cienfuegos",
  "Trinidad",
  "Cienfuegos",
  "Trinidad",
  "Cienfuegos",
  "Trinidad",
  "Cienfuegos",
  "Trinidad",
  "Cienfuegos",
  "Trinidad",
  "Cienfuegos",
  "Trinidad",
];

export default function MapItinerary() {
  return destination.map(function (item, i) {
    let randomkey = Math.random();
    return (
      <div key={randomkey} id={i}>
        <h3> MapItinerary</h3>
        <div className="ItineraryContent">
          <h4>{item}</h4>
          <p>
            This is where content goes, but maybe only buttons to select more
          </p>
        </div>
      </div>
    );
  });
}

/*

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
} */

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
