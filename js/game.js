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

//Get player weapon choice
function playerSelectionHandler() {
  const playerSelection = window.prompt("Choose your weapon").toLowerCase();
  if (
    playerSelection !== "scissors" &&
    playerSelection !== "rock" &&
    playerSelection !== "paper"
  ) {
    alert("You must enter Scissors, Paper or Rock.");
    return playerSelectionHandler();
  }
  return playerSelection;
}

//Run the game
function game() {
  const results = [];

  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerSelectionHandler();
    const computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);
    results.push(outcome);

    if (outcome.includes("win")) {
      playerWins++;
    } else if (outcome.includes("lose")) {
      computerWins++;
    }
  }

  for (const result of results) {
    console.log(result);
  }

  if (playerWins > computerWins) {
    alert("You are a winner!");
  } else if (playerWins < computerWins) {
    alert("Your are a loser!");
  } else {
    alert("You are both losers in my eyes.");
  }
}
console.log(game());
