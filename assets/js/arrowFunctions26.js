// arguments - Коллекция для сохранения элементов функции.

// function f1() {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments);
// }

// f1(1, 2);

// function sum() {
//     let sum1 = 0;
//     for (let i = 0; i < arguments.length; i += 1) {
//         sum1 += arguments[i];
//     }
//     return sum1;
// }

// const sum2 = sum(1, 3, 5);
// console.log(sum2);

// function dobut() {
//     let umnozh = 1;
//     for (let i = 0; i < arguments.length; i += 1) {
//         umnozh = arguments[i] * umnozh;
//     }
//     return umnozh;
// }

// const dobut1 = dobut(1, 2, 3, 4, 5);
// console.log(dobut1);

//////////////////////////////////////////

// function f10() {
//     let sum;
//     // let mnozh = 1;
//     if (arguments[0] === "+") {
//         sum = 0;
//         for (let i = 1; i < arguments.length; i += 1) {
//             sum += arguments[i];
//         }
//     } else if (arguments[0] === "*") {
//         sum = 1;
//         for (let i = 1; i < arguments.length; i += 1) {
//             sum *= arguments[i];
//         }
//     } else {
//         console.log("unknow");
//         return;
//     }
//     return sum;
// }

// // if (arguments[0] === "+") {
// //     return sum;
// // } else if (arguments[0] === "*") {
// //     return mnozh;}

// const f11 = f10("+", 1, 2, 3, 4, 5, 6);
// console.log(f11);

////////////////////////////////////////////////////

// rest-параметры

// function f1(a, c, ...argums) {
//     console.log(argums);
// }

// const f2 = f1(1, 4, 3, 5, 10);

////////////////////////////////////

// 1 Вариант
// function sum(...summand) {
//     let sum1 = 0;
//     for (let i = 0; i < summand.length; i += 1) {
//         sum1 += summand[i];
//     }

//     console.log(sum1);
// }

// const sum3 = sum(1, 2, 3, 4, 5, 6, 7);

// // 2 Вариант

// function f10(...znach) {
//     function f11(accum, znach1) {
//         accum += znach1;
//         return accum;
//     }
//     const f12 = znach.reduce(f11);
//     return f12;
// }

// const f13 = f10(1, 2, 3, 4, 5, 6);
// console.log(f13);

///////////////////////////////

// function f1(znak, ...params) {
//     function f2(sum, znach) {
//         sum = sum + znach;
//         return sum;
//     }
//     function f3(sum, znach) {
//         sum = sum * znach;
//         return sum;
//     }
//     const f4 = params.reduce(f2);

//     const f5 = params.reduce(f3);

//     if (znak === "+") {
//         return f4;
//     } else if (znak === "*") {
//         return f5;
//     } else {
//         return "error";
//     }
// }

// const f6 = f1("+", 1, 2, 3, 4, 5);
// console.log(f6);

////////////////////////////////////////////////////

//-------------------------------------------
// function declaration                     |
// function f1 (a, b){};                    |
//                                          |
// function expression                      |
// const f1 = function (a, b) {};           |
//                                          |
// arrow function                           |
// const f1 = (a, b) => {};                 |
//-------------------------------------------

// arrow function (Стрелочная функция)
// 1 Вариант
// const f1 = (a, b) => {
//     return a + b;
// };
// console.log(f1(4, 3));

// // 2 Вариант (СокращённыйБ если только 'return')
// const f2 = (a, b) => a + b;
// console.log(f2(4, 7));
//////////////////////////

// const isAdult = (a) => {
//     if (a < 18) {
//         return "malo";
//     } else {
//         return "norm";
//     }
// };

// console.log(isAdult(19));

// const isAdult = (a) => {
//     return a >= 18;
// };

// console.log(isAdult(17));

// 1 Variant
// const name1 = (firstName, lastName) => {
//     return {
//         firstName1: firstName,
//         lastName1: lastName,
//     };
// };
// console.log(name1("Igor", "Andreev"));

// // 2 Variant
// const name2 = (firstName1, lastName1) => ({
//     firstName2: firstName1,
//     lastName2: lastName1,
// });
// console.log(name2("Andrew", "Sergeev"));

//////////////////////////

// const f10 = {
//     var1: "Supp",
//     var2: "Hello",
// };
// const f11 = "var2";
// const f12 = f10[f11];
// console.log(f12);

//////////////

// const f10 = {
//     var1: "Supp",
//     var2: "Hello",
// };
// const f11 = (privet, userName) => `${f10[privet]} ${userName}`;

// console.log(f11("var2", "Andrew"));
// console.log(f11("var1", "Nastya"));

////////////////////////////////////////////////////////

// Практика

// function Phone(id, brand, model, makeYear, color, isNfc, price) {
//     this.id = id;
//     this.brand = brand;
//     this.model = model;
//     this.makeYear = makeYear;
//     this.color = color;
//     this.isNfc = isNfc;
//     this.price = price;
// }

// const phone1 = new Phone(1, "Samsung", "Galaxy 1", 2020, "blue", true, 10000);
// console.log(phone1);

// const phones1 = [];

// let phonesKolvo = 100;

// for (let i = 0; i < phonesKolvo; i++) {
//     const phones2 = new Phone(
//         i,
//         Math.random() > 0.5 ? "Samsung" : "Iphone",
//         `Series ${Math.trunc(Math.random() * 20)}`,
//         2015 + Math.trunc(Math.random() * 8),
//         Math.random() > 0.5 ? "white" : "black",
//         Math.random() > 0.5,
//         5000 + Math.trunc(Math.random() * 7000)
//     );

