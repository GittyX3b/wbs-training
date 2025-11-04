/* TASK: create a simple encryption programm using caesars cipher and node in terminal */
/* =================================================================================== */
/* author: Nagel, Dandy - date: 11/2025 ---------------------------------------------- */

/*

CAESAR CIPHER RULES:
- each letter of a text has to be replaced by the letter that is positioned X steps behind the original letter
- X marks the shift number 
- if the shift number points to a letter behind Z counting continues flawlessly at A

REQUIREMENTS:
[ ] program should take phrase and shift number as inputs from process.argv
[ ] program should encrypt the phrase by shifting each letter among the english alphabet
[ ] Case insensitive
[ ] a negative shift number means shifts to the left
[ ] a positive shift number means shifts to the right
[ ] Output the encrypted phrase to the console

*/
