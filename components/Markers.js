/******************************************
 *  Author : Flexxbo
 *  Created On : Mon May 25 2020
 *  File : Markers.js
 *******************************************/

/*===Put imports here===*/
import Cliententry from "./Contentfulcomplete";
import { Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
/*===Start code here===*/

export default function Markers() {
  let [data, setData] = useState([]); // ! Need to wait for component to load before using fetched data

  useEffect(() => {
    Cliententry.getEntries({
      // * coming from import contentful-component, that connects to API
      content_type: "destinationContent",
    })
      .then((entries) => {
        console.log("something", entries);
        setData(entries.items); // * entries is object, items is array, need array to map below
      })
      .catch((err) => console.log("An error occured: " + err));
  }, []); // ! stopping the reload with []

  return (
    // * return marker component for each item in array, marker has popup on click which states name coming from contentful api
    <>
      {data.map((item) => {
        console.log(item);
        //<p>{JSON.stringify(item)}</p>
        return (
          <Marker key={Math.random()} position={item.fields.location}>
            <Popup>
              {item.fields.name}
              <button>Button 1 - add to itinerary</button>
              <button>Button 2 - close</button>
              {/* I can put a component here, for example button component */}
            </Popup>
          </Marker>
        );
      })}
    </>
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