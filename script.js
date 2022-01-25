//Initialize the players score to increment later
let playerScore = 0;
let computerScore = 0;
let draw = 0;

const buttons = document.querySelectorAll('button');
const container =document.querySelector('#container')
const alertUser = document.querySelector('#alert');
const playScore = document.querySelector('#player-score');
const compScore = document.querySelector('#computer-score');
const draws = document.querySelector('#draws');
const finalResult = document.querySelector('#final-result')
const reload = document.querySelector('.reload')

buttons.forEach((button) => button.addEventListener('click', playRound));
reload.addEventListener('click', () => window.location.reload())

//define computerPlay()
function computerPlay() {
    const possibleSelections = ['rock', 'paper', 'scissors'];
    const randomSelection = Math.floor(Math.random() * possibleSelections.length);
    return possibleSelections[randomSelection];
}

function determineRoundWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        draw++;
        alertUser.textContent = `This round is a draw! You and computer chose ${playerSelection}`;
        return;
    }

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                playerScore++;
                alertUser.textContent = `You won this round! Computer chose ${computerSelection}`
                return;
            } else {
                computerScore++
                alertUser.textContent = `You lost this round! Computer chose ${computerSelection}`; 
                return;
            }
        case 'paper':
            if (computerSelection === 'rock') {
                playerScore++
                alertUser.textContent = `You won this round! Computer chose ${computerSelection}`
                return;
            } else {
                computerScore++
                alertUser.textContent = `You lost this round! Computer chose ${computerSelection}`; 
                return;
            }
        case 'scissors':
            if (computerSelection === 'paper') {
                playerScore++
                alertUser.textContent = `You won this round! Computer chose ${computerSelection}`
                return;
            } else {
                computerScore++
                alertUser.textContent = `You lost this round! Computer chose ${computerSelection}`; 
                return;
            }
    }
}

function determineGameWinner() {
    if (playerScore === 5 ) {
        buttons.forEach((button) => button.removeEventListener('click', playRound));
        finalResult.textContent = "Yay! You were first to 5. You won!";
        reload.classList.toggle('reload');
    } else if (computerScore === 5) {
        buttons.forEach((button) => button.removeEventListener('click', playRound));
        finalResult.textContent = "Uh o! You lost. Computer beat you to 5!";
        reload.classList.toggle('reload');
    }
}

//define playRound()
function playRound() {
    const playerSelection = this.id;
    const computerSelection = computerPlay();

    determineRoundWinner(playerSelection, computerSelection);

    playScore.textContent = playerScore;
    compScore.textContent = computerScore;
    draws.textContent = draw 
    
    determineGameWinner()
}