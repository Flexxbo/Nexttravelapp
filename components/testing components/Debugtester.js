/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : debugtester.js
 *******************************************/
/*Put your imports here */
//import styles from "./Debugtester.module.css";
/*Start coding from here */
let x = 1;
const clickerClick = () => {
  console.log(x + "clicks since pageload");
  x += 1;
};
console.log("This gets logged on pageload");
export default function Debugtest() {
  return (
    <div>
      <button
        onClick={clickerClick}
        type="button"
        className="btn btn-danger btn-lg btn-block"
      >
        I´m just the debugtester. press F5 in VSCode or F12 in Chrome to start
        the debugger and see in the Debug Console wether the clickable logs
        work. Log on Load are shown in Terminal allready on load
      </button>
    </div>
  );
}

/* ===Better Comments=== */
// * Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// ! Alert - Whenever you need an alert
// ? Review - Look at this again
// TODO: "This ..."  is still to do
////commented out
// + Highlight: This needs to be highlited for some reason
// @param Explain Parameters
