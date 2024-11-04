// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'https://via.placeholder.com/640x480',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// console.log(apartment);
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   hobbies: ['swimming', 'music', 'sci-fi'],
// };

// const location = user.location;
// console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

// const country = user.location.country;
// console.log(country); // "Jamaica"
// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"
// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// console.log(lastTag);
///////////////////////////////////
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book['title']); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book['genres']); // ["historical prose", "adventure"]

// const propKey = 'author';
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"

const user = {
  firstName: 'Jacob',
  lastName: 'Mercer',
};
console.log(user['firstName']);

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

const aptRating = apartment['rating'];
console.log(aptRating);
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push('drama');

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]
