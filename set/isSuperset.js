#!/usr/bin/node

function isSuperset(set, subset){
	for (const element of subset){
		if (!set.has(element)){
			return false;
		}
	}
	return true;
}

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([2, 3, 4]);
const setC = new Set([1, 3, 5, 7, 9,]);
const setD = new Set([1, 2, 4, 5]);
console.log("Set A: ")
for (const elem of setA){
	console.log(elem);
}
console.log("");
console.log(`A is Superset of B: ${isSuperset(setA, setB)}`);
console.log("");
console.log(`C is Superset of D: ${isSuperset(setC, setD)}`);
