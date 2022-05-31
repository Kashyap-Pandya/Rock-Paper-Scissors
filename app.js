// it selects the random string

let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let battles = document.querySelectorAll(".battle");
let numberText = document.querySelector(".numberText");
let weapons = document.querySelector(".weapon-choice");
let roundResult = document.querySelector(".round-result");
let remove = document.querySelector("#remove");
let btnValue = document.querySelectorAll(".btn");


//gets the number of user decided to play

// let getGameNumber = battles.forEach((battle) => {
//   battle.addEventListener("click",(e) => {
//       let battleNumber = e.target.textContent;
//       numberText.innerHTML = `you will be playing ${battleNumber} games against computer`;
//       console.log(battleNumber);
//     },
//     false
//   );
// });



function playerChoose() {
    btnValue.forEach((btn => {
        btn.addEventListener("click", (e) => {
        //    remove.classList.add("remove1");
            const playerSelect = e.target.value;

            console.log(playerSelect);
            roundResult.innerHTML = `i choose ${playerSelect}`;
           });        
     }));
}

playerChoose();

// let playerSelection = playerChoose();

btnValue.forEach((btn => {
    btn.addEventListener("click", (e) => {
    const playerSelect = e.target.value;
    
    });        

    btnValue.forEach((btn => {
        btn.addEventListener("click", (e) => {
            const playerSelect = e.target.value;
    })

// let playerSelection = btnValue.forEach((btn => {
//     btn.addEventListener("click", () => {
//     //    remove.classList.add("remove1");
//         roundResult.innerHTML = `i choose ${btn.value}`;
//         let buttonValue = btn.value ;
//         return buttonValue
//        });        
//  }));
// console.log(playerSelection);

const randomChoice = Math.floor(Math.random() * choices.length); //gets the  0,1,2 -randomly
const randomName = choices[randomChoice]; // put the random number into an array, giving us random name

// computer giving random choice and displaying 

function computerPlay() {
    weapons.addEventListener("click", () => roundResult.innerHTML += `<br>Vs <br> Computer choose ${randomName}`)
    return randomName;
}

let computerSelection = computerPlay();
console.log(computerSelection)


//

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Rock") {
    return  roundResult.innerHTML += "you both choose rock, it's a tie ! try again...";
  }

  else if (playerSelection == "Paper" && computerSelection == "Paper") {
    return roundResult.innerHTML += "you both choose paper, it's a tie ! try again...";
  }

 else  if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    return roundResult.innerHTML += "you both choose scissors, it's a tie ! try again...";
  }

  else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return roundResult.innerHTML += "you lose! paper beats rock";
  }

  else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return roundResult.innerHTML += "you win! paper beats rock";
  }

 else  if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return roundResult.innerHTML +=  "you lose! scissors beats paper";
  }

 else if (playerSelection == "Scissors" && computerSelection == "Paper")
    return roundResult.innerHTML +=  "you win! scissors beats paper";

 else  if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return roundResult.innerHTML += "you lose! rock beats scissors";
  }

 else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return roundResult.innerHTML += "you win! rock beats scissors";
  }
}
playRound();

let result =(playRound(playerSelection, computerSelection));
console.log(result);

// function game() {
//   for (let i = getGameNumber; i < getGameNumber; i++) {
//     // let userInput = prompt("what's your choice? rock-paper-scissors");
//     // let playerSelection = userInput.toLowerCase();
//     // console.log("game", i);

//     console.log(playerSelection);


//     // console.log(`you picked ${playerSelection}`);

//     let result = playRound(playerSelection, computerSelection);
//     console.log(result);

//     // calculating the score and displaying at each game

//     if (result.includes("win")) {
//       playerScore++;
//     } else if (result.includes("lose")) {
//       computerScore++;
//     } else if (result.includes("tie")) {
//       playerScore;
//       computerScore;
//     }

//     console.log(`player score is ${playerScore}`);
//     console.log(`computer score is ${computerScore}`);
//   }

//   // displaying winner after the 5 game is over

//   function winner() {
//     if (computerScore > playerScore) {
//       console.log("computer wins, best of luck next time");
//     } else if (playerScore > computerScore) {
//       console.log("you're natural, suck it up AI");
//     } else if (playerScore == computerScore) {
//       console.log("you both suck, try again");
//     }
//   }
//   winner();
// }

// game();
