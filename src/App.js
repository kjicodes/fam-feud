import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav/Nav";
import GamePage from "./pages/GamePage/GamePage";
import HomePage from "./pages/HomePage/HomePage";
import NewTeamPage from "./pages/NewTeamPage/NewTeamPage";

export default class App extends Component {
  // state = {
  //   user: null,
  // };

  render() {
    return (
      <main className="App">
        <Nav />
        <br />
        <Routes>
          <Route path="/warfeud" element={<HomePage />} />
          <Route path="/warfeud/new" element={<NewTeamPage />} />
          <Route path="/warfeud/game" element={<GamePage />} />
          <Route path="*" element={<Navigate to="/warfeud" replace />} />
        </Routes>
      </main>
    );
  }
}
