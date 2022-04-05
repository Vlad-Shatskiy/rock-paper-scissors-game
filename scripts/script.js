moves = ['rock', 'paper', 'scissors']

function computerPlay(){
    computerSelection = moves[Math.floor(Math.random()*moves.length)];
    console.log(computerSelection)
    return computerSelection

}
playerScore = 0;
computerScore = 0;

function gameRound(playerSelector,computerSelection){
      
 if (playerSelector === 'rock' && computerSelection === 'paper') {
     console.log('You Yose! Paper beats Rock');
     computerScore++;
     console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`)
 }
 else if (playerSelector === 'paper' && computerSelection === 'scissors') {
     console.log('You Yose! Scissors beats Paper');
     computerScore ++;
     console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`)
 }
 else if (playerSelector === 'scissors' && computerSelection === 'rock') {
    console.log('You Yose! Rock beats Scissors');
    computerScore ++;
    console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`)
 }
 else if (playerSelector === 'paper' && computerSelection === 'paper') {
    console.log("It's Draw!");
    console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`)
}
else if (playerSelector === 'rock' && computerSelection === 'rock') {
    console.log("It's Draw!");
    console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`)
}
else if (playerSelector === 'scissors' && computerSelection === 'scissors') {
    console.log("It's Draw!");
    console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`)
}
else {
    console.log("You've Won!")
    playerScore ++;
    console.log(`Your score: ${playerScore} Computer's Score: ${computerScore}`)
};
}
function game() {
    for (let i=0; i<5; i++) {
        playerSelector = prompt("Type rock/paper/scissors in this window: ").toLowerCase();  
        gameRound(playerSelector,computerPlay());
    }
}

game();