const myLibrary = [];

function Book({ title, author, pages, read }) {
  return `Title: ${title} ${author}, Pages: ${pages}, Read: ${read}`;
}

const theHobbit = Book({
  title: "The Hobbit",
  pages: "295 pages",
  author: "by J.R.R. Tolkien",
  read: "Not yet",
});

function addBookToLibrary(array, key, value) {
  const newObject = {};
  newObject[key] = value;
  array.push(newObject);
}

addBookToLibrary(myLibrary, theHobbit);

console.log(myLibrary);
