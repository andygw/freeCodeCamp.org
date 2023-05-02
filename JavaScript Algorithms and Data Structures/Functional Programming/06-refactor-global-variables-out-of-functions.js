// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {

  const books = [...bookList]
    
  books.push(bookName);
  return books;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    
    const books = [...bookList]
  
    books.splice(book_index, 1);
    return books;

    // Change code above this line
    }
}
