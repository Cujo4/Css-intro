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

function pov(age) {
    // const pov1 = age >= 18;
    // return pov1;
    // return age >= 18;
    return age >= 18 ? "Совершеннолетний" : "Несовершеннолетний";
}
const age1 = Number(prompt("Возраст введите"));
const age2 = pov(age1);
alert(age2);
// if (pov(age1)) {
//     alert("Совершеннолетний");
// } else {
//     alert("Несовершеннолетний");
// }
