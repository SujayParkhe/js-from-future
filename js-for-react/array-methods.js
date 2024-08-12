const { getBooks, getBook } = require("./data");
const books = getBooks();

function getTotalReviewCount(book) {
  const goodReads = book.reviews.goodreads.reviewsCount;
  const libraryThing = book.reviews.librarything?.reviewsCount ?? 0;

  return goodReads + libraryThing;
}

// map()
// const titles = books.map((book) => book.title);
// console.log(titles);

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
//   reviewsCount: getTotalReviewCount(book),
// }));
// console.log(essentialData);

// filter()
// const longBooksWithMovie = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// console.log(longBooksWithMovie);

// const adventureBooks = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);
// console.log(adventureBooks);

// reduce()
const pagesAllBooks = books.reduce((acc, book) => {
  console.log(acc);
  return acc + book.pages;
}, 0);
console.log(pagesAllBooks);

// sort()
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

// Immutable Arrays
// 1) Add a book object to array
const newBook = {
  id: 6,
  title: "Solo Leveling",
  author: "JK Studios",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2) Delete a book object from an array
const booksAfterDeletion = booksAfterAdd.slice(1);
console.log(booksAfterDeletion);

// 3) Update a book object in an array
const booksAfterUpdate = booksAfterDeletion.map((book) =>
  book.id === 2 ? { ...book, pages: 254 } : book
);
console.log("After", booksAfterUpdate);
