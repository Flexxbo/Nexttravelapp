/******************************************
 *  Author : Flexxbo
 *  Created On : Wed Jun 10 2020
 *  File : NavDropdown.js
 *******************************************/

/*===Put imports here===*/

/*===Start code here===*/
import Cliententry from "./Contentfulcomplete";
import MapComponent from "./Dynamic";
import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
/*Start coding from here */

const NavDrop = () => {
  const [datastateNav, setDatastateNav] = useState("");
  // +++ This UseEffect is catching AllData from API +++
  useEffect(() => {
    Cliententry.getEntries({
      // * coming from import contentful-component, that connects to API
      content_type: "destinationContent",
    })
      .then((entries) => {
        setDatastateNav(entries.items);
        // * entries is object, items is array, need array to map below
      })
      .catch((err) => console.log("An error occured: " + err));
  }, []);

  console.log("datastateNav", datastateNav);

  return (
    <div>
      {datastateNav ? (
        <>
          {datastateNav.map((item) => {
            console.log("item slug", item.fields.slug);
            const key = Math.random();
            return (
              <NavDropdown.Item
                key={key}
                href={"/Contentpage/" + item.fields.slug}
              >
                {item.fields.name}
              </NavDropdown.Item>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default NavDrop;

/* <>
      {datastate.map((item) => {
        const key = Math.random();
        return (
          <p>halloha</p>
        );
      })}
    </> */

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
/*{datastate ? (
          <NavDropdown.Item key={key} href="/maptest">
            Action
          </NavDropdown.Item>
        ) : null}*/

/*{datastateNav ? (
          <div>Hello</div>
        ) : null} */
