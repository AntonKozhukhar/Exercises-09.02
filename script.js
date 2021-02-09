"use strict";

/* 1. С помощью цикла найдите сумму чисел от 1 до 100. */
/* let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum); */

/* 2. Ввести два числа a и b. Вычислить сумму четных и количество нечетных чисел в диапазоне от a до b. */

/* let a = +prompt("a?");
let b = +prompt("b?");
let sum = 0;
let kol = 0;

for (let i = a; a <= b; a++) {
    if (a % 2 == 0) {
        sum += a;
    } else {
    kol++;
    }
}
console.log(sum);
console.log(kol); */

/* 3. Вывести все четырехзначные числа, сумма цифр которых равна их произведению */

/* let sum = 0;
let dob = 0;
for (let i = 100; i <= 999; i++) {
    let num_10 = i % 10;
    let num_100 = Math.floor(i % 100 / 10);
    let num_1000 = Math.floor(i % 1000 / 100);
    sum = num_10 + num_100 + num_1000;
    dob = num_10 * num_100 * num_1000;
    if (sum == dob) {
        console.log(i);
    }
}
 */

/* 4. Вывести на экран значения функции y=2x + x^2  на отрезке от –5 до 5 с шагом 0,2. */

/* let showMessage = document.getElementById("test");
let y = 0;
let string = "";
for (let x = -5; x <= 5; x += 0.2) {
  y = 2 * x + x ** 2;
  string += `<div>${y.toFixed(2)}</div>`;
}
showMessage.innerHTML = string; */

/* 5. Вывести таблицу умножения числа 5
Пример,
1 х 5 = 5
Использовать document.getElement */

/* let showElement = document.getElementById('test');
let result = 0;
let string = '';

for (let i = 1; i < 10; i++) {
    result = i * 5;
    string += `<div>${i} x 5 = ${result}</div>`
}
showElement.innerHTML = string;
 */
