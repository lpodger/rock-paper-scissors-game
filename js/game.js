//Get computer choice
function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomIndex];
}

//Play a round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Player 1 wins!";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "Player 2 wins!";
  }
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "Draw!";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Player 2 wins!";
  }
  if (playerSelection === "paper" && computerSelection === "paper") {
    return "Draw!";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player 1 wins!";
  }
  if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "Draw!";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Player 1 wins!";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Player 2 wins!";
  }
  

  //determine winner
  //return strin g that says "You Lose! Paper beats Rock"
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

