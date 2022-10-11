import { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'; 
import Nav from './components/Nav/Nav';
import Question from './components/Question/Question';
import Cards from './components/Cards/Cards';
import RoundButton from './components/RoundButton/RoundButton';

export default class App extends Component {

  state = {
    round: 1,
    team: ['Team1', 'Team2'],
    currTeam: '',
    question: "NAME SONGS WITH THE WORD 'LOVE' IN THE TITLE", // 5 questions in total = 5 rounds?
    scores: [0, 0], // scores for each team (each family) 
    card: '', // word behind each card
    wrongAnswer: 0,
    showCard: [false, false, false, false], // to show the card if guess is correct
    showX: false, // X's shown for wrong guesses, 3 attempts
    roundScore: 0
  }



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
        <RoundButton round={1} />
        <RoundButton round={2} />
        <RoundButton round={3} />
        <RoundButton round={4} />
        <RoundButton round={5} />
      </div>
    );
  }
}

