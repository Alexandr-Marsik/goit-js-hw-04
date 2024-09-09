//const book = {
//  title: 'The Last Kingdom',
//  author: 'Bernard Cornwell',
//  genres: ['historical prose', 'adventure'],
//  rating: 8.38,
//};
//
//for (const key in book) {
//  console.log(key); // Ключ
//  console.log(book[key]); // Значення властивості з таким ключем
//}
////////////////////////////////////////////////////////////////
//const apartment = {
//  descr: 'Spacious apartment in the city center',
//  rating: 4,
//  price: 2153,
//};
//const keys = [];
//const values = [];
//for (const key in apartment) {
//  keys.push(key);
//  values.push(apartment[key]);
//}
//console.log(keys);
//console.log(values);

//function countProps(object) {
//  const keys = Object.keys(object);
//
//  return keys.length;
//}
//console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//const obj = {
//  method(value) {
//    console.log(`I'm a method with ${value}!`);
//  },
//};
//
//obj.method(5); // "I'm a method with 5!"
//obj.method(10); // "I'm a method with 10!"

// ✅ Логічно й синтаксично згруповані сутності
//const bookShelf = {
//  books: ['The Last Kingdom', 'Dream Guardian'],
//  // Це метод об'єкта
//  getBooks() {
//    return 'Returning all books';
//  },
//  // Це метод об'єкта
//  addBook(bookName) {
//    return `Adding book ${bookName}`;
//  },
//};
//
//// Виклики методів
//bookShelf.getBooks(); // поверне "Returning all books"
//bookShelf.addBook('New book 1'); // поверне "Adding book New book 1"
//bookShelf.addBook('New book 2'); // поверне "Adding book New book 2"
//--------------------------------------//
//const atTheOldToad = {
//  potions: [],
//  getPotions() {
//    return 'List of all available potions';
//  },
//
//  addPotion(potionName) {
//    return `Adding ${potionName}`;
//  },
//};
//
//atTheOldToad.getPotions();
//atTheOldToad.addPotion('Invisibility');
//atTheOldToad.addPotion('Power potion');
//console.log(atTheOldToad.getPotions());
//---------------------------------------------//
//---------------------------------------------//
//const bookShelf = {
//  books: ['The Last Kingdom'],
//  getBooks() {
//    return this.books;
//  },
//  addBook(bookName) {
//    this.books.push(bookName);
//  },
//};
//
//console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
//bookShelf.addBook('The Mist');
//bookShelf.addBook('Dream Guardian');
//console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]
//-------------------------------------------//
//const bookShelf = {
//  books: [
//    { title: 'The Last Kingdom', rating: 8 },
//    { title: 'The Mist', rating: 6 },
//  ],
//  changeRating(bookName, newRating) {
//    for (const book of this.books) {
//      if (book.title === bookName) {
//        book.rating = newRating;
//      }
//    }
//  },
//};
//
//changeRating('The Mist', 9);
//changeRating('The Last Kingdom', 4);
//------------------------//
//function foo(a, b, c, ...args) {
//  console.log('foo ~ args:', args);
//}
//
//foo(1, 2, 3, 4, 5);
//-----------------------------//
//const propName = 'name';
//const user = {
//  age: 25,
//};
//user[propName] = 'Henry Sibola';
//user['isOnline'] = true;
//console.log(user.name);
//-------------------------------//
// const friends = [
//   { name: 'Kiwi', online: true },
//   { name: 'Mango', online: false },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
//   { name: 'Star', online: true },
// ];
// //console.table(friends);
// function findFriendByName(allFriends, friendName) {
//   for (const friend of allFriends) {
//     //console.log(friend);
//     //console.log(friend.name);
//     if (friend.name === friendName) {
//       return friend;
//     }
//   }
//   return null;
// }
//console.log(findFriendByName(friends, 'Poly'));
//console.log(findFriendByName(friends, 'Chelsy'));

// function getAllNames(allFriends) {
//   const friendNames = [];

//   for (const friend of allFriends) {
//     //console.log(friend.name);
//     friendNames.push(friend.name);
//   }
//   return friendNames;
// }
//console.log(getAllNames(friends));

//---Получить имена только тех друзей которые сейчас онлайн-- -//
// function getOnlineFriends(allFriends) {
//   let onlineFriends = [];
//   for (const friend of allFriends) {
//     if (friend.online) {
//       //console.log(friend.online);
//       //console.log(friend.name);

//       onlineFriends.push(friend.name);
//     }
//   }
//   return onlineFriends.join(' | ');
// }
//console.log(getOnlineFriends(friends));
/**
 * Напиши функцию calcTotalPrice(stones, stoneName)
 * которая принимает масив объектов и строк по названию камня.
 * Функция считает и возвращает общюю стоимость камней
 * с таким именем
 */
