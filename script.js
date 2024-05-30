let userScore = 0;
let compSCore = 0;

let choices = document.querySelectorAll(".choice");
let winner = document.querySelector(".winner")
let playerScore = document.querySelector(".player-score")
let computerScore = document.querySelector(".computer-score")
let player = document.querySelector(".player")
let computer =document.querySelector(".computer")

const getComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    winner.innerHTML = "Game was draw!";
    winner.style.background = "#7D29EA";
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        playerScore.innerHTML = userScore;
        winner.innerHTML = "You Win!";
        winner.style.background = "green";
    }
    else {
        compSCore++;
        computerScore.innerHTML = compSCore;
        winner.innerHTML = "You Lose!";
        winner.style.background = "red";
    }
}

const plyaGame = (userChoice) => {
    const compChoice = getComChoice();
    computer.src = `assets/${compChoice}.png`;
    
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
         userWin = compChoice === "paper" ? false : true;  
        }
        else if (userChoice=== "paper") {
            userWin= compChoice === "scissors"? false : true;  
        }
         else{
            userWin = compChoice === "rock" ? false : true;  
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        plyaGame(userChoice);
    player.src = `assets/${userChoice}.png`;
    });
});
