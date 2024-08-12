const { getBooks, getBook } = require("./data");
const book = getBook(1);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

const summary = `The title of the book is ${title} and the author is ${author} which was published in ${
  publicationDate.split("-")[0]
}`;
console.log(summary);
