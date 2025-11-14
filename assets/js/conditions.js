// const isEnoughMoney = true;

// if (isEnoughMoney) {
//     console.log("Достаточно средств!");
// } else {
//     console.log("Недостаточно средств!");
// }

// // Операторы сравнения: >, <, >=, <=, ==/===, !=/!==
// && - Должно быть верным два условия
// || - Должно быть верным хотябы одно условие
// !условие(!true = false) - НЕ условие

// falsy: 0, '', false, NaN, undefined, null

// const age = 18;

// console.log("age = 18:");
// console.log("age > 18", age > 18);
// console.log("age < 18", age < 18);
// console.log("age >= 18", age >= 18);
// console.log("age <= 18", age <= 18);
// console.log("age == 18", age == 18);
// console.log("age === 18", age === 18);
// console.log("age != 18", age != 18);
// console.log("age !== 18", age !== 18);

// console.log("age !== '18'", age !== "18");
// console.log("age !== 18", age !== 18);
// console.log("age != '18'", age != "18");
// console.log("age != 18", age != 18);

// console.log("age === '18'", age === "18");
// console.log("age === 18", age === 18);
// console.log("age == '18'", age == "18");
// console.log("age == 18", age == 18);

// const agem = Number(prompt("Укажите свой возраст"));

// if (agem < 18) {
//     console.log("Не допущен");
// } else {
//     console.log("Допущен");
// }

const num1 = Number(prompt("Введите первое число"));
const num2 = Number(prompt("Введите второе число"));
const num3 = prompt("Введите символ '+', чтобы посчитать сумму этих чисел");
if (num3 === "+") {
    console.log(num1 + num2);
    alert(num1 + num2);
} else {
    // console.log(num2 - num1);
    if (num1 > num2) {
        console.log(num1 - num2);
        alert(num1 - num2);
    } else {
        console.log(num2 - num1);
        alert(num2 - num1);
    }
}

const day = "Saturday";
const date = 13;
if (day === "Friday" && date === 13) {
    console.log("Скидка!");
}
