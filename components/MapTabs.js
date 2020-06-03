/* 
! Mit Maptabs weitermachen
*/

/******************************************
 *  Author : Flexxbo
 *  Created On : Sun May 31 2020
 *  File : Maptabs.js
 *******************************************/

//! Where do I get data from?

/*===Put imports here===*/
import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel /*resetIdCounter*/ } from "react-tabs";

/*===Start code here===*/
export default function MapTabs({ datastate, selectedMarker }) {
  /*resetIdCounter();
ReactDOMServer.renderToString(...);*/

  let mockdata = {
    name: "Kuba",
    tabOne:
      "Kuba Kuba Kuba Info Info Info Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  };

  //console.log("Maptabs datastate:", datastate);
  //console.log("Maptabs selectedMarker", JSON.stringify(selectedMarker));
  let displayedData = datastate.filter(
    (word) => word.fields.name === selectedMarker
  );

  // ! Need to wait for component to load before using fetched data
  //console.log("displayedData Maptabs", displayedData);
  /*console.log(
    "displayedData Maptabs fields name",
    displayedData[0].fields.name
  );*/
  //console.log("displayedData Maptabs Tabone ", displayedData[0].fields.tabOne);
  //console.log("displayedData Maptabs Tabone ", displayedData.fields.tabOne);

  return (
    <div className="MapTabsInner">
      <Tabs>
        <TabList>
          <Tab>{displayedData[0].fields.name}</Tab>
          <Tab>Sightseeing</Tab>
          <Tab>Accomodation</Tab>
          <Tab>Transport</Tab>
        </TabList>

        <TabPanel>
          <h2>{displayedData[0].fields.name}</h2>
          <p>{displayedData[0].fields.tabOne}</p>
        </TabPanel>
        <TabPanel>
          <h2>Sightseeing in {displayedData[0].fields.name}</h2>
          <p>{displayedData[0].fields.tabTwo}</p>
        </TabPanel>
        <TabPanel>
          <h2>Accomodation in {displayedData[0].fields.name}</h2>
          <p>{displayedData[0].fields.tabThree}</p>
        </TabPanel>
        <TabPanel>
          <h2>Transport in {displayedData[0].fields.name}</h2>
          <p>{displayedData[0].fields.tabFour}</p>
        </TabPanel>
      </Tabs>
    </div>
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
