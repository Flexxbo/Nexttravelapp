/******************************************
 *  Author : Flexxbo
 *  Created On : Sun May 31 2020
 *  File : MapSidebar.js
 *******************************************/

/*===Put imports here===*/

import React from "react";

/*===Start code here===*/

export default function MapSidebar({ triparray, remove, globalTrip }) {
  let tripSidebar = [];
  //console.log(typeof triparray);
  tripSidebar.push(globalTrip.name);
  console.log("tripsidebarlogs", tripSidebar);
  if (tripSidebar.length >= 1) {
    //!Attention complicated, but had to do this workaround because sidebar returned empty element if array was empty
    return globalTrip.map(function (item, i) {
      console.log(" MapSidebar index", i);
      //console.log("item", item);
      let sidekey = Math.random();
      //console.log("MapSidebar items.id", item.id)

      return (
        <div key={item.key} className="SidebarComp" id={i}>
          <button
            onClick={() => remove(item.key) /*{remove}*/}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times; </span>
          </button>
          <p>
            {i + 1}. {item.name}
          </p>
        </div>
      );
    });
  } else {
    return "";
  }
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
/*

export default function MapSidebar({ triparray }) {
  let tripSidebar = [];
  //console.log(typeof triparray);
  tripSidebar.push(triparray);
  console.log("tripsidebarlogs", tripSidebar);
  if (tripSidebar.length >= 1) { //!Attention complicated, but had to do this workaround because sidebar returned empty element if array was empty
    return tripSidebar.map(function (item, i) {
      //console.log("index", i);
      //console.log("item", item);
      let sidekey = Math.random();

      return (
        <div key={sidekey} className="SidebarComp" id={i}>
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times; </span>
          </button>
          <p>{item}</p>
        </div>
      );
    });
  } else {
    return "";
  }
}
*/
