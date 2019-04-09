import React, { Component } from 'react';
import CrystalCollector from './CrystalCollector.js'
import Instructions from './Instructions.js'
import ScoresAndCrystals from './ScoresAndCrystals.js'
import Counters from './Counters.js'

class GameLogic extends Component {

  // Setting the initial state
  constructor(props) {
    super(props);
    this.state = {
      blue:
      {
        name: "Blue",
        value: 0
      },
      green:
      {
        name: "Green",
        value: 0
      },
      red:
      {
        name: "Red",
        value: 0
      },
      yellow:
      {
        name: "Yellow",
        value: 0
      },
      // Scores (Current and Target)
      currentScore: 0,
      targetScore: 0,
      // Wins and Losses
      winCount: 0,
      lossCount: 0
    }

    this.crystalHandler = this.crystalHandler.bind(this)
    this.getRandom = this.getRandom.bind(this)
    this.startGame = this.startGame.bind(this)
    this.checkWin = this.checkWin.bind(this)
  }

  crystalHandler = (value) => {
    this.setState({ currentScore: this.state.currentScore += value })
    this.checkWin();
  }


  // Helper Function for getting random numbers
  getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  startGame = () => {

    // Reset the Current Score
    this.setState({ currentScore: 0 });

    // Set a new Target Score (between 19 and 120)
    this.setState({ targetScore: this.getRandom(19, 120) });
    console.log("Target Score = " + this.state.targetScore);
    // Set different values for each of the crystals (between 1 and 12)
    // this.setState({ blue.value: getRandom(1, 12) });
    // this.setState({ green.value: getRandom(1, 12) });
    // this.setState({ red.value: getRandom(1, 12) });
    // this.setState({ yellow.value: getRandom(1, 12) });

    // Testing Console
    console.log("-----------------------------------");
    console.log("Target Score: " + this.state.targetScore);
    console.log("Blue: " + this.state.blue.value + " | Green: " + this.state.green.value + " | Red: " + this.state.red.value +
      " | Yellow: " + this.state.yellow.value);
    console.log("-----------------------------------");
  }

  // Check if User Won or Lost and Reset the Game
  checkWin = () => {

    // Check if currentScore is larger than targetScore
    if (this.state.currentScore > this.state.targetScore) {
      // alert("Sorry. You lost!");
      console.log("You Lost");

      // Add to Loss Counter
      this.setState({ lossCount: this.state.lossCount++ });

      // Restart the game
      this.startGame();
    }

    else if (this.state.currentScore === this.state.targetScore) {
      // alert("Congratulations! You Won!");
      console.log("You Won!");

      // Add to the Win Counter
      this.setState({ winCount: this.state.winCount++ });

      // Restart the game
      this.startGame();
    }

  };

  // Starts the Game the First Time.
  componentDidMount() {


    this.startGame();

  }

  render() {
    return (
      <div className="container">
        <CrystalCollector/>
        <Instructions/>
        <ScoresAndCrystals state={this.state} handler={this.crystalHandler}/>
        <Counters winCount={this.state.winCount} lossCount={this.state.lossCount}/>

      </div>
    );
  }
}

export default GameLogic;
// Crystal Variables
/*
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// =================================================================

// Helper Function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts the Game (and restarts the game)
var startGame = function() {

  // Reset the Current Score
  currentScore = 0;

  // Set a new Target Score (between 19 and 120)
  targetScore = getRandom(19, 120);

  // Set different values for each of the crystals (between 1 and 12)
  crystal.blue.value = getRandom(1, 12);
  crystal.red.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.yellow.value = getRandom(1, 12);

  // Change the HTML to reflect all of these changes
  $("#your-score").html(currentScore);
  $("#target-score").html(targetScore);


  // Testing Console
  console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
  console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
    " | Yellow: " + crystal.yellow.value);
  console.log("-----------------------------------");
};

// Check if User Won or Lost and Reset the Game
var checkWin = function() {

  // Check if currentScore is larger than targetScore
  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost");

    // Add to Loss Counter
    lossCount++;

    // Change Loss Count HTML
    $("#loss-count").html(lossCount);

    // Restart the game
    startGame();
  }

  else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");

    // Add to the Win Counter
    winCount++;

    // Change Win Count HTML
    $("#win-count").html(winCount);

    // Restart the game
    startGame();
  }

};

// Respond to clicks on the crystals
var addValues = function(clickedCrystal) {

  // Change currentScore
  currentScore += clickedCrystal.value;

  // Change the HTML to reflect changes in currentScore
  $("#your-score").html(currentScore);

  // Call the checkWin Function
  checkWin();

  // Testing Console
  console.log("Your Score: " + currentScore);
};

// MAIN PROCESS
// =================================================================

// Starts the Game the First Time.
startGame();

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#red").click(function() {
  addValues(crystal.red);
});

$("#green").click(function() {
  addValues(crystal.green);
});

$("#yellow").click(function() {
  addValues(crystal.yellow);
});
*/
