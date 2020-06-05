/******************************************
 *  Author : Flexxbo
 *  Created On : Fri Jun 05 2020
 *  File : CreatePDF.js
 *******************************************/

/*===Put imports here===*/
import React from "react";
import jsPDF from "jspdf";
/*===Start code here===*/

const createPDF = (globalTrip) => {
  var doc = new jsPDF("p", "pt");
  //let dataPDF = globalTrip.globalTrip;
  console.log(typeof globalTrip.globalTrip[0]);
  doc.text(20, 20, "1. "+ globalTrip.globalTrip[0].name);
  console.log(globalTrip.globalTrip[0].name);
  doc.save("generated.pdf");
};

export default function PDFCreator(globalTrip) {
  return <button onClick={() => createPDF(globalTrip)}>Save as PDF</button>;
}

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
