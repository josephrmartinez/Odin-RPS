// GAME

let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerChoice = "";

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerChoice) {
    if (playerSelection == computerChoice) {
        return "Game is a tie!";
    } else if (playerSelection == "rock" && computerChoice == "paper") {
        computerScore += 1;
        updateScore();
        return "Paper beats rock. Computer wins!";
    } else if (playerSelection == "rock" && computerChoice == "scissors") {
        playerScore += 1;
        updateScore();
        return "Rock beats scissors. You win!";
    } else if (playerSelection == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        updateScore();
        return "Scissors beats paper. Computer wins!";
    } else if (playerSelection == "paper" && computerChoice == "rock") {
        playerScore += 1;
        updateScore();
        return "Paper beats rock. You win!";
    } else if (playerSelection == "scissors" && computerChoice == "paper") {
        playerScore += 1;
        updateScore();
        return "Scissors beats rock. You win!";
    } else if (playerSelection == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        updateScore();
        return "Rock beats scissors. Computer wins!";
    } 
}

function updateScore() {
    compScore.textContent = computerScore;
    playScore.textContent = playerScore;
}

// function game(){
//     // for (let i = 0; i < 5; i++){
//     //     playRound()
//     //     console.log("Player score: " + playerScore)
//     //     console.log("Computer score: " + computerScore)
//     // }
//     if (playerScore == computerScore) {
//         console.log("It is a tie! Play again!")
//     } else if (playerScore > computerScore) {
//         console.log("You win!");
//     } else {
//         console.log("Computer wins!")
//     }
//     playerScore = 0;
//     computerScore = 0;
// }

// UI

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const gameText = document.getElementById('gameText');
const compScore = document.getElementById('compScore');
const playScore = document.getElementById('playScore');


rockButton.addEventListener('click', () => handleClick('rock'))
paperButton.addEventListener('click', () => handleClick('paper'))
scissorsButton.addEventListener('click', () => handleClick('scissors'))

function handleClick(playerSelection) {
    let computerChoice = getComputerChoice()
    setTimeout(() => {
        gameText.textContent = `You selected ${playerSelection}`
    }, 200);
    setTimeout(() => {
        gameText.textContent = `The computer selected ${computerChoice}`
    }, 1200);
    setTimeout(() => {
        gameText.textContent = playRound(playerSelection, computerChoice)
    }, 2200);
    setTimeout(() => {
        if (computerScore === 5) {
            gameText.textContent = "Game over! Computer wins!";
        } else if (playerScore === 5) {
            gameText.textContent = "Game over! You win!";
        } else {
            gameText.textContent = "Select rock, paper, or scissors:"
        };
    }, 3200);
    
}

// TODO:
// prompt with playagain; restart game