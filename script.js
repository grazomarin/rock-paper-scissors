const choices = ['rock', 'paper', 'scissors']
const winners = []

function game() {
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice()
    const computerSelection = computerChoice()
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}

function playerChoice() {
    let input = prompt('choose your weapon!', '');
    input = input.toLowerCase();
    let check = validateInput(input);
    if (check === true){
        return input;
    }
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput (choice) {
    return (choices.includes(choice) ? true : false)
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Tie';
    } else if (choiceP === 'rock' && choiceC === 'scissors' ||
    choiceP === 'scissors' && choiceC === 'paper' ||
    choiceP === 'paper' && choiceC === 'rock') {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function logRound (playerChoice, computerChoice, winner, round) {
    console.log('Round', round)
    console.log('Player chose:', playerChoice)
    console.log('Computer chose', computerChoice)
    console.log(winner, "Won the round!")
    console.log('--------------------------------------------');
}

function logWins () {
    let playerWins = winners.filter((item) => item === 'Player').length;
    let computerWins = winners.filter((item) => item === 'Computer').length;
    let ties = winners.filter((item) => item === 'Tie').length;
    console.log('Results: ');
    console.log('Player Wins: ', playerWins);
    console.log('Computer Wins: ', computerWins);
    console.log('Ties: ', ties);
}

game();