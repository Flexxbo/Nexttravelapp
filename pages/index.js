/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : index.js
 *******************************************/

/*Put your imports here */
import Layout from "../components/Layout";
import Imageboxcontainer from "../components/Imageboxcontainer";
import Topbox from "../components/Topbox";
import React from "react";
//import MyCompTest from "../components/ComponentLoadercopy";
//import MyComp from "../components/ComponentLoader";
import Home from "../components/Dynamic";

import window from "global";
import Client from "../components/Contentfulcomp";
import Clientcomplete from "../components/Contentfulcomplete";

//var window = require("global/window")

/*Start coding from here */

const Index = () => {
  /*if (typeof window === "undefined") {
    global.window = {};
  }*/
  return (
    <Layout>
      <div className="pagetop">
        <h1>Hello this is index.js</h1>
        <p>This is where more content will go</p>
        <Topbox />
        {/*<MyCompTest />
        <MyComp />*/}
        <Imageboxcontainer />
        <Home />

        <style jsx>{`
          .pagetop {
            text-align: center;
            border: 1px black solid;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Index;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
