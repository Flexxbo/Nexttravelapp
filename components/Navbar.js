/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : Navbar.js
 *******************************************/

/*===Put imports here===*/
import Link from "next/link";
import styles from "./Navbar.module.css";

/*===Start code here===*/
const Navbar = () => (
  <div className={styles.Navbar}>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
