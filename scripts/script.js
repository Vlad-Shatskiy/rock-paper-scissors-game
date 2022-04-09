moves = ['rock', 'paper', 'scissors']
playerScore = 0;
computerScore = 0;
playerSelector = "";
function computerPlay(){
    computerSelection = moves[Math.floor(Math.random()*moves.length)];
    console.log(computerSelection)
    return computerSelection

};


    const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=>{
        button.addEventListener('click', ()=> {
            playerSelector = button.id;
            computerPlay();
            if (playerSelector === computerSelection) {
                whoWon.textContent ="It's Draw!";
                results.appendChild(yourScore);
                results.appendChild(whoWon);
                results.appendChild(compScore);
                yourPick.textContent = `Your choice is ${playerSelector}`
compPick.textContent = `Computer choice is ${computerPlay()}`
choice.appendChild(yourPick);
choice.appendChild(compPick);
            }
            else if (playerSelector === 'rock' && computerSelection === 'paper') {
     
                computerScore++;
                yourScore.textContent = `Your score is ${playerScore}`
                results.appendChild(yourScore);
                whoWon.textContent ='You Lose! Paper beats Rock';
                results.appendChild(whoWon);
                compScore.textContent = `Computer score is ${computerScore}`
                results.appendChild(compScore);
                
                yourPick.textContent = `Your choice is ${playerSelector}`
compPick.textContent = `Computer choice is ${computerPlay()}`
choice.appendChild(yourPick);
choice.appendChild(compPick);
            }
            else if (playerSelector === 'paper' && computerSelection === 'scissors'){
                
                computerScore ++;
                yourScore.textContent = `Your score is ${playerScore}`
                results.appendChild(yourScore);
                whoWon.textContent ='You Lose! Scissors beats Paper';
                results.appendChild(whoWon);
                compScore.textContent = `Computer score is ${computerScore}`
                results.appendChild(compScore);
                
                yourPick.textContent = `Your choice is ${playerSelector}`
compPick.textContent = `Computer choice is ${computerPlay()}`
choice.appendChild(yourPick);
choice.appendChild(compPick); 
            }
            else if (playerSelector === 'scissors' && computerSelection === 'rock') {
                
                computerScore ++;
                yourScore.textContent = `Your score is ${playerScore}`
                 results.appendChild(yourScore);
                 whoWon.textContent ='You Lose! Rock beats Scissors';
                 results.appendChild(whoWon);
                 compScore.textContent = `Computer score is ${computerScore}`
                 results.appendChild(compScore);
                
                yourPick.textContent = `Your choice is ${playerSelector}`
compPick.textContent = `Computer choice is ${computerPlay()}`
choice.appendChild(yourPick);
choice.appendChild(compPick);
             }
             else {
                
                playerScore ++;
                yourScore.textContent = `Your score is ${playerScore}`
                 results.appendChild(yourScore);
                 whoWon.textContent ="You've Won!";
                 results.appendChild(whoWon);
                 compScore.textContent = `Computer score is ${computerScore}`
                 results.appendChild(compScore);
                
                yourPick.textContent = `Your choice is ${playerSelector}`
compPick.textContent = `Computer choice is ${computerPlay()}`
choice.appendChild(yourPick);
choice.appendChild(compPick);
            };

            
        });
        
    });



const results = document.querySelector('.results');
const yourScore = document.createElement('h3');
const whoWon = document.createElement('h3');
const compScore = document.createElement('h3');
yourScore.textContent = `Your score is ${playerScore}`
results.appendChild(yourScore);
results.appendChild(whoWon);
compScore.textContent = `Your score is ${computerScore}`
results.appendChild(compScore);
const choice = document.querySelector('.choice');
const yourPick = document.createElement('h4');

const compPick = document.createElement('h4');
