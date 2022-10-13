import React, { Component } from 'react';
// React Router
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import GamePage from './pages/GamePage/GamePage';
import HomePage from './pages/HomePage/HomePage';
import NewTeamPage from './pages/NewTeamPage/NewTeamPage';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/relatedfeud' element={<HomePage />} />
          <Route path='/relatedfeud/new' element={<NewTeamPage />} />
          <Route path='/relatedfeud/game' element={<GamePage />} />
          <Route path='*' element={<Navigate to='/relatedfeud' replace />} />
        </Routes>
      </div>
    );
  }
}
