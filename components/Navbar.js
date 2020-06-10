/******************************************
 *  Author : Author
 *  Created On : Wed May 20 2020
 *  File : Navbar.js
 *******************************************/

/*===Put imports here===*/
import Link from "next/link";
//! HOW TO IMPORT IMAGES ???
//import img from "../img/Flag_of_Cuba.png";
//import styles from "./Navbar.module.css";

import React from "react";
import NavDrop from "./NavDropdown2";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
//import Home from './Home';
//import AboutUs from './AboutUs';
//import ContactUs from './ContactUs';

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Navbar bg="light" variant="light" expand="lg" sticky="top">
              <Navbar.Brand href="/">
                <img className="logo" src="./Flag_of_Cuba.png"></img>
                <b>Cuba - Your Travelplanner</b>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link active href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/about">Havana</Nav.Link>
                  <Nav.Link href="/maptest">Travelplanner</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDrop />
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapNavbar;
/*===Start code here===*/
/*const Navbar = () => (
  <nav className="navbar navbar-expand-md bg-light navbar-light fixed-top">
    <a className="navbar-brand" href="/">
      {/*<img src={img} alt="Logo"></img>*/ //}//Kuba Reisen und Planer
/*</a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
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
            <a className="nav-link">Maptest</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;*/

/* ===Better Comments=== */
// "* Usage - Comment everything from the beginning, start a task by adding a comment, then work on task
// "! Alert - Whenever you need an alert
// "? Review - Look at this again
// "TODO: "This ..."  is still to do
// "//commented out
// "+ Highlight: This needs to be highlited for some reason
// "@param Explain Parameters
