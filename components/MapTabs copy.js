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

  let displayedData = datastate.filter(
    (word) => word.fields.name === selectedMarker
  );
  console.log(displayedData);
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
