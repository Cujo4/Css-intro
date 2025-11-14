// // 1
// const a = 10;
// const b = 5;
// const sum1 = a * b;
// console.log(sum1);

// // 2
// const c = 20;
// const d = 10;
// const sum2 = c / d;
// console.log(sum2);

// // 3
// const e = 43;
// const f = 27;
// const sum3 = e + f;
// console.log(sum3);

// // 4
// const meaning1 = 11;
// console.log(typeof meaning1);

// const meaning2 = true;
// console.log(typeof meaning2);

// const meaning3 = "java script";
// console.log(typeof meaning3);

// const meaning4 = "100";
// console.log(typeof meaning4);

// // 5
// let num = 1;
// num += 11;
// console.log(num);
// num -= 11;
// console.log(num);
// num *= 11;
// console.log(num);
// num /= 11;
// console.log(num);
// num += 1;
// console.log(num);
// num -= 1;
// console.log(num);

// /////////////////////////////////////////////////////

// // 1
// let number = Number(prompt("Введите число от 1 до 100"));
// let number1 = number ** 2;
// console.log(number1);

// // 2x
// let number2 = Number(prompt("Введите первое число"));
// let number3 = Number(prompt("Введите второе число"));
// let number4 = (number2 + number3) / 2;
// console.log(number4);

// // 3
// const time = Number(prompt("Введите колличество минут"));
// const time1 = time * 60;
// console.log("В " + time + " минутах - " + time1 + " секунд");
// //////////////////////////////////

// // 4
// // const greeting = "Hello, ";
// // userName = prompt("Укажите своё имя");
// // const naming = greeting + userName;
// // // document.getElementById(greeting).textContent = message;
// // document.getElementById("greeting").textContent = naming;

// //////////////////////////////////////////

// const greeting = "Hello, ";
// const userName = prompt("Укажите своё имя");
// const all = greeting + userName;
// document.getElementById("danil").textContent = all;

// 5
const photoCard = prompt("Укажите ссылку на ваше фото профиля");
const nameCard = prompt("Укажите ваше Имя");
const surnameCard = prompt("Укажите вашу Фамилию");
const namingCard = nameCard + surnameCard;
const ageCard = Number(prompt("Укажите ваш возраст"));
const emailCard = prompt("Укажите вашу электронную почту");
const phNumberCard = prompt("Укажите ваш номер телефона");

document.getElementById("photoCard").src = photoCard;
document.getElementById("nameCard").textContent = nameCard;
document.getElementById("surnameCard").textContent = surnameCard;

document.getElementById("ageCard").textContent = ageCard;
document.getElementById("emailCard").textContent = emailCard;
// document.getElementById("emailCard").href = "email:" + emailCard.card;
document.getElementById("phNumberCard").textContent = phNumberCard;
// document.getElementById("phNumberCard").href = "tel:" + phNumberCard;
