// You can work here or download the template
const DOM = {
  score: {
    user: document.getElementById("user-score"),
    cpu: document.getElementById("computer-score"),
  },
  btn: {
    rock: document.getElementById("rock"),
    paper: document.getElementById("paper"),
    scissor: document.getElementById("scissors"),
    play: document.getElementById("play-button"),
  },
  result: document.getElementById("result"),
};

const DATA = {
  choice: {
    user: undefined,
    cpu: undefined,
  },
  points: {
    user: 0,
    cpu: 0,
  },
};

const GAME = {
  runRound: function () {
    let options = ["rock", "paper", "scissor"];
    let ranVal = Math.floor(Math.random() * 3);
    let userMove = DATA.choice.user;
    let cpuMove = options[ranVal];

    switch (true) {
      case cpuMove === userMove:
        this.displayResult(0);
        break;
      case cpuMove === "rock":
        if (userMove === "paper") this.displayResult(1);
        if (userMove === "scissor") this.displayResult(2);
        break;
      case cpuMove === "paper":
        if (userMove === "scissor") this.displayResult(1);
        if (userMove === "rock") this.displayResult(2);
        break;
      case cpuMove === "scissor":
        if (userMove === "rock") this.displayResult(1);
        if (userMove === "paper") this.displayResult(2);
        break;
      default:
        console.log("Oooopps...");
        break;
    }
  },
  confirmSelect: (choice) => {
    Object.keys(DOM.btn)
      .slice(0, 3)
      .forEach((e) => DOM.btn[e].classList.remove("border-black"));
    DATA.choice.user = choice;
    DOM.btn[choice].classList.add("border-black");
  },
  displayResult: (x) => {
    switch (x) {
      case 0:
        DOM.result.textContent = "It's a draw !!!";
        break;
      case 1:
        DOM.result.textContent = "User won !!!";
        DATA.points.user++;
        break;
      case 2:
        DOM.result.textContent = "Computer won !!!";
        DATA.points.cpu++;
        break;
      default:
        DOM.result.textContent = "";
        break;
    }
    DOM.score.user.textContent = DATA.points.user;
    DOM.score.cpu.textContent = DATA.points.cpu;
  },
};

/* EVENTS ============================ */
DOM.btn.rock.addEventListener("click", () => GAME.confirmSelect("rock"));
DOM.btn.paper.addEventListener("click", () => GAME.confirmSelect("paper"));
DOM.btn.scissor.addEventListener("click", () => GAME.confirmSelect("scissor"));
DOM.btn.play.addEventListener("click", () => {
  !DATA.choice.user ? alert("make choice first") : GAME.runRound();
});
