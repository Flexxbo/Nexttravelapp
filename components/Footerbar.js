/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : Navbar.js
 *******************************************/

/*===Put imports here===*/
import Link from "next/link";

/*===Start code here===*/
const Footerbar = () => (
  <nav className="navbar navbar-expand navbar-light bg-light ">
    <div className="container">
      <a className="navbar-brand" href="#">
        &copy; Created by Flexxbo 2020
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/maptest">
              <a className="nav-link">Travelplanner</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Footerbar;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
