import { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'; 
import Nav from './components/Nav/Nav';
import Question from './components/Question/Question';
import Cards from './components/Cards/Cards';
import RoundButtons from './components/RoundButtons/RoundButtons';

export default class App extends Component {

  state = {
    user: '',
    round: 1,
    question: "NAME A SONG WITH THE WORD 'LOVE' IN IT",
    score: 0,
    cards: ['I WILL ALWAYS LOVE YOU - 45', 'CRAZY IN LOVE - 35', 'AS LONG AS YOU LOVE ME - 20'], // add each card score to score
    chances: 3,
    showCard: [false, false, false] // 3 answer cards - to show the card if guess is correct, start false
  }
  
 // when a card is 'clicked', showCard = true

  render() {
    return (
      <div className="App">
        <Nav />
        <br />
        <Header 
          round={this.state.round} 
          score={this.state.score}
          chances={this.state.chances}
        />
        <br />
        <Question question={this.state.question} />
        <br/>
        <RoundButtons />
      </div>
    );
  }
}

