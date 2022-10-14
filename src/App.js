import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav/Nav";
import AuthPage from "./pages/AuthPage/AuthPage";
import GamePage from "./pages/GamePage/GamePage";
import HomePage from "./pages/HomePage/HomePage";
import NewTeamPage from "./pages/NewTeamPage/NewTeamPage";

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
        let userDo = payload.user;
        this.setState({ user: userDo });
      }
    }
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  render() {
    return (
      <main className="App">
        <Nav user={this.state.user} />
        <br />
        {/* {this.state.user ? ( */}
        <Routes>
          <Route path="/warfeud" element={<HomePage />} />
          <Route path="/warfeud/new" element={<NewTeamPage />} />
          <Route path="/warfeud/game" element={<GamePage />} />
          <Route path="*" element={<Navigate to="/warfeud" replace />} />
        </Routes>
        {/* ) : (
          <AuthPage setUserInState={this.setUserInState} /> */}
        {/* )} */}
      </main>
    );
  }
}
