const myLibrary = [];

function Book({ title, author, pages, read }) {
  return `Title: ${title} ${author}, Pages: ${pages}, Read: ${read}`;
}

const theHobbit = Book({
  title: "The Hobbit",
  pages: "295 pages",
  author: "by: J.R.R. Tolkien",
  read: "No",
});

const readyPlayerOne = Book({
  title: "Ready Player One ",
  pages: "500 pages",
  author: "by: Ernest Cline",
  read: "Yes",
});

function addBookToLibrary(library, book) {
  library.push(book);
}

// function loopThroughArray(array) {
//   const library = document.getElementById("library");

//   for (let i = 0; i < array.length; i++) {
//     const newDiv = document.createElement("div");
//     newDiv.textContent = array[i];
//     library.appendChild(newDiv);
//   }
// }

function loopThroughArray(array) {
  const library = document.getElementById("library");

  for (const item of array) {
    const newDiv = document.createElement("div");
    newDiv.textContent = item;
    library.appendChild(newDiv);
  }
}

addBookToLibrary(myLibrary, theHobbit);
addBookToLibrary(myLibrary, readyPlayerOne);
loopThroughArray(myLibrary);

const openNewBookFormButton = document.getElementById("openNewBookFormButton");

openNewBookFormButton.addEventListener("click", () => {
  myForm.style.display = "block";
});

function addItem() {
  const form = document.getElementById("myForm");
  const library = document.getElementById("library");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const itemName = document.getElementById("itemName").value;
    const authorName = document.getElementById("authorName").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    const newItem = document.createElement("div");
    newItem.textContent =
      "Title: " +
      itemName +
      " By: " +
      authorName +
      ", Pages: " +
      pages +
      ", Read: " +
      read;

    library.appendChild(newItem);

    form.reset();
  });
}

addItem();
