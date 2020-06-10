/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : component1.js
 *******************************************/

/*Put your imports here */
import { useRouter } from "next/router";
const contentful = require("contentful");
import React, { useState, useEffect } from "react";
import Content from "../../components/ContentComp";
import Layout from "../../components/Layout";

/*Start coding from here */

let testarray = ["notloading", "loading"];

const Contentpage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <>{pid ? <Content pid={pid} /> : testarray[1]}</>;
};

export default Contentpage;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again <Layout>{}</Layout>;
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
//<img src={datastate2[0].fields.} ></img>
/*

*/
