// Задание 1
class Post {
    constructor(id, name, autor, text, date, likes, picture, hashtags) {
        this._id = id;
        this._name = name;
        this._autor = autor;
        this._text = text;
        this._date = date;
        this._likes = likes;
        this._picture = picture;
        this._hashtags = hashtags;
    }
    // 1.2
    newLikes(sign) {
        if (sign === "+") {
            return (this._likes = this._likes + 1);
        } else if (sign === "-") {
            return (this._likes = this._likes - 1);
        }
    }

    // 1.3
    render() {
        const {
            _id,
            _name,
            _autor,
            _text,
            _date,
            _likes,
            _picture,
            _hashtags,
        } = this;

        return `
        <h2> ${_name} </h2>
        <p> ${_autor} </p> | <p> ${_date} </p>
        <p> ${_text} </p>
        <img src="${_picture}">
        <p>${_likes}</p>
        <p>${_hashtags}</p>
        `;
    }

    // 1.4
    set(minLikes, maxLikes) {
        if (this._likes > maxLikes || this._likes < minLikes) {
            return "! The number of likes does NOT meet the requirements !";
        } else {
            return "The number of likes meets the requirements";
        }
    }
    get() {
        return this._likes;
    }

    // 1.5
    hashMethod() {
        const validHash = this._hashtags
            .filter((tag) => hash.includes(tag))
            .slice(0, 6);
        return validHash;
    }
}

const hash = [
    "#shawarma",
    "#delicacy",
    "#cooking",
    "#pork",
    "#recipes",
    "#shaurmadoma",
    "#shaurmalover",
    "#shaurmalife",
];
console.log(hash);

const user1 = new Post(
    1,
    "Shaurma",
    "Ramin",
    "Today, I, Ramin Gadzhibalaev, will tell you how to make an excellent and delicious shawarma with my favorite pork.",
    "12.08.2025",
    4,
    "https:i.pinimg.com/1200x/08/93/9d/08939d2d8c22b78a7278ceb18dd9c22f.jpg",
    ["#shawarma", "#orange", "#cooking", "#pork", "#banan"],
);
console.log(user1);

// 1.1
const newText =
    "You have never eaten anything tastier than my shawarma, I assure you!";
user1._text = newText;
console.log(user1);

console.log(user1.newLikes("-"));

// 1.3
console.log(user1.render());

// 1.4
console.log(user1.set(0, 3));

// 1.5
console.log(user1.hashMethod());
