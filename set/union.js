#!/usr/bin/node

function union(setA, setB){
	const _union = new Set(setA);
	for (const elem of setB){
		_union.add(elem);
	}
	return _union;
}

const setA = new Set([1, 2, 3]);
const setB = new Set([4, 5, 6]);

console.log("Set A: ");
for (const elem of setA){
	console.log(elem);
}

console.log("");
console.log("Set B: ");
for (const elem of setB){
	console.log(elem);
}
console.log("");
console.log(`A union B is: ${union(setA, setB)}`);
