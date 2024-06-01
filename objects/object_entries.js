#!/usr/bin/node

const fruits = {
	Bananas: 500,
	Melons: 700,
	Oranges: 900,
	Apples: 1000,
}

// display with Object.entries
console.log("Fruits: ---  Price:")

for (let [fruit, cost] of Object.entries(fruits)){
	console.log(`${fruit} -- $${cost}`);
}
