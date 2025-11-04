/* TASK: create a simple encryption programm using caesars cipher and node in terminal */
/* =================================================================================== */
/* author: Nagel, Dandy - date: 11/2025 ---------------------------------------------- */

/*

CAESAR CIPHER RULES:
- each letter of a text has to be replaced by the letter that is positioned X steps behind the original letter
- X marks the shift number 
- if the shift number points to a letter behind Z counting continues flawlessly at A

REQUIREMENTS:
[x] program should take phrase and shift number as inputs from process.argv
[x] program should encrypt the phrase by shifting each letter among the english alphabet
[x] Case insensitive
[x] a negative shift number means shifts to the left
[x] a positive shift number means shifts to the right
[ ] Output the encrypted phrase to the console

FUNCTION CALL: node caesar-cipher.js ["some text to encrypt"] [shiftNumber]

*/

// START <===============================================================================

// program data
const cc = {
  input: process.argv[2],
  shiftNum: Number(process.argv[3]),
  inputValid: false,
  result: [],
  data: {
    alphabet: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    processedString: [],
  },
  separateWordsOfInput: function () {
    cc.data.processedString = cc.input.split(" ");
  },
  encryptWords: function () {
    cc.data.processedString.forEach((word) => {
      let isUpperCase = cc.data.alphabet.includes(word[0]) ? false : true;

      let encryptedWord = word.split("").map((letter, i) => {
        let positionNow = cc.data.alphabet.indexOf(letter.toLowerCase());
        let positionNew = positionNow + cc.shiftNum;
        // shifting right
        while (positionNew > 25) positionNew -= 26;
        // shifting left
        while (positionNew < 0) positionNew += 26;

        // shift letters
        return i === 0 && isUpperCase
          ? cc.data.alphabet[positionNew].toUpperCase()
          : cc.data.alphabet[positionNew];
      });

      cc.result.push(encryptedWord.join(""));
    });
    delete cc.data.processedString;
  },
  displayResult: function () {
    console.log(" ");
    console.log("=== CAESARS CIPHER ENCRYPTION =========== ");
    console.log(cc.input);
    console.log(`-> ${cc.result.join(" ")}`);
  },
};

// check input
!cc.input
  ? console.log("input phrase is missng")
  : !cc.shiftNum
  ? console.log("shift number is missing")
  : (cc.inputValid = true);

// program schedule
if (cc.inputValid) {
  cc.separateWordsOfInput();
  cc.encryptWords();
  cc.displayResult();
  process.exit(0);
}
