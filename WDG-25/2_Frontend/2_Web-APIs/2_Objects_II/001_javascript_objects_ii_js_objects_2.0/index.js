console.info("Function constructors");
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.describe = function () {
    return `${this.name} is ${this.age} years old.`;
  };
}

let alice = new Person("Alice", 25);
let sarah = new Person("Sarah", 30);
console.log(alice.describe()); // Outputs: "Alice is 25 years old."
console.log(sarah.describe()); // Outputs: "Sarah is 30 years old."

console.info("Classes");
class Human {
  // Sorry, couldn't reuse Person :D
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}

let bob = new Human("Bob", 30);
console.log(bob.describe()); // Outputs: "Bob is 30 years old."

/* 
Both a class and a function constructor, are internally functions
Classes are just syntax sugar and brought JS closes to the way objects work in 
other languages
*/
console.info("Syntax sugar");
console.log(typeof Person);
console.log(typeof Human);

/* MENTOR CODE  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// ===== TEIL 1: Objekt-Literal =====
// Einfachste Form: Objekt direkt erstellen
// const marbleTrack = {
//   name: 'Marble Track',
//   price: 62.23,
//   url: 'marb.le',
// };

// Eigenschaften können nachträglich hinzugefügt oder verändert werden
// marbleTrack.note = 'schon lange gewünscht';
// marbleTrack.price = '123';

// console.log(marbleTrack);

// Methode (Funktion in einem Objekt) hinzufügen
// marbleTrack.prepare = function () {
//   console.log('Preparing a ' + this.name); // 'this' verweist auf das Objekt selbst
// };

// marbleTrack.prepare();

// ===== TEIL 2: Constructor Function =====
// Ältere Methode, um viele ähnliche Objekte zu erstellen
// function Blablbal(name, price, url) {
//   this.name = name;
//   this.price = price;
//   this.url = url;
// }

// 'new' erstellt ein neues Objekt basierend auf der Constructor Function
// const marbleTrack = new Blablbal('Marble Track', 67.12, 'marb.le');

// console.log(marbleTrack);

// ===== TEIL 3: ES6 Class (moderne Syntax) =====
class Gift {
  // Public Property: von überall zugänglich
  description = "Ein tolles Geschenk";

  // Private Property: nur innerhalb der Klasse zugänglich (# macht es privat)
  #price;

  // Constructor: wird beim Erstellen eines neuen Objekts aufgerufen
  constructor(name, price, url = "example.com") {
    // url hat Standardwert
    this.name = name;
    this.#price = price ?? 20; // ?? = Nullish Coalescing: wenn price null/undefined, nimm 20
    this.url = url;
  }

  // Getter: ermöglicht Zugriff auf (private) Property
  get price() {
    // Formatiert Preis als deutschen Euro-Betrag
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(this.#price); // mit zusätzlicher Formatierung
  }

  // Setter: ermöglicht kontrolliertes Setzen der (private) Property
  set price(val) {
    const parsedVal = Number.parseFloat(val); // String in Zahl umwandeln
    if (Number.isNaN(parsedVal)) throw new TypeError("Price must be a number"); // Validierung

    this.#price = parsedVal;
  }

  // Alternative zu Getter/Setter: explizite Methoden
  // getPrice() {
  //   return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.#price)
  // }

  // Methode: Funktion innerhalb der Klasse
  prepare() {
    console.log(`Preparing this ${this.name}`);
  }

  wrap() {
    // Berechnung basierend auf Objekt-Eigenschaften
    const paperAmount = (this.url.length * this.name.length) / this.#price;
    console.log(`Wrapping this ${this.name} in ${paperAmount}m² of paper`);
  }
}

// Objekte (Instanzen) der Klasse erstellen
const aGift = new Gift("Marble Track", 10, "marb.le");
const anotherGift = new Gift(); // Nutzt Standardwerte aus Constructor

console.log(aGift);
console.log(anotherGift);

// Methoden aufrufen
aGift.prepare();
aGift.wrap();

aGift.url = "example.com"; // Public Property kann direkt geändert werden

// aGift.#price = false; // Ergibt Error - Private Property ist von außen nicht zugänglich
console.log(aGift.price); // Getter wird aufgerufen, gibt formatierten String zurück

aGift.price = "42"; // Setter wird aufgerufen, validiert und speichert Wert
console.log(aGift);

// ===== TEIL 4: Vererbung (Inheritance) =====
// ChristmasPresent erbt alle Properties und Methoden von Gift
class ChristmasPresent extends Gift {
  constructor(name, price, url, rememberDate) {
    super(name, price, url); // Ruft Constructor der Elternklasse (Gift) auf
    this.rememberDate = new Date(rememberDate); // Zusätzliche Property
  }

  // Neue Methode, die nur ChristmasPresent hat
  give() {
    console.log("Giving this " + this.name);
  }

  // Überschreibt (overrides) die prepare()-Methode von Gift
  prepare() {
    console.log(` 🎄🎄 Preparing this ${this.name} 🎄🎄`);
  }
}

const christmasPresent = new ChristmasPresent(
  "Hover Board",
  150,
  "hover.com",
  "2025-12-01"
);

console.log(christmasPresent);
// christmasPresent.give();
// aGift.prepare();
// christmasPresent.prepare();

// instanceof prüft, ob ein Objekt von einer bestimmten Klasse abstammt
console.log(christmasPresent instanceof ChristmasPresent); // true
console.log(christmasPresent instanceof Gift); // true (durch Vererbung)
console.log(christmasPresent instanceof Error); // false
