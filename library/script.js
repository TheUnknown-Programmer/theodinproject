function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return this.title + this.author + this.pages + this.read;
};
const theHobbit = new Book(
  "The Hobbit ",
  "by J.R.R. Tolkien, ",
  "295 pages, ",
  "Not read yet"
);

console.log(theHobbit.info());
