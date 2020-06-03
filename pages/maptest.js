/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : component1.js
 *******************************************/

/*Put your imports here */
import Cliententry from "../components/Contentfulcomplete";
import Layout from "../components/Layout";
import MapComponent from "../components/Dynamic";
import { useState, useEffect } from "react";

/*Start coding from here */

const maptest = () => {
  const [datastate, setDatastate] = useState("");
  // +++ This UseEffect is catching AllData from API +++
  useEffect(() => {
    Cliententry.getEntries({
      // * coming from import contentful-component, that connects to API
      content_type: "destinationContent",
    })
      .then((entries) => {
        //    console.log("Markers entries:", entries);
        setDatastate(entries.items);
        // * entries is object, items is array, need array to map below
      })
      .catch((err) => console.log("An error occured: " + err));
  }, []);

  //console.log("datastate is =", datastate);

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

  // +++ function to select marker and pass selection to tabs+++
  let [selectedMarker, setSelectedMarker] = useState(["Kuba"]);

  const selectMarker = (name) => {
    setSelectedMarker(name);
    console.log(typeof name);
    console.log(typeof selectedMarker);
    console.log("maptest selectedMarker", selectedMarker);

    alert(name);
  };

  return (
    <Layout>
      <div className="pagetop">
        <h1>Maptest</h1>
        <p>This is where I test Map</p>
        {datastate ? (
          <MapComponent
            addToTrip={addToTrip}
            triparray={trip}
            remove={remove}
            datastate={datastate} //+ This element => arrowfunction filters the data for only the ones that have location
            selectedMarker={selectedMarker}
            selectMarker={selectMarker}
          />
        ) : null}

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
