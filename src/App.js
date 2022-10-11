import { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'; 
import Nav from './components/Nav/Nav';
import Question from './components/Question/Question';
import Cards from './components/Cards/Cards';
import RoundButtons from './components/RoundButtons/RoundButtons';

export default class App extends Component {

  state = {
    round: 1,
    team: ['', ''],
    currTeam: '',
    question: "NAME SONGS WITH THE WORD 'LOVE' IN THE TITLE", // 5 questions in total = 5 rounds?
    scores: [0, 0], // scores for each team (each family) 
    card: '', // word behind each card
    isWrong: 0,
    showCard: [false, false, false, false], // 4 answer cards - to show the card if guess is correct, start false
    showX: false, // X's shown for wrong guesses, 3 attempts
    roundScore: 0
  }

  update


  render() {
    return (
      <div className="App">
        <Nav />
        <Header 
          round={this.state.round} 
          team={this.state.team} 
          scores={this.state.scores}
        />
        <Question question={this.state.question} />
        <Cards />
        <RoundButtons />
      </div>
    );
  }
}

