import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage/AuthPage";
import GamePage from "./pages/GamePage/GamePage";
import HomePage from "./pages/HomePage/HomePage";
import NewTeamPage from "./pages/NewTeamPage/NewTeamPage";
import Nav from "./components/Nav/Nav";

export default class App extends Component {
  state = {
    user: null,
  };

  componentDidMount = () => {
    let token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.exp < Date.now() / 1000) {
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

  render() {
    return (
      <div className="App">
        <Nav />
        {this.state.user ? (
          <Routes>
            <Route path="/warfeud" element={<HomePage />} />
            <Route path="/warfeud/new" element={<NewTeamPage />} />
            <Route path="/warfeud/game" element={<GamePage />} />
            <Route path="*" element={<Navigate to="/warfeud" replace />} />
          </Routes>
        ) : (
          <AuthPage setUserInState={this.setUserInState} />
        )}
      </div>
    );
  }
}