//     phones1.push(phones2);
// }

// console.log(phones1);
// // console.table(phones1); - Отображается в консоли в виде таблицы

// function over8000(item, index, array) {
//     return item.price >= 8000;
// }

// const phones8000 = phones1.filter(over8000);
// console.table(phones8000);

// const year2018 = phones1.filter((item) => item.makeYear === 2018);
// console.table(year2018);

// const brand1 = phones1.forEach((item) =>
//     console.table(`${item.brand}: ${item.model}, ${item.makeYear} year`)
// );

// const foundIndex = phones1.findIndex((p) => p.id === 10);

// if (foundIndex !== -1) {
//     phones1.splice(foundIndex, 1);
// }

// console.log(phones1);

// const salesPhones = phones1.map((p) => {
//     const p1 = { ...p };
//     p1.price = Math.round(p1.price * 0.95);
//     return p1;
// });

// console.table(salesPhones);

// phones1
//     .filter((p) => p.isNfc)
//     .forEach((p) => console.log(`${p.brand}: ${p.model} ${p.makeYear}`));

///////////////////////////////////////////////////////

// const qwerty1 = "qwerty";
// console.log(qwerty1.length);

// const a = new Number();
// console.log(a);

// const b = new String("qwerty");
// console.log(b);

// console.log(b[3]);
// console.log(b.length);

// /////////////////////

// // Строки НЕЛЬЗЯ изменять! (Поэтому Y не изменилась на P).
// qwerty1[5] = "p";
// console.log(qwerty1);

// /////////////////////

// const qwerty2 = qwerty1.slice(0, 5) + "m";
// console.log(qwerty2);

// // Проверяет есть ли в начале эта часть
// let qwerty3 = qwerty1.startsWith("qw");
// console.log(qwerty3);

// // Проверяет есть ли в конце эта часть
// qwerty3 = qwerty1.endsWith("nty");
// console.log(qwerty3);

// // Проверяет есть ли хоть где-то в слове эта часть
// qwerty3 = qwerty1.includes("ert");
// console.log(qwerty3);

// // Преобразовует все буквы в большие
// qwerty3 = qwerty1.toUpperCase();
// console.log(qwerty3);

// // Преобразовует все буквы в маленькие
// qwerty3 = qwerty1.toLowerCase();
// console.log(qwerty3);

// /////////////////////////////////////////////////////

// function name1(userName) {
//     const name2 = userName.indexOf(" ");
//     // console.log(name2);

//     return userName[0] + userName.slice(name2 + 1, name2 + 2);
// }
// const name3 = name1("Mudrey Salaganov");
// console.log(name3);

///////////////////////////////////////////////////

// const a = "global";

// function f1() {
//     const a = "local";
//     f2();
// }

// function f2() {
//     console.log(a);
// }

// f1();

//////////------- Замыкание

// const a = "global";

// function f1() {
//     const a = "local";

//     const f2 = function () {
//         console.log(a);
//     };

//     console.log(f2);

//     return f2;
// }

// const F2FromF1 = f1();
// F2FromF1();

////////////////

// function counter() {
//     let i = 0;

//     return function () {
//         return ++i;
//     };
// }
// const counter1 = counter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

//////////////////////////////////////////////////////

// Рекурсия

// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }

//     return n * factorial(n - 1);
// }

// const result = factorial(5);
// console.log(result);

/////////////

// function bracketSeq(n) {
//     if (n === 0) {
//         return;
//     }
//     console.log("(");
//     bracketSeq(n - 1);
//     console.log(")");
// }

// const result1 = bracketSeq(4);

////////////

// function numbers(n) {
//     if (n === -2) {
//         return;
//     }
//     console.log(n);
//     numbers(n - 1);
//     console.log(n);
// }

// const result2 = numbers(4);

////////////////////////////////////////////////////

// function factorial(n) {
//     if (typeof n !== "number") {
//         throw new Error("n must be Number");
//     }
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// const f1 = factorial(5);
// console.log(`Факториал числа '5' = ${f1}`);
// try {
//     console.log(factorial("5"));
// } catch (e) {
//     console.log(e);
// }
// console.log("after ERROR");

////////////////////////////////////////////////////

// 1

// function test() {
//     const f1 = Array.from(arguments);
//     console.log(f1);
// }

// test(5, 10, 15);

// // 2

// const f2 = f1.forEach((e) => {
//     e * 2;
// });
// console.log(f2);

//////// Рекурсия

// 1

// const f1 = function (n) {
//     if (n === 1) {
//         return 1;
//     }
//     const sum = sum + f1(n - 1);
//     return sum;
// };

// const f2 = f1(1, 2, 3, 4, 5);

//////////////

function userAge(age) {
    if (age < 18 || age > 70) {
        throw new RangeError(
            "Ваш возраст не входит в возрастные ограничения: 18 - 70"
        );
    }
    if (!Number.isInteger(age)) {
        throw new Error("Возраст должен быть целым числом");
    }
    if (typeof age !== "number") {
        throw TypeError("Возраст должен быть числом");
    }
    return `Возраст - ${age}`;
}

const userAgeResult = userAge(33);
console.log(userAgeResult);

try {
    const userAgeResult1 = userAge("Anton");
    console.log(userAgeResult1);
} catch (oshibka) {
    console.log(oshibka);
}
