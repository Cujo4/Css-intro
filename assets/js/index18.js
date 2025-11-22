// let sideCount = 1;
// const SIDE_AMOUNT = 4;
// while (sideCount <= SIDE_AMOUNT) {
//     console.log("Прямо");
//     console.log("Налево");
//     sideCount += 1;
// }

// // while - Проверка условия потом действие;
// // do - Действие потом проверка условия;

// let n = Number(prompt("Введите число"));
// while (!Number.isFinite(n)) {
//     n = Number(prompt("Введите другое число"));
// }
// console.log(n ** 2);

// // let n = null;
// // do {
// //     n = Number(prompt("Введите число"));
// // } while (!Number.isFinite(n));
// // console.log(n ** 2);

// ////////////////////////////////////////////////////////

// let n1 = 0;
// const n2 = 10;

// do {
//     n1 += 1;
//     console.log(n1);
// } while (n1 < n2);

//////////////////////////////////////////////////////

// let num1 = 1;
// let num2 = 1;
// const num3 = 10;
// while (num1 <= num3) {
//     num2 = num2 * num1;
//     num1 += 1;
// }
// console.log(num2);

//////////////////////////////////////////////////////

// const n2 = 6;
// let n3 = 0;

// for (n1 = 1; n1 <= n2; n1 += 1) {
//     n3 = n3 + n1;
// }
// console.log(n3);

// const n1 = 4;
// const n2 = 5;
// console.log(`n3 = ${n1} + ${n2} = ${n1 + n2}`);

//////////////////////////////////////////////////////

// // пароль
// const pass = "12345";
// let min = 1;
// const max = 3;
// let vvod = "";

// do {
//     vvod = prompt("Введите пароль");
//     if (pass === vvod) {
//         break;
//     }
//     min += 1;
// } while (min <= max);
// if (pass === vvod) {
//     alert("Пароль верный");
// } else {
//     alert("Пароль неверный");
// }
// let sum = 0;
// for (let i = 3; i <= 27; i += 2) {
//     sum += i;
// }
// console.log("sa = ", sum / 13);

// console.log(`Hello, ${prompt("Введите своё имя")}!`);

////////////////////////////////////1
// let sprobaStart = 1;
// const sprobaEnd = 3;
// const pass = "1234";
// let passVvod = "";
// do {
// passVvod = prompt("Введите пароль");
//     if (pass === passVvod) {
//         break;
//     }
//     sprobaStart += 1;
// } while (sprobaStart <= sprobaEnd);
// if (pass === passVvod) {
//     alert("Пароль верный!");
// } else {
//     alert("Пароль неверный!");
// }
///////////////////////////////2

let sprobaStart = 1;
const sprobaEnd = 3;
const pass = "1234";
let isPassCorrect = false;
do {
    isPassCorrect = prompt("Введите пароль") === pass;
} while (++sprobaStart <= sprobaEnd && !isPassCorrect);
alert(`Пароль очень ${isPassCorrect ? "верный!" : "неверный!"}`);
// if (isPassCorrect) {
//     alert("Пароль верный!");
// } else {
//     alert("Пароль неверный!");
// }
// true ? alert("Пароль верный!") : alert("Пароль неверный!");