// const stones = [
//   { name: 'Топаз', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];
// function calcTotalPrice(stones, stoneName) {
//   let totalPrice = 0;
//   for (const stone of stones) {
//     //console.log(stone.name);
//     if (stone.name === stoneName) {
//       totalPrice = stone.price * stone.quantity;
//     }
//   }
//   return totalPrice || `${stoneName} doesen't exist`;
//}
//console.log(calcTotalPrice(stones, 'Щебінь'));
//console.log(calcTotalPrice(stones, 'Смарагд'));
// const playlist = {
//   name: 'My amazing playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   changeName(newName = 'Relax playlist') {
//     playlist.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newReting) {},
//   getTracksCount() {},
// };

// playlist.changeName();
// playlist.addTrack('new track 1');
//console.log(playlist.getTracksCount());
//console.log(playlist);
//-------------------------------//
//**Створіть масив styles з елементами 'Джаз' і 'Блюз'
//додайте вкінець 'Рок-н-рол'
//заменіть значеня 'Блюз' на 'Класика'
//Напишіть функцію logItems(array) яка приймає масив
//і використовує цикл for який для кожного елемента
//буде виводити повідомленя у форматі:
//<номер елемента> - <значення елемента>
//нумерація має починатись з 1
// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-рол');
// const index = styles.indexOf('Блюз');
// styles[index] = 'Класика';

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     //console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(styles);
//----------------------------------//
/**--------------------------------------------//
 * Напиши функцію яка перебирає масив логінів і перевіряє
 * и є ім'я введене в імпут у цьому масиві і у разі
 * якщо є - виводить повідомленя "Доступ дозволено"
 * в іншому випадку - "Користувач не знайден"
 */
// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogins(logins) {
//   const name = prompt('Enter your name');
//   const isCheck = logins.includes(name);
/**Вариант 1 через if */
//if (isCheck) {
//  return 'Доступ дозволено';
//}
//return 'Користувач не знайден';
/**Вариант 2 через теренарный оператор */
//return isCheck ? 'Доступ дозволено' : 'Користувач не знайден';
// }
//console.log(checkLogins(logins));
/**----------------------------------------------- */
/**Напиши функцію яка сумуватиме числа і пушити в новий масив
 * const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
 */
// function sum(someArr) {
//   const newArr = [];
//   for (let i = 0; i < someArr.length - 1; i++) {
//     const indexSum = someArr[i] + someArr[i + 1];
//     newArr.push(indexSum);
//   }
//   return newArr;
// }
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
//console.log(sum(someArr));
//-------------------------------------------------//
/**
 * Напишіть функцію calculateAverage()
 * яка приймвє довільну кількість аргументів
 * і повертає їхнє середнє значення
 * Додати перевірку що аргументи це числа
 */
// function calculateAverage() {
//   let total = 0;
//   let count = 0;
//   for (const num of arguments) {
//     if (typeof num === 'number') {
//       total += num;
//       count++;
//     }
//   }
//   return total / count;
// }
//console.log(calculateAverage(1, 3, 6, 7, 'a'));
//---------------------------------------------//
/**
 * Напиши скрипт який для об'єкту user послідовно:
 * 1-додасть поле mood зі значенням 'happy'
 * 2-замінить hobby на 'skydiving'
 * 3-замінить значення premium на false
 * 4-виводить зміст об'єкта user у форматі
 * '<ключ>:<значення>' використовуй Object.keys() та for...of
 */
// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const arrayKeys = Object.keys(user);
// for (const key of arrayKeys) {
//   // console.log(`${key}:${user[key]}`);
// }
//---------------------------------------//
/**
 *У нас є об'єкт в якому зберігаються зарплати нашой команди
 *Напишіть код для додавання усіх зарплат
 *та збережіть його результат у змінній sum
 *Якщо об'єкт salaries пустий то результат має бути 0
 */
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// const values = Object.values(salaries);
// for (const value of values) {
//   sum += value;
// }
// console.log(sum);
//----------------------------------------//
/**
 * Напишіть функцію calcTotalPrice(fruits, fruitName),
 * яка приймає масив об'єктів і рядок з назвою фрукта
 * Фунція рахує і повертає загальну вартість фрукта
 * з таким ім'ям, ціною та кількістю з об'єкта
 */
// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
// ];
// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;
//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       totalPrice += fruit.price * fruit.quantity;
//     }
//   }
//   return totalPrice;
// }
// console.log(calcTotalPrice(fruits, 'Яблуко'));
//--------------------------------------------//
/**
 * Створіть об'єкт calculator з трьома меторами
 * read(a, b) - приймає два аргументи і зберігає їх
 * як властивості об'єкта
 * sum() повертає сумму збережених значень (з перевіркою на наявність
 * властивостей в об'єкті)
 * mult() перемножає збережені значенняі повертає результат
 * (з перевіркою на наявність властивостей в об'єкті)
 */
// const calculator = {
//   read(a, b) {
//     this.valueA = a;
//     this.valueB = b;
//   },
//   sum() {
//     if (!this.valueA || !this.valueB) {
//       return 'error';
//     }
//     return this.valueA + this.valueB;
//   },
//   mult() {
//     if (!this.valueA || !this.valueB) {
//       return 'error';
//     }
//     return this.valueA * this.valueB;
//   },
// };
// console.log(calculator.read(5, 10));
// console.log(calculator.sum());
// console.log(calculator.mult());
