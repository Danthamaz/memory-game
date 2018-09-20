import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
  <div>
    <ul>
      <li>
        <a href="/">{props.title}</a>
      </li>
      <li>Current Score: {props.score}</li>

      <li>Top Score: {props.highscore}</li>

      <li>{props.correct}</li>

    </ul>
  </div>
);

export default Scoreboard;