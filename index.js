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
    return "Tie!";
  } else if (playerChoice === "ROCK" && computerSelection === "PAPER") {
    return "You lose! Paper beats rock";
  } else if (playerChoice === "ROCK" && computerSelection === "SCISSORS") {
    return "You win! Rock wins scissors";
  } else if (playerChoice === "PAPER" && computerSelection === "ROCK") {
    return "You win! Paper wins rock";
  } else if (playerChoice === "PAPER" && computerSelection === "PAPER") {
    return "Tie!";
  } else if (playerChoice === "PAPER" && computerSelection === "SCISSORS") {
    return "You lose! Scissors wins paper";
  } else if (playerChoice === "SCISSORS" && computerSelection === "ROCK") {
    return "You lose! Rock wins scissors";
  } else if (playerChoice === "SCISSORS" && computerSelection === "PAPER") {
    return "You win! Scissors wins paper";
  } else if (playerChoice === "SCISSORS" && computerSelection === "SCISSORS") {
    return "Tie";
  }
};

const playerSelection = "Paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
