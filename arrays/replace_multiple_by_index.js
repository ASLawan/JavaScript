#!/usr/bin/node

const fruits = ["Apple", "Banana", "Orange", "Melon", "Cherry", "Grapes"];

const start = fruits.indexOf("Banana");

const numberToRemove = 3;
console.log(`Fruits array: ${fruits}`);
const itemsReplaced = fruits.splice(start, numberToRemove, "Mango", "Berries", "Passion fruit");
console.log("");
console.log(`Items Removed: ${itemsReplaced}`);
console.log("");
console.log(`New fruits array: ${fruits}`);
