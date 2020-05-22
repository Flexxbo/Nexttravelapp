/******************************************
 *  Author : Author
 *  Created On : Thu May 21 2020
 *  File : ComponentLoader.js
 *******************************************/

// This is necessary to load my leaflet-compoment in the browser through componentDidMount / useEffect
//referring to: https://stackoverflow.com/questions/57704196/leaflet-with-next-js

/*===Put imports here===*/
import React, { useState, useEffect } from "react";
import Test from "./Test";
import MyMap from "./MyMap";

/*===Start code here===*/

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
  {
    const checker = () => {
      console.log("clicked button map should appear");
      
      return <div>{/*<MyMap lat={52.52} lng={13.405} />*/}</div>;
    };
    console.log("now component mounted");
    console.log("This is the console log of window" + window);

    return (
      <div>
        {/*<MyMap lat={52.52} lng={13.405} />*/}
        <Test />
        <button
          onClick={checker}
          type="button"
          className="buttonclass"
          className="btn btn-warning"
        >
          Press to see state of inBrowser in console
        </button>
      </div>
    );
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

/*export default function MyComp() {
  const [inBrowser, setInBrowser] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setInBrowser(true);
  });

  if (!inBrowser) {
    console.log("state not true yet");
    return null;
  }
  {
    console.log("now component mounted");
    return (
      <div>
        <MyMap lat={52.52} lng={13.405} />
        <Map />
      </div>
    );
  }
} */
