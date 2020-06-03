/******************************************
 *  Author : Flexxbo
 *  Created On : Mon May 25 2020
 *  File : Markers.js
 *******************************************/

/*===Put imports here===*/
import Cliententry from "./Contentfulcomplete";
import { useEffect, useState } from "react";
import { Circle, Marker, Popup } from "react-leaflet";
/*===Start code here===*/
/*const addToTrip = (keyelement, valueelement) => {
  console.log(keyelement);
  console.log(valueelement);
};*/
export default function Markers({ addToTrip, datastate, selectMarker }) {
  console.log("datastate in Markers", datastate);
  return (
    // * return marker component for each item in array, marker has popup on click which states name coming from contentful api
    <>
      {datastate.map((item, index) => {
        const key = index;
        //console.log("Markers item:",item);
        //<p>{JSON.stringify(item)}</p> /*!
        return (
          <Marker
            key={/*Math.random()*/ key}
            position={item.fields.location}
            onClick={() => {
              selectMarker(item.fields.name);
            }}
          >
            <Popup>
              {item.fields.name} <br></br>
              <button
                onClick={() => {
                  addToTrip(key, item.fields.name, item.fields.identifiercode);
                }}
              >
                Add to Trip
              </button>
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
/*onClick={() => {
                  addToTrip(key, item.fields.name);
                }} */
