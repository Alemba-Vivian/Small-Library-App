


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
let book = new Book("Javascript", "James",30, "read");
console.log(book.bookInfo());

let book1 = new Book();
book1.title ="Java";
book1.author = "Kelvin Mark";
book1.pages = 256;
book1.read = "read";


let book2 = new Book();
book2.title ="Python pdf";
book2.author = "John Doe";
book2.pages = 256;
book2.read = "read";



//pushing the object into the array
myLibrary.push(book, book1, book2);
return myLibrary;


}
console.log(addBookToLibrary());
