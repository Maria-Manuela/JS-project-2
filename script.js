//function called computerPlay that will randomly return either ‘Rock’,‘Paper’ or ‘Scissors’.
const valueOptions = ["rock", "paper", "scissors"];

// idea: add a function that will alow the user to input symbols and inform

const getPlayerChoice = () => {
  while (true) {
  const userInput = prompt("Let´s Play! Rock, paper, or scissors?");
  const userChoice = userInput?.trim().toLowerCase();
  // add loop
  //console.log(userInput);
  if (valueOptions.includes(userChoice)) {
     return userChoice;
    //return (resume the game)
   
  }else if (userInput === null) {
    alert("Thank you! Byeee");
    return null;
  }else {
    alert("invalid input. Please type rock, paper, or scissors.");
  }
}
  //console.log(`User chose: "${userChoice}"`);
};

//const userChoice = getPlayerChoice;
//console.log("Player chose:", getPlayerChoice());

//Math.random() * myArray.length generates a random number between 0 and the array's length. Math.floor() rounds it down to an integer -> used as an index to access a random element.

const computerPlay = () => valueOptions[Math.floor(Math.random() * valueOptions.length)];


//Write a function that plays a single round of Rock Paper Scissors.The function should take two parameters - the playerSelection and computer.Selection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock". ---Make your function’s playerSelection parameter case￾insensitive
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    alert(`We both picked ${playerSelection}. It´s a tie. (👔not an actual tie😉 hihi)` );
    return "tie";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computer === "Rock")
  ) {
    alert (`You win! ${playerSelection}  beats ${computerSelection}.`);
    return "playerWins";
  } else 
   {
    alert(`You lose! ${computerSelection} beats ${playerSelection}.`) ;
    return "computerWins";
  }
};
//console.log(playRound("rock", "scissors"));
//console.log(playRound("rock", "paper"));

//function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. use loop, max 5 rounds

// use prompt to get input from the user

//pay attention to user experience, fun text, backstory. Clear instruction

const game = () => {
  let computerWinsCount = 0;
  let playerWinsCount = 0;
  let roundResult;

  for (let attempt = 0; attempt < 5; attempt++) {
    const computerSelection = computerPlay();
    const playerSelection = getPlayerChoice();
   
    if (playerSelection === null) {
      break;
    }
      roundResult = playRound (playerSelection, computerSelection);

    if (roundResult === "playerWins"){
      playerWinsCount = playerWinsCount + 1;
    } else if (roundResult === "computerWins"){
      computerWinsCount = computerWinsCount + 1;
    }else if (roundResult === "tie"){
      computerWinsCount = computerWinsCount + 0;
      playerWinsCount = playerWinsCount + 0;
    }
    alert (`You have ${4 - attempt} attempts left!`);
  }
  
  if (computerWinsCount > playerWinsCount){
    alert (`Computer won! Computer won ${computerWinsCount} times and you won ${playerWinsCount} times`);
  }else if (computerWinsCount < playerWinsCount){
    alert (`You won! You won ${playerWinsCount}times and computer won ${computerWinsCount} times`);
  }else if (computerWinsCount === playerWinsCount && computerWinsCount !== 0 && playerWinsCount !== 0) {
    alert ("It´s a tie. (👔not an actual tie😉 hihi)");
  }
  
}


game ();