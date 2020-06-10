/******************************************
 *  Author : Flexxbo
 *  Created On : Wed Jun 10 2020
 *  File : ContentComp.js
 *******************************************/

/*===Put imports here===*/
import React, { useState, useEffect } from "react";
import Centry from "../components/Contentfulcomplete";
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
  //console.log("chosenData is this:", chosenData[0].fields.name);

  //let chosenData = datastate2.filter((item) => item.fields.slug == pid.pid);
  //datastate2.map((item) => console.log(item));

  //console.log("chosenData", chosenData);

  return (
    <div>
      {chosenData.length >= 1 ? (
        <div>
          if chosenData.length >= 1 this gets displayed
          <h1>
            H1<br></br>
            {chosenData[0].fields.name}
          </h1>
          <br></br>
          <div>
            Info<br></br>
            {chosenData[0].fields.info}
          </div>
          <br></br>
          <div>
            Tabone<br></br>
            {chosenData[0].fields.tabOne}
          </div>
          <br></br>
          <div>
            Tab2<br></br>
            {chosenData[0].fields.tabTwo}
          </div>
          <br></br>
          <div>
            Tab3<br></br>
            {chosenData[0].fields.tabThree}
          </div>
          <br></br>
          <div>
            Tab4<br></br>
            {chosenData[0].fields.tabFour}
          </div>
          <br></br>
        </div>
      ) : (
        <div> Waiting</div>
      )}
    </div>
  );
};

export default Content;

//{datastate2 ? <div>it worked this time</div> : <div>it is still loading</div>} {chosenData[0].fields.name}
/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
