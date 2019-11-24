/**
 * @Author: Ali
 * @Date:   2019-11-21T14:46:30+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-24T05:37:57+01:00
 */

import React, { Component } from "react";
import Player from "./components/Player";

import "./App.css";

const weapons = ["rock", "paper", "scissors"];

class App extends Component {
  state = {
    player: weapons[0],
    computer: weapons[1]
  };
  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        computer: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 200);
  };
  selectWinner = () => {
    const { player, computer } = this.state;
    if (player === computer) {
      return "It's a tie";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "Player is the Winner";
    } else {
      return "Computer is the Winner";
    }
  };
  setWeapon = weapon => {
    this.setState({
      playerOne: weapon
    });
  };
  render() {
    const { player, computer, pscore, cscore } = this.state;
    return (
      <div className="App">
        <div className="names">Player:{pscore}</div>
        <Player weapon={player} />
        <div className="names">Computer:{cscore}</div>
        <Player weapon={computer} />
        <button onClick={() => this.setWeapon("rock")}> rock </button>
        <button onClick={() => this.setWeapon("paper")}> paper </button>
        <button onClick={() => this.setWeapon("scissors")}> scissors </button>
        <div className="calc"> {this.selectWinner()} </div>
        <button className="start" type="button" onClick={this.startGame}>
          Start!
        </button>
      </div>
    );
  }
}

export default App;
