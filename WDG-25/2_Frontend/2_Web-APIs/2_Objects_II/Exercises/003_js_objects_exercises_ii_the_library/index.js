class LibraryItem {
  #title;
  #author;
  constructor(title, author) {
    this.#title = title;
    this.#author = author;
  }

  getInfo() {
    return `Title: "${this.#title}", Author: "${this.#author}"`;
  }
}

const book1 = new LibraryItem("Herr der Berge", "Rudi Mahsen");
console.log(book1);
console.log(book1.getInfo());

class Book extends LibraryItem {
  #pages;
  constructor(title, author, pages) {
    super(title, author);
    this.#pages = pages;
  }

  getInfo() {
    return `${super.getInfo()}, Pages: ${this.#pages}`;
  }
}

const book2 = new Book("Eine Reise 4", "Walter Brecht", 823);
console.log(book2);
console.log(book2.getInfo());

class Member {
  #name;
  #booksCheckedOut;
  constructor(name) {
    this.#name = name;
    this.#booksCheckedOut = [];
  }

  listBooks() {
    this.#booksCheckedOut.length !== 0
      ? console.log(`BookList:`, this.#booksCheckedOut)
      : console.log("BookList empty...");
  }

  checkOutBook(book) {
    if (book instanceof Book) {
      this.#booksCheckedOut.push(book);
    }
  }

  returnBook(book) {
    if (book instanceof Book && this.#booksCheckedOut.includes(book)) {
      let index = this.#booksCheckedOut.indexOf(book);
      this.#booksCheckedOut.splice(index, 1);
      console.log(`Book checked out: `, book);
    }
  }
}

const member1 = new Member("Annemarie Nesselhauf");

const book3 = new Book("Eine Reise 3", "Liese Broht", 233);
const book4 = new Book("Eine Reise 1", "Günther Mann", 443);
member1.listBooks();
member1.checkOutBook(book1); // no instance of
member1.checkOutBook(book2);
member1.checkOutBook(book3);
member1.checkOutBook(book4);
member1.listBooks();
member1.returnBook(book3);

// ============================================
// ============================================
// ============================================
// ============================================

class Person {
  // Konstruktion der Klasseneigenschaften
  constructor(first, last, age, eye) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.eyeColor = eye;
  }

  // Anlegen von Methoden
  info() {
    return `Name: ${this.last}, ${this.first} (${this.age} years)`;
  }
}

class Player extends Person {
  #salary;
  constructor(first, last, age, eye, salary) {
    super(first, last, age, eye);
    this.#salary = salary;
  }

  info() {
    return `${super.info()}, Salary: ${this.#salary}`;
  }
}

const p1 = new Person("Julius", "Brecht", 23, "blue");
const p2 = new Player("Robert", "Kemperman", 31, "brown", 34500);
console.log(p1);
console.log(p1.info());
console.log(p2);
console.log(p2.info());
