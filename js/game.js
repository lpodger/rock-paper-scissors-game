//Get computer choice
function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomIndex];
}

//Play a round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors";
  }
  if (playerSelection === computerSelection) {
    return "Draw! You are both losers in my eyes.";
  }
}

//determine winner
function playerSelectionHandler () {
  const playerSelection = window.prompt("Choose your weapon").toLowerCase();
if (playerSelection !== "scissors" && playerSelection !== "rock" && playerSelection !== "paper") {
    alert("You must enter Scissors, Paper or Rock.");
}
};


const computerSelection = getComputerChoice();
console.log(game(playerSelection, computerSelection));

function game() {
  for (let i = 0; i === 4; i++) {
    playRound()
  }
}
  //loop 5 times
  //keep score
  //report winner
