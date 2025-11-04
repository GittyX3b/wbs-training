/* TASK: create a simple rock-paper-scissor game using node in terminal */
/* ==================================================================== */
/* author: Nagel, Dandy - date: 11/2025 ------------------------------- */

/* 

ROCK-PAPER_SCISSOR-RULES:
- rock beats scissor (blunts them)
- scissor beats paper (cuts it)
- paper beats rock (covers it)

REQUIREMENTS:
[x] program should take the players move as input from process.argv
[x] program should randomly generate a move for the computer
[x] Determine the result based on the rules of Rock Paper Scissors
[x] Output the result (win, lose, or draw) to the console

*/

// START <================================================================

// game data
const rps = {
  input: process.argv[2],
  inputValid: false,
  validArgs: [`rock`, `paper`, `scissor`],
  roundMove: undefined,
  result: undefined,
  finalOutput: undefined,
  log: (message) => console.log(message),
  getRandomMove: function () {
    this.roundMove = this.validArgs[Math.floor(Math.random() * 3)];
  },
  compareMoves: function () {
    switch (true) {
      case this.roundMove === this.input:
        this.result = "DRAW";
        break;

      case this.roundMove === "rock":
        if (this.input === "scissor") this.result = "CPU won";
        if (this.input === "paper") this.result = "PLAYER won";
        break;

      case this.roundMove === "paper":
        if (this.input === "rock") this.result = "CPU won";
        if (this.input === "scissor") this.result = "PLAYER won";
        break;

      case this.roundMove === "scissor":
        if (this.input === "paper") this.result = "CPU won";
        if (this.input === "rock") this.result = "PLAYER won";
        break;

      default:
        rps.log(`Something strange happened...`);
        break;
    }
  },
  displayResult: function () {
    this.finalOutput = `P: ${this.input} / C: ${this.roundMove} => ${this.result} !!!`;
    this.log(this.finalOutput);
  },
};

// check input
!rps.input
  ? rps.log(`no input given`)
  : !rps.validArgs.some((valStr) => valStr === rps.input)
  ? rps.log("no valid input")
  : (rps.inputValid = true);

// game schedule
if (rps.inputValid) {
  rps.getRandomMove();
  rps.compareMoves();
  rps.displayResult();
}
