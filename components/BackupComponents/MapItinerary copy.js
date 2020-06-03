/******************************************
 *  Author : Flexxbo
 *  Created On : Sun May 31 2020
 *  File : MapItinerary.js
 *******************************************/

/*===Put imports here===*/
import React from "react";

/*===Start code here===*/

export default function MapItinerary({
  triparray,
  
  handleChangeFrom,
  handleChangeTo,
  addToGlobalTrip,
}) {
  let mapItinerary = [];
  //console.log(typeof triparray);

  mapItinerary.push(triparray);
  //console.log("tripsidebarlogs", mapItinerary);
  if (mapItinerary.length >= 1) {
    //!Attention complicated, but had to do this workaround because sidebar returned empty element if array was empty
    return triparray.map(function (item, i) {
      console.log("index in mapItinerary", i);
      console.log("item in mapItinerary", item);

      //console.log("item", item);
      let sidekey = Math.random();
      //console.log("MapSidebar items.id", item.id)
      //! How do I solve, getting the data I need here, connected to the Destination Name by just using the data needed from trip array
      return (
        <div key={sidekey} className="ItineraryContent" id={i}>
          <h3>
            {i + 1}. {item}
          </h3>
          <label className="fromtolabel" for="start">
            From:
          </label>
          <input
            onChange={handleChangeFrom}
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2020-01-01"
            max="2025-12-31"
          ></input>
          <label className="fromtolabel" for="start">
            To:
          </label>
          <input
            onChange={handleChangeTo}
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2020-01-01"
            max="2025-12-31"
          ></input>
          <button
            onClick={() => {
              addToGlobalTrip(i, "hotel");
            }}
          >
            Test
          </button>
        </div>
      );
    });
  } else {
    return "";
  }
}

// TODO: Create a logic, that puts all information into an object
// TODO: Make Itinerary Printable
// TODO: Find out about booking or in general integration
// TODO: Make this unfoldable: Folded --> only Destination-Name and unfold button

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
