import { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/warfeud" className="game">
            Log Out
          </Link>
        </li>

        <li>
          <Link to="/warfeud" className="game">
            Home
          </Link>
        </li>
        <li>
          <Link to="/warfeud/game" className="game">
            Play Game
          </Link>
        </li>
        <Link to="/" className="title">
          We're All Related Feud
        </Link>
      </ul>
    );
  }
}
