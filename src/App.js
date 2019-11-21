/**
 * @Author: Ali
 * @Date:   2019-11-21T14:46:30+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-21T15:54:56+01:00
 */

import React, { Component } from "react";
import Player from "./components/Player";

import "./App.css";

const weapons = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[1]
  };
  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;
    if (playerOne === playerTwo) {
      return "It's a tie";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "paper" && playerTwo === "rock") ||
      (playerOne === "scissors" && playerTwo === "paper")
    ) {
      return "Player One is the Winner";
    } else {
      return "Player Two is the Winner";
    }
  };
  setWeapon = weapon => {
    this.setState({
      playerOne: weapon
    });
  };
  render() {
    const { playerOne, playerTwo } = this.state;
    return (
      <div className="App">
        <Player weapon={playerOne} />
        <Player weapon={playerTwo} />
        <button onClick={() => this.setWeapon("rock")}> rock </button>
        <button onClick={() => this.setWeapon("paper")}> paper </button>
        <button onClick={() => this.setWeapon("scissors")}> scissors </button>
        <div className="calc"> {this.selectWinner()} </div>
      </div>
    );
  }
}

export default App;
