const myLibrary = [];

function Book({ title, author, pages, read }) {
  return `Title: ${title} ${author}, Pages: ${pages}, Read: ${read}`;
}

const theHobbit = Book({
  title: "The Hobbit",
  pages: "295 pages",
  author: "by J.R.R. Tolkien",
  read: "No",
});

const readyPlayerOne = Book({
  title: "Ready Player One ",
  pages: "500 pages",
  author: "Ernest Cline",
  read: "Yes",
});

function addBookToLibrary(library, book) {
  library.push(book);
}

addBookToLibrary(myLibrary, theHobbit);
addBookToLibrary(myLibrary, readyPlayerOne);

console.log(myLibrary);
