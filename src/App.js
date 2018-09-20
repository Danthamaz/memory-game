import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Scoreboard from "./components/Scoreboard";
import friends from "./friends.json";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    friends,
    score: 0,
    highscore: 0,
    correct: "",
    clicked: []
  };
  
    handleClick = id => {
      if (this.state.clicked.indexOf(id) === -1) {
        this.handleIncrement();
        this.setState({ clicked: this.state.clicked.concat(id) });
      } else {
        this.handleReset();
      }
    };
  
    handleIncrement = () => {
      const newScore = this.state.score + 1;
      this.setState({
        score: newScore,
        correct: ""
      });
      if (newScore >= this.state.highscore) {
        this.setState({ highscore: newScore });
      }
      else if (newScore === 12) {
        this.setState({ correct: "You win!" });
      }
      this.handleShuffle();
    };
  
    handleReset = () => {
      this.setState({
        score: 0,
        highscore: this.state.highscore,
        correct: "Wrong!!",
        clicked: []
      });
      this.handleShuffle();
    };
  
    handleShuffle = () => {
      let shuffledFriends = shuffleFriends(friends);
      this.setState({ friends: shuffledFriends });
    };
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Scoreboard
          title="Memory Game"
          score={this.state.score}
          highscore={this.state.highscore}
          correct={this.state.correct}
        />
        {this.state.friends.map(friend => (
              <FriendCard
                key={friend.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                id={friend.id}
                image={friend.image}
              />
        ))}
      </Wrapper>
    );
  }
}
export default App;
