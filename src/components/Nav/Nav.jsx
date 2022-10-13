import React from "react";
import { Component } from "react";
import "./Nav.css";

export default class Nav extends Component() {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav-link">
          <li className="title">We're All Related Feud</li>
          <li>
            <Link to="/warfeud/game" className="game">
              Play Game
            </Link>
          </li>
          <li>
            <Link to="/warfeud" className="game">
              Home
            </Link>
          </li>
          <li className="dropdown">
            <button className="dropbtn">Account</button>

            <div className="dropdown-content">
              <li>
                <Link to="/warfeud">Log Out</Link>
              </li>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
