let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let gameRound = 1;
let weapons = document.querySelector(".weapon-choice");
let roundResult = document.querySelector(".round-result");
let weaponText = document.querySelector(".weapon-text");
let remove = document.querySelector("#remove");
let btnValue = document.querySelectorAll(".btn");
let pScore = document.querySelector(".playerScore")
let cScore = document.querySelector(".computerScore")
let playerSelection = "";
let computerSelection = "";



btnValue.forEach((btn => {
  btn.addEventListener("click", playerChoose)
}))


function playerChoose(e) {
  // let playerSelection = e.target.className;
  let playerSelection= e.target.value; 
  remove.classList.add("remove");
  weaponText.innerHTML = `i choose ${playerSelection}`;
  playRound(playerSelection, computerPlay());
  // console.log(e);
}


function computerPlay() {
  let randomChoice =Math.floor(Math.random() * choices.length);
  let computerSelection = choices[randomChoice];
  weaponText.innerHTML += ` vs computer choose ${computerSelection}`;
  return computerSelection;

}

// let computerSelection = computerPlay()

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Rock") {
     roundResult.innerHTML = "you both choose rock, it's a tie ! try again...";
  }

  else if (playerSelection == "Paper" && computerSelection == "Paper") {
    roundResult.innerHTML = "you both choose paper, it's a tie ! try again...";
  }

 else  if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    roundResult.innerHTML = "you both choose scissors, it's a tie ! try again...";
  }

  else if (playerSelection == "Rock" && computerSelection == "Paper") {
    roundResult.innerHTML = "you lose! paper beats rock";
 }

  else if (playerSelection == "Paper" && computerSelection == "Rock") {
    roundResult.innerHTML = "you win! paper beats rock";
    playerScore++;
  }

 else  if (playerSelection == "Paper" && computerSelection == "Scissors") {
    roundResult.innerHTML =  "you lose! scissors beats paper";
    computerScore++;
  }

 else if (playerSelection == "Scissors" && computerSelection == "Paper")  {
  roundResult.innerHTML =  "you win! scissors beats paper";
   playerScore++;
 }
  
else  if (playerSelection == "Scissors" && computerSelection == "Rock") {
    roundResult.innerHTML = "you lose! rock beats scissors";
    computerScore++;
  }

 else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    roundResult.innerHTML = "you win! rock beats scissors";
     computerScore++;
     }
}
playRound();

let result =(playRound(playerSelection, computerSelection));
console.log(result);

// function game() {
//   for (let i = gameRound; i < 5; i++) {
//   // calculating the score and displaying at each game


//   }
// }
//   game();

  // displaying winner after the 5 game is over

  // function winner() {
  //   if (computerScore > playerScore) {
  //     console.log("computer wins, best of luck next time");
  //   } else if (playerScore > computerScore) {
  //     console.log("you're natural, suck it up AI");
  //   } else if (playerScore == computerScore) {
  //     console.log("you both suck, try again");
  //   }
  // }
  // winner();

