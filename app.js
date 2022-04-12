// it selects the random string

let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const randomChoice = Math.floor(Math.random() * choices.length);    //gets the  0,1,2 -randomly 
    const randomName = choices[randomChoice];   // put the random number into an array, giving us random name
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

// let result =(playRound(playerSelection, computerSelection));
// console.log(result);

function game() {
    for (let i = 1; i < 6; i++) {
        let userInput = prompt("what's your choice? rock-paper-scissors");
        let playerSelection = userInput.toLowerCase();
        console.log("game", i);

        let computerSelection = computerPlay();
        console.log(`you picked ${playerSelection}`);

        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        // calculating the score and displaying at each game

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        } else if (result.includes("tie")) {
            playerScore;
            computerScore;
        }

        console.log(`player score is ${playerScore}`);
        console.log(`computer score is ${computerScore}`);
    }

    // displaying winner after the 5 game is over

    function winner() {
        if (computerScore > playerScore) {
            console.log("computer wins, best of luck next time");
        } else if (playerScore > computerScore) {
            console.log("you're natural, suck it up AI");
        } else if (playerScore == computerScore) {
            console.log("you both suck, try again");
        }
    }
    winner();
}

game();