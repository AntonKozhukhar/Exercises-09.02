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

/* 6. Предложить пользователю указать свой возраст, причём если возраст будет указан некорректно (меньше 5-ти или больше ста лет), то предлагать осуществлять ввод до тех пор, пока не будет введено корректное значение. Далее вывести сообщение:
если возраст меньше 25, то вывести сообщение "Вы молодой"
если возраст меньше 65 – "Вы зрелый", иначе – "Вы мудрый" */

/* let age;
do {
  age = +prompt("How old are you?");
} while (age < 5 || age > 100);

if (age < 25) alert("You are young");
else if (age < 65) alert("You are mature");
else alert("You are wise"); */

/* 7. В небоскребе N этажей и всего один подъезд; на каждом этаже по 3 квартиры; лифт может останавливаться только на нечетных этажах. Человек садится в лифт и набирает номер нужной ему квартиры М. На какой этаж должен доставить лифт пассажира?
После этого спросить у пассажира: "Желает ли он продолжить проезд?" */

/* 8. Необходимо вывести все точные квадраты натуральных чисел, не превосходящие данного числа N.
Пример, N = 15
Ответ будет:
1
4
9 */

let N = +prompt("Enter number");
for (let i = 1; i <= N; i++) {
  if (i ** 2 <= N) {
    console.log(i ** 2);
  }
}
