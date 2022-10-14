import { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="nav-link">
          {/* <Link to="/" className="title">
            We're All Related Feud
          </Link> */}
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
