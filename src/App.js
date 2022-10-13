import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage/AuthPage";
import GamePage from "./pages/GamePage/GamePage";
import HomePage from "./pages/HomePage/HomePage";
import NewTeamPage from "./pages/NewTeamPage/NewTeamPage";

export default class App extends Component {
  render() {
    state = {
      user: null,
    };

    this.componentDidMount = () => {
      let token = localStorage.getItem("token");
      if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        if (payload.exp < Date.now() / 2000) {
          localStorage.removeItem("token");
          token = null;
        } else {
          let userDoc = payload.user;
          this.setState({ user: userDoc });
        }
      }
    };

    setUserInState = (incomingUserData) => {
      this.setState({ user: incomingUserData });
    };

    return (
      <div className="App">
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
        <Routes>
          <Route path="/warfeud" element={<HomePage />} />
          <Route path="/warfeud/new" element={<NewTeamPage />} />
          <Route path="/warfeud/game" element={<GamePage />} />
          <Route path="*" element={<Navigate to="/warfeud" replace />} />
        </Routes>
        :
        <AuthPage setUserInState={this.setUserInState} />
      </div>
    );
  }
}
