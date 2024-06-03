#!/usr/bin/node

const fruits = ["Apple", "Banana", "Orange", "Melon", "Cherry", "Strawberry"];

function displayFruit(fruit, index, array){
	console.log(`${index}: ${fruit}`);
}

fruits.forEach(displayFruit);
