/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : Layout.js
 *******************************************/

/*===Put imports here===*/
import Link from "next/link";
import Debugtest from "../components/Debugtester";
import Navbar from "./Navbar";

/*===Start code here===*/
const Layout = (props) => (
  <div>
    <Debugtest />
    <Navbar />
    {props.children}
  </div>
);

export default Layout;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
