// Base class representing a character in a game
class Character {
  // Private fields
  #name;
  #health;
  #strength;

  constructor(name, health, strength) {
    this.#name = name;
    this.#health = health;
    this.#strength = strength;
  }

  // Getter for name
  getName() {
    return this.#name;
  }

  // Getter for health
  getHealth() {
    return this.#health;
  }

  // Method to reduce health
  takeDamage(damage) {
    this.#health -= damage;
    if (this.#health < 0) {
      this.#health = 0;
    }
  }

  // Method to attack another character
  attack(target) {
    target.takeDamage(this.#strength);
  }

  greet() {
    return `Hey there! Traveler. Need a hero?`;
  }
}

// Derived class representing a wizard
class Wizard extends Character {
  // Private field for mana
  #mana;

  constructor(name, health, strength, mana) {
    super(name, health, strength);
    this.#mana = mana;
  }

  // Method to cast a spell
  castSpell(target) {
    if (this.#mana >= 10) {
      console.log(`${this.getName()} casts a spell!`);
      target.takeDamage(this.getHealth() * 2);
      this.#mana -= 10;
    } else {
      console.log(`${this.getName()} does not have enough mana!`);
    }
  }

  // Getter for mana
  getMana() {
    return this.#mana;
  }

  greet() {
    return `I can do magic!`;
  }
}

// Creating instances of characters
const hero = new Character('Hero', 100, 10);
const wizard = new Wizard('Gandalf', 80, 5, 30);

// Demonstrating encapsulation and abstraction
console.log(hero.getName()); // Output: Hero
console.log(hero.getHealth()); // Output: 100
hero.takeDamage(20);
console.log(hero.getHealth()); // Output: 80

// Demonstrating inheritance and polymorphism
const characters = [hero, wizard];

characters.forEach((character) => {
  character.attack(hero);
  console.log(`${character.getName()} attacked Hero!`);
  console.log(`Hero's health: ${hero.getHealth()}`);
  console.log(character.greet());
});

// Wizard specific method
console.log(wizard.getMana()); // Output: 30
wizard.castSpell(hero);
console.log(hero.getHealth()); // Output: 70
