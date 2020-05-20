/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : Imageboxcontainer.js
 *******************************************/

/*===Put imports here===*/
import Imagebox from "./Imagebox";
/*===Start code here===*/

const Imageboxcontainer = () => {
  return (
    <div className="imageboxcontainer">
      <Imagebox />
      <Imagebox />
      <Imagebox />
      <style jsx>{`
        .imageboxcontainer {
          border: 1px black solid;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 3vw;
        }
      `}</style>
    </div>
  );
};

export default Imageboxcontainer;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
