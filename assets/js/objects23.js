const firstName = "Sergey";
const lastName = "Zinchenko";
const age = 23;

// Обьекты
const obj1 = {}; // Синтаксический сахар
const obj2 = Object();
const obj3 = new Object();

console.log(obj1);
// alert(obj2); - С помощью alert нельзя вывести.

// Инициализация
// key = value
const user = {
    firstName: "Andrey",
    lastName: "Makarov",
    age: 25,
    pass: "12345",
};
console.log(user);

// Доступ к свойствам; Операция "."(ТОЧКА)

const userName = user.lastName;
console.log(userName);

user.age = 27;
console.log(user);

// Добавление свойств
user.email = "temp.serget4@gmail.com";
console.log(user);

// Удаление свойств
delete user.pass;
console.log(user);

const a = {
    model: "Mercedes",
    year: 2024,
    color: "black",
};
console.log(a);

a.color = "yellow";
console.log(a);

delete a.year;
console.log(a);

a.name = "Amar";
a.lastName = "Baraban";
console.log(a);

// Копирование обьектов
// 1
const a1 = Object.assign({}, a);
console.log(a1);
console.log(a === a1);
// 2
const a2 = { ...a };
console.log(a2);
console.log(a === a2);
