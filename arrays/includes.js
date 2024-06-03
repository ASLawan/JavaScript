#!/usr/bin/node

const fruits = ["Apple", "Banana", "Melon", "Grapes"];

const banana = fruits.includes("Banana");
const cherry = fruits.includes("Cherry");
const melon = fruits.includes("Melon");

console.log(`Fruits array contains 'Banana': ${banana}`);
console.log(`Fruits array contains 'Cherry': ${cherry}`);
console.log(`Fruits array contains 'Melon': ${melon}`);
