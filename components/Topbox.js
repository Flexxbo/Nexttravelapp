/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : Topbox.js
 *******************************************/

/*===Put imports here===*/
/*===Start code here===*/

const Topbox = () => {
  return (
    <div className="topbox">
      <button type="button" className="buttonclass" className="btn btn-danger">
        Danger
      </button>

      <style jsx>{`
        .topbox {
          background-image: url("https://cdn.pixabay.com/photo/2015/12/28/10/19/hotel-1111199__340.jpg");
          display: flex-box;
          justify-content: center;
          border: 1px black solid;
          height: 25vw;
        }
        ,
        .buttonclass {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Topbox;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
