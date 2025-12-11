// 1
// const costumer = {
//     name: "firstName",
//     surname: "lastName",
//     email: "userEmail",
//     password: "pass",
//     number: "userNumber",
//     address: {
//         city: "userCity",
//         street: "userStreet",
//         building: "userbuilding",
//         apartment: "userApartment",
//     },

//     userNumber1(newNumber) {
//         return (this.number = newNumber);
//     },

//     gender: {},
//     userGender(gender1) {
//         if (gender1 === "man") {
//             this.gender = "male";
//         } else if (gender1 === "woman") {
//             this.gender = "female";
//         } else {
//             this.gender = "error";
//         }
//     },
// };

// costumer.userGender("womannnn");
// console.log(costumer);

// let user1 = costumer.address;
// console.log(user1);

// const newUserNumber = costumer.userNumber1("123456789");
// console.log(newUserNumber);

// delete costumer.address;
// console.log(costumer);

// const costumerCopy1 = { ...costumer };
// console.log(costumerCopy1);

// const costumerCopy2 = Object.assign({}, costumer);
// console.log(costumerCopy2);

// 2
// const cat = {
//     name: "Murka",
//     color: "black",
//     isMale: false,
//     isFurnitureDemage: true,
// };

// for (let key in cat) {
//     console.log(`cat ${key} - ${cat[key]}`);
// }

// 3
// function Book(
//     userAuthor,
//     userName,
//     userYearOfPublication,
//     userEdition,
//     userPrice
// ) {
//     this.autor = userAuthor;
//     this.name = userName;
//     this.yearOfPublication = Number(userYearOfPublication);
//     this.edition = {
//         editionCity: "userCity",
//         editionNumber: "№" + " " + "userEdition",
//     };
//     this.price = Number(userPrice);
// }

// const book1 = new Book("Andrew", "Cujo", 1996, 23, 1000);
// console.log(book1);

// const book2 = new Book("Matvey", "Aroma", 2005, 48, 3500);
// console.log(book2);

// Book.prototype.oldBook = function (oldBook1) {
//     this.oldBook = oldBook1 - this.yearOfPublication;
// };

// book1.oldBook(2000);
// console.log(book1);

// book2.oldBook(2020);
// console.log(book2);

// Book.prototype.newPrice = function (newPrice1) {
//     this.newPrice = newPrice1;
// };

// Book.prototype.discount = function () {
//     let discount1 = this.price - this.newPrice;
//     this.discount = discount1;
// };

// book1.newPrice(1500);
// console.log(book1);

// book1.discount();
// console.log(book1);

// book2.newPrice(2000);
// console.log(book2);

// book2.discount();
// console.log(book2);
