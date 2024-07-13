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