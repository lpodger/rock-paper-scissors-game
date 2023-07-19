function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  let  randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}

console.log(getComputerChoice());

// function playRound(playerSelection, computerSelection) {
//     // your code here!
//   }

//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));
