// Chooses a random number and uses it to select rock paper or scissors
const computerPlay = () => {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
};

//Check possible what the player selected and what the computer selected and decides who wins
const playRound = (playerSelection, computerSelection) => {
  const playerChoice = playerSelection.toUpperCase();
  if (playerChoice === "ROCK" && computerSelection === "ROCK") {
    return ["Tie!", 2];
  } else if (playerChoice === "ROCK" && computerSelection === "PAPER") {
    return ["You lose! Paper beats rock", 1];
  } else if (playerChoice === "ROCK" && computerSelection === "SCISSORS") {
    return ["You win! Rock wins scissors", 0];
  } else if (playerChoice === "PAPER" && computerSelection === "ROCK") {
    return ["You win! Paper wins rock", 0];
  } else if (playerChoice === "PAPER" && computerSelection === "PAPER") {
    return ["Tie!", 2];
  } else if (playerChoice === "PAPER" && computerSelection === "SCISSORS") {
    return ["You lose! Scissors wins paper", 1];
  } else if (playerChoice === "SCISSORS" && computerSelection === "ROCK") {
    return ["You lose! Rock wins scissors", 1];
  } else if (playerChoice === "SCISSORS" && computerSelection === "PAPER") {
    return ["You win! Scissors wins paper", 0];
  } else if (playerChoice === "SCISSORS" && computerSelection === "SCISSORS") {
    return ["Tie", 2];
  }
};

const game = () => {
  const playerSelection = prompt("Rock paper or scissors?");
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    const result = playRound(playerSelection, computerPlay());
    console.log(result[0]);
    if (result[1] === 0) {
      playerScore++;
    }
    if (result[1] === 1) {
      computerScore++;
    }
    if (result[1] === 2) {
      playerScore++;
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log(
      `Congrats you won! The final score was ${playerScore}-${computerScore}`
    );
  } else {
    console.log(
      `You lost! The final score was ${computerScore}-${playerScore}`
    );
  }
};

game();
