/******************************************
 *  Author : Flexxbo
 *  Created On : Sun May 31 2020
 *  File : MapItinerary.js
 *******************************************/

/*===Put imports here===*/
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import Datepicker from "./Datepicker";
import Collapsiblecomp from "./Collapsible";
import Collapsible from "react-collapsible";

//import "react-datepicker/dist/react-datepicker.css";

/*===Start code here===*/

export default function MapItinerary({
  globalTrip,
  addToGlobalTrip,
  addFromDateToGlobalTrip,
  addToDateToGlobalTrip,
}) {
  let mapItinerary = [];
  mapItinerary.push(globalTrip);
  //console.log("tripsidebarlogs", mapItinerary);
  if (mapItinerary.length >= 1) {
    //!Attention complicated, but had to do this workaround because sidebar returned empty element if array was empty
    return globalTrip.map(function (item, i) {
      //console.log("index in mapItinerary", i);
      //console.log("item in mapItinerary", item);

      //! How do I solve, getting the data I need here, connected to the Destination Name by just using the data needed from trip array
      return (
        <div className="itineraryItem" key={item.key + "hotels"}>
          {i + 1 + ". " + item.name}
          <br></br>
          <Datepicker
            keyelement={item.key}
            addFromDateToGlobalTrip={addFromDateToGlobalTrip}
            addToDateToGlobalTrip={addToDateToGlobalTrip}
          />
          <Collapsible
            key={item.key}
            className="ItineraryContent"
            id={i}
            trigger={
              <div className="collapseHotel">
                <p className="choteltext">{`>>>Hotel<<<`}</p>
              </div>
            }
          >
            <div className="hoteldiv">
              <img className="hotelpic" src="/hote_square_250_1.jpg"></img>
              <img className="hotelpic" src="/hote_square_250_2.jpg"></img>
              <img className="hotelpic" src="/hote_square_250_3.jpg"></img>
              <img className="hotelpic" src="/hote_square_250_4.jpg"></img>
            </div>
          </Collapsible>
          {/*<Collapsible
            key={item.key + "tours"}
            className="ItineraryContent"
            id={i}
            trigger={
              <div className="collapseHotel">
                <p className="choteltext">{`>>>Tours<<<`}</p>
              </div>
            }
          >
            <div className="hoteldiv">
              <img className="hotelpic" src="/hote_square_250_1.jpg"></img>
              <img className="hotelpic" src="/hote_square_250_2.jpg"></img>
              <img className="hotelpic" src="/hote_square_250_3.jpg"></img>
              <img className="hotelpic" src="/hote_square_250_4.jpg"></img>
            </div>
          </Collapsible> */}
        </div>
        /*
        <div key={item.key} className="ItineraryContent" id={i}>
          <h3>
            {i + 1}. {item.name}
          </h3>
          <button
            onClick={() => {
              addToGlobalTrip(item.key, "hotel");
            }}
          >
            Test
          </button>
          <Datepicker
            keyelement={item.key}
            addFromDateToGlobalTrip={addFromDateToGlobalTrip}
            addToDateToGlobalTrip={addToDateToGlobalTrip}
          />
        </div>*/
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
