/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : component1.js
 *******************************************/

/*Put your imports here */
import Layout from "../components/Layout";
import Imageboxcontainer from "../components/Imageboxcontainer";
import Topbox from "../components/Topbox";
import Collapsible from "react-collapsible";

/*Start coding from here */

const about = () => {
  return (
    <Layout>
      <div className="pagetop">
        <h2 className="mapheadline">
          About <br></br> {`<Felix Bücheler - Frontend Developer/>`}
        </h2>

        <h3 className="justText">
          Hi, get in touch with me and checkout my other projects!
        </h3>
        <Collapsible trigger=">>>Contact<<<">
          <h4>
            <img className="logoclass" src="/mail.png"></img>
            <a target="_blank" href="mailto:flexxbo@gmail.com">
              flexxbo@gmail.com
            </a>
          </h4>
          <br></br>
          <h4>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/felix-b-webdeveloper/"
            >
              <img className="logoclass" src="/1200x630wa.png"></img>
              felix-b-webdeveloper
            </a>
          </h4>
          <br></br>
          <h4>
            <img className="logoclass" src="/github.png"></img>
            <a target="_blank" href="https://github.com/Flexxbo">
              Flexxbo
            </a>
          </h4>
          <br></br>
          <h4>
            Website:
            <a
              target="_blank"
              href="https://flexxbo.github.io/Portfolio-Website/"
            >
              Felix Bücheler Portfolio-Website
            </a>
          </h4>
        </Collapsible>
        <br></br>
        <Collapsible trigger=">>>Projects<<<">
          <h4 className="bordersss">
            <a
              target="_blank"
              href="https://flexxbo.github.io/Portfolio-Website/"
            >
              <img
                className="picclass"
                src="/PortfolioWebsite_Preview_Felix Buecheler.png"
              ></img>
              <br></br>
              Portfolio-Website
            </a>
          </h4>
          <br></br> <br></br>
          <br></br>
          <h4 className="bordersss">
            <a target="_blank" href="https://todolistreactj.herokuapp.com/">
              <img className="picclass" src="/FullStackToDo.png"></img>
              <br></br>
              Full-Stack ToDo-List
            </a>
          </h4>
          <br></br> <br></br>
          <br></br>
          <h4 className="bordersss">
            <a target="_blank" href="https://amiabot.herokuapp.com/">
              <img className="picclass" src="/BotChecker.png"></img>
              <br></br>
              BotChecker
            </a>
          </h4>
          <br></br>
        </Collapsible>
      </div>
      <div className="marginbox"></div>
    </Layout>
  );
};

export default about;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
