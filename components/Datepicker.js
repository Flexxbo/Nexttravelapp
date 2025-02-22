/******************************************
 *  Author : Flexxbo
 *  Created On : Thu Jun 04 2020
 *  File : Datepicker.js
 *******************************************/

/*===Put imports here===*/
import React, { useState } from "react";
import DatePicker from "react-datepicker";
/*===Start code here===*/

export default function Datepicker({
  keyelement,
  addFromDateToGlobalTrip,
  addToDateToGlobalTrip,
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        dateFormat="dd.MM.yyyy"
        onChange={(date) => {
          setStartDate(date);
          addFromDateToGlobalTrip(keyelement, date);
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        dateFormat="dd.MM.yyyy"
        onChange={(date) => {
          setEndDate(date);
          addToDateToGlobalTrip(keyelement, date);
        }}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
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
