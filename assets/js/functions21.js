// //  Обьявление функции
// function Имя_функции(параметры) {
//    // Тело_функции;
// }
// function myFunctionrr(balaklava) {
//     // console.log(`Hello, ${balaklava}`);
//     const userGreeting = `Hello, ${balaklava}`;
//     return userGreeting;
// }

// const a = myFunctionrr("Ivo");
// console.log(a);

// const b = myFunctionrr("Ivan");
// console.log(b);

// // Вызов функции
// // Имя_функции (параметры);
// myFunctionrr("Andrey");
// myFunctionrr("Matvey");

// function sum(a, d) {
//     const result = `${a} + ${d} = ${a + d}`;
//     return result;
//     // return a + d;
// }

// const aaa = Number(prompt("Введите 1 число"));
// const bbb = Number(prompt("Введите 2 число"));

// const resulttt = sum(aaa, bbb);
// console.log(resulttt);

// const ccc = Number(prompt("Введите 3 число"));
// const ddd = Number(prompt("Введите 4 число"));

// const resulttt1 = sum(ccc, ddd);
// console.log(resulttt1);

// function stepen(per, vto) {
//     const resul = `${per} ^ ${vto} = ${per ** vto}`;
//     return resul;
// }

// const one = Number(prompt("1 число"));
// const two = Number(prompt("2 число"));
// const res = stepen(one, two);
// console.log(res);

// function sum(a, b) {
//     let sum1 = 0;
//     for (let i = a; i <= b; i += 1) {
//         sum1 += i;
//     }
//     const sum2 = `Сумма всех чисел в промежутке от ${a} до ${b} = ${sum1}`;
//     return sum2;
// }

// const aa = Number(prompt("Число 1"));
// const bb = Number(prompt("Число 2"));
// const sum3 = sum(aa, bb);
// console.log(sum3);

// const cc = Number(prompt("Число 3"));
// const dd = Number(prompt("Число 4"));
// const sum4 = sum(cc, dd);
// console.log(sum4);

// function pov(age) {
//     if (age < 18) {
//         alert("Несовершеннолетний");
//     } else {
//         alert("Совершеннолетний");
//     }
//     return false;
// }

// const age1 = Number(prompt("Укажите свой возраст"));
// const age2 = pov(age1);
// console.log(age2);

// function pov(age) {
//     // const pov1 = age >= 18;
//     // return pov1;
//     // return age >= 18;
//     return age >= 18 ? "Совершеннолетний" : "Несовершеннолетний";
// }
// const age1 = Number(prompt("Возраст введите"));
// const age2 = pov(age1);
// alert(age2);
// // if (pov(age1)) {
// //     alert("Совершеннолетний");
// // } else {
// //     alert("Несовершеннолетний");
// // }

// const baran = function (a, b) {
//     return a ** b;
// };

// const c = Number(prompt("Введиет число 1"));
// const d = Number(prompt("Введиет число 2"));
// alert(baran(c, d));

// function sum(a, b = 1) {
//     return a + b;
// }

// console.log(sum(8, 7));
// console.log(sum(10));

// /**
//  *
//  * @param {number} a
//  * @param {number} b
//  * @returns {number}
//  */
// function sum(a = 2, b) {
//     if (a === undefined || a === "") {
//         a = 2;
//     }
//     let sum1 = 0;
//     for (lяet i = a; i <= b; i += 1) {
//         sum1 += i;
//     }
//     return sum1;
// }

// let c = Number(prompt("Число 1"));
// let d = Number(prompt("Число 2"));
// alert(sum(c, d));

// function sum(a, b) {
//     return a ** b;
// }

// const c = Number(5);
// const d = Number(2);
// const summ = sum(c, d);
// console.log(summ);

// function sum(a, b) {
//     let prib = 0;
//     for (i = a; i <= b; i += 1) {
//         prib += i;
//     }
//     console.log(`Сумма чисел от ${a} до ${b} = ${prib}`);
//     return prib;
// }

// const c = Number(prompt("Первое число"));
// const d = Number(prompt("Второе число"));
// const summ = sum(c, d);

// function isAdult(a) {
//     return a >= 18;
// }

// const b = Number(17);
// console.log(isAdult(b));

// const sum = function (a, b = 1) {
//     console.log(`${a} + ${b} = ${a + b}`);
//     return a + b;
// };

// const c = Number(5);

// const sum1 = sum(c);

/**
 *
 * @param {number} b -second
 * @param {string} a - first
 * @returns
 */

const sum = function (b, a = 2) {
    let plus = 0;
    for (i = a; i <= b; i += 1) {
        plus += i;
    }
    console.log(`Сумма чисел от ${a} до ${b} = ${plus}`);
    return plus;
};

let c = Number(3);
let d = Number(9);
const sum1 = sum(d);
