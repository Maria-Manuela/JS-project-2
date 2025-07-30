//function called computerPlay that will randomly return either ‘Rock’,‘Paper’ or ‘Scissors’.
const valueOptions = ["rock", "paper", "scissors"];

// idea: add a function that will alow the user to input symbols and inform

const getPlayerChoice = () => {
  const userInput = prompt("Let´s Play! Rock, paper, or scissors?");
  const userChoice = userInput.trim().toLowerCase();
  // add loop

  if (!valueOptions.includes(userChoice)) {
    alert("invalid input. Please type rock, paper, or scissors.");
    //return (resume the game)
  } else {
    return userChoice;
  }
  //console.log(`User chose: "${userChoice}"`);
};

//const userChoice = getPlayerChoice;
//console.log("Player chose:", getPlayerChoice());

//Math.random() * myArray.length generates a random number between 0 and the array's length. Math.floor() rounds it down to an integer -> used as an index to access a random element.

const computerPlay = () => Math.floor(Math.random() * valueOptions.length);
const randomOption = valueOptions[computerPlay()];
console.log("Computer chose:", randomOption);

//Write a function that plays a single round of Rock Paper Scissors.The function should take two parameters - the playerSelection and computer.Selection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock". ---Make your function’s playerSelection parameter case￾insensitive
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It´s a tie. (👔not an actual tie😉 hihi)";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computer === "Rock")
  ) {
    return `You win! ${playerSelection}  beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
};
console.log(playRound("rock", "scissors"));
console.log(playRound("rock", "paper"));

//function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. use loop, max 5 rounds

// use prompt to get input from the user

//pay attention to user experience, fun text, backstory. Clear instruction
