/**
 * @Author: Ali
 * @Date:   2019-11-21T14:52:09+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-11-24T05:30:02+01:00
 */
import React from "react";
import rock from "./rock.png";
import scissors from "./scissors.png";
import paper from "./paper.png";

const Player = ({ weapon }) => (
  <div className="player">
    <img
      className="player-imgage"
      src={weapon === "rock" ? rock : weapon === "paper" ? paper : scissors}
      alt="Rock Paper Scissors"
    />
  </div>
);

export default Player;
