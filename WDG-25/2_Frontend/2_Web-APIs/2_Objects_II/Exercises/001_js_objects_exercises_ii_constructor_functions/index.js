function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.summary = () => {
    console.log(
      `Title: ${this.title}, Author:${this.author}, Pages: ${this.pages}, Read: ${this.isRead}`
    );
  };
}

Book.prototype.complete = function () {
  this.isRead ? console.log("gelesen") : console.log("nicht gelesen");
};

const book1 = new Book("Schöne Leider", "Bernd Brink", 932, false);

console.log(book1);
book1.summary();
book1.complete();
