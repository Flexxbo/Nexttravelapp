/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : component1.js
 *******************************************/

/*Put your imports here */
import Layout from "../components/Layout";
import MapComponent from "../components/Dynamic";
import { useState } from "react";

/*Start coding from here */

const maptest = () => {
  // +++ This UseState defines the trip-array which is base to sidebar- and itinerarycomponent+++
  let [trip, setTrip] = useState([]);

  //+++addToTrip function takes the onclik from Marker component and adds the name to the trip-array+++
  const addToTrip = (keyelement, valueelement, identifier) => {
    //console.log(keyelement);
    //console.log("maptest valuelement:", valueelement);
    //console.log("maptest identifier:", identifier);
    setTrip([...trip, valueelement]);
    //console.log("maptest trip:", trip);
    //console.log(typeof trip);
  };
  //console.log("maptest log trip outside of function", trip, "Outsidelog");

  //+++remove function when clicked in sidebar will remove element from trip-array+++
  const remove = (indexer) => {
    //console.log("something is clicking", indexer);
    // const filteredItems = trip.filter((item) => item.id !== indexer);
    const filteredItems = trip
      .slice(0, indexer)
      .concat(trip.slice(indexer + 1, trip.length)); //*slicing array by id provided through sidebar-position, creating new array of filtered items
    //console.log("maptest filteredItems", filteredItems);
    //console.log("trip:", trip);
    setTrip(filteredItems); //* set new State of Array to filteredItems
  };

  return (
    <Layout>
      <div className="pagetop">
        <h1>Maptest</h1>
        <p>This is where I test Map</p>
        <MapComponent addToTrip={addToTrip} triparray={trip} remove={remove} />
        <style jsx>{`
          .pagetop {
            text-align: center;
            border: 1px black solid;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default maptest;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
