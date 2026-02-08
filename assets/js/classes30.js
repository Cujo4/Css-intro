// function User(name, surname, age, isMail, email, isSubscribed) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
//     this.isMale = isMail;
//     this.email = email;
//     this.isSubscribed = isSubscribed;
// }

// userProto1 = {
//     getFullName() {
//         return this.firstName + " " + this.lastName;
//     },
// };

// User.prototype = userProto1;

// const user1 = new User(
//     "Jack",
//     "Wilsher",
//     23,
//     true,
//     "test@SpeechGrammarList.com",
//     true
// );
// console.log(user1);
// console.log(user1.getFullName());

// const user2 = new User(
//     "Anna",
//     "Semenova",
//     19,
//     false,
//     "anna@gmail.com.com",
//     true
// );
// console.log(user2.getFullName());

// function User1(name1, surname1, age1, isMail1, email1, isSubscribed1) {
//     this.firstName = name1;
//     this.lastName = surname1;
//     this.age = age1;
//     this.isMale = isMail1;
//     this.email = email1;
//     this.isSubscribed = isSubscribed1;
// }

// User1.prototype = userProto1;

// const user3 = new User1(
//     "Masha",
//     "Sabo",
//     37,
//     false,
//     "masha25@google.com",
//     false
// );
// console.log(user3);
// console.log(user3.getFullName());

////////////////////////////////////////////////////////

// Классовый подход
// class User {
//     constructor(name, surname, age, isMail, email, isSubscribed) {
//         this._firstName = name;
//         this._lastName = surname;
//         this._age = age;
//         this._isMale = isMail;
//         this._email = email;
//         this._isSubscribed = isSubscribed;
//     }
//     getFullName() {
//         return this._firstName + " " + this._lastName;
//     }
//     static isUser(obj) {
//         return obj instanceof User;
//     }
//     // set
//     set age(value) {
//         if (typeof value !== "number") {
//             throw TypeError("Указанный возраст должен быть числом!");
//         }
//         if (value < 1 || value > 149) {
//             throw RangeError(
//                 "Указанный возраст должен быть в пределах (1 - 149)"
//             );
//         }

//         this._age = value;
//     }
//     // get
//     get age() {
//         return this._age;
//     }
// }

// try {
//     const user2 = new User(
//         "Jack",
//         "Wilsher",
//         23,
//         true,
//         "test@SpeechGrammarList.com",
//         true
//     );

//     console.log(user2);
//     console.log(user2.getFullName());

//     console.log(User.isUser(user2)); // Проверяет относится ли user2 к User.
//     user2.age = 19;
//     console.log(user2.age);
// } catch (error) {
//     console.log(error);
// }

// //////////////////////////////////////////////////////

// class Phone {
//     constructor(brand1, model1, color1, price1, year1) {
//         this.brand = brand1;
//         this.model = model1;
//         this.color = color1;
//         this.price = `${price1} грн`;
//         this.year = year1;
//     }
//     phoneAge() {
//         return new Date().getFullYear() - this.year;
//     }
// }

// const userPhone1 = new Phone("Iphone", 7, "black", 20500, 2019);
// console.log(userPhone1);
// console.log(userPhone1.phoneAge());

///////////////////////////////////////////////////////

// Деструктурирующее присваивание

// function f(user) {
//     console.log(user);
//     const { firstName, lastName, age } = user;
//     const { lastName1 } = user;

//     // console.log(lastName);
// }

// const user = {
//     firstName: "Test",
//     lastName: "Testovich",
//     age: 25,
// };

// f(user);

// const user1 = {
//     firstName1: "Artem",
//     lastName1: "Andreevich",
//     age1: 30,
// };

// f(user1);

// console.log(user.lastName);
// console.log(user1.firstName1);
// console.log(user1.lastName1);

// /////

// const book = {
//     author: {
//         firstName: "Andrey",
//         lastName: "Gbro",
//     },
//     title: "Karlson",
//     price: 12,
// };

// // const { author, title } = book;

// // console.log(book.autor);

// const {
//     author: { firstName, lastName },
//     title,
//     price,
// } = book;

// console.log(firstName);

// ////

// const book1 = {
//     author: {
//         firstName1: "Sasha",
//         lastName1: "Mamaeva",
//     },
//     title1: "Sobol",
//     price1: 29,
// };

