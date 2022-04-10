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
    
}