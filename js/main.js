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
let errorMessage = document.getElementById("errorMessage");
let errorAuthor =  document.getElementById("errorAuthor");
let errorPage =  document.getElementById("errorPage");


//getting the form selector
const formSubmit = document.querySelector("#form-element");

// working with buttons

//new book button
btnNewBookButton.addEventListener("click", showForm);

//submit form
formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();


  if(!bookTitle.validity.valid ){
     bookTitle.style.border ="1px solid";
     bookTitle.style.borderColor ="red";
     showError();

    }else if(!bookPages.validity.valid){
      bookPages.style.border ="1px solid";
      bookPages.style.borderColor ="red";
      showError();
    }else if(!bookAuthor.validity.valid){
      bookAuthor.style.border ="1px solid";
      bookAuthor.style.borderColor ="red";
      showError();
    }else{
      addBookToLibrary();
      bookTitle.value = "";
      bookAuthor.value = "";
      bookPages.value = "";
        
    }

 
  //   checking if the inputs is empty
//   if (
//     bookTitle.value === "" ||
//     bookTitle.value === null ||
//     (bookTitle.value === undefined && bookAuthor.value === "") ||
//     bookAuthor.value === null ||
//     (bookAuthor.value === undefined && bookPages.value == "") ||
//     bookPages.value === null ||
//     bookPages.value === undefined
//   ) {
//     alert("Ensure you input all the values in all the fields");
//   } else {
//     alert("The form has been submitted successfully");
//     addBookToLibrary();
//   }
//   bookTitle.value = "";
//   bookAuthor.value = "";
//   bookPages.value = "";
  
 });


// Errors on individuals fields
bookTitle.addEventListener('input', (event)=>{
  if(bookTitle.validity.valid){
    bookTitle.style.border ="1px solid";
    bookTitle.style.borderColor ="green";
    errorMessage.textContent ="";
  }else{
     showError();
  }
})
bookAuthor.addEventListener('input', (event)=>{
  if(bookAuthor.validity.valid){
    bookAuthor.style.border ="1px solid";
    bookAuthor.style.borderColor ="green";
    errorAuthor.textContent ="";
  }else{
     showError();
  }
})
bookPages.addEventListener('input', (event)=>{
  if(bookPages.validity.valid){
    bookPages.style.border ="1px solid";
    bookPages.style.borderColor ="green";
    errorPage.textContent ="";
  }else{
    showError();
  }
  
});


//function to show error using the constraint javascript api
function showError(){
  if(bookTitle.validity.valueMissing){
    errorMessage.textContent =`You need to enter the title of the book`;
  }else if(bookTitle.validity.tooShort){
     errorMessage.textContent = `The characters should be at least ${bookTitle.minLength}`
  }
  else if(bookAuthor.validity.valueMissing){
    errorAuthor.textContent =`You need to enter the author of the book`;
  }else if(bookAuthor.validity.tooShort){
    errorAuthor.textContent =`The characters should be at least ${bookAuthor.minLength}`
  }
  else if(bookPages.validity.valueMissing){
    errorPage.textContent =`You need to enter the number of pages`;
  }
   else if(bookPages.validity.rangeOverFlow){
    errorPage.textContent =`pages should be atleast ${bookPages.max}.
                            You entered ${bookPages.value.length}`;
  }
}



//storing my books objects in an array
let myLibrary = [];

//creating a constructor for my books
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  //creating a prototype
  bookInfo() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}


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
