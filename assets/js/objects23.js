// const firstName = "Sergey";
// const lastName = "Zinchenko";
// const age = 23;

// // Обьекты
// const obj1 = {}; // Синтаксический сахар
// const obj2 = Object();
// const obj3 = new Object();

// console.log(obj1);
// // alert(obj2); - С помощью alert нельзя вывести.

// // Инициализация
// // key = value
// const user = {
//     firstName: "Andrey",
//     lastName: "Makarov",
//     age: 25,
//     pass: "12345",
// };
// console.log(user);

// // Доступ к свойствам; Операция "."(ТОЧКА)

// const userName = user.lastName;
// console.log(userName);

// user.age = 27;
// console.log(user);

// // Добавление свойств
// user.email = "temp.serget4@gmail.com";
// console.log(user);

// // Удаление свойств
// delete user.pass;
// console.log(user);

// const a = {
//     model: "Mercedes",
//     year: 2024,
//     color: "black",
// };
// console.log(a);

// a.color = "yellow";
// console.log(a);

// delete a.year;
// console.log(a);

// a.name = "Amar";
// a.lastName = "Baraban";
// console.log(a);

// // Копирование обьектов
// // 1
// const a1 = Object.assign({}, a);
// console.log(a1);
// console.log(a === a1);
// // 2
// const a2 = { ...a };
// console.log(a2);
// console.log(a === a2);

// ////////////////////////////////////////////////////

// const user1 = {
//     firstName1: "Sergey",
//     lastName1: "Zinchenko",
//     age1: 23,
//     pass1: "qwerty",
//     // this (контекст) - Ссылка на обьект который вызывает функцию.

//     // Полная форма

//     // getFullName: function () {
//     //     return `${this.firstName1} ${this.lastName1}`;
//     // },
//     // getPass: function (newPass) {
//     //     this.pass1 = newPass;
//     // },

//     // Сокращённая форма

//     getFullName() {
//         return `${this.firstName1} ${this.lastName1}`;
//     },
//     getPass(newPass) {
//         this.pass1 = newPass;
//     },
// };

// const getFullName1 = user1.getFullName();
// console.log(getFullName1);

// user1.getPass("abcdef");
// console.log(user1);

// const car = {
//     model: "Mercedes",
//     year: 2024,
//     color: "black",
//     newColor(newColor1) {
//         this.color = newColor1;
//     },
// };
// // console.log(a11);

// for (let key in car) {
//     console.log(`car.${key} ${car[key]}`);
// }

// car.newColor("white");
// console.log(car);

// const property = "year";
// console.log(car[property]);

//  Перебор обьекта for...in
// for (let key in car) {
//     console.log(key, car[key]);
// }

// const b11 = prompt("Введите имя");
// console.log(car[b11]);

// const human = {
//     name: "Igor",
//     age: 30,
//     params: {
//         height: 1.9,
//         weight: 87,
//     },
// };

// console.log(human);
// console.log(human.params.height);

// function Gallagan(firstName, lastName, age, pass) {
//     this.name = firstName;
//     this.surname = lastName;
//     this.age = age;
//     this.passwordd = pass;
//     return this;
// }

// const user3 = {};
// user3.izmenPass = function (newPass) {
//     this.passwordd = newPass;
// };
// Gallagan.prototype = user3;

// const user1 = new Gallagan("Andrey", "Gucchievich", 28, "parolchik");
// console.log(user1);
// const user2 = new Gallagan("Danylo", "Samoylov", 19, "sakura");
// console.log(user2);

// user1.izmenPass = "123456789";
// console.log(user1);

//////////////////////////////////////////////////////

function Maga(firstName, lastName, years, pass) {
    this.name = firstName;
    this.surname = lastName;
    this.age = years;
    this.password = pass;
    // this.age1 = function () {
    //     this.age += 1;
    // };
}

Maga.prototype.changePassword = function (newPassword) {
    this.password = newPassword;
};

Maga.prototype.newAge = function () {
    this.age += 1;
};

const aram = new Maga("Aramchik", "Gusenko", 25, "qwerty");
console.log(aram);

const galya = new Maga("Galina", "Garamat", 30, "slovechko");
console.log(galya);

galya.changePassword("lalala");
console.log(galya);

aram.newAge();
console.log(aram);
