

const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");


let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
    });
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return 'You won...! ' + playerSelection + ' beats ' + computerSelection;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose... " + computerSelection + ' beats ' + playerSelection;
    }
}

const winSound = new Audio('./you-win.wav'); 
const loseSound = new Audio('./you-lose.wav'); 


function showFullScreenMessage(message) {
    fullScreenMsg.textContent = message;
    fullScreenMsg.classList.remove("hidden");

    
    if (message === "YOU WIN") {
        winSound.play();
    } else if (message === "YOU LOSE") {
        loseSound.play();
    }

    setTimeout(() => {
        fullScreenMsg.classList.add("hidden");
    }, 1500);
}
