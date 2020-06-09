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
      <Imagebox
        Header={"Havana Sightseeing"}
        text={
          "This is where you can put your text about Havana Sightseeing, or you better use data from API"
        }
        image={
          "https://cdn.pixabay.com/photo/2016/08/23/00/30/havana-1613263_960_720.jpg"
        }
      />
      <Imagebox
        Header={"Havana by night"}
        text={
          "This is where you can put your text about Havana by night, or you better use data from API"
        }
        image={
          "https://cdn.pixabay.com/photo/2017/03/17/11/50/havana-2151324_960_720.jpg"
        }
      />
  
      <style jsx>{`
        .imageboxcontainer {
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
