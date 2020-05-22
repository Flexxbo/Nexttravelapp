/******************************************
 *  Author : Author
 *  Created On : Fri May 22 2020
 *  File : Dynamic.js
 *******************************************/

/*===Put imports here===*/

/*===Start code here===*/

import dynamic from "next/dynamic";
import styles from "./Map.module.css";

const DynamicComponentWithNoSSR = dynamic(() => import("./MyMapbox"), {
  ssr: false,
});

function DynamicComponent() {
  return (
    <div>
      <h1>Here is a Dynamic component</h1>
      <DynamicComponentWithNoSSR
        className={styles.mapid}
        lat={21.737731}
        lng={-79.914551}
      />
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
