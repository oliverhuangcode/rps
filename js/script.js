playGame(5);

function playGame(rounds) {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= rounds; round++) {
    console.log(`Round ${round}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    let outcome = playRound(humanSelection, computerSelection);

    checkOutcome(outcome);

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
  function checkOutcome(outcome) {
    // Increment human if win
    if (outcome === "win") {
      console.log("You win!");
      humanScore++;
    }
    // Increment computer if lose
    else if (outcome === "lose") {
      console.log("You lose.");
      computerScore++;
    }
    else if (outcome === "draw") {
      console.log("Draw!");
    }
  }
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

function getHumanChoice() {
  let choice = "";
  while (choice === "") {
    let input = prompt("Enter your choice (rock | paper | scissors)").toLowerCase();
    if (input === "rock" | input === "paper" | input === "scissors") {
      choice = input;
    }
    else {
      console.log("Invalid choice - Try again");
    }
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  let outcome = "";
  console.log(`You played ${humanChoice}`);
  console.log(`The computer played ${computerChoice}`);

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