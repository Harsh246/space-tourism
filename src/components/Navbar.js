import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";
import { useState } from "react";

import "../styles/navbar.css";

export default function Navbar() {
  const [showMenu, setMenu] = useState(false);

  return (
    <header className="navbar-main">
      {/* <nav id="header--main">
          <NavLink to="/" >Home </NavLink>
          <NavLink to="/Destination" >Destination</NavLink>
          <NavLink to="/Crew" >Crew</NavLink>
          <NavLink to="/Technology" >Technology</NavLink>
          </nav> */}

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu-icon align-center">
        <img src={hamburger} alt="logo" onClick={() => setMenu(true)} />
      </div>

      <div className={showMenu ? "slider-menu" : "slider-menu hidden"}>
        <div className="navbar-main">
          <div className="menu-icon align-center">
            <img src={iconClose} alt="logo" onClick={() => setMenu(false)} />
          </div>
        </div>

        <div className="menu-btns">
          <table>

              <tbody>
            <tr>
              <td className="td-num">00</td>
              <td
                onClick={() => {
                  setMenu(false);
                }}
                className="td-name"
              >
                <NavLink to="/">Home </NavLink>
              </td>
            </tr>
            <tr>
              <td className="td-num">01</td>
              <td
                onClick={() => {
                  setMenu(false);
                }}
                className="td-name"
              >
                <NavLink to="/Destination">Destination</NavLink>
              </td>
            </tr>
            <tr>
              <td className="td-num">02</td>
              <td
                onClick={() => {
                  setMenu(false);
                }}
                className="td-name"
              >
                <NavLink to="/Crew">Crew</NavLink>
              </td>
            </tr>
            <tr>
              <td className="td-num">03</td>
              <td
                onClick={() => {
                  setMenu(false);
                }}
                className="td-name"
              >
                <NavLink to="/Technology">Technology</NavLink>
              </td>
            </tr></tbody>
          </table>
        </div>
      </div>



      <div className="tablet-menu">
    <div className="desktop-line">
</div>    

<div className="link-wrapper align-center">

     <span className="td-num">00</span>      <NavLink to="/">Home </NavLink>
        </div>

        <div className="link-wrapper align-center">
        <span className="td-num">01</span>  <NavLink to="/Destination">Destination</NavLink>
        </div>
        <div className="link-wrapper align-center">
          {" "}
          <span className="td-num">02</span>  <NavLink to="/Crew">Crew</NavLink>
        </div>
        <div className="link-wrapper align-center">
          {" "}
          <span className="td-num">03</span>  <NavLink to="/Technology">Technology</NavLink>
        </div>
      </div>
    </header>
  );
}
