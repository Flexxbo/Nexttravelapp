/******************************************
 *  Author : Flexxbo
 *  Created On : Sun May 31 2020
 *  File : MapSidebar.js
 *******************************************/

/*===Put imports here===*/
import React from "react";
/*===Start code here===*/

export default function MapSidebar({  remove, globalTrip }) {
  let tripSidebar = [];
  tripSidebar.push(globalTrip.name);
  if (tripSidebar.length >= 1) {
    //!Attention complicated, but had to do this workaround because sidebar returned empty element if array was empty
    return globalTrip.map(function (item, i) {
      return (
        <div key={item.key} className="SidebarComp" id={i}>
          <button
            onClick={() => remove(item.key, i)}
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

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
