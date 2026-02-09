// 1
const mas = new Map([
    [1, "first"],
    [3, "third"],
]);
console.log(mas);

// 1.1
console.log(`mas.size = ${mas.size}`);

// 1.2
const del = mas.delete(3);
console.log(mas);

const add = mas.set(4, "four");
console.log(mas);

// 1.3
const found = mas.has(1);
console.log(found);

// 1.4
const dva = mas.has(2);
console.log(dva);

// 1.5
const keys = mas.keys();
console.log(keys);

const values = mas.values();
console.log(values);

/////////////////////////////

// 2
mas.set(3, "third");
mas.set(2, "second");

const text1 =
    "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.";

function replaceNumbers(text, map) {
    const words = text.split(" ");
    console.log(words);

    const result = words.map((word) => {
        const num = Number(word);
        return !Number.isNaN(num) && map.has(num) ? map.get(num) : word;
    });

    return result.join(" ");
}

console.log(replaceNumbers(text1, mas));
