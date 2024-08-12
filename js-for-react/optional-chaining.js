const { getBooks, getBook } = require("./data");
const book = getBook(3);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

function getTotalReviewCount(book) {
  const goodReads = book.reviews.goodreads.reviewsCount;
  const libraryThing = book.reviews.librarything?.reviewsCount ?? 0;

  return goodReads + libraryThing;
}

console.log(getTotalReviewCount(book));