// const {
//     author: { firstName1, lastName1 },
//     title1,
//     price1,
// } = book1;

// console.log(lastName1);

// /////////

// // Массивы

// const arr = [1, 2, 3, 4];

// const [obj0, obj1, , obj3] = arr;
// console.log(obj1);
// console.log(obj3);

// ////

// const book10 = {
//     name: "Sasha",
//     age: 29,
//     emails: ["ydfgsudhc@yandex.com", "wihesfsjfdj@gmail.com"],
//     isMale: false,
// };

// const {
//     name: userName1,
//     age: userAge,
//     emails: [email1, email2],
//     isMale,
// } = book10;

// console.log(userName1, userAge, email1, email2, isMale);

// console.log(userAge);

// const { userName, ...ostatok } = book10;
// console.log(userName1);
// console.log(ostatok);

/////////////////////////////////////////////////////////

// const user = {
//     firstName: "Test",
//     lastName: "Testivich",
// };

// for (const key in user) {
//     console.log(`user[${key}] = ${user[key]}`);
// }

// const arr = [1, 2, 3, 4, 5];

// for (const index in arr) {
//     console.log(`arr[${index}] = ${arr[index]}`);
// }

// // for...in Перечисляет только перечисляемые свойства

// function User(name, surname, age, isMail, email, isSubscribed) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
//     this.isMale = isMail;
//     this.email = email;
//     this.isSubscribed = isSubscribed;
// }

// userProto1 = {
//     getFullName() {
//         return this.firstName + " " + this.lastName;
//     },
// };

// User.prototype = userProto1;

// const user1 = new User(
//     "Jack",
//     "Wilsher",
//     23,
//     true,
//     "test@SpeechGrammarList.com",
//     true,
// );

// for (const key in user1) {
//     console.log(`user1[${key}] = ${user1[key]}`);
// }

// // 1
// for (const key in user1) {
//     if (user1.hasOwnProperty(key)) {
//         console.log(`user1 own =", ${user1[key]}`);
//     }
// }

// // 2
// // Object.keys() - Массив собственных перечисляемых свойств.

// console.log("user1 =", Object.keys(user1));

// Object.keys(user1).forEach((uKey) => {
//     console.log(`user1[${uKey}] = ${user1[uKey]}`);
// });

// ////////

// console.log(Object.values(user1));

// console.log(Object.entries(user1));

// ///////////////////

// class Phone {
//     constructor(name2, model2, color2, year2) {
//         this.name = name2;
//         this.model = model2;
//         this.color = color2;
//         this.year = year2;
//     }
// }

// const phone3 = new Phone("Iphone", 5, "white", 2001);

// const { name: name1, model: model1, color, year } = phone3;

// console.log(model1);

// console.log(Object.keys(phone3));

// console.log(Object.values(phone3));

// console.log(Object.entries(phone3));

// /////////////////////////////////////////////////////////

// // Symbol для генерации уникальных значений

// const THEMES = {
//     LIGHT: Symbol("light"),
//     DARK: Symbol("dark"),
// };

// const theme = THEMES.DARK;

// switch (theme) {
//     case THEMES.DARK:
//         console.log("THEMES.DARK", THEMES.DARK);
//         break;
//     case THEMES.LIGHT:
//         console.log("THEMES.LIGHT", THEMES.LIGHT);
//         break;
//     default:
//         console.log("ERROR");
// }

///////////////////////////////////////////////////

// 1
// const user = {
//     name: "Andrey",
//     age: 28,
//     isAdmin: false,
// };

// for (const key in user) {
//     console.log(`${key}: ${user[key]}`);
// }

// // 2
// const numbers = [3, 7, 2, 9];

// for (const key of numbers) {
//     const result = key * 2;
//     console.log(result);
// }

// // 3
// const data = { a: 1, b: 2 };

// // for (const value of data) {
// //     console.log(value);
// // }

// // Код не работает, потому что обьект это не итерируемый элемент, а for...of можно использовать только по отношению к итерируемым элементам.

// // 3.1
// for (const key in data) {
//     console.log(`${data[key]}`);
// }

// // 3.2
// for (const key of Object.values(data)) {
//     console.log(key);
// }

// // 4
// const phone = {
//     brand: "Apple",
//     model: "iPhone 12",
//     year: 2020,
// };

