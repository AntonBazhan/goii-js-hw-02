"use strict";

const checkForSpam = function(message) {
  const words = message.split(" ");
  const lowerCase = message.toLowerCase();
  const backString = typeof lowerCase;
  const check = lowerCase.includes("spam") || lowerCase.includes("sale");
  return check;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
