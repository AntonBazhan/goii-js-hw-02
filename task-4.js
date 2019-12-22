"use strict";

const formatString = function(string) {
  const words = string.split("");
  let charactersWords;

  if (words.length > 40) {
    charactersWords = string.slice(0, 40) + "...";
  } else {
    charactersWords = string;
  }
  return charactersWords;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
