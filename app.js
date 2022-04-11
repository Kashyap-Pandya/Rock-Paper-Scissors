// it selects the random string 

let choices = ['rock', 'paper' , 'scissors']

function computerPlay() {
    const randomChoice = Math.floor((Math.random() * choices.length));
    const randomName = choices[randomChoice];
    console.log(randomName);
}

computerPlay();


// 

function playRound(playerSelection, computerSelection) {
   if("rock" > "paper") {
       console.log("rock beats paper");
   }

   else if ("paper" < "scissors") {
        console.log("scissors beats paper");
   }

 else if ("rock" > "scissors") {
       console.log("rock beats scissors")
   }


}

playRound();

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection , computerSelection));