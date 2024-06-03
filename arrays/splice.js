#!/usr/bin/node

const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];

const start = -3;

console.log(`Fruits array: ${fruits}`)
const removedItems = fruits.splice(start);

console.log(`Fruits array after removal: ${fruits}`);
console.log(`Fruits renoved from array: ${removedItems}`);
