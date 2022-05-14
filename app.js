// it selects the random string

let choices = ["Rock🪨", "Paper📰", "Scissors✂️"];
let playerScore = 0;
let computerScore = 0;

// getting the game number

let battles = document.querySelectorAll(".battle");
let numberText = document.querySelector(".numberText");

let getGameNumber = battles.forEach((battle) => {
  battle.addEventListener("click",(e) => {
      let battleNumber = e.target.textContent;
      numberText.innerHTML = `you will be playing ${battleNumber} games against computer`;
      console.log(battleNumber);
    },
    false
  );
});

// choosing the weapons

let weapons = document.querySelectorAll(".weapon-choice");
let roundResult = document.querySelector(".round-result");
let remove = document.querySelector("#remove");

// let chosenWeapon = weapons.forEach( weapon => {
//     weapon.addEventListener("click", (e) => {
//         // console.log(e.target)

//         if(e.target.tagName ==="BUTTON" ) {
//             roundResult.innerHTML = `i choose ${e.target.textContent} vs computer choose ${randomName}` ;
//             remove.classList.add("remove1");
//             console.log(`i choose ${e.target.textContent}`)
//         }
//     })
// })

function playerChoose() {
  weapons.forEach((weapon) => {
    weapon.addEventListener("click", (e) => {
      // console.log(e.target)

      // let chosenWeapon = e.target.textContent;
      // console.log(chosenWeapon)
      if (e.target.tagName === "BUTTON") {
        roundResult.innerHTML = `i choose ${e.target.textContent}`;
        remove.classList.add("remove1");
        // console.log(`i choose ${e.target.textContent}`);
      }
    });
  });
}
playerChoose();

function computerPlay() {
  const randomChoice = Math.floor(Math.random() * choices.length); //gets the  0,1,2 -randomly
  const randomName = choices[randomChoice]; // put the random number into an array, giving us random name
  // console.log(randomName);

  weapons.forEach(weapon => {
  weapon.addEventListener("click", () => 
  roundResult.innerHTML += `<br>Vs <br> Computer choose ${randomName}`
  )
  return randomName;
  });

  }

  computerPlay();




//

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock🪨" && computerSelection == "Rock🪨") {
    return "you both choose rock, it's a tie ! try again...";
  }

  if (playerSelection == "Paper📰" && computerSelection == "Paper📰") {
    return "you both choose paper, it's a tie ! try again...";
  }

  if (playerSelection == "Scissors✂️" && computerSelection == "Scissors✂️") {
    return "you both choose scissors, it's a tie ! try again...";
  }

  if (playerSelection == "Rock🪨" && computerSelection == "Paper📰") {
    return "you lose! paper beats rock";
  }

  if (playerSelection == "Paper📰" && computerSelection == "Rock🪨") {
    return "you win! paper beats rock";
  }

  if (playerSelection == "Paper📰" && computerSelection == "Scissors✂️") {
    return "you lose! scissors beats paper";
  }

  if (playerSelection == "Scissors✂️" && computerSelection == "Paper📰")
    return "you win! scissors beats paper";

  if (playerSelection == "Scissors✂️" && computerSelection == "Rock🪨") {
    return "you lose! rock beats scissors";
  }

  if (playerSelection == "Rock🪨" && computerSelection == "Scissors✂️") {
    return "you win! rock beats scissors";
  }
}
playRound();

// let result =(playRound(playerSelection, computerSelection));
// console.log(result);

function game() {
  for (let i = getGameNumber; i < getGameNumber; i++) {
    // let userInput = prompt("what's your choice? rock-paper-scissors");
    // let playerSelection = userInput.toLowerCase();
    // console.log("game", i);
    let playerSelection = playerChoose();
    console.log(playerSelection);

    let computerSelection = computerPlay();
    // console.log(`you picked ${playerSelection}`);

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
