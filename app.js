// it selects the random string

let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

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



const userInput = prompt("what's your choice?");
const playerSelection = userInput.toLowerCase();
const computerSelection = computerPlay();
console.log(`you picked ${playerSelection}`);
const result =(playRound(playerSelection, computerSelection));
// console.log(result);

function game() {
     for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
     }
   

    if(result.includes("win")) {
        playerScore++;

    }

    else if (result.includes("lose")) {
        computerScore++;
    }

    else if (result.includes("tie")) {
        ++playerScore;
        ++computerScore;
    }

    console.log(`player score is ${playerScore}`);
    console.log(`computer score is ${computerScore}`);
}

game();