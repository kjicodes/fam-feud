import React from "react";
import "./Nav.css";

export default function Nav(props) {
  return (
    <nav className="navbar">
      <ul className="nav-link">
        <li className="title">We're All Related Feud</li>
        <li>
          <a href="/" className="game">
            Play Game
          </a>
        </li>
        <li>
          <a href="/" className="game">
            Home
          </a>
        </li>
        <li className="dropdown">
          <button className="dropbtn">Account</button>

          <div className="dropdown-content">
            <li>
              <a href="/">User</a>
            </li>
            <li>
              <a href="/">Log In</a>
            </li>
            <li>
              <a href="/">Log Out</a>
            </li>
          </div>
        </li>
      </ul>
    </nav>
  );
}
