/******************************************
 *  Author : Flexxbo
 *  Created On : Wed May 20 2020
 *  File : Layout.js
 *******************************************/

/*Put your imports here */
import Layout from "../components/Layout";
import Imageboxcontainer from "../components/Imageboxcontainer";
import Topbox from "../components/Topbox";
import MapComponent from "../components/Dynamic";
//import styles from "../components/Map.module.css";
// *The contentful imports below have to be there, though they don´t get used yet, only console.log(ged)
import Cliententry from "../components/Contentfulcomp";
import Clientcomplete from "../components/Contentfulcomplete";

/*Start coding from here */

// ? Index.js is the main page. There is no HTML Page since Next is SSR and gives out an HTML format
// ? Everything that should be in Html Head (meta-stuff/imports) is in Layout-component-Head
// TODO: Check wether it is ok to have same meta tags and imports in all subpages that us the layout
// * Topbox and Imagebox containers only for giving a visual environment for app to be integrated
// * Mapcomponent <-- Dynamic <-- import from Mapbox.js

const Index = () => {
  return (
    <Layout>
      <div className="pagetop">
        <h1>Hello this is index.js</h1>
        <p>This is where more content will go</p>
        <Topbox />
        <Imageboxcontainer />
        <MapComponent />

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
