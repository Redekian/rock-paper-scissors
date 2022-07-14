// Chooses a random number and uses it to select rock paper or scissors
const computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const choice = Math.floor(Math.random() * 3);
  console.log(choice);
  return options[choice];
};

console.log(computerPlay());
