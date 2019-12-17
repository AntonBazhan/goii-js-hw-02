"use strict";

const logItems = function(array) {
  for (const item of array) {
    let i = array.indexOf(item);

    i = i + 1;

    const numbering = i + " - " + item;

    console.log(numbering);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
