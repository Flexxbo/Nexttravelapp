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
        setDatastate(entries.items);
        // * entries is object, items is array, need array to map below
      })
      .catch((err) => console.log("An error occured: " + err));
  }, []);

  // +++ This UseState defines the trip-array which is base to sidebar- and itinerarycomponent+++
  let [globalTrip, setGlobalTrip] = useState([]);

  // +++addToTrip function takes the onclick from Marker component and adds the name to the trip-array+++
  const addToTrip = (keyelement, valueelement, identifierelement) => {
    setGlobalTrip([
      ...globalTrip,
      {
        key: keyelement,
        name: valueelement,
        identifier: identifierelement,
        from: "",
        to: "",
        accomodationstyle: "",
        accomodationlink: "",
      },
    ]);
  };

  //+++update an object inside the array with data from Itinerary+++
  const addToGlobalTrip = (keylement, accomodationstyle) => {
    globalTrip.map((item) => {
      if (item.key === keylement) item.accomodationstyle = accomodationstyle;
      console.log("item.key in addToGlobalTrip", item.key);
      console.log("keylement in addToGlobalTrip", keylement);
      console.log("globaltrip after update", globalTrip);
    });
  };

  //+++remove function when clicked in sidebar will remove element from trip-array+++
  const remove = (indexer) => {
    const filteredItems = globalTrip.filter(function (obj) {
      return obj.key !== indexer;
    });
    setGlobalTrip(filteredItems); //* set new State of Array to filteredItems
  };

  // +++ function to select marker and pass selection to tabs+++
  let [selectedMarker, setSelectedMarker] = useState("Kuba");

  const selectMarker = (name) => {
    setSelectedMarker(name);
  };

  return (
    <Layout>
      <div className="pagetop">
        <h1>Maptest</h1>
        <p>This is where I test Map</p>
        {datastate ? (
          <MapComponent
            addToTrip={addToTrip}
            globalTrip={globalTrip}
            remove={remove}
            datastate={datastate} //+ This element => arrowfunction filters the data for only the ones that have location
            selectedMarker={selectedMarker}
            selectMarker={selectMarker}
            addToGlobalTrip={addToGlobalTrip}
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
