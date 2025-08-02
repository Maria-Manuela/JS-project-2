//function called computerPlay that will randomly return either ‘Rock’,‘Paper’ or ‘Scissors’.
alert( "Hello there, since you are here, let’s play Rock Paper Scissors!\n\nRules are simple:\n- Rock beats Scissors\n- Scissors beats Paper\n- Paper beats Rock\n\nBest of 5 rounds. Ready?");

const valueOptions = ["rock", "paper", "scissors"];


const getPlayerChoice = () => {
  while (true) {
  const userInput = prompt("Let´s Play! Rock, Paper, or Scissors?");
  const userChoice = userInput?.trim().toLowerCase();
  //console.log(userInput);
  if (valueOptions.includes(userChoice)) {
     return userChoice;
   
  }else if (userInput === null) {
    alert("😢 Awww... backing out already?\nAlright, I’ll be sharpening my virtual scissors for next time! ✂️🤖");
    return null;
  }else {
    alert("invalid input. Please type rock, paper, or scissors.");
  }
}
  //console.log(`User chose: "${userChoice}"`);
};

//const userChoice = getPlayerChoice;
//console.log("Player chose:", getPlayerChoice());

const computerPlay = () => valueOptions[Math.floor(Math.random() * valueOptions.length)];


const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    alert(`We both picked ${playerSelection}. It´s a tie. (👔not an actual tie😉 hihi)` );
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    alert (`Computer: ${computerSelection} \nYou: ${playerSelection} \n\nYou win! ${playerSelection}  beats ${computerSelection}.`);
    return "playerWins";
  } else 
   {
    alert(`Computer: ${computerSelection} \nYou: ${playerSelection} \n\nYou lose! ${computerSelection} beats ${playerSelection}.`) ;
    return "computerWins";
  }
};


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

    alert (`You have ${4 - attempt} attempts left! \n\nScore so far: \nYou: ${playerWinsCount} \nComputer: ${computerWinsCount}`);
  }
  
  if (computerWinsCount > playerWinsCount){
    alert (`🤖 Beep boop! I win this round, puny human! \nI crushed you ${computerWinsCount} to ${playerWinsCount}.\nBetter luck next reboot! 💻💥`);
  }else if (computerWinsCount < playerWinsCount){
    alert (`🎉 YOU WIN! You defeated the mighty machine ${playerWinsCount} to ${computerWinsCount}! \nGo ahead, brag a little… I’ll be sulking in binary. 😤`);
  }else if (computerWinsCount === playerWinsCount && computerWinsCount !== 0 && playerWinsCount !== 0) {
    alert (`🤝 It's a tie! We both won ${computerWinsCount} times. \nNo winner, no loser... just two legends in a deadlock.`);
  }
}

game ();

const resumeGame = () => {
  while (true) {
  let userChoice = prompt ("Would you like to play again? Please, answer yes or no.");
  const cleanUserChoice = userChoice?.trim().toLowerCase();
  if ( cleanUserChoice === "yes") {
    game ();
  }else if (cleanUserChoice === "no") {
    alert("Thank you! Byeeee 👋");
    break;
  } else if (userChoice === null) {
    alert("Thank you! Byeeee 👋");
    break;
  }
  else {
    alert("Invalid Input! Please, eneter yes or no");
  }
}
}

resumeGame ();
