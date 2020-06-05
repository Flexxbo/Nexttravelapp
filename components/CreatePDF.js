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
  var doc = new jsPDF();
  //let dataPDF = globalTrip.globalTrip;
  globalTrip.globalTrip.map((item, i) => {
    console.log("Das ist das Printitem", item);
    return (
      doc.text(20, i * 20 + 20, i + 1 + "." + item.name),
      doc.text(120, i * 20 + 20, "from: " + item.fromDeutsch),
      doc.text(160, i * 20 + 20, "to: " + item.toDeutsch)
    );
  });
  /*doc.text(20, 20, "1. " + globalTrip.globalTrip[0].name);
  doc.text(20, 30, "from: " + globalTrip.globalTrip[0].fromDeutsch);
  doc.text(80, 30, "from: " + globalTrip.globalTrip[0].toDeutsch);
*/
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
