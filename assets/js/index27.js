// 0

const nums = [];
const numberOfNums = 10;
function numbers(numbers1) {
    for (let i = 0; i < numberOfNums; i++) {
        numbers1.push(Math.trunc(Math.random() * 30));
    }
    return numbers1;
}

numbers(nums);
console.log(nums);

// 1

const numsCopy1 = [...nums];
numsCopy1.shift();
console.log(numsCopy1);

numsCopy1.pop();
console.log(numsCopy1);

numsCopy1.unshift(200);
console.log(numsCopy1);

numsCopy1.push(300);
console.log(numsCopy1);

// 2, 3

const numsCopy2 = [...nums];
console.log(`Size = ${numsCopy2.length}`);

// 4

const nums1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function par(nums2) {
    const newNums1 = [];
    for (let i = 0; i < nums2.length; i++) {
        if (i % 2 === 0) {
            newNums1.push({ index: i, value: nums2[i] });
        }
    }
    return newNums1;
}

const nums2 = par(nums1);
console.log(nums2);

// 5.1

// function dobutok(dobutok1) {
//     let mnozh = 1;
//     for (let i = 0; i < dobutok1.length; i++) {
//         mnozh *= dobutok1[i];
//     }
//     return mnozh;
// }

// const nums3 = dobutok(nums1);
// console.log(nums3);

// 5.2

const dobutok = nums1.reduce((mnozh, n) => mnozh * n, 1);
console.log(dobutok);

// 6

// 8

const nums3 = [-5, -4, -3, -2, -1, -0, 0, 1, 2, 3, 4, 5];

const nums3OutNull = nums3.filter((n) => n !== 0);
console.log(nums3OutNull);

// 9

const nums3Podel100 = nums3.map((n) => n / 100);
console.log(nums3Podel100);

// 10

nums3.forEach((n) => {
    console.log(n ** 3);
});

// 11

const nums4 = [-11, -5, -1, 0, 2, 5, 10, 15];

const nums4Delete = nums4.findIndex((n) => n ** 2 === 100);
if (nums4Delete !== -1) {
    console.log(
        `Элемент, квадрат которого равен 100 находится под индексом ${nums4Delete} и равен ${nums4[nums4Delete]}`
    );
} else {
    console.log(`Такого элемента нет!`);
}

const nums4Copy = [...nums4];

const nums4CopyDelete = nums4Copy.splice(nums4Delete, 1);
console.log(
    `Удалённый элемент с индексом ${nums4Delete} - число ${nums4CopyDelete}`
);

console.log(nums4Copy);
