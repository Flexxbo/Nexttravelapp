/******************************************
 *  Author : Flexxbo
 *  Created On : Wed May 20 2020
 *  File : Layout.js
 *******************************************/

/*===Put imports here===*/
import Head from "next/head";
import Debugtest from "./testing components/Debugtester";
import Navbar from "./Navbar";
import Footerbar from "./Footerbar";

/*===Start code here===*/

// * Head will be the html head
// * in props.children, there will be the content of the ./pages inserted

const Layout = (props) => (
  <div className="container">
    <Head>
      <title>Reise nach Kuba</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
      />
      <script
        src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
        integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
        crossOrigin=""
      ></script>
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
