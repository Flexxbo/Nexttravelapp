/******************************************
 *  Author : Flexxbo
 *  Created On : Mon Jun 08 2020
 *  File : collapsible.js
 *******************************************/

/*===Put imports here===*/
import React from "react";
import Collapsible from "react-collapsible";

/*===Start code here===*/
/*var CollapsComp = React.createClass({
  render: function () {
    return (
      <Collapsible trigger="Start here">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>
    );
  },
});

export default App;*/

export default function Collapse({
  globalTrip,
  addToGlobalTrip,
  addFromDateToGlobalTrip,
  addToDateToGlobalTrip,
}) {
  
      return (
        <Collapsible trigger="Start here">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
      );
    };
  

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
