// 1
// function isWorkingAgePerson(age) {
//     return age >= 18 && age <= 64;
// }

// const age1 = Number(prompt("Введите ваш возраст"));
// const age2 = isWorkingAgePerson(age1);
// console.log(age2);

// 2
// function checkMultiplicity(a, b) {
//     return a % b === 0;
// }

// const c = Number(prompt("Введите 1 число"));
// const d = Number(prompt("Введите 2 число"));
// const mult = checkMultiplicity(c, d);
// console.log(mult);

// 3
// function triangle(a, b, c) {
//     return a + b > c && a + c > b && b + c > a;
// }

// const d = Number(prompt("Введите размер 1 стороны треугольника"));
// const e = Number(prompt("Введите размер 2 стороны треугольника"));
// const f = Number(prompt("Введите размер 3 стороны треугольника"));
// const trian = triangle(d, e, f);
// console.log(trian);

// 4
// function S(figure, a, b, c) {
//     let d = 0;
//     if (figure === 1) {
//         let a = Number(prompt("Введите основание"));
//         let b = Number(prompt("Введите высоту"));
//         d = (1 / 2) * (a * b);
//     } else if (figure === 2) {
//         a = Number(prompt("Введите длинну"));
//         b = Number(prompt("Введите ширину"));
//         d = a * b;
//     } else if (figure === 3) {
//         a = Number(prompt("Введите радиус основания"));
//         b = Number(prompt("Введите образующую"));
//         d = Math.PI * a * (a + b);
//     } else if (figure === 4) {
//         a = Number(prompt("Введите длинну"));
//         b = Number(prompt("Введите ширину"));
//         let c = Number(prompt("Введите высоту"));
//         d = 2 * (a * b + b * c + a * c);
//     } else {
//         alert("Такого числа в списке нет!");
//     }
//     return d;
// }

// const e = Number(
//     prompt(`Выберите фигуру:
//     1 - Треугольник
//     2 - Прямоугольник
//     3 - Конус
//     4 - Параллелепипед`)
// );
// const f = S(e);
// console.log(f);

// 5
// function prost(num) {
//     if (num <= 1) return false;

//     for (let i = 2; i < num; i += 1) {
//         if (num % i === 0) {
//         return false;
//         }
//     }
//     return true;
// }

// const num1 = Number(prompt("Введите число"));
// const num2 = prost(num1);
// console.log(num2);

// 6
// const img1 = prompt("Укажите ссылку на фото вашего товара");
// const name1 = prompt("Укажите название вашего товара");
// const description1 = prompt("Опишите ваш товар");
// const price1 = Number(prompt("Укажите цену вашего товара БЕЗ скидки"));
// const discount1 = Number(
//     prompt(
//         "Укажите цену вашего товара со скидкой (Если скидки нет, то укажите актуальную цену)"
//     )
// );
// const discount2 = `Новая цена: ${discount1} грн`;

// const percent1 = ((price1 - discount1) * 100) / price1;
// const percent2 = ((discount1 - price1) / price1) * 100;
// function percent3(a, b) {
//     if (a > b) return `Цена уменьшилась на ${percent1.toFixed(0)}%`;
//     else if (a < b) return `Цена увеличилась на ${percent2.toFixed(0)}%`;
//     else return `Цена не изменилась`;
// }
// const a33 = price1;
// const b33 = discount1;
// const d33 = percent3(price1, discount1);

// function pricce(a, b) {
//     if (a === b) {
//         return `Цена: ${a} грн`;
//     } else if (a > b) {
//         return `Старая цена: ${a} грн`;
//     } else if (a < b) {
//         return `Старая цена: ${a} грн`;
//     }
// }
// const a1 = price1;
// const b1 = discount1;
// const c1 = percent3;
// const d1 = pricce(price1, discount1);

// document.getElementById("img").src = img1;
// document.getElementById("name").textContent = name1;
// document.getElementById("description").textContent = description1;
// document.getElementById("price").textContent = d1;
// document.getElementById("percent").textContent = d33;

// 7 (3)
// const triangle = function triangle1(a, b, c) {
//     return a + b > c && a + c > b && b + c > a;
// };

// const d = Number(prompt("Введите размер 1 стороны треугольника"));
// const e = Number(prompt("Введите размер 2 стороны треугольника"));
// const f = Number(prompt("Введите размер 3 стороны треугольника"));
// const trian = triangle(d, e, f);
// console.log(trian);
// const priceStyle = `${
//     price1 === discount1 ? "" : "text-decoration: line-through;"
// }`;
// const newPriceBlock =
//     price1 === discount1
//         ? ""
//         : `<p id="discount">${d33}</p>
//     <p id="percent">${discount1}</p>`;

// document.writeln(`
//   <div id="div" class="div">
//     <img src=${img1} alt="Photo" id="img" class="img" />
//     <p id="name"> ${name1}</p>
//     <p id="description"> ${description1}</p>
//     <p id="price"
//        style="${priceStyle}">
//       ${d1}
//     </p>
//     ${newPriceBlock}
//   </div>
// `);

const img1 = prompt("Укажите ссылку на фото вашего товара");
const name1 = prompt("Укажите название вашего товара");
const description1 = prompt("Опишите ваш товар");
const price1 = Number(prompt("Укажите цену вашего товара БЕЗ скидки"));
const discount1 = Number(
    prompt(
        "Укажите цену вашего товара со скидкой (Если скидки нет, то укажите актуальную цену)"
    )
);
const discount2 = `Новая цена: ${discount1} грн`;

const percent1 = ((price1 - discount1) * 100) / price1;
const percent2 = ((discount1 - price1) / price1) * 100;
function percent3(a, b) {
    if (a > b) return `Цена уменьшилась на ${percent1.toFixed(0)}%`;
    else if (a < b) return `Цена увеличилась на ${percent2.toFixed(0)}%`;
    else return `Цена не изменилась`;
}

const percent4 = percent3(price1, discount1);
const price5 = price1;

document.writeln(`
   <div id="div" class="div">
     <img src= alt="Photo" id="img" class="img" />
     <p id="name"> </p>
     <p id="description"> </p>
     <p id="price">
      ${
          //      price1 === discount1
          //          ? `<p>${price1}`
          //          : `</p>
          //          <p><span style="text-decoration: line-through;">${price1}</span></p>
          //          <p>${discount1} </p>
          //          <p>${percent4}</p>`
          //  }
          //

          price1 === discount1
              ? `<p>${price1}</p>`
              : `<p class='allo'>${price5}</p>
                 <p>${discount1}</p>
                 <p>${percent4}</p>`
      }

     
   </div>
 `);
