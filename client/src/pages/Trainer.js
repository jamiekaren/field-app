// import dependences and data
import React, { Component } from "react";
// import Data from "../data.json";
// import API from "./src/utils/API.js";

class Trainer extends Component {
  state = {
    // Data: [...Data],
    Lessons: ""
  };

  // // create method to handle clicking on a card
  // handleCardClick = cardId => {
  //   // create a flag variable to check if we're correct or not
  //   let isCorrect = false;

  // make a copy of the Data from state
  // const Data = [...this.state.Data];

  // loop over that copied array and find the object with the id you clicked on
  // check if card you clicked on has been clicked before
  // if no => set isCorrect to true and set the card's clicked status to true
  // Data.forEach(card => {
  //   if (card.id === cardId) {
  //     if (!card.clicked) {
  //       isCorrect = true;
  //       card.clicked = true;
  //     }
  //   }
  // });

  // check if isCorrect is true or false
  // if true => run logic for handling a correct guess
  // if false => run logic for handling an incorrect guess

  // };

  // handleCorrect = Data => {
  //   // shuffle cards
  //   const shuffledCards = Data.sort(() => 0.5 - Math.random());

  //   // get current score and add 1 to it
  //   const currentScore = this.state.currentScore + 1;

  //   let topScore = this.state.topScore;

  //   // check if current score is greater than topScore
  //   if (currentScore > topScore) {
  //     topScore = currentScore;
  //   }

  //   this.setState({
  //     Data: shuffledCards,
  //     currentScore: currentScore,
  //     topScore: topScore
  //   });
  // };

  // handleIncorrect = Data => {
  //   const shuffledCards = Data.sort(() => 0.5 - Math.random());

  //   // reset all cards to not be clicked
  //   shuffledCards.forEach(card => (card.clicked = false));

  //   this.setState({
  //     Data: shuffledCards,
  //     currentScore: 0
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-success class d-flex justify-space-between">
          <span className="navbar-brand mb-0">Field App PRO</span>
        </nav>
        <div className="jumbotron jumbotron-fluid bg-primary text-white text-center">
          <h1>Welcome Trainer!</h1>
        </div>
        <div className="container-fluid">
          <button
            onClick="displaySliderOne"
            type="button"
            className="btn btn-primary"
          >
            Lessons One
          </button>

          <button
            onClick="displaySliderTwo"
            type="button"
            className="btn btn-primary"
          >
            Lessons Two
          </button>

          <button
            onClick="console.log('The link was clicked.'); return false"
            type="button"
            className="btn btn-primary"
          >
            Lessons Three
          </button>

          <div className="row align-items-center justify-content-between"></div>
        </div>
      </React.Fragment>
    );
  }
}

// export Clicky component
export default Trainer;
