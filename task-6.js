"use strict";

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число");

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  input = Number(input);
  if (Number.isNaN(input)) {
    alert("Было введено не число,попробуйте еще раз");
    continue;
  }
  numbers.push(input);

  total += Number(input);
}

console.log(numbers);
