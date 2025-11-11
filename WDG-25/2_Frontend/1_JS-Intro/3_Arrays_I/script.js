/*
# Primitive Datentypen
number
string
BigInt
boolean - true/false
undefined
null
symbol

# Objekte / Reference (Speicheradresse) Datentypen
Object
Array
Function
*/

// * Vergleich von primitiven Werten
let a = 10;
let b = 10;
console.log(a === b); // true → Primitive Werte werden nach ihrem Wert verglichen

// * Vergleich von Objekten (Referenzen)
let obj1 = { value: 10 };
let obj2 = { value: 10 };
console.log(obj1 === obj2); // false → verschiedene Speicheradressen!

// * Beide Variablen zeigen auf dasselbe Objekt
let obj3 = obj1;
console.log(obj1 === obj3); // true → gleiche Speicheradresse

// ###########################################################
// # ARRAYS – Grundlagen
// ###########################################################

const array = ["John", 40, true, function () {}, {}];
console.log(Array.isArray(array)); // * Prüft, ob es sich um ein Array handelt
console.log(array[3]); // * Zugriff auf Element an Index 3 (hier: Funktion)
console.log(array); // * Arrays können gemischte Datentypen enthalten

const names = ["Daria", "Elsa", "Monica", "Jan", "Alissa", "Souher"];
// Index: 0, 1, 2, 3, 4, 5
// console.log(names[2]); // Monica

// ###########################################################
// # ARRAY-METHODEN (Mutating & Non-Mutating)
// ###########################################################

console.log(names);
names.push("Dandy", "Simone");
// * .push() → Fügt neue Elemente am Ende hinzu
console.log(names);

names.pop();
// * .pop() → Entfernt das letzte Element
console.log(names);

console.log(names.length);
// * .length → Gibt Anzahl der Elemente im Array aus

// names.reverse();
// console.log(`After .reverse(): ${names}`);

// ###########################################################
// # .toReversed() (seit ES2023)
// ###########################################################

const newArray = names.toReversed();
// * Erstellt ein neues, umgekehrtes Array
// * Das Original bleibt unverändert!
console.log(names);
console.log(newArray);

// ###########################################################
// # .slice() – Kopieren von Teilbereichen (nicht mutierend)
// ###########################################################

console.log(`Before slice`, names);
const slicedArray = names.slice(1, 4);
// * Nimmt Elemente von Index 1 bis 3 (Endindex ist exklusiv)
console.log(`After slice`, names); // Original bleibt unverändert
console.log(`Sliced array`, slicedArray);

// ###########################################################
// # .splice() – Elemente hinzufügen, löschen oder ersetzen
// ###########################################################

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// * Fügt "Feb" bei Index 1 ein, entfernt nichts (zweiter Parameter = 0)
console.log(months);
// Expected output: ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// * Entfernt 1 Element ab Index 4 und ersetzt es durch "May"
console.log(months);
// Expected output: ["Jan", "Feb", "March", "April", "May"]

// ###########################################################
// # .join() & .split() – Strings ↔ Arrays
// ###########################################################

console.log(names.join());
// * Standardmäßig getrennt durch Kommas

const joinedString = names.join(", ");
console.log(`Names of WDG25: ` + joinedString);

console.log(joinedString.toUpperCase());
// * Strings können direkt weiterverarbeitet werden

const string = "ab-cd-e";
console.log(string.split("-"));
// * .split() trennt einen String in ein Array anhand des Zeichens

const sentence = "Hi, my name is Renke";
const splitString = sentence.split(" ");
console.log(splitString);

splitString.pop(); // * Entfernt letztes Wort
splitString.push("Anna"); // * Fügt neues Wort hinzu
console.log(splitString.join(" "));
// * Fügt Array wieder zu String zusammen

// ###########################################################
// # for-Schleifen – verschiedene Varianten
// ###########################################################

// * Klassische Zählerschleife (Index basiert)
for (let i = 0; i < names.length; i++) {
  const upperCaseName = names[i].toUpperCase();
  console.log(`Name at index No. ${i}: ${upperCaseName}`);
  // # Hier könnte man das Array direkt verändern oder filtern
}

// * for...of → Einfachere Syntax für Werte
for (const studentName of names) {
  console.log(names.indexOf(studentName));
  console.log(studentName.toUpperCase());
  // # Gibt Index und Wert aus, ohne Zählvariable
}

// * for...of mit entries() → Zugriff auf Index UND Wert gleichzeitig
for (const [index, value] of names.entries()) {
  console.log(index, value);
  // * entries() gibt [Index, Wert]-Paare zurück
}
