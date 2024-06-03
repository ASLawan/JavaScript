#!/usr/bin/node

function difference(setA, setB){
	const _difference = new Set(setA);
	for (const elem of setB){
		_difference.delete(elem);
	}
	return _difference;
}

const setA = new Set([1, 3, 4, 5, 7]);
const setB = new Set([3, 5, 7, 9, 2]);

function display(element){
	console.log(element);
}

console.log("Set A: ");
Array.from(setA).forEach(display);

console.log("")
console.log("Set B: ");
Array.from(setB).forEach(display);

const result = difference(setA, setB);
console.log("");
console.log("The difference between A and B is: ");
Array.from(result).forEach(display);

const result2 = difference(setB, setA);
console.log("");
console.log("The difference between B and A is: ");
Array.from(result2).forEach(display);
