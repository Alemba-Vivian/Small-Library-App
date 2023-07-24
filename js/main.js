// working with the DOM elements
const displayBooks = document.querySelector('.display-books');
const listItems =document.querySelector('.book-lists');
const btnNewBookButton = document.getElementById('btn-new-book');

let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author');
let bookPages = document.getElementById('pages');

const formSubmit =document.querySelector('#form-element');

// working with buttons

//new book button
btnNewBookButton.addEventListener('click', showForm);

//submit form
formSubmit.addEventListener('submit', (e)=>{
    e.preventDefault();

//   checking if the inputs is empty
  if(bookTitle.value == "" || bookAuthor.value== "" || bookPages.value == ""){
    alert("Ensure you input all the values in all the fields")
  }else{
    alert("The form has been submitted successfully")
    console.log(addBookToLibrary());
  }
  bookTitle.value ="";
  bookAuthor.value ="";
  bookPages.value ="";
})




//storing my books objects in an array
let myLibrary =[];


//creating a constructor for my books
function Book(title, author, pages, read){
    this.title =title;
    this.author =author;
    this.pages = pages;
    this.read = read;
}

//creating a prototype
Book.prototype.bookInfo = function (){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}



//creating a function that will take the users input and stores it in the array
function addBookToLibrary(){

//creating an empty object
let book = new Book();
 
book.title = bookTitle.value;
book.author = bookAuthor.value;
book.pages = bookPages.value;


//pushing the object into the array
 myLibrary.push(book);
 


//looping through the array using the for.Each
myLibrary.forEach((element, index, array)=>{
    let list = document.createElement('li');
  
    // div.style.width ='200px';
    // // div.style.height ='200px';
    // div.style.backgroundColor ='#00FFFF';
    // div.style.padding ='20px';
    // div.style.borderRadius ='5px';
    list.innerText = `Book Title: ${element.title} Author: ${element.author} Pages: ${element.pages} pages`;
    listItems.appendChild(list);
    
     
})
// console.log(myLibrary)
return myLibrary;


}
// console.log(addBookToLibrary());


//creating a function that brings a new form where users can input there books detail
function showForm(){
    document.querySelector('.form-container').style.display ='block';
    document.querySelector('.books-details').style.display ='none';

}
