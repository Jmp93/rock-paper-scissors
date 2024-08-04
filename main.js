let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice === 0) {
    compChoice = 'Rock';
  } else if (compChoice === 1) {
    compChoice = 'Paper';
  } else {
    compChoice = 'Scissors';
  }
  return compChoice;
}
let person = prompt('Rock, Paper, Scissors?');

function getHumanChoice(choice) {
  if (choice === 'Rock') {
    choice = 'Rock';
  } else if (choice === 'Paper') {
    choice = 'Paper';
  } else if (choice === 'Scissors') {
    choice = 'Scissors';
  }
  return person;
}

// console.log(person);

// console.log(getComputerChoice());
