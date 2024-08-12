const { getBooks, getBook } = require("./data");
const book = getBook(1);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

function getYear(str) {
  return str.split("-")[0];
}

const getYearArrow = (str) => str.split("-")[0];

console.log(getYear(publicationDate));
console.log(getYearArrow(publicationDate));
