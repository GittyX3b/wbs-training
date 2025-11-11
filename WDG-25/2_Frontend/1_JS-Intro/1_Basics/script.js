console.log("Hallo aus der script.js");

// Manipulation des DOM: Das <h1>-Element bekommt neuen Textinhalt
// document.querySelector("h1").textContent = "Manipuliert mit JavaScript!";

/* Mehrzeiliger Kommentar:
   So schreibt man längere Erklärungen oder Notizen im Code.
*/

// ! VARIABLEN & DATENTYPEN
let result = 20 + 5; // einfache Rechenoperation
console.log(result);
console.log(typeof result); // überprüfe den Datentyp

const constVar = "Ich bin die paradoxe konstante Variable"; // const = unveränderlich
var imOld = "Benutz mich bitte niemals!"; // veraltete Syntax

// # Variablenwerte können neu zugewiesen werden (außer const)
result = "25";
console.log(result);
console.log(typeof result); // Achtung: jetzt ein String!
// JavaScript ist dynamisch typisiert: Der Typ wird erst zur Laufzeit bestimmt.

// ? constVar = "Etwas Neues"; // würde Fehler werfen

// ==========================================
// ! SCHLÜSSELWÖRTER (KEYWORDS)
// ==========================================
//
// Bestimmte Wörter sind in JavaScript reserviert und dürfen nicht als Variablennamen benutzt werden.
// Beispiele:
// - let, const, var       → Variablen-Deklaration
// - if, else, switch      → Kontrollfluss
// - function, return      → Funktionen
// - try, catch            → Fehlerbehandlung
// - for, while, do        → Schleifen
// - break, continue       → Schleifenkontrolle

// ! Konvention Veriablen-Namen: camelCase
let myVariable; // gut
let MyVariable; // nicht empfohlen (PascalCase)
let my_variable; // ebenfalls nicht empfohlen (snake_case)

// # Objekte: Sammlung von Eigenschaften
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
};
console.log("Object: ", person);

// # Arrays: geordnete Liste von Werten (auch gemischt primitive Daten & Objekte)
let fruits2 = ["Banane", "Apfel", "Orange", 25];
console.log(fruits2);

// ! ARITHMETIK
// # Vergleiche zweier Werte liefern ein Boolean-Ergebnis (true/false).
let num = 1;
// num = num + 1;
num++; // Kurzform für num = num + 1
// ++num; // wirkt leicht anders (präfix)
// num--;

console.log(num); // 2

// Beispiel zum Verständnis von ++
/*
let a = 5;
let b = a++; // b = 5, a wird danach 6
console.log("a: ", a);
console.log("b: ", b);
*/

// Kombinierte Zuweisung
num += 7; // dasselbe wie num = num + 7
console.log(num); // 9

// # FUN FACT: Typumwandlung (Type Coercion)
let num2 = 5;
let strNum = "3";

console.log(num2 + strNum); // String-Konkatenation -> "53"
console.log(num2 - strNum); // implizite Umwandlung -> 2
console.log(strNum * num2); // 15
console.log(10 / strNum); // 3.333...

// # LOGISCHE OPERATOREN (Vergleiche)
// Dienen zum Kombinieren mehrerer Bedingungen.

console.log(10 === "10"); // false, da Typ unterschiedlich
// console.log(0 == false); // true (Typumwandlung!)
console.log(0 === false); // false, strenger Vergleich

// Logisches AND (&&) – true, wenn beide true
console.log(10 === "10" && 0 === false); // false
console.log(10 === "10" && 0 === 0); // false
console.log(10 === 10 && 0 === 0); // true

// Logisches OR (||) – true, wenn mindestens eine true
console.log(10 === 10 || 0 === 0); // true
console.log(10 === "10" || 0 === 0); // true
console.log(10 === "10" || 0 === false); // false

// Logisches NOT (!) – kehrt den Boolean-Wert um
console.log(true); // true
console.log(!true); // false

// Typumwandlung zu Boolean (truthy / falsy) - type coercion
console.log(!0); // true – 0 ist "falsy"
console.log(!1); // false
console.log(!-3); // false
console.log(!null); // true
console.log(!undefined); // true

// # CONDITIONALS (Bedingungen)
// Damit kann das Programm auf unterschiedliche Situationen reagieren.
let weatherToday;
let temp = 1;

const imLocal = "I'm a tourist";

if (temp <= 20) {
  // Block-Scope: nur innerhalb dieser Klammern gültig
  const imALocal = "I'm not a tourist";
  weatherToday = "toasty";
  console.log("lokale const: ", imALocal);
  console.log("globale const: ", imLocal);
}

console.log("globale const: ", imLocal);

// # if / else if / else
let weatherToday2;
let temp2 = 2;

if (temp >= 20) {
  weatherToday2 = "toasty";
} else if (temp2 >= 10 && temp2 < 20) {
  weatherToday2 = "is a bit chilly";
} else {
  weatherToday2 = "uncertain";
}

