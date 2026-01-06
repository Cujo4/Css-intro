function User(id, name, surname, age, isMale, email, isSubscribed) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 10; i++) {
    const user = new User(
        i + 1,
        `Username${i}`,
        `Usersurname${i}`,
        Math.floor(Math.random() * 90),
        Math.random() < 0.5,
        `useremail${i}@gmail.com`,
        Math.random() < 0.5
    );
    users.push(user);
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

console.log(users[2].getFullName());

// 1

const notSubs = [...users];

const notSubs1 = notSubs.filter((u) => !u.isSubscribed);
console.log(notSubs1);

// 2

notSubs.forEach((u) => {
    console.log(u.getFullName());
});

// ИЛИ

const names1 = notSubs.map((u) => u.getFullName());
console.log(names1);

// 3

const girls6To18 = [...users];

const girls = girls6To18.filter((u) => !u.isMale && u.age >= 6 && u.age <= 18);

console.log(girls);

// 4

const deleteEmail = girls6To18.filter(
    (u) => u.email !== "useremail5@gmail.com"
);
console.log(deleteEmail);

// 5

const usersEmail = [...users];

usersEmail[2].email = "lalala@gmail.com";
console.log(usersEmail);

// 6

const subsProcent = [...users];

let sum = 0;

subsProcent.forEach((u) => {
    if (u.isSubscribed) {
        sum += 1;
    }
});

const procent = (sum * 100) / subsProcent.length;

console.log(`Общее колличество пользователей - ${subsProcent.length}`);
console.log(`Колличество подписаных пользователей - ${sum}`);
console.log(`Процент пользователей которые подписаны - ${procent}%`);

// 7

const midAge = [...users];

midAge.forEach((u) => console.log(u.age));

const sumAge = midAge.reduce((sum, userAge) => {
    return (sum += userAge.age);
}, 0);

const midAge1 = sumAge / midAge.length;

console.log(`Средний возраст пользователей (1) - ${midAge1}`);

////////////////////

const midAge2 = midAge.reduce((sum, el) => (sum += el.age), 0) / midAge.length;

console.log(`Средний возраст пользователей (2) - ${midAge2}`);
