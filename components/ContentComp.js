/******************************************
 *  Author : Flexxbo
 *  Created On : Wed Jun 10 2020
 *  File : ContentComp.js
 *******************************************/

/*===Put imports here===*/
import React, { useState, useEffect } from "react";
import Centry from "../components/Contentfulcomplete";
import Layout from "../components/Layout";

/*===Start code here===*/
const Content = (pid) => {
  const [datastate2, setDatastate2] = useState("");
  const [chosenData, setchosenData] = useState("");

  // +++ This UseEffect is catching AllData from API +++
  console.log("pid in content component", pid);
  useEffect(() => {
    Centry.getEntries({
      // * coming from import contentful-component, that connects to API
      content_type: "destinationContent",
    })
      .then((entries) => {
        setDatastate2(entries.items);
        setchosenData(
          entries.items.filter((item) => item.fields.slug == pid.pid)
        );
        // * entries is object, items is array, need array to map below
      })
      .catch((err) => console.log("An error occured: " + err));
  }, []);
  //console.log("datastate2 is this:", datastate2);
  console.log("chosenData is this:", chosenData);

  //let chosenData = datastate2.filter((item) => item.fields.slug == pid.pid);
  //datastate2.map((item) => console.log(item));

  //console.log("chosenData", chosenData);

  return (
    <Layout>
      <div>
        {chosenData.length >= 1 ? (
          <div className="pagetop">
            <h2 className="mapheadline">
              <br></br>
              {chosenData[0].fields.name}
            </h2>
            <br></br>
            <div className="justText">
              <h3>{chosenData[0].fields.name} Info</h3>
              <br></br>
              {chosenData[0].fields.info}
            </div>
            <br></br>
            <div className="justText">
              <h3>{chosenData[0].fields.name} More Info</h3>
              <br></br> chosenData[0].fields.image.fields.file.fileName
              {chosenData[0].fields.tabOne}
            </div>
            <img
              className="contentpics"
              src={chosenData[0].fields.image.fields.file.url}
              alt="test"
            ></img>

            <br></br>
            <div className="justText">
              <h3>{chosenData[0].fields.name} And More Info</h3>
              <br></br>
              {chosenData[0].fields.tabTwo}
            </div>
            <br></br>
            <div className="justText">
              <h3>{chosenData[0].fields.name} Much More Info</h3>
              <br></br>
              {chosenData[0].fields.tabThree}
            </div>
            <br></br>
            <div className="justText">
              <h3>{chosenData[0].fields.name} And Even More Info</h3>
              <br></br>
              {chosenData[0].fields.tabFour}
            </div>

            <br></br>
          </div>
        ) : (
          <div> Waiting</div>
        )}
      </div>
    </Layout>
  );
};

export default Content;

//{datastate2 ? <div>it worked this time</div> : <div>it is still loading</div>} {chosenData[0].fields.image.file.url}
/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
