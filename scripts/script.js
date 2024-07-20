// Text for what the players picked
const humanChoiceText = document.createElement("p");
const computerChoiceText = document.createElement("p");

// Score
const humanScoreText = document.createElement("p");
const computerScoreText = document.createElement("p");
const score = document.querySelector(".score");

humanScoreText.textContent = "Your Score: 0";
computerScoreText.textContent = "Computer Score: 0";

score.appendChild(humanScoreText);
score.appendChild(computerScoreText);

let humanScore = 0;
let computerScore = 0;

// Round
let roundCount = 1;
const round = document.querySelector(".round");
round.textContent = `Round ${roundCount}`;

// Winner
const choices = document.querySelector(".choices");

let choiceSelected = 0;
let gameFinished = 0;
const maxScore = 5;

choices.addEventListener('click', (event) => {
  let target = event.target;
  if (checkValid(target.id) && !choiceSelected && !gameFinished) {
    highlightChoices(target);
    if (humanScore !== maxScore && computerScore !== maxScore) {
      choiceSelected = 1;
      const computerSelection = getComputerChoice();
      
      let outcome = playRound(target.id, computerSelection, humanChoiceText, computerChoiceText);
      updateScore(outcome);
      continueDisplay(target);
      displayComputerChoice(computerSelection);
      displayRoundWinner(outcome);
      if (humanScore === maxScore || computerScore === maxScore) displayGameWinner(humanScore);
    }
    else {
      gameFinished = 1;
    }
  }
})

function continueDisplay(target) {
  const continueBtn = document.createElement("button");
  continueBtn.classList.add("continue");
  continueBtn.textContent = "Continue";
  target.parentNode.appendChild(continueBtn)
  const continueDiv = document.querySelector(".continue");
  //continueDiv.appendChild(continueBtn)

  continueBtn.addEventListener('click', event => {
    resetChoice();
  })
}

function displayRoundWinner(outcome) {
  const winner = document.querySelector(".winner");
  const winnerText = document.createElement("p");
  if (outcome === "win") {
    winnerText.textContent = "You Win!";
  }
  else if (outcome === "lose") {
    winnerText.textContent = "You Lose";
  }
  else {
    winnerText.textContent = "Its a Draw";
  }
  winner.appendChild(winnerText);
}

function displayGameWinner(humanScore) {
  const winnerMenu = document.createElement("div");
  winnerMenu.classList.add("menu");
  const gameWinner = document.createElement("p");
  gameWinner.textContent = humanScore === maxScore ? "You Won!" : "You lost.";
  winnerMenu.appendChild(gameWinner);

  const playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "Play Again";
  winnerMenu.appendChild(playAgainBtn);

  playAgainBtn.addEventListener("click", event => {
    resetGame()
  });

  document.querySelector("body").appendChild(winnerMenu);

  const menuOverlay = document.createElement("div");
  menuOverlay.classList.add("overlay");
  document.querySelector("body").appendChild(menuOverlay);
}

function resetGame() {
  resetChoice();
  roundCount = 1;
  humanScore = 0;
  computerScore = 0;
  humanScoreText.textContent = `Your Score: 0`;
  computerScoreText.textContent = `Computer Score: 0`;
  round.textContent = `Round ${roundCount}`;

  document.querySelector(".menu").remove();
  document.querySelector(".overlay").remove();
}

function updateScore(outcome) {
  // Increment human if win
  if (outcome === "win") {
    humanScore++;
    humanScoreText.textContent = `Your Score: ${humanScore}`;
  }
  // Increment computer if lose
  else if (outcome === "lose") {
    computerScore++;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
  }
}

function resetChoice() {
  document.querySelector(".continue").remove();
  document.querySelector(".choices p").remove();

  document.querySelector(".computerIcon").remove();
  console.log(document.querySelector(".computerContainer p"));
  document.querySelector(".computerContainer p").remove();
  document.querySelector(".winner p").remove();
  roundCount++; 
  round.textContent = `Round ${roundCount}`;
  choiceSelected = 0;
}

function checkValid(target) {
  switch(target) {
    case "rock":
    case "paper":
    case "scissors":
      return 1;
      break;
    default:
      // No choice made;
      return 0;
      break;
  }
}

function highlightChoices(target) {
  const selectedText = document.createElement("p");
  selectedText.textContent = "You Played";
  target.parentNode.appendChild(selectedText);
}

function displayComputerChoice(computerChoice) {
  const computerChoiceIcon = document.createElement("div");
  computerChoiceIcon.classList.add("computerIcon")
  computerChoiceIcon.id = computerChoice;

  const computerContainer = document.querySelector(".computerContainer");
  computerContainer.appendChild(computerChoiceIcon);

  const computerChoiceText = document.createElement("p");
  computerChoiceText.textContent = "Computer Played";
  computerContainer.appendChild(computerChoiceText);
}

// CREATE function getComputerChoice
function getComputerChoice() {
  // SET choice to empty string
  let choice = "";
  // GET random number from 0-2 for rock paper scissors
  let randomNum = Math.floor(Math.random() * 3);
  // IF random number is 0 THEN
  if (randomNum === 0) {
    // SET choice to rock
    choice = "rock";
  }
  // ELSE IF random number is 1 THEN
  else if (randomNum === 1) {
    // SET choice to paper
    choice = "paper";
  }
  // ELSE IF random number is 2 THEN
  else if (randomNum === 2) {
    // SET choice to scissors
    choice = "scissors";
  }

  return choice;
}

function playRound(humanChoice, computerChoice, humanChoiceText, computerChoiceText) {
  let outcome = "";
  const results = document.querySelector(".results");

  // Check if draw
  if (humanChoice == computerChoice) {
    outcome = "draw";
  }
  else { 
    outcome = checkMatchUp(humanChoice, computerChoice)
  }
  return outcome;
}

function checkMatchUp(humanChoice, computerChoice) {
  // Check all win and lose conditions
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      outcome = "lose";
    }
    else if (computerChoice === "scissors") {
      outcome = "win";
    }
  }
  else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      outcome = "win";
    }
    else if (computerChoice === "scissors") {
      outcome = "lose";
    }
  }
  else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      outcome = "lose";
    }
    else if (computerChoice === "paper") {
      outcome = "win";
    }
  }
  return outcome;
}