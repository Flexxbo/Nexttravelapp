/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : component1.js
 *******************************************/

/*Put your imports here */
import Link from "next/link";
import Debugtest from "../components/Debugtester";
import Navbar from "../components/Navbar";

/*Start coding from here */

const About = () => {
  return (
    <div>
      <Debugtest />
      <Navbar />

      <h1>Hello this is the about page</h1>
    </div>
  );
};

export default About;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
