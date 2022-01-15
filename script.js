//Initialize the players score to increment later
let playerScore = 0;
let computerScore = 0;
let draw = 0;

//play the game
game()

//Define the game function
function game() {
    for (let i = 1; i <= 5; i++) {
        //Prompt the user to make a choice, convert the string to lowercase
        const playerSelection = prompt("Make a choice: 'Rock', 'Paper', or 'Scissors'?").toLowerCase();
        //Ask the computer to make a selection using the function computerPlay() defined below
        //Which randomly selectes rock, paper or scissors
        const computerSelection = computerPlay();
    
        //Then play each round using the playRound() function defined below which compares
        //the player's choice and computer's and determine the winner. The winner's score defined above this function gets incremented by 1 till the end of the game
        console.log(playRound(playerSelection, computerSelection))
        
    }

    //Output the final winner of the game after 5 rounds
    if (playerScore > computerScore) {
        console.log(`You won the game! You scored: ${playerScore} out of 5 rounds and computer scored: ${computerScore}, with ${draw} draw(s)`)
    } else if (playerScore < computerScore) {
        console.log(`You lost the game! You scored: ${playerScore} out of 5 rounds and computer scored: ${computerScore}, with ${draw} draw(s)`)
    } else {
        console.log(`It's a draw! Your and the computer scored ${playerScore} apiece, with ${draw} draw(s)`)
    }

}

//define computerPlay()
function computerPlay() {
    const possibleSelections = ['rock', 'paper', 'scissors'];
    const randomSelection = Math.floor(Math.random() * possibleSelections.length);
    return possibleSelections[randomSelection];
}

//define playRound()
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        draw++
        return `This round is a draw! You and computer chose ${playerSelection}`;
    }

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                playerScore++
                return `You won this round! Computer chose ${computerSelection}`;
            } else {
                computerScore++
                return `You lost this round! Computer chose ${computerSelection}`;
            }
        case 'paper':
            if (computerSelection === 'rock') {
                playerScore++
                return `You won this round! Computer chose ${computerSelection}`;
            } else {
                computerScore++
                return `You lost this round! Computer chose ${computerSelection}`;
            }
        case 'scissors':
            if (computerSelection === 'paper') {
                playerScore++
                return `You won this round! Computer chose ${computerSelection}`;
            } else {
                computerScore++
                return `You lost this round! Computer chose ${computerSelection}`;
            }
        default:
            return "Invalid choice: choose one option from 'rock', 'paper', and 'scissors'"
    }
}