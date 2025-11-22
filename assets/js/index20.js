// 1
console.log("Задание 1: ");
for (a = 25; a >= 0; a -= 1) {
    console.log(a);
}

// 2
console.log("Задание 2: ");
for (b = 10; b <= 50; b += 1) {
    if (b % 5 === 0) {
        console.log(b);
    }
}

// 3
console.log("Задание 3: ");
// sum = 0;
// for (c = 1; c <= 100; c += 1) {
//     sum += c;
// }
// console.log(sum);
let sum = 0;
let n1 = 1;
const n2 = 100;
do {
    sum += n1;
    n1 += 1;
} while (n1 <= n2);
console.log(sum);
