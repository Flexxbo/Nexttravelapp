/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : imagebox.js
 *******************************************/

/*===Put imports here===*/

/*===Start code here===*/

const Imagebox = () => {
  return (
    <div className="card border-light mb-3" className="JSX-class">
      <div className="card-header">Header</div>
      <div className="card-body">
        <h4 className="card-title">Light card title</h4>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>

      <style jsx>{`
        .JSX-class {
          max-width: 25rem;
          background-color: beige;
          border: 1px solid tomato;
          margin: 1vw;
          padding: 3rem;
        }
      `}</style>
    </div>
  );
};

export default Imagebox;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
