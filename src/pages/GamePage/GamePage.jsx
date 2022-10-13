import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header'; 
import Nav from '../../components/Nav/Nav';
import Question from '../../components/Question/Question';
import GameButton from '../../components/GameButton/GameButton';
import RoundButton from '../../components/RoundButton/RoundButton';

export default class GamePage extends Component {

  state = {
    username: "",
    round: 1,
    roundScore: 0,
    question: "NAME A SONG WITH THE WORD 'LOVE' IN IT",
    chances: 3,
    status: "PLAY!"
  }

  updateScore = () => {
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
        chances: 3,
        question: 'NAME SOMETHING YOU FILL WITH AIR',
        status: 'PLAY!'
      })
    } else if (incomingRound === 3) {
      this.setState({
        round: incomingRound,
        roundScore: 0,
        chances: 3,
        question: 'NAME SOMEONE THAT WORKS IN A HOSPITAL',
        status: 'PLAY!'
      })
    } 
  };

 
  updateChances = () => {
    this.setState({ chances: this.state.chances - 1 }, () => {
      this.updateChancesStatus(this.state.chances)
    })
  };

  updateChancesStatus = (chances) => {
    if (chances === 2) {
      this.setState ({ status: "UH OH, CAREFUL"})
    } else if (chances === 1) {
      this.setState ({ status: "LAST CHANCE!"})
    } else {
      this.setState ({ status: "GAME OVER"})
    }
  }

  render() {
    return (
      <>
        <Nav />
        <br />
        <Header 
          round={this.state.round} 
          roundScore={this.state.roundScore}
          chances={this.state.chances}
        />
        <br /><br />
        <Question question={this.state.question} />
        <br /><br />
        <GameButton 
          status={this.state.status}
          updateScore={this.updateScore}
          updateChances={this.updateChances}
        />
        <br /><br />
        <RoundButton updateRound={this.updateRound} />
      </>
    );
  }
}
