import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import AuthPage from "./pages/AuthPage/AuthPage";
import GamePage from "./pages/GamePage/GamePage";
import HomePage from "./pages/HomePage/HomePage";
import NewTeamPage from "./pages/NewTeamPage/NewTeamPage";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/warfeud" element={<HomePage />} />
          <Route path="/warfeud/new" element={<NewTeamPage />} />
          <Route path="/warfeud/game" element={<GamePage />} />
          <Route path="*" element={<Navigate to="/warfeud" replace />} />
        </Routes>
        :
        {/* <AuthPage /> */}
      </div>
    );
  }
}
