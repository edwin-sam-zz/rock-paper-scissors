// Base
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    if (letter === 's') return 'Scissors';
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win! 🔥`;
    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add('green-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('green-glow');
    }, 700);
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(computer)}${smallCompWord} beats ${convertToWord(user)}${smallUserWord}. You lose! 👎🏾`;
    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add('red-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('red-glow');
    }, 700);
}

function draw(user, computer) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} ties ${convertToWord(computer)}${smallCompWord}. Its a tie!`;
    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('gray-glow');
    }, 700);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
        break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
        break;
        case "ss":
        case "pp":
        case "rr":
            draw(userChoice, computerChoice);
        break;
    } 
};

function main() {
    rock_div.addEventListener('click', () => {
        game("r");
    });

    paper_div.addEventListener('click', () => {
        game("p");
    });

    scissors_div.addEventListener('click', () => {
        game("s");
    });
};

main();