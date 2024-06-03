#!/usr/bin/node

const fruits = ["Apple", "Banana", "Orange", "Melon", "Mango", "Berries"];

console.log(`Array: ${fruits}`);
const start = 0;

const numberToDelete = 2;

const removedItems = fruits.splice(start, numberToDelete);
console.log("");
console.log(`New Array: ${fruits}`);
console.log("");
console.log(`Removed Items: ${removedItems}`);

