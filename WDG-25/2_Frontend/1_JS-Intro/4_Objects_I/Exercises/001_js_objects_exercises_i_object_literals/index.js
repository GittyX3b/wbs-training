// You can work here or download the template!
const book = {
  title: "Harry Potter",
  author: "J.K.Rowling",
  pages: 879,
  isRead: false,
  getSummary() {
    console.log(
      `Title: ${this.title} | Autor: ${this.author} | Pages: ${this.pages} | Read: ${this.isRead}`
    );
  },
  toogleReadState() {
    this.isRead = !this.isRead;
  },
};
book.getSummary();

book.toogleReadState();
book.getSummary();
