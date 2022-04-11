// it selects the random string

let choices = ["rock", "paper", "scissors"];

function computerPlay() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    const randomName = choices[randomChoice];
    return randomName;
    // console.log(randomName);
}

computerPlay();




//

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "you both choose rock, it's a tie ! try again...";
    }

    if (playerSelection == "paper" && computerSelection == "paper") {
        return "you both choose paper, it's a tie ! try again...";
    }

    if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "you both choose scissors, it's a tie ! try again...";
    }

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "you lose! paper beats rock";
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        return "you win! paper beats rock";
    }

    if (playerSelection == "paper" && computerSelection == "scissors") {
        return "you lose! scissors beats paper";
    }

    if (playerSelection == "scissors" && computerSelection == "paper")
        return "you win! scissors beats paper";

    if (playerSelection == "scissors" && computerSelection == "rock") {
        return "you lose! rock beats scissors";
    }

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "you win! rock beats scissors";
    }
}
playRound();

const playerSelection = "PAPER";
const toLowerCase = playerSelection.toLowerCase();
// console.log(toLowerCase)
const computerSelection = computerPlay();

console.log(playRound(toLowerCase, computerSelection));