// for (const [key, value] of Object.entries(phone)) {
//     console.log(key, "->", value);
// }

// // 5
// const word = "JS";

// for (const value of word) {
//     console.log(value);
// }

// 6.1
// for...in перебирает значения не по порядку, а по ключам.
// 6.2
// for...of не работает с обычными обьектами, потому что обьекты это не итерируемые элементы. А for...of работает только с итерируемыми элементами.
// 6.3
// Я ещё не начал изучать Map().

////////////////////////////////////////////////////

// const user = {
//     firstName: "Test",
//     lastName: "Testovych",
// };

// for (const key in user) {
//     console.log(`user[${key}] = ${user[key]}`);
// }
// console.log(user);

// const arr = [1, 2, 3, 4, 5];

// for (const index in arr) {
//     console.log(`arr[${index}] = ${arr[index]}`);
// }
// console.log(arr);

//////////

// function User(name, surname, age, isMail, email, isSubscribed) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
//     this.isMale = isMail;
//     this.email = email;
//     this.isSubscribed = isSubscribed;
// }

// userProto1 = {
//     getFullName() {
//         return this.firstName + " " + this.lastName;
//     },
// };

// User.prototype = userProto1;

// const user1 = new User(
//     "Jack",
//     "Wilsher",
//     23,
//     true,
//     "test@SpeechGrammarList.com",
//     true,
// );

// for (const key in user1) {
//     console.log("key ==> ", key);
// }

// for (const key in user1) {
//     if (user1.hasOwnProperty(key)) {
//         console.log(`own user1 = ${key}`);
//     }
// }

// console.log("Object.keys() =", Object.keys(user1));

// Object.keys(user1).forEach((uKey) =>
//     console.log(`user1[${uKey}] = ${user1[uKey]}`),
// );

// console.log("Object.values() =", Object.values(user1));
// console.log("Object.entries() =", Object.entries(user1));

///////////////////////////////////////////

// const s = Symbol("key");
// console.log("s = ", s);

// const s2 = Symbol("key");
// console.log("s2 = ", s2);

// console.log(s === s2);

// const key1 = Symbol("key1");

// const option = {
//     url: "sergey@gmail.com",
//     [key1]: "12345",
// };

// for (const key1 in option) {
//     console.log(key1);
// }

// const key2 = Symbol("key1");

// for (const key2 in option) {
//     console.log(key2);
// }

// console.log(key1 === key2);

/////////////////////////////////////////////////

// const arr = [1, 2, 3];
// const arrCopy = [...arr];

// function sum() {
//     console.log("arguments =", arguments);
//     const arrFromArguments = [...arguments];
//     console.log(arrFromArguments);
//     return console.log(
//         `Summochka = ${arrFromArguments.reduce((sum1, arg1) => sum1 + arg1)}`,
//     );
// }

// // console.log(sum(1, 2, 3, 4, 5));

// //

// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// console.log(sum(...arr1));

//////

// function sum() {
//     const arrFromArguments = [...arguments];
//     return arrFromArguments.reduce((sum1, arg1) => sum1 + arg1, 0);
// }

// console.log(sum(1, 2, 3, 4, 5));

/////

// console.log([..."qwerty"]);

// /////

// const user1 = { firstName: "Ivo", lastName: "Ivovych" };
// const user2 = { isMale: true, age: 20 };

// let user3 = { ...user1, ...user2 };
// console.log(user3);

// const newName = "Ivonga";

// user3 = { ...user3, firstName: newName };
// console.log(user3);

////////

// const map1 = new Map();
// console.log(map1);

// // arr.length
// console.log(map1.size);

// // obj.key = value
// map1.set("map1Key", "map1Value").set("map2Key", "map2Value");
// console.log(map1);
// ///
// const user = { name: "Gucci", age: 24 };
// map1.set(user, ["Amanda", "Linda"]);
// console.log(map1);

// // obj.key
// console.log(map1.get("map2Key"));

// console.log(map1.get(user));

// // boolean(key)
// console.log(map1.has("map1Key"));
// console.log(map1.has("avokado"));

// /////

// const m1 = new Map();

// m1.set("Test", "380962725419")
//     .set("Test1", "380962725543")
//     .set("Test2", "380962725761");

