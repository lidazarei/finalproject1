// JavaScript code for the Dice Game

let playerScore = 0;
let computerScore = 0;
let rollsLeft = 3;

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateImage(elementId, value) {
    const dieElement = document.getElementById(elementId);
    dieElement.classList.add('dice-roll-animation'); // Add animation class
    setTimeout(() => {
        dieElement.src = `images/dice${value}.png`;
        dieElement.classList.remove('dice-roll-animation'); // Remove animation class after animation completes
    }, 200); // Duration of the animation
}

function calculateScore(die1, die2) {
    if (die1 === 1 || die2 === 1) {
        return 0;
    } else if (die1 === die2) {
        return (die1 + die2) * 2;
    } else {
        return die1 + die2;
    }
}

function rollDice() {
    if (rollsLeft > 0) {
        const playerDie1 = rollDie();
        const playerDie2 = rollDie();
        const computerDie1 = rollDie();
        const computerDie2 = rollDie();

        updateImage('player-die1', playerDie1);
        updateImage('player-die2', playerDie2);
        updateImage('computer-die1', computerDie1);
        updateImage('computer-die2', computerDie2);

        const playerCurrentScore = calculateScore(playerDie1, playerDie2);
        const computerCurrentScore = calculateScore(computerDie1, computerDie2);

        playerScore += playerCurrentScore;
        computerScore += computerCurrentScore;

        document.getElementById('player-roll').textContent = `${playerDie1} + ${playerDie2}`;
        document.getElementById('computer-roll').textContent = `${computerDie1} + ${computerDie2}`;
        document.getElementById('player-score').textContent = playerScore;
        document.getElementById('computer-score').textContent = computerScore;

        rollsLeft--;

        if (rollsLeft === 0) {
            declareWinner();
        }
    }
}

function declareWinner() {
    let winnerMessage = '';

    if (playerScore > computerScore) {
        winnerMessage = 'Player Wins!';
    } else if (computerScore > playerScore) {
        winnerMessage = 'Computer Wins!';
    } else {
        winnerMessage = 'It\'s a Tie!';
    }

    document.getElementById('winner').textContent = winnerMessage;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    rollsLeft = 3;

    document.getElementById('player-die1').src = 'Dice/dice1.png';
    document.getElementById('player-die2').src = 'Dice/dice1.png';
    document.getElementById('computer-die1').src = 'Dice/dice1.png';
    document.getElementById('computer-die2').src = 'Dice/dice1.png';

    document.getElementById('player-roll').textContent = '';
    document.getElementById('computer-roll').textContent = '';
    document.getElementById('player-score').textContent = '0';
    document.getElementById('computer-score').textContent = '0';
    document.getElementById('winner').textContent = '';
}

document.getElementById('roll-dice').addEventListener('click', rollDice);
document.getElementById('reset-game').addEventListener('click', resetGame);
