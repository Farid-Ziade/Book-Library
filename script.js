let title = document.querySelectorAll("#title");
let author = document.querySelectorAll("#author");
let pages = document.querySelectorAll("#pages");
let read = document.querySelectorAll("#read");
let button = document.querySelector(".btn");
let form = document.querySelector(".form");
/////////////// hidden form inputs//////////
let newTitle = document.querySelector("#newTitle");
let newAuthor = document.querySelector("#newAuthor");
let newPages = document.querySelector("#newPages");
let newRead = document.querySelector("#newRead");

let submit = document.querySelector(".add");
/////////////Set new cards values in storages///////
let cardTitle;
let cardAuthor;
let cardPages;
let cardRead;
////////////////////////////
let cardContainer = document.querySelector(".card-container");
////////////////////
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
  myLibrary.push(newBook); //add book as last element of the aray aka first one that will show on the webpage
}
addBook("Book1", "1", 1, false);
addBook("Book2", "2", 2, true);
addBook("Book3", "3", 3, false);

for (let i = 0; i < myLibrary.length; i++) {
  title[i].textContent = myLibrary[i].title;
  author[i].textContent = "Written by " + myLibrary[i].author;
  pages[i].textContent = "# of pages: " + myLibrary[i].pages;
  read[i].textContent =
    "status: " + `${myLibrary[i].read ? "read" : "not read"}`;
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  form.removeAttribute("hidden");
  cardTitle = "";
  cardAuthor = "";
  cardPages = null;
  newTitle.value = "";
  newAuthor.value = "";
  newPages.value = "";
  newRead.checked = false;
});
submit.addEventListener("click", (e) => {
  e.preventDefault();
  cardTitle = newTitle.value;
  cardAuthor = newAuthor.value;
  cardPages = newPages.value;
  cardRead = newRead.checked;
  form.setAttribute("hidden", 0);
  //parent of titleDiv
  let cardDiv = document.createElement("div");
  cardDiv.className = "card";
  //parent of h2 and p must be inside cardDiv
  let titleDiv = document.createElement("div");
  titleDiv.className = "title";
  ///h2 and p must be inside titleDiv

  let newH2 = document.createElement("h2");
  newH2.id = "title";
  newH2.textContent = cardTitle;

  let newP = document.createElement("p");
  newP.id = "author";
  newP.textContent = "Written by: " + cardAuthor;

  titleDiv.appendChild(newH2);
  titleDiv.appendChild(newP);

  ///////pages Div must be inside cardDiv

  let pagesDiv = document.createElement("div");
  pagesDiv.className = "pages";

  //both p must be inside pagesDiv
  let pagesP1 = document.createElement("p");
  pagesP1.id = "pages";
  pagesP1.textContent = "# of pages: " + cardPages;

  let pagesP2 = document.createElement("p");
  pagesP2.id = "read";
  pagesP2.textContent = `status: ${cardRead ? "read" : "not read"}`;

  pagesDiv.appendChild(pagesP1);
  pagesDiv.appendChild(pagesP2);

  //append both div in card
  cardDiv.appendChild(titleDiv);
  cardDiv.appendChild(pagesDiv);
  cardContainer.appendChild(cardDiv);
});

//should figure the function how to dynamically add books to the pagee without hardcoding it here, I can already have books in my library that it will display after looping through the array not having it hardcoded in the html. I started with the html hardcoded as "Skeleton" now must think of how to add them dynamically by looping through it also need to add a button that will pop a form asking for the title author pages and if read from the user --refer to the odin project point #4

//above comment was done 12/8/2025 1:44am

//added the logic where I have some books by default in my library need now to do #4 of hte odin project wheere I need to add a button that will give up a form

//added submit button need to add the delete card button still in #4 finished in 12/10 at 1:05 am
