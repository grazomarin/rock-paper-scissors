function computerWeapon() {
    let weaponDecision = Math.floor(Math.random() * 10)
    if (weaponDecision <= 9, weaponDecision > 6) {
        return 'rock';
    } else if (weaponDecision <= 6, weaponDecision > 3) {
        return 'scissors';
    } else if (weaponDecision <= 3 , weaponDecision >= 0) {
        return 'paper';
    }
}
let computerDecision = computerWeapon()
let playerScore = 0;
let computerScore = 0;
let playerWeapon = prompt('choose your weapon!', '');
let playerDecision = playerWeapon.toLocaleLowerCase();

function playRound(playerDecision, computerDecision, playerScore, computerScore) {
    if (computerDecision === 'rock' && playerDecision === 'rock') {
        playerScore += 1;
        computerScore += 1;
        return `no winner both of you chose ${playerDecision}`;
    } else if (computerDecision === 'scissors' && playerDecision === 'scissors') {
        playerScore += 1;
        computerScore += 1;
        return `no winner both of you chose ${playerDecision}`;
    } else if (computerDecision === 'paper' && playerDecision === 'paper') {
        playerScore += 1;
        computerScore += 1;
        return `no winner both of you chose ${playerDecision}`;
    } else if (computerDecision === 'rock' && playerDecision === 'paper') {
        playerScore += 1;
        return `player won, ${playerDecision} beats ${computerDecision}`;
    } else if (computerDecision === 'rock' && playerDecision === 'scissors') {
        computerScore += 1;
        return `computer won, ${computerDecision} beats ${playerDecision}`;
    } else if (computerDecision === 'scissors' && playerDecision === 'rock') {
        playerScore += 1;
        return `player won, ${playerDecision} beats ${computerDecision}`;
    } else if (computerDecision === 'scissors' && playerDecision === 'paper') {
        computerScore += 1;
        return `computer won, ${computerDecision} beats ${playerDecision}`;
    } else if (computerDecision === 'paper' && playerDecision === 'scissors') {
        playerScore += 1;
        return `player won, ${playerDecision} beats ${computerDecision}`;
    } else if (computerDecision === 'paper' && playerDecision === 'rock') {
        computerScore += 1;
        return `computer won, ${computerDecision} beats ${playerDecision}`;
    } 
}

function game(playerScore, computerScore, computerDecision, playerDecision) {
    for (let i = 0; i < 5; i++) {
        if (playerScore > computerScore){
            console.log('You won!');
        } else if (playerScore < computerScore) {
            console.log('You lost!');
        } else {
            console.log('It\'s a tie');
        }
        if (i < 5) {
            computerDecision;
            playerDecision;
            playRound(playerDecision, computerDecision, playerScore, computerScore);
        } else {
        return 'gameover';
        }
    }
}
console.log (playerDecision)
console.log (computerDecision)
console.log (playRound(playerDecision, computerDecision))
console.log (game(playerScore, computerScore, playerWeapon, playerDecision))