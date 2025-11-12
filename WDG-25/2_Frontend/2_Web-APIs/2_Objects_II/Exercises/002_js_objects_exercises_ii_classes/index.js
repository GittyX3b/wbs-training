class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.summary = () =>
      console.log(
        `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead}`
      );
  }
}

const book1 = new Book("Herberge Hansi", "Frieda Müller", 1256, true);

book1.summary();
