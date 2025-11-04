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
        console.log(`Something strange happened...`);
        break;
    }
  },
  displayResult: function () {
    console.log(
      `P: ${this.input} / C: ${this.roundMove} => ${this.result} !!!`
    );
  },
};

// check input
!rps.input
  ? console.log(`no input given`)
  : !rps.validArgs.includes(rps.input)
  ? console.log("no valid input")
  : (rps.inputValid = true);

// game schedule
if (rps.inputValid) {
  rps.getRandomMove();
  rps.compareMoves();
  rps.displayResult();
  process.exit(0);
}
