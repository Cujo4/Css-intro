// alert("Hello world!");

// console.log("Hi)))");

// color: white; - однострочный комментарий;

// /* color: white; */ - многострочный комментарий;

// let userName = "Test"; // let - Можно менять значение;

// console.log("userName :>>", userName);

// userName = "235, 5, 17";

// console.log(userName);

// const constValue = 10; // const - Нельзя менять значение;

// console.log(constValue);

// const constOne = "lalala";

// console.log("arava'Gucci'");

// // Числа
// // Целые - 4, 6, 28;
// // Зафиксированые точкой - 5.8, 23.7;
// // С плавающей запятой - 0.0000000000000005 = 0.5*10^15 = 0.5e-15
// // 5000000000000 = 5*10^12 = 5e12;

// // bigint
// const rapa = 11111111111111111111111111111111111111111n;
// console.log(rapa);

// // boolean True(+) False(-)
// const isOdd = false;
// console.log(isOdd);

// // null : null - пустая коробка со свободным местом
// const nullValue = null;
// console.log(nullValue);

// // undefined : undefined - пустая коробка без свободного места
// let value;
// console.log(value);

// // symbol
// let symbolValue = Symbol("foo");
// console.log(symbolValue);

// symbolValue = Symbol("foo1");
// console.log(symbolValue);

// // object
// const objValue = {};
// console.log(objValue);

// /////////////////////////////////////////////////////////////////

// // Определение типа данных
// // typeof
// console.log("typeof 10:", typeof 10);
// console.log("typeof objValue:", typeof objValue);
// console.log(typeof 11n);
// console.log(typeof "11n");
// console.log(typeof true);
// console.log(typeof "true");
// console.log(null);

// let age = 19;
// const name = "Avraam";
// console.log(age);
// console.log(name);

// let a = 10 % 3;

// console.log(a);

// let b = 10 ** 2;

// console.log(b);

// console.log(Math.sqrt(25));

// console.log(Math.pow(4, 2));

// Конкатенация (склеивание)
const greeting = "You are ";

const age = prompt("How old are you?");

console.log(age);

console.log(greeting + age);

// Сокращённые операции - += -= *= /=

let sum = 5;
sum *= 5;
console.log(sum);

// Инкремент постфикс
let x = 10;
const y = x++;
console.log("x = ", x);
console.log("y = ", y);

// Инкремент префикс
let x1 = 10;
const y1 = ++x1;
console.log("x1 = ", x1);
console.log("y1 = ", y1);

// Декремент: --x, x--

const nam1 = Number("20"); // Number или +
console.log(nam1);

let num1 = Number(300);
let num2 = Number(prompt("Введите число 100"));
let num3 = Number(800);
const sum3 = num1 + num2 + num3;
console.log(sum3);

let n1 = Number(10);
let n2 = Number(40);
const n3 = n1 + n2;
console.log(n3);

const person = {};
console.log(person);

person.name = Alex;
person.age = 18;
console.log(person);

console.log(person.name);
console.log(person.age);
