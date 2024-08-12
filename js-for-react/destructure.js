const { getBooks, getBook } = require("./data");

const books = getBooks();
const book = getBook(2);

// The old way -> not ideal as we have to fetch data by creating a new variable everytime
const title = book.title;
const author = book.author;
console.log(title, author);

// The new way -> Object Destructuring
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

// The old way of fetching data from the array
const primaryGenre = genres[0];
const secondaryGenre = genres[1];

// The new way -> Array Destructuring
const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);
