let humanScore = 0;
let computerScore = 0;

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

// FUNC playRound(humanChoice, computerChoice)
  // INIT outcome
  // IF humanChoice equal to computerChoice
    // PRINT draw
    // RETURN
  // ENDIF
  // ELSE IF humanChoice is rock THEN
    // IF computerChoice is paper THEN
      // SET outcome to lose
    // ENDIF
    // IF computerChoice is scissors THEN
      // SET outcome to win
    // ENDIF
  // ENDIF
  // ELSE IF humanChoice is paper THEN
    // IF computerChoice is rock THEN
      // SET outcome to win
    // ENDIF
    // IF computerChoice is scissors THEN
      // SET outcome to lose
    // ENDIF
  // ENDIF
  // ELSE IF humanChoice is scissors
    // IF computerChoice is rock THEN
      // SET outcome to lose
    // ENDIF
    // IF computerChoice is paper THEN
      // SET outcome to win
    // ENDIF
  // ENDIF
  // IF outcome is win
    // PRINT win message
    // INCREMENT humanScore
  // ENDIF
  // ELSE IF outcome is lose
    // PRINT lose message
    // INCREMENT computerScore
  // ENDIF
  