/******************************************
 *  Author : Flexxbo
 *  Created On : Fri Jun 05 2020
 *  File : Polyline.js
 *******************************************/

/*===Put imports here===*/
import { Polyline } from "react-leaflet";
/*===Start code here===*/

export default function Polyline2(poly) {
  let polylineArray = poly.poly.map(Object.values);
  //var outputData = polylineArray.map(Object.values);
  //console.log("outputdata", outputData);
  console.log("2polylinearray", polylineArray);
  if (polylineArray.length >= 2) {
    return <Polyline key="i}" positions={polylineArray} color={"red"} />;
  } else {
    return null;
  }
}
//}

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
