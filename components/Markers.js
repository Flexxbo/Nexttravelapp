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
  let [data, setData] = useState([]);

  useEffect(() => {
    Cliententry.getEntries({
      content_type: "destinationContent",
    })
      .then((entries) => {
        console.log("something", entries);
        setData(entries.items);
      })
      .catch((err) => console.log("An error occured: " + err));
  }, []); // +stopping the reload

  return (
    <>
      {data.map((item) => {
        console.log(item);
        //<p>{JSON.stringify(item)}</p>
        return (
          <Marker key={Math.random()} position={item.fields.location}>
            <Popup>
              {item.fields.name}
              <button>fresgr</button>
              {/* I can put a component here */}
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

/*
export default function Markers() {
  let [data, setData] = useState([]);
  useEffect(() => {
    Cliententry.getEntries({
      content_type: "destinationContent",
      //["fields." + category]: true, // thanks to ES6, this is possible
      //order: "-sys.createdAt", // sort by newest items first (reverse order with the prefixed -)
      // TODO: create state variable for sorting options and pass it here
    })
      .then((entries) => {
        console.log("something", entries);
      })
      .catch((err) => console.log("An error occured: " + err));
  }, []); // +stopping the reload
  return entries.map(function (item) {
    return (
      <Marker
        key={item.id}
        position={(item.fields.location.lat, item.fields.location.lon)}
      >
        <Popup>{item.field.name}</Popup>
      </Marker>
    );
  });
}*/
/*
<Marker position={[lat, lng]}>
  <Popup>Hey!</Popup>
</Marker>;
*/
/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
