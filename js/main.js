// working with the DOM elements
const displayBooks = document.querySelector(".display-books");
let listItems = document.querySelector(".book-lists");



//toggle button
function getValue(){
    const toggleButton = document.getElementById('my_checkbox').checked;
    const checkbox = toggleButton ? 1 : 0;

    let displayStatus = document.querySelector('.status');
    if(checkbox ===1){
        return displayStatus.innerText =`Read`;
    }else if(checkbox ===0){
        return displayStatus.innerText =`Not Read`;

    }
}

 


const btnNewBookButton = document.getElementById("btn-new-book");
const btnRemoveBookButton = document.getElementById("btn-remove-book");

//keeping track of all the elements ever created
let itemCounter = listItems.children.length;

//getting the input values
let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let bookPages = document.getElementById("pages");

//getting the form selector
const formSubmit = document.querySelector("#form-element");

// working with buttons

//new book button
btnNewBookButton.addEventListener("click", showForm);

//submit form
formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  //   checking if the inputs is empty
  if (
    bookTitle.value === "" ||
    bookTitle.value === null ||
    (bookTitle.value === undefined && bookAuthor.value === "") ||
    bookAuthor.value === null ||
    (bookAuthor.value === undefined && bookPages.value == "") ||
    bookPages.value === null ||
    bookPages.value === undefined
  ) {
    alert("Ensure you input all the values in all the fields");
  } else {
    alert("The form has been submitted successfully");
    addBookToLibrary();
  }
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  
});

//storing my books objects in an array
let myLibrary = [];

//creating a constructor for my books
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//creating a prototype
Book.prototype.bookInfo = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

//creating a function that will take the users input and stores it in the array
function addBookToLibrary() {
  //creating an empty object
  let book = new Book();

  book.title = bookTitle.value;
  book.author = bookAuthor.value;
  book.pages = bookPages.value;
  book.read = getValue();
  
  //pushing the object into the array
  myLibrary.push(book);

  //looping through the array using the for.Each
  myLibrary.forEach((element, index) => {
    //once an object is added you need to empty the library array;
    myLibrary = [];

    let list = document.createElement("li");

    //creating the trash icon
    let trashIcon = document.createElement("i");
    trashIcon.className = "fa-solid fa-trash";
    trashIcon.id = "trash";

    trashIcon.addEventListener("click", () => {
      listItems.removeChild(list);
    });

    // setting unique ids
    // list.setAttribute('id', 'list-item');
    list.id = "item" + ++itemCounter;

    list.innerHTML = `<span class="span-details">Book Title: </span>${element.title}  <span class="span-details">Author:</span>  ${element.author} <span class="span-details">Pages: </span> ${element.pages} <span class="span-details">Status: </span>  ${element.read}`;
    list.appendChild(trashIcon);
    listItems.appendChild(list);

    //removing all books from the library
    btnRemoveBookButton.addEventListener("click", () => {
      list.parentNode.removeChild(list);
    });

    // const removeBooks = document.getElementById('trash');
    // removeBooks.addEventListener('click', (e)=>{
    //     removeBooksAdded(e);
    // })

    return myLibrary[list];
  });
  // console.log(myLibrary)
  // return myLibrary;
}

//creating a function that brings a new form where users can input there books detail
function showForm() {
  document.querySelector(".form-container").style.display = "block";
  document.querySelector(".books-details").style.display = "none";
  document.querySelector(".column-two").style.backgroundColor = "white";
}
