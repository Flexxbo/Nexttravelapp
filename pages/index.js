/******************************************
 *  Author : Flexxbo
 *  Created On : Wed May 20 2020
 *  File : Layout.js
 *******************************************/

/*Put your imports here */
import Layout from "../components/Layout";

/*Start coding from here */

// ? Index.js is the main page. There is no HTML Page since Next is SSR and gives out an HTML format
// ? Everything that should be in Html Head (meta-stuff/imports) is in Layout-component-Head
// TODO: Check wether it is ok to have same meta tags and imports in all subpages that us the layout
// * Topbox and Imagebox containers only for giving a visual environment for app to be integrated
// * Mapcomponent <-- Dynamic <-- import from Mapbox.js

const Index = () => {
  //  const [datastate, setDatastate] = useState("");
  //  console.log("datastate is =", datastate);
  return (
    <Layout>
      <div className="backgroundimage">
        <div>
          <h2>Plan your next trip now!</h2>
          <a href="/maptest">
            <button
              type="button"
              className="buttonclass"
              className="btn btn-danger"
            >
              Travel-Planner
            </button>
          </a>
        </div>
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
