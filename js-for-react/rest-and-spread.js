const { getBooks, getBook } = require("./data");
const book = getBook(1);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

// Rest Operator -> Arrays
const [primaryGenre, secondaryGenre, ...restGenres] = genres;
console.log(primaryGenre, secondaryGenre, restGenres);

// Spread Operator -> Arrays
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

// Spread Operator -> Objects
const updatedBook = {
  ...book,
  // Adding a new porperty
  moviePublicationDate: "2001-12-29",
  //Overwriting an existing property
  pages: 1210,
};

console.log(updatedBook);
