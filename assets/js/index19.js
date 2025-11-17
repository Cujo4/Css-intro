// 1
const isDay = true;
const day = "Сейчас День!";
const night = "Сейчас Ночь!";
const el = document.getElementById("isDay");

if (isDay) {
    el.classList.add("day");
    document.getElementById("isDay").textContent = day;
} else {
    el.classList.add("night");
    document.getElementById("isDay").textContent = night;
}

// 2
const isOnline = true;
const onl = "Сообщение пришло!";
const off =
    "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет";
const onli = document.getElementById("onl");

if (!isOnline) {
    alert(off);
} else {
    onli.classList.add("onli");
    document.getElementById("onl").textContent = onl;
}

// 3
const sum = Number(prompt("Введите сумму покупки"));
if (sum >= 800) {
    alert("Общая сумма покупки: " + (sum - (5 * sum) / 100));
} else if (sum >= 500) {
    alert("Общая сумма покупки: " + (sum - (3 * sum) / 100));
} else {
    alert("Общая сумма покупки: " + sum);
}

// 4

const log = prompt('Вы зарегистрированы? "Нужно укзать ДА или НЕТ"');
const divImg1 = document.getElementById("img1");
const divLog = document.getElementById("log");
const divNoLog = document.getElementById("noLog");
const divImg2 = document.getElementById("img2");
const divName1 = document.getElementById("name1");
const divImg3 = document.getElementById("img3");
const divName2 = document.getElementById("name2");
if (log == "да" || log == "Да" || log == "ДА" || log == "дА") {
    divLog.style.display = "flex";
    divNoLog.style.display = "none";
    const name = prompt('Введите своё имя "Андрей или Екатерина"');
    if (name == "Андрей" || name == "андрей" || name == "АНДРЕЙ") {
        divImg2.style.display = "flex";
        divImg3.style.display = "none";
        divName1.style.display = "flex";
        divName2.style.display = "none";
    } else if (
        name == "Екатерина" ||
        name == "екатерина" ||
        name == "Екатерина"
    ) {
        divImg2.style.display = "none";
        divImg3.style.display = "flex";
        divName1.style.display = "none";
        divName2.style.display = "flex";
    } else {
        alert("Вы указали неверное имя");
        divImg1.style.display = "none";
        divImg3.style.display = "none";
        divName2.style.display = "none";
        divName1.style.display = "none";
        divImg2.style.display = "none";
        divNoLog.style.display = "none";
        divLog.style.display = "none";
    }
} else if (
    log == "нет" ||
    log == "Нет" ||
    log == "НЕТ" ||
    log == "неТ" ||
    log == "нЕт" ||
    log == "НеТ" ||
    log == "нЕТ" ||
    log == "НЕт"
) {
    divLog.style.display = "none";
    divNoLog.style.display = "flex";
} else {
    alert("Ошибка!");
    divImg1.style.display = "none";
    divImg3.style.display = "none";
    divName2.style.display = "none";
    divName1.style.display = "none";
    divImg2.style.display = "none";
    divNoLog.style.display = "none";
    divLog.style.display = "none";
}

// Завдання на switch..case
// 1

switch (Number(prompt("Введите какой по счёту день недели сейчас"))) {
    case 1:
        alert("Понедельник");
        break;
    case 2:
        alert("Вторник");
        break;
    case 3:
        alert("Среда");
        break;
    case 4:
        alert("Четверг");
        break;
    case 5:
        alert("Пятница");
        break;
    case 6:
        alert("Суббота");
        break;
    case 7:
        alert("Воскресенье");
        break;
    default:
        alert("Дня с таким номером не существует");
        break;
}

// 2
const day1 = Number(prompt("Введите любое число месяца"));
if (day1 >= 1 && day1 < 11) {
    alert(day1 + " число - Первая декада");
} else if (day1 > 10 && day1 <= 20) {
    alert(day1 + " число - Вторая декада");
} else if (day1 > 20 && day1 <= 31) {
    alert(day1 + " число - Третья декада");
} else {
    alert("Такого числа в месяце нет");
}
