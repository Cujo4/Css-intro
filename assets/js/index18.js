let sideCount = 1;
const SIDE_AMOUNT = 4;
while (sideCount <= SIDE_AMOUNT) {
    console.log("Прямо");
    console.log("Налево");
    sideCount += 1;
}

// while - Проверка условия потом действие;
// do - Действие потом проверка условия;

let n = Number(prompt("Введите число"));
while (!Number.isFinite(n)) {
    n = Number(prompt("Введите другое число"));
}
console.log(n ** 2);

// let n = null;
// do {
//     n = Number(prompt("Введите число"));
// } while (!Number.isFinite(n));
// console.log(n ** 2);

////////////////////////////////////////////////////////

let n1 = 0;
const n2 = 10;

do {
    n1 += 1;
    console.log(n1);
} while (n1 < n2);
