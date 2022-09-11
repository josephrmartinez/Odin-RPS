function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function getPlayerChoice() {
    let playerSelection = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        return playerSelection;
    } else {
        playerSelection = ""
        alert("Please enter only rock, paper, or scissors.")
        getPlayerChoice()
    }
}




let playerScore = 0;
let computerScore = 0;

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    if (playerChoice == computerChoice) {
        console.log("Game is a tie!");
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        console.log("Paper beats rock. Computer wins!");
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerScore += 1;
        console.log("Rock beats scissors. You win!");
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        console.log("Scissors beats paper. Computer wins!");
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        playerScore += 1;
        console.log("Paper beats rock. You win!");
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerScore += 1;
        console.log("Scissors beats rock. You win!");
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        console.log("Rock beats scissors. Computer wins!");
    }
}


function game(){
    for (let i = 0; i < 5; i++){
        playRound()
        console.log("Player score: " + playerScore)
        console.log("Computer score: " + computerScore)
    }
    if (playerScore == computerScore) {
        console.log("It is a tie! Play again!")
    } else if (playerScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("Computer wins!")
    }
    playerScore = 0;
    computerScore = 0;
}

game()
