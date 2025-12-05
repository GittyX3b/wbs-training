// Select elements from DOM
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
const resultElement = document.getElementById("result");
const playButton = document.getElementById("play-button");
const selectionButtons = document.querySelectorAll("#selection button");

let userScore = 0;
let computerScore = 0;
let userChoice = "";
const choices = ["rock", "paper", "scissors"];

selectionButtons.forEach((el) =>
  el.addEventListener("click", () => selectChoice(el.id))
);

playButton!.addEventListener("click", playRound);

function selectChoice(choice: string) {
  userChoice = choice;
  selectionButtons.forEach((el) => {
    if (el.id === choice) {
      el.classList.add("line-through");
    } else {
      el.classList.remove("line-through");
    }
  });
}

function playRound() {
  if (!userChoice) {
    alert("Please select Rock, Paper, or Scissors!");
    return;
  }

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = determineWinner(userChoice, computerChoice);

  resultElement!.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result.message}`;

  if (result.winner === "user") {
    userScore++;
    userScoreElement!.textContent = userScore.toString();
  } else if (result.winner === "computer") {
    computerScore++;
    computerScoreElement!.textContent = computerScore.toString();
  }

  userChoice = "";
  selectionButtons.forEach((el) => el.classList.remove("line-through"));
}

function determineWinner(user: string, computer: string) {
  if (user === computer) {
    return { winner: "none", message: "It's a tie!" };
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return { winner: "user", message: "You win!" };
  } else {
    return { winner: "computer", message: "Computer wins!" };
  }
}
