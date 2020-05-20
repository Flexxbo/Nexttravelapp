/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : Layout.js
 *******************************************/

/*===Put imports here===*/
import Head from "next/head";
import Debugtest from "../components/Debugtester";
import Navbar from "./Navbar";
import Footerbar from "./Footerbar";

/*===Start code here===*/
const Layout = (props) => (
  <div className="layout">
    <Head>
      <title>Reise nach Kuba</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      ></link>
    </Head>

    <Debugtest />
    <Navbar />
    {props.children}
    <Footerbar />
    <style jsx>{`
      .layout {
        margin-left: 10vw;
        margin-right: 10vw;
      }
    `}</style>
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
