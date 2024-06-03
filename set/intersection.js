#!/usr/bin/node

function intersection(setA, setB){

	const _intersection = new Set();
	for (const elem of setB){
		if (setA.has(elem)){
			_intersection.add(elem);
		}
	}

	return _intersection;
}

function display(element){
	console.log(element);
}
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4, 6, 8]);

console.log("Set A: ")
Array.from(setA).forEach(display);
console.log("");

console.log("Set B: ")
Array.from(setB).forEach(display);

const result = intersection(setA, setB);
console.log("");
console.log("A intersection B is: ");
Array.from(result).forEach(display);