// console.log(m1);

// console.log(m1.has("Test1"));
// console.log(m1.has("Test8"));

// // delete obj.key

// m1.delete("Test2");
// console.log(m1);

// // Очищение Map
// // m1.clear();
// // console.log(m1);

// m1.forEach((value, key) => console.log(key, value));

// //

// const mapKeys = [...m1.keys()];
// console.log(mapKeys);

// //
// console.log([...m1.values()]);
// //
// console.log([...m1.entries()]);

// // Создать Map из Обьекта
// const obj = { Test: "380964218563", Test1: "380512645724" };

// console.log(Object.entries(obj));
// const m2 = new Map(Object.entries(obj));
// console.log(m2);

///////////////////////////

// const vocabulary = new Map();
// vocabulary.set("dog", "собака").set("cat", "кот").set("run", "бегать");

// // console.log(vocabulary);

// // .split - Делает из строки массив.
// // .join - Делает из массива строку.

// function translateEngToUa(engPhrase) {
//     const engWords = engPhrase.split(" ");
//     // console.log(engWords);
//     const uaWords = engWords.map((w) =>
//         vocabulary.has(w) ? vocabulary.get(w) : w,
//     );
//     const uaPhrase = uaWords.join(" ");
//     return uaPhrase;
// }

// const engPhrase = "dog run white cat";
// const ukrPhrase = translateEngToUa(engPhrase);
// console.log(ukrPhrase);

// ////////////////////////////////////////////////

// // Множество Set сохраняет только уникальные значения.

// const s1 = new Set();
// console.log("s1 - ", s1);

// const s2 = new Set([0, 1, 2, 3, 4, 5, 3, 9, 2, 1, 0, 8]);
// console.log(s2);

// // size
// console.log("s2.size - ", s2.size);

// // add
// s1.add(1).add(3).add(2).add(3);
// console.log(s1);

// // has
// console.log(s2.has(2));
// console.log(s2.has(7));

// // delete
// s2.delete(3);
// console.log(s2);

// // forEach
// s2.forEach((n, nAgain) => console.log(n, nAgain));

// // for...of
// for (const item of s2) {
//     console.log("ForOf - ", item);
// }

// /////////////

// const arr = [1, 2, 3, 5, 7, 8, 9, 6, 5, 4, 0, 2, 4];

// // const arr1 = new Set(arr);
// // console.log(arr1);

// // const arr2 = [...arr1];
// // console.log(arr2);

// //// ИЛИ

// const arr2 = [...new Set(arr)];
// console.log(arr2);

// ///////

// const users1 = [
//     "Test",
//     "Grut",
//     "John Doe",
//     "Grut",
//     "John Doe",
//     "Grut",
//     "John Doe",
// ];
// const users2 = [
//     "Test",
//     "Jane Doe",
//     "Test",
//     "Jane Doe",
//     "Test",
//     "Jane Doe",
//     "Grut",
// ];

// const names = [...new Set([...users1, ...users2])];
// console.log(names);

// ///////

// // Уникальные значения brand
// const users = [
//     { name: "Test0", brand: "Iphone" },
//     { name: "Test1", brand: "Samsung" },
//     { name: "Test2", brand: "Iphone" },
//     { name: "Test3", brand: "Xiaomi" },
//     { name: "Test4", brand: "Samsung" },
//     { name: "Test5", brand: "Xiaomi" },
//     { name: "Test6", brand: "Iphone" },
// ];

// const brands = [...new Set(users.map((u) => u.brand))];
// console.log(brands);

// /////////////

// // Обьекты из имён которые относятся к уникальному brand
// const brandsNames = {};
// brands.forEach(
//     (b) =>
//         (brandsNames[b] = users
//             .filter((u) => u.brand === b)
//             .map((u) => u.name)),
// );

// console.log(brandsNames);

////////////////////////////////////////////////////

// Три принципа ООП:
// 1) Инкапсуляция - скрытие логики (особенностей реализации).
// 2) Унаследование - переиспользование структуры и логики.
// 3) Полиморфизм - возможность через одинаковый интерфейс работать с разными типами.

//// Инкапсуляция
// class User {
//     constructor(fullName) {
//         // [this._firstName, this._lastName] = fullName.split(" ");
//     }
//     set fullName(v) {
//         [this._firstName, this._lastName] = v.split(" ");
//     }
//     get fullName() {
//         return this._firstName + " " + this._lastName;
//     }
// }