console.log(`The weather today is ${weatherToday2}`); // Template Literal

let isPlayTime = true;

// if (isPlayTime == true) {
if (isPlayTime) {
  console.log("Yay! Zeit zum spielen!");
} else {
  console.log("Oh nein, ich muss arbeiten :(");
}

// # TERNARY OPERATOR (Kurzform von if/else)
isPlayTime
  ? console.log("Yay! Zeit zum spielen!")
  : console.log("Oh nein, ich muss arbeiten :(");

let isLoggedIn = true;
let message = isLoggedIn ? "Willkommen zurueck!" : "Bitte einloggen";
console.log(message);

// # SWITCH-STATEMENT – Alternative zu vielen if/else
const charClass = "sorcerer";

switch (charClass) {
  case "fighter":
    console.log("Ich bin sehr strategisch");
    break;
  case "monk":
    console.log("Ich kaempfe mit meinen Faeusten");
    break;
  case "wizard":
    console.log("Ich bekomme meine Magie aus Buechern");
    break;
  case "sorcerer":
  case "warlock": // mehrere Fälle, gleiche Ausgabe
    console.log("Ich kann maechtige Magie wirken!");
    break;
  default:
    console.log("Ich liebe DnD");
}

// ==============================================================================
// ! FUNKTIONEN – WIEDERVERWENDBARE CODE-BLÖCKE
// ==============================================================================
//
// Funktionen sind zentrale Bausteine in JavaScript.
// Sie kapseln Code, der mehrfach ausgeführt werden kann,
// und machen Programme modular und übersichtlich.

// # 01. Function Declaration: klassische Schreibweise
// Funktionen, die so geschrieben werden, sind „gehoisted“ –
// sie können also bereits aufgerufen werden, bevor sie im Code stehen.
function sayHelloWorld() {
  console.log("Hallo Welt");
}

sayHelloWorld();

// Funktionen können Werte zurückgeben (return)
function writeMessage() {
  console.log("Ich werde innerhalb der Funktion aufgerufen");
  return "Hallo Welt!"; // beendet die Funktion danach sofort
  console.log("Ich bin nach dem return"); // wird nie ausgeführt
}

const myMessage = writeMessage();
console.log(myMessage);

// # 02. Function Expression: Funktion als Variable gespeichert
// Hier wird eine anonyme (oder benannte) Funktion einer Variablen zugewiesen.
const goodByeworld = function () {
  console.log("Auf Wiedersehen, großartige Welt");
};
goodByeworld();

// # 03. Arrow Function: moderne, kompakte Schreibweise
// Kürzere, modernere Schreibweise für Funktionen.
// Sehr beliebt für kompakte Funktionen und Callback-Strukturen.
// Pfeilfunktionen übernehmen das `this` ihres umgebenden Scopes („lexical `this“`).
const sudeMakeMeaSandwich = () => {
  console.log("Hier ist dein Sandwich!");
};
sudeMakeMeaSandwich();

// # Parameter und Rückgabewerte
// Parameter = Platzhalter in der Funktionsdefinition
// Arguments = übergebene Werte beim Aufruf
const squareNum = (num) => num * num; // einzeilige Arrow Function
const squaredNum = squareNum(8);
console.log(squaredNum);

// Beispiel für NaN („Not a Number“), wenn kein numerischer Wert übergeben wird:
// const squaredNum = squareNum("eight"); → NaN

// # Mehrere Parameter
const multiply = (numA, numB) => {
  return numA * numB;
};
const multNum = multiply(5, 6);
console.log(multNum); // 30

// ! LOOPS – Code wiederholt ausführen
// Schleifen dienen dazu, Code mehrfach auszuführen,
// solange eine bestimmte Bedingung erfüllt ist.

// # ---- For Loop ----
// Wird verwendet, wenn du weißt, wie oft sie laufen soll.

// Struktur einer for-Schleife (Demo-Syntax):
/* for (initialization; condition; increment / decrement) {
  // Code, der wiederholt ausgeführt wird
} */

// Zähl-Schleife: läuft 5-mal (0–4)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Break & Continue
for (let i = 0; i < 10; i++) {
  if (i == 2) continue; // überspringt den Rest des Durchlaufs
  if (i == 5) break; // beendet die Schleife komplett
  console.log(i);
}

// # ---- While Loop ----
// Wird ausgeführt, solange die Bedingung `true` ist
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// # ---- Do-While Loop ----
// Führt den Code mindestens einmal aus, prüft danach die Bedingung
i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// # ---- for...of Loop ----
// Dient zum Iterieren über „iterable objects“ (z. B. Arrays, Strings, Sets, Maps)

let fruits = ["Banana", "Apple", "Orange"];
console.log(fruits);

// Klassisch mit Index (über Index)
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Moderner mit for...of – direkter Zugriff auf Werte
for (const fruit of fruits) {
  console.log(fruit);
}

// Beispiel mit String
const myString = "hello";
for (const char of myString) {
  console.log(char);
}
