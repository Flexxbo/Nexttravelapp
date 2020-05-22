/******************************************
 *  Author : Author
 *  Created On : Fri May 22 2020
 *  File : Dynamic.js
 *******************************************/

/*===Put imports here===*/

/*===Start code here===*/

import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./MyMap"), {
  ssr: false,
});

function Home() {
  return (
    <div>
      <h1>Here is a Dynamic component</h1>
      <DynamicComponentWithNoSSR lat={52.52} lng={13.405} />
      <p>HOME PAGE is here!</p>
    </div>
  );
}

export default Home;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
