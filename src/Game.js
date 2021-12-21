import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
    super(props);
    const valuesArray = this.makeNewQuestion();
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3],
    };
  }
  
   makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  };
  
  render() {
    return ( <div> The Game Component</div>
            );
  }
}

export default Game;