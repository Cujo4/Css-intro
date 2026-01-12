// 1

function pow(base, exponent) {
    if (typeof base !== "number" || typeof exponent !== "number") {
        throw TypeError("Оба значения должны быть числами");
    }

    if (!Number.isInteger(base) || !Number.isInteger(exponent)) {
        throw TypeError("Числа должны быть целыми");
    }
    if (exponent === 0) {
        return 1;
    }
    const result = base * pow(base, exponent - 1);

    return result;
}

try {
    const pow1 = pow(2, 5.3);
    console.log(`Результат = ${pow1}`);
} catch (error) {
    console.log(error);
    if (error.name === "TypeError") {
        console.log(`Тип ошибки - TypeError`);
    }
}

// 2

function email(em) {
    if (!em.includes("@")) {
        throw SyntaxError('В назавании должен присутствовать символ "@"');
    } else if (em.startsWith("@") || em.endsWith("@")) {
        throw SyntaxError(
            'Символ "@" не должен находиться в начале либо в конце вашего эмейла'
        );
    } else if (typeof em !== "string") {
        throw TypeError("Ваш эмейл должен быть строкой");
    }
    return em;
}

try {
    const userEmail = email("baraban@gmail.com");
    console.log(userEmail);
} catch (err) {
    console.log(err);
    if (err.name === "TypeError") {
        console.log(`Тип ошибки - TypeError`);
    } else if (err.name === "SyntaxError") {
        console.log(`Тип ошибки - SyntaxError`);
    }
}

try {
    const userEmail = email("@baraban@gmail.com");
    console.log(userEmail);
} catch (err) {
    console.log(err);
    if (err.name === "TypeError") {
        console.log(`Тип ошибки - TypeError`);
    } else if (err.name === "SyntaxError") {
        console.log(`Тип ошибки - SyntaxError`);
    }
}

try {
    const userEmail = email("baraban@gmail.com@");
    console.log(userEmail);
} catch (err) {
    console.log(err);
    if (err.name === "TypeError") {
        console.log(`Тип ошибки - TypeError`);
    } else if (err.name === "SyntaxError") {
        console.log(`Тип ошибки - SyntaxError`);
    }
}

try {
    const userEmail = email("barabangmail.com");
    console.log(userEmail);
} catch (err) {
    console.log(err);
    if (err.name === "TypeError") {
        console.log(`Тип ошибки - TypeError`);
    } else if (err.name === "SyntaxError") {
        console.log(`Тип ошибки - SyntaxError`);
    }
}
