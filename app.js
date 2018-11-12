let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function getComputerChoices() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

setTimeout(function () {

}, 1000)

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = convertToWord(user) + smallUserWord + " beats " + convertToWord(comp) + smallCompWord + ". You Win!"
    var element = document.getElementById(user);
    element.classList.add("green-glow");
    setTimeout(() => element.classList.remove("green-glow"), 300)
}



function lose(user, comp) {
    computerScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = convertToWord(user) + smallUserWord + " loses to " + convertToWord(comp) + smallCompWord + ". You Lost..."

    var element = document.getElementById(user);
    element.classList.add("red-glow");
    setTimeout(() => element.classList.remove("red-glow"), 300)
}

function draw(user, comp) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = convertToWord(user) + smallUserWord + " equals " + convertToWord(comp) + smallCompWord + ". It's a draw."

    var element = document.getElementById(user);
    element.classList.add("gray-glow");
    setTimeout(() => element.classList.remove("gray-glow"), 300)
}

function game(userChoice) {
    const computerChoice = getComputerChoices();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"))
    paper_div.addEventListener('click', () => game("p"))
    scissors_div.addEventListener('click', () => game("s"))
}

main();