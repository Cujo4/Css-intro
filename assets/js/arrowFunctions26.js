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

function Phone(id, brand, model, makeYear, color, isNfc, price) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.makeYear = makeYear;
    this.color = color;
    this.isNfc = isNfc;
    this.price = price;
}

const phone1 = new Phone(1, "Samsung", "Galaxy 1", 2020, "blue", true, 10000);
console.log(phone1);

const phones1 = [];

let phonesKolvo = 100;

for (let i = 0; i < phonesKolvo; i++) {
    const phones2 = new Phone(
        i,
        Math.random() > 0.5 ? "Samsung" : "Iphone",
        `Series ${Math.trunc(Math.random() * 20)}`,
        2015 + Math.trunc(Math.random() * 8),
        Math.random() > 0.5 ? "white" : "black",
        Math.random() > 0.5,
        5000 + Math.trunc(Math.random() * 7000)
    );

    phones1.push(phones2);
}

console.log(phones1);
// console.table(phones1); - Отображается в консоли в виде таблицы

function over8000(item, index, array) {
    return item.price >= 8000;
}

const phones8000 = phones1.filter(over8000);
console.table(phones8000);

const year2018 = phones1.filter((item) => item.makeYear === 2018);
console.table(year2018);

const brand1 = phones1.forEach((item) =>
    console.table(`${item.brand}: ${item.model}, ${item.makeYear} year`)
);

const foundIndex = phones1.findIndex((p) => p.id === 10);

if (foundIndex !== -1) {
    phones1.splice(foundIndex, 1);
}

console.log(phones1);

const salesPhones = phones1.map((p) => {
    const p1 = { ...p };
    p1.price = Math.round(p1.price * 0.95);
    return p1;
});

console.table(salesPhones);

phones1
    .filter((p) => p.isNfc)
    .forEach((p) => console.log(`${p.brand}: ${p.model} ${p.makeYear}`));
