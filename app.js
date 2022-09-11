function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    console.log(random, months[random]);
}

getComputerChoice()