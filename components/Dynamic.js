/******************************************
 *  Author : Author
 *  Created On : Fri May 22 2020
 *  File : Dynamic.js
 *******************************************/

/*===Put imports here===*/

/*===Start code here===*/

import dynamic from "next/dynamic";
import styles from "./Map.module.css";
import MapSidebar from "./MapSidebar";
import MapTabs from "./MapTabs";
import MapItinerary from "./MapItinerary";

const DynamicComponentWithNoSSR = dynamic(() => import("./MyMapbox"), {
  ssr: false,
});

function DynamicComponent({ addToTrip, triparray, remove }) {
  console.log("Dynamic triparray:", triparray);
  return (
    <div className="dynamiccomponent">
      <h2 className="mapheadline">
        Here is the Dynamic Map component, rendered Clientside
      </h2>
      <div className="row gridrow">
        <div className="col-2 gridcolumn">
          <h4 id="Sidebarheader">MapSidebar</h4>
          <div className="Sidebarscroller">
            <MapSidebar triparray={triparray} remove={remove} />
          </div>
        </div>
        <div className="col-10">
          <DynamicComponentWithNoSSR
            className={styles.mapid}
            lat={21.737731}
            lng={-79.914551}
            addToTrip={addToTrip}
          />
        </div>
        <div id="MapTabsOuter">
          <MapTabs />
        </div>
        <div id="MapItineraryOuter">
          <MapItinerary />
        </div>
      </div>
      <p>HOME PAGE is here!</p>
    </div>
  );
}

export default DynamicComponent;

/*      <style jsx>{`
        .mapboxsize {21.737731, -79.914551
          backgroud-color: green;
          height: 300px;
          width: 300px;
          border: red 5px solid;
        }
      `}</style>*/

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