// const name1 = new User("Test Testovych");
// console.log("Test Testovych".split(" "));
// console.log(name1);
// const name1 = new User();
// name1.fullName = "GiGi Buffon";
// console.log(name1);
// name1.fullName = "Enzo Fernandes";
// console.log(name1);
// console.log("Enzo - ", name1.fullName);

// //// Унаследование / Расширение (extends)

// // Родительский класс
// class User {
//     constructor(name, surname, age, isMail, email) {
//         this._firstName = name;
//         this._lastName = surname;
//         this._age = age;
//         this._isMale = isMail;
//         this._email = email;
//         this._isBanned = false;
//     }
//     getFullName() {
//         return this._firstName + " " + this._lastName;
//     }
// }

// const user = new User("Test", "Testovych", 20, true, "test@gmail.com");
// console.log(user);

// // Дочерний класс
// class Moderator extends User {
//     constructor(name, surname, age, isMail, email, permissions) {
//         super(name, surname, age, isMail, email); // Вызов конструктора родительского класса
//         this._permissions = permissions;
//     }
//     getFullName() {
//         return `Mr ${this._firstName} ${this._lastName}`;
//     }

//     sendMessage(user, message) {
//         console.log(
//             `Moderator ${this._firstName} send message ${message} to user ${user._firstName}`,
//         );
//     }
// }

// const moderator = new Moderator("Mod", "Modovych", 30, false, "mod@gmail.com", {
//     bann: false,
//     readPrivate: false,
//     sendMessage: true,
// });

// console.log(moderator.getFullName());
// moderator.sendMessage(user, "Hello");

// class Admin extends Moderator {
//     constructor(name, surname, age, isMail, email, permissions, category) {
//         super(name, surname, age, isMail, email, permissions);
//         this._category = category;
//     }
//     bann(user) {
//         user._isBanned = true;
//         console.log(`Admin ${this._firstName} bunned user ${user._firstName}`);
//     }
//     unbann(user) {
//         user._isBanned = false;
//         console.log(
//             `Admin ${this._firstName} unbunned user ${user._firstName}`,
//         );
//     }
// }

// const admin = new Admin(
//     "Adma",
//     "Adminovych",
//     37,
//     false,
//     "adm@gmail.com",
//     {
//         bann: false,
//         unbann: true,
//         readPrivate: true,
//         sendMessage: true,
//     },
//     1,
// );

// // console.log(admin);
// // console.log(admin.getFullName());
// // console.log(admin.sendMessage(moderator, "Vamos"));

// console.log(user._isBanned);

// admin.bann(user);
// console.log(user._isBanned);

// admin.unbann(user);
// console.log(user._isBanned);

// console.log(admin.getFullName());

//////////////////////

// class Squirrel {
//     constructor(name) {
//         this._name = name;
//     }
//     eat(food) {
//         console.log(`Squirrel ${this._name} is eating ${food}.`);
//     }
//     run() {
//         console.log(`Squirrel ${this._name} is running.`);
//     }
// }

// class flyingSquirrel extends Squirrel {
//     constructor(name, length) {
//         super(name);
//         this._length = length;
//     }
//     eat() {
//         console.log(`Squirrel ${this._name} is eating nuts.`);
//     }
//     fly() {
//         console.log(`Squirrel ${this._name} is flying on ${this._length}m.`);
//     }
// }

// const sq = new Squirrel("Natasha");
// console.log(sq);
// sq.eat("carrot");
// sq.run();

// const flyingSq = new flyingSquirrel("007", 4);
// console.log(flyingSq);
// flyingSq.eat();
// flyingSq.run();
// flyingSq.fly();

////////////////////////////////

class Figure {
    constructor(name) {
        this._name = name;
    }
    getAria() {
        return null;
    }
}

class Rectangle extends Figure {
    constructor(sideLength1, sideLength2) {
        super("rectangle");
        this._sideLength1 = sideLength1;
        this._sideLength2 = sideLength2;
    }
    getAria() {
        return this._sideLength1 * this._sideLength2;
    }
}

const rectangle1 = new Rectangle(3, 5);
console.log(rectangle1);
console.log(rectangle1.getAria());
