let title = document.querySelectorAll("#title");
let author = document.querySelectorAll("#author");
let pages = document.querySelectorAll("#pages");
let read = document.querySelectorAll("#read");

const myLibrary = [];

class Books {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBook(id, title, author, pages, read) {
  const newBook = new Books(id, title, author, pages, read);
  myLibrary.unshift(newBook); //add book as first element of the aray aka first one that will show on the webpage
}
addBook("the fault in our stars", "b", 12, false);
addBook("starwars", "b", 12, true);
addBook("john", "b", 12, false);
addBook("cena", "b", 12, true);
addBook("alo", "b", 12, false);
addBook("bravo", "b", 12, true);
console.log(
  myLibrary.forEach((book) => {
    title.forEach((title) => {
      title.textContent = book.title;
    });
    author.forEach((author) => {
      author.textContent = myLibrary[0].author;
    });
    pages.forEach((pages) => {
      pages.textContent = myLibrary[0].pages + " pages";
    });
    read.forEach((read) => {
      read.textContent = myLibrary[0].read ? "read" : "not read";
    });
  })
);

//should figure the function how to dynamically add books to the pagee without hardcoding it here, I can already have books in my library that it will display after looping through the array not having it hardcoded in the html. I started with the html hardcoded as "Skeleton" now must think of how to add them dynamically by looping through it also need to add a button that will pop a form asking for the title author pages and if read from the user --refer to the odin project point #4
