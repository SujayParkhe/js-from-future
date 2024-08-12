const { getBooks, getBook } = require("./data");
const book = getBook(1);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

const pageCount = pages > 1000 ? "Over thousand pages" : "Less than 1K";
console.log(pageCount);
