/******************************************
 *  Author : Flexxbo
 *  Created On : Tue Jun 02 2020
 *  File : DataComponent.js
 *******************************************/

/*===Put imports here===*/
import Cliententry from "./Contentfulcomplete";
import { useEffect, useState } from "react";
/*===Start code here===*/

export default function Markers({ logIt, setDatastate }) {
  let [data, setData] = useState([]);
  // ! Need to wait for component to load before using fetched data
  /*const logIt = () => {
    console.log("Something test");
  };*/
  useEffect(() => {
    Cliententry.getEntries({
      // * coming from import contentful-component, that connects to API
      content_type: "destinationContent",
    })
      .then((entries) => {
        //console.log("Markers entries:", entries);
        setData(entries.items);
        setDatastate(entries.items);
        // * entries is object, items is array, need array to map below
      })
      .catch((err) => console.log("An error occured: " + err));
  }, []);
  // ! stopping the reload with []
  //let = keyvar;
  return "";
}

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
