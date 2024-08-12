const { getBooks, getBook } = require("./data");
const book = getBook(2);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

// && Operator
// Falsy values: 0, '', null, undefined
// console.log(true && "Some String"); // Some String
// console.log(false && "Some String"); // false
// console.log(hasMovieAdaptation && "This has a movie adaptation"); // This has a movie adaptation
// console.log("sujay" && "sky big bro"); // sky big bro
// console.log(0 && "some value"); // 0

// || Operator
// Falsy values: 0, '', null, undefined
console.log(true || "Some String"); // true
console.log(false || "Some String"); // Some String
console.log(0 || 10); // 10
console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT Translated";
console.log(spanishTranslation);

const count = book.reviews.librarything.reviewsCount ?? "no data";
console.log(count);
