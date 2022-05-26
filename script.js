//let computer choose a random number of an array which has one of 3 choices
//player choice depends on the button pressed 
//log the winner into a seperate div
choices = ['rock', 'paper', 'scissors'];
winners = [];

let playerSelection;
let computerSelection = computerChoice();
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const cscore = document.querySelector('.cscore')
const pscore = document.querySelector('.pscore')

pscore.textContent = `Player: 0`
cscore.textContent = `Opponent: 0`
result.textContent = 'Lets begin!'

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        playerSelection = btn.className;
        computerSelection = computerChoice();
        playRound(playerSelection, computerSelection);
        game();
    });
});

function game() {
    let i = winners.length;
    if (i == 5) {
        if (playerScore > computerScore) {
            result.textContent = `Game over! You won!`;
            winners = [];
            playerScore = 0;
            computerScore = 0;
        } else if (playerScore === computerScore) {
            result.textContent = `Game over! Somehow it's a tie.`;
            winners = [];
            playerScore = 0;
            computerScore = 0;
        } else {
            result.textContent = `Game over! You lost...`;
            winners = [];
            playerScore = 0;
            computerScore = 0;
        }
    }
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
    
}

function playRound(P, C) {
    if (P == 'rock' && C == 'scissors' ||
        P == 'scissors' && C == 'paper' ||
        P == 'paper' && C == 'rock') {
        result.textContent = `You won! Opponent chose ${C}.`;
        winners.push('P');
        playerScore += 1;
        pscore.textContent = `Player: ${playerScore}`;
        cscore.textContent = `Opponent: ${computerScore}`;

        return;
    } else if (P == C) {
        result.textContent = `Tie. Opponent chose ${C}.`;
        winners.push('N');
        pscore.textContent = `Player: ${playerScore}`;
        cscore.textContent = `Opponent: ${computerScore}`;

        return;
    } else {
        result.textContent = `You lost! Opponent chose ${C}.`;
        winners.push('C');
        computerScore += 1;
        pscore.textContent = `Player: ${playerScore}`;
        cscore.textContent = `Opponent: ${computerScore}`;

        return;
    }
}



