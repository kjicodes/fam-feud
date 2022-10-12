import { Component } from 'react';
import './App.css';

import Header from '../components/Header/Header'; 
import Nav from '../components/Nav/Nav';
import Question from '../components/Question/Question';
import GameButton from '../components/GameButton/GameButton';
import RoundButtons from '../components/RoundButtons/RoundButtons';

export default class App extends Component {

  state = {
    user: '',
    round: 1,
    roundScore: 0,
    question: "NAME A SONG WITH THE WORD 'LOVE' IN IT",
    chances: 3,
    status: 'PLAY!'
  }
  
 // when a card is 'clicked', showCard = true
  // handleClick = () => {

  // }

  addPoints = () => {
    this.setState ({ 
      roundScore: this.state.roundScore + 20,
      status: 'GOOD GUESS!'
    })
  };

  updateRound = (incomingRound) => {
    if (incomingRound === 2) {
      this.setState({
        round: incomingRound,
        roundScore: 0,
        question: 'NAME SOMETHING YOU FILL WITH AIR'
      })
    } else if (incomingRound === 3) {
      this.setState({
        round: incomingRound,
        roundScore: 0,
        question: 'NAME SOMEONE THAT WORKS IN A HOSPITAL'
      })
    } 
  };

  updateChances = () => {
    this.setState({ 
      chances: this.state.chances - 1,
      status: 'OH NO, TRY AGAIN'
    })
  };

  updateStatus = () => {
    
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <br />
        <Header 
          round={this.state.round} 
          roundScore={this.state.roundScore}
          chances={this.state.chances}
        />
        <br />
        <Question question={this.state.question} />
        <br />
        <GameButton 
          status={this.state.status}
          addPoints={this.addPoints}
          updateChances={this.updateChances}
        />
        <br />
        <RoundButtons updateRound={this.updateRound} />
      </div>
    );
  }
}

