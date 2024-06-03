#!usr/bin/node

const fruits = ["Apple", "Banana", "Oranges", "Melon", "Mango"];

const start = fruits.indexOf("Oranges");

const numberToRemove = 1;

console.log(`Fruits array: ${fruits}`);

const removedItems = fruits.splice(start, numberToRemove);
console.log("");
console.log(`Removed Items: ${removedItems}`);
console.log("");
console.log(`New array: ${fruits}`);
