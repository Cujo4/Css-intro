// // Array - упорядоченная коллекция

// // --------------------- Создание массива
// const arr1 = new Array();
// const arr2 = Array();
// const arr3 = [];

// const users = [
//     { id: 1, name: "Test" },
//     { id: 2, name: "Ivo" },
// ];

// console.log(users);
// console.log("users.length - ", users.length);

// const year = ["january", "fabruary", "march"];

// console.log(year);

// // Перебор обьектов циклами

// for (let i = 0; i < year.length; i += 1) {
//     console.log(year[i]);
// }

// document.write("User List");
// document.write("<ul>");
// for (let i = 0; i < year.length; i += 1) {
//     document.write(`<li>${year[i]}</li>`);
// }
// document.write(`<li>${users[0].name} и ${users[1].id}</li>`);
// document.write("</ul>");

// console.log(users[0].name);
// console.log(users[1].id);

// ////////////////////////////////////

// // const numbers = [{ num1: -5 }, { num2: 5 }];

// // for (let i = numbers[0].num1; i <= numbers[1].num2; i += 1) {
// //     if (i >= 0) {
// //         console.log(i);
// //     }
// // }

// // const numbers1 = [10, 48, 0, -12, -36, 89, -0];

// // for (let i = 0; i < numbers1.length; i += 1) {
// //     if (numbers1[i] > 0) {
// //         console.log(numbers1[i]);
// //     }
// // }

// // console.log(numbers1.length);

// const nums = [1, 10, 19, 5, 15, Math.random()];

// console.log(nums);

// function numsSum(number) {
//     let sum = 0;
//     for (let i = 0; i < number.length; i += 1) {
//         sum += number[i];
//     }
//     return sum;
// }

// const numsSum1 = numsSum(nums);
// console.log(numsSum1);

// // Перебор элементов специализироваными циклами
// // for...in - key; for...of - items;

// for (const index in nums) {
//     console.log(index, nums[index]);
// }

// for (const index1 of nums) {
//     console.log(index1);
// }

// const names = [
//     { name: "Galya", age: 23 },
//     { name: "Ivan", age: 23 },
//     { name: "Anatoliy", age: 23 },
//     { name: "Masha", age: 23 },
// ];

// for (const name1 of names) {
//     console.log(name1.name);
// }

// // Копирование

// const lala = [1, 5, 10];

// // 1
// const lalaCopy1 = Array.from(lala);
// const lalaCopy2 = [...lala];

/////////////////////////////////////////////////////

// '+'... = 'Number()'

// const number = [10, 15, 25];
// number.push(40); // Добавляет элемент в конец массива;
// number.push(50);
// const removedElementEnd = number.pop(); // Удаляет элемент из конца массива;
// console.log("Удалён последний элемент - ", removedElementEnd);
// const removedElementStart = number.shift(); // Удаляет элемент из начала массива;
// console.log("Удалён первый элемент - ", removedElementStart);
// number.unshift(33); // Добавляет элемент в начало массива;
// console.log(number);

// // const numberEnd = +prompt("Введите колличество чисел");
// // const number1 = [];

// // for (let i = 0; i < numberEnd; i += 1) {
// //     const number2 = +prompt("Введите любое число");
// //     number1.push(number2);
// // }
// // console.log(number1);

// //////////////////////////////////////////////////

// const chislo = [100, 200, 300, 400, 500];
// console.log(chislo);

// const chisloCopy = chislo.slice(); // Полностью копирует элемент
// console.log(chisloCopy);
// const chisloCopy1 = chislo.slice(2); // Копирует элементы от указанного числа до конца
// console.log(chisloCopy1);
// const chisloCopy2 = chislo.slice(1, 4); //Копирует элементы от числа которое указанно первым до числа которое указано последним НЕ включительно
// console.log(chisloCopy2);
// const chisloDelete = chislo.splice(2, 2); //Удаляет элементы из массива, ПЕРВОЕ число - с какого элемента начинать удаление, ВТОРОЕ число - колличество элементов которые нужно удалить.
// console.log(chislo);
// console.log(chisloDelete); //Выводит удалённые числа

// // Конкатенация
// const arr10 = [5, 10, 15];
// const arr20 = [1, 3, 6];
// const arr30 = arr10.concat(arr20);
// console.log(arr30);
// //////// или ////////
// const arr40 = [...arr10, ...arr20];
// console.log(arr40);

////////////////////////////////////////////////

//  Понятие колбэка
// Колбэк - это функция которая пердаётся другой функции и выполняется в ней

// function f1(cb, value) {
//     cb(value);
// }

// f1(console.log, "Wassup babanki");
// f1(alert, "Hello");

////////////////////////////////////

// forEach - выполняет колбэк последовательно для всех элементов массива.
// map - обрабатывает информацию в функции и возвращает через return наружу.
// filter - фильтрует данные из массива согласно условию в функции.
// findIndex - выводит индекс элемента который соответвует условию.

// const arr100 = [5, 10, 15];

// function printItem(item, index, array) {
//     console.log(`item[${index}] = ${item}`);
//     console.log(array);
// }
// arr100.forEach(printItem);

const arr200 = [1, 2, 3];

function mnozh(item, index, array) {
    // console.log(`${index}: ${item}^2 = ${item ** 2}`);
    return item ** 2;
}

function minus(item, index, array) {
    return -item;
}

const arr300 = arr200.map(mnozh);
const arr400 = arr200.map(minus);

console.log(arr200);
console.log(arr300);
console.log(arr400);

const users1 = [
    { id: 1, name: "Igor" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sasha" },
];

function names(item, index, array) {
    return item.name;
}

const names1 = users1.map(names);
console.log(names1);

const chisla = [1, 18, -49, 14, -12, -0, 0];

function chisla1(chi) {
    return chi > 0;
}

const chisla2 = chisla.filter(chisla1);
console.log(chisla2);

function isFourteen(item) {
    return item === 14;
}
const isFourteen1 = chisla.findIndex(isFourteen);
console.log(`Index 14 = ${isFourteen1}`);
