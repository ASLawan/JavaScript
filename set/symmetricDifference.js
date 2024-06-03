#!/usr/bin/node

function symmetricDifference(setA, setB){
	const _difference = new Set(setA);
	for (const elem of setB){
		if (_difference.has(elem)){
			_difference.delete(elem);
		} else {
			_difference.add(elem);
		}
	}

	return _difference;

}

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([2, 4, 6, 8, 1]);

function display(element){
	console.log(element);
}

console.log("Set A: ");
Array.from(setA).forEach(display);
console.log("");

console.log("Set B: ");
Array.from(setB).forEach(display);

const result = symmetricDifference(setA, setB);
console.log("");
console.log("Symmetric Difference of A and B is: ")
Array.from(result).forEach(display);

