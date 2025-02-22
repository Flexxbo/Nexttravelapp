/******************************************
 *  Author : Author
 *  Created On : Fri May 22 2020
 *  File : Dynamic.js
 *******************************************/

/*===Put imports here===*/
import dynamic from "next/dynamic";
import MapSidebar from "./MapSidebar";
import MapTabs from "./MapTabs";
import MapItinerary from "./MapItinerary";
//import CreatePDF from "./CreatePDF";

/*===Start code here===*/

const DynamicComponentWithNoSSR = dynamic(() => import("./MyMapbox"), {
  ssr: false,
});

const DynamicComponentWithNoSSR2 = dynamic(() => import("./CreatePDF2"), {
  ssr: false,
});

function DynamicComponent({
  addToTrip,
  remove,
  datastate,
  selectedMarker,
  selectMarker,
  addToGlobalTrip,
  globalTrip,
  addFromDateToGlobalTrip,
  addToDateToGlobalTrip,
  poly,
}) {
  return (
    <div className="dynamiccomponent">
      <h2 className="mapheadline">Travel-Planner Cuba </h2>
      <div className="row gridrow">
        <div className="col-2 gridcolumn sidebarhide">
          <h4 id="Sidebarheader">Your Trip</h4>
          <div className="Sidebarscroller">
            <MapSidebar globalTrip={globalTrip} remove={remove} />
          </div>
        </div>
        <div className="col-10 col-12-md gridcolumn" id="columntest">
          <DynamicComponentWithNoSSR
            className="mapid"
            lat={21.737731}
            lng={-79.914551}
            addToTrip={addToTrip}
            datastate={datastate}
            selectMarker={selectMarker}
            poly={poly}
          />
          <div className="MapTabsOuter">
            <MapTabs datastate={datastate} selectedMarker={selectedMarker} />
          </div>
          <h3 className="itineraryheader">Your Itinerary</h3>

          <div id="MapItineraryOuter">
            <MapItinerary
              globalTrip={globalTrip}
              addToGlobalTrip={addToGlobalTrip}
              addFromDateToGlobalTrip={addFromDateToGlobalTrip}
              addToDateToGlobalTrip={addToDateToGlobalTrip}
            />
            <DynamicComponentWithNoSSR2 globalTrip={globalTrip} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicComponent;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
