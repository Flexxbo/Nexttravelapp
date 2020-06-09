/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : imagebox.js
 *******************************************/

/*===Put imports here===*/

/*===Start code here===*/

const Imagebox = ({ image, Header, text }) => {
  return (
    <div className="card border-light mb-3" className="JSX-class">
      <div className="card-header">{Header}</div>
      <div className="card-body">
        <img className="picure" src={image}></img>
        <p className="card-text">{text}</p>
      </div>

      <style jsx>{`
        .JSX-class {
          background-color: rgb(0, 0, 0, 0.1);
          padding: 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .picure {
          width: 300px;
          height: 200px;
          margin: auto;
          padding: auto;
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
