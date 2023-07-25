const results = [];

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
function playerSelectionHandler(event) {
  const clickedBtn = event.target;
  const playerSelection = clickedBtn.value;
  return playerSelection;
}

function btnClickHandler(event) {
  const playerSelection = playerSelectionHandler(event);
  const computerSelection = getComputerChoice();
  const outcome = playRound(playerSelection, computerSelection);
  results.push(outcome);
  showResult(outcome);

  checkGameEnd();
}

// Function to check if the game has ended after 5 rounds
function checkGameEnd() {
  if (results.length === 5) {
    let playerWins = results.filter((result) => result.includes("win")).length;
    let computerWins = results.filter((result) =>
      result.includes("lose")
    ).length;
    if (playerWins > computerWins) {
      showResult("You are a winner!");
    } else if (playerWins < computerWins) {
      showResult("You are a loser!");
    } else {
      showResult("You are both losers in my eyes.");
    }

    // Reset the results array for the next game
    results.length = 0;
  }
}

// Add scoreboard to the global scope
const resultsContainer = document.querySelector(".results");

function showResult(message) {
  const resultsParagraph = document.createElement("p");
  resultsParagraph.textContent = message;
  resultsContainer.appendChild(resultsParagraph);
}

//Add event listener to btns
const btns = document.getElementsByClassName("btn");
const btnsArray = Array.from(btns);
btnsArray.forEach((button) => {
  button.addEventListener("click", btnClickHandler);
});

