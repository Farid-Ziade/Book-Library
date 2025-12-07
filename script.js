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
  myLibrary.push(newBook); //add book as first element of the aray aka first one that will show on the webpage
}
addBook("Book1", "1", 1, false);
addBook("Book2", "2", 2, true);
addBook("Book3", "3", 3, false);
addBook("Book4", "4", 4, true);
addBook("Book5", "5", 5, false);
addBook("Book6", "6", 6, true);

for (let i = 0; i < myLibrary.length; i++) {
  title[i].textContent = myLibrary[i].title;
  author[i].textContent = "Written by " + myLibrary[i].author;
  pages[i].textContent = "# of pages: " + myLibrary[i].pages;
  read[i].textContent = "status: " + myLibrary[i].read ? "read" : "not read";
}

//should figure the function how to dynamically add books to the pagee without hardcoding it here, I can already have books in my library that it will display after looping through the array not having it hardcoded in the html. I started with the html hardcoded as "Skeleton" now must think of how to add them dynamically by looping through it also need to add a button that will pop a form asking for the title author pages and if read from the user --refer to the odin project point #4

//above comment was done 12/8/2025 1:44am

//added the logic where I have some books by default in my library need now to do #4 of hte odin project wheere I need to add a button that will give up a form
