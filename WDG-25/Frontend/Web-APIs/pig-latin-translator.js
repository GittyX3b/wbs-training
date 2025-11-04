/* TASK: create a pig-latin-translator game using node in terminal */
/* =============================================================== */
/* author: Nagel, Dandy - date: 11/2025 -------------------------- */

/* 

PIG LATIN RULES:
 > if a word starts with...
   - consonant + vowel -> first letter becomes last + "ay" is postfixed
   - two consonants -> first two letters become last in same order + "ay" is postfixed
   - a vowel -> "way" is postfixed
   
REQUIREMENTS:
[x] program should translate englisch text to pig latin
[x] program should get the english text as input from process.argv
[x] Output the translation to the console

FUNCTION CALL: node pig-latin-translator.js ["some text to translate"]
  
*/

// START <===========================================================

// program data
const plt = {
  input: process.argv[2],
  inputValid: false,
  result: [],
  data: {
    consonants: [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "y",
      "z",
      "ß",
    ],
    vowels: ["a", "e", "i", "o", "u"],
    processedString: undefined,
  },
  separateWordsOfInput: function () {
    this.data.processedString = this.input.split(" ");
  },
  convertWords: function () {
    this.data.processedString.forEach((word) => {
      // temporary characteristics cache
      let temp = {
        firstIsVowel: null,
        secondIsVowel: null,
        convertedWord: [],
        convertedString: [],
      };
      // investigate starting letters
      this.data.consonants.includes(word[0].toLowerCase())
        ? (temp.firstIsVowel = false)
        : (temp.firstIsVowel = true);
      word[1] && this.data.consonants.includes(word[1].toLowerCase())
        ? (temp.secondIsVowel = false)
        : (temp.secondIsVowel = true);
      // do conversion
      switch (true) {
        case !temp.firstIsVowel && temp.secondIsVowel:
          temp.convertedWord = word.slice(1) + word[0].toLowerCase() + "ay";
          this.result.push(temp.convertedWord);
          break;
        case !temp.firstIsVowel && !temp.secondIsVowel:
          temp.convertedWord =
            word.slice(2) + word.slice(0, 2).toLowerCase() + "ay";
          this.result.push(temp.convertedWord);
          break;
        case temp.firstIsVowel:
          temp.convertedWord = word.toLowerCase() + "way";
          this.result.push(temp.convertedWord);
          break;
        default:
          console.log("This might be bad...");
          break;
      }
    });
  },
  displayResult: function () {
    console.log(``);
    console.log(`=== PIG-LATIN-TRANSLATOR ====`);
    console.log(`${plt.input}`);
    console.log(`=> ${plt.result.join(" ")}`);
  },
};

// check input
plt.input ? (plt.inputValid = true) : console.log("input is missing");

// program schedule
if (plt.inputValid) {
  plt.separateWordsOfInput();
  plt.convertWords();
  plt.displayResult();
  process.exit(0);
}
