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
export default function MapTabs(datastate, selectedMarker) {
  /*resetIdCounter();
ReactDOMServer.renderToString(...);*/

  let mockdata = {
    name: "Kuba",
    tabOne:
      "Kuba Kuba Kuba Info Info Info Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  };

  console.log("Maptabs datastate:", datastate);
  console.log("Maptabs selectedMarker", JSON.stringify(selectedMarker));

  // ! Need to wait for component to load before using fetched data

  return (
    <div className="MapTabsInner">
      {/*data[0].fields.name*/}
      <Tabs>
        <TabList>
          <Tab>{mockdata.name}</Tab>
          <Tab>Sightseeing</Tab>
          <Tab>Accomodation</Tab>
          <Tab>Transport</Tab>
        </TabList>

        <TabPanel>
          <h2>Header tabOne</h2>
          <p>{mockdata.tabOne}</p>
        </TabPanel>
        <TabPanel>
          <h2>Header tabTwo</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.ubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eir Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </TabPanel>
        <TabPanel>
          <h2>Header tabThree</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit umy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Samet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nontet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </TabPanel>
        <TabPanel>
          <h2>Header tabFour</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidu et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy ent ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
            et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
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
