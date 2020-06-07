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

  // +++ This UseState defines the polyline-array+++
  let [poly, setPoly] = useState([]);

  // +++addToTrip function takes the onclick from Marker component and adds the name to the trip-array+++
  const addToTrip = (
    keyelement,
    valueelement,
    identifierelement,
    lat,
    lon,
    location
  ) => {
    setGlobalTrip([
      ...globalTrip,
      {
        key: keyelement,
        name: valueelement,
        identifier: identifierelement,
        from: "",
        fromDeutsch: "",
        to: "",
        toDeutsch: "",
        accomodationstyle: "",
        accomodationlink: "",
        lat: lat,
        lon: lon,
        position: location,
      },
    ]);
    setPoly([...poly, { lat: lat, lon: lon }]);
  };

  //+++update an object inside the array with data from Itinerary+++
  const addToGlobalTrip = (keylement, accomodationstyle) => {
    globalTrip.map((item) => {
      if (item.key === keylement) item.accomodationstyle = accomodationstyle;
      //console.log("item.key in addToGlobalTrip", item.key);
      //console.log("keylement in addToGlobalTrip", keylement);
      //console.log("globaltrip after update", globalTrip);
    });
  };
  //+++update an object inside the array with data from Itinerary+++
  const addFromDateToGlobalTrip = (keylement, date) => {
    globalTrip.map((item) => {
      let dateDeutsch = date.toLocaleDateString();
      if (item.key === keylement) {
        item.from = date;
        item.fromDeutsch = dateDeutsch;
      }
      console.log("item.key in addToGlobalTrip", item.key);
      console.log("keylement in addToGlobalTrip", keylement);
      console.log("globaltrip after update", globalTrip);
    });
  };
  //+++update an object inside the array with data from Itinerary+++
  const addToDateToGlobalTrip = (keylement, date) => {
    globalTrip.map((item) => {
      let dateDeutsch = date.toLocaleDateString();
      console.log("dateDeutsch", dateDeutsch);
      if (item.key === keylement) {
        item.to = date;
        item.toDeutsch = dateDeutsch;
      }

      console.log("item.key in addToGlobalTrip", item.key);
      console.log("keylement in addToGlobalTrip", keylement);
      console.log("globaltrip after update", globalTrip);
    });
  };
  //+++remove function when clicked in sidebar will remove element from trip-array+++
  const remove = (indexer, i) => {
    const filteredItems = globalTrip.filter(function (obj) {
      return obj.key !== indexer;
    });
    const filteredPoly = poly.filter(function (obj, index) {
      console.log("obj.index", index);
      return index !== i;
    });
    console.log("filteredpoly", filteredPoly);
    setPoly(filteredPoly);
    setGlobalTrip(filteredItems); //* set new State of Array to filteredItems
  };

  // +++ function to select marker and pass selection to tabs+++
  let [selectedMarker, setSelectedMarker] = useState("Kuba");

  const selectMarker = (name) => {
    setSelectedMarker(name);
    console.log(selectedMarker);
  };

  return (
    <Layout>
      <div className="pagetop">

        {datastate ? (
          <MapComponent
            addToTrip={addToTrip} //!Achtung behalten!
            globalTrip={globalTrip}
            remove={remove}
            datastate={datastate} //+ This element => arrowfunction filters the data for only the ones that have location
            selectedMarker={selectedMarker}
            selectMarker={selectMarker}
            addToGlobalTrip={addToGlobalTrip}
            addFromDateToGlobalTrip={addFromDateToGlobalTrip}
            addToDateToGlobalTrip={addToDateToGlobalTrip}
            poly={poly}
          />
        ) : null}
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
