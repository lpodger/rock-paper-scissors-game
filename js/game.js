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
const playerSelection = window.prompt("Choose your weapon");
if (playerSelection !== "scissors" || "rock" || "paper") {
    return "You must enter scissors, paper or rock.";
}

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
