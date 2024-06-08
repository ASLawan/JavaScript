#!/usr/bin/env node

const stock = {
	fruit: ["Apple", "Banana", "Carrot", "Mango", "Strawberry"],
	liquid: ["Water", "Ice"],
	holder: ["Cone", "Cup", "Stick"],
	topping: ["Chocoloate", "Peanut"],
}

let isShopOpen = true;

let toppingChoice = () => {
	return new Promise((resolve, reject) => {

		setTimeout(() => {
			resolve(
			console.log("Which topping would you like?")
			);
		}, 3000);
	});
};


async function kitchen(){
	console.log("A");
	console.log("B");
	console.log("C");

	await toppingChoice();

	console.log("D");
	console.log("E");
}

kitchen();


console.log("Doing dishes");
console.log("Cleaning tables");
console.log("Taking other orders");
console.log("Processing reservations");
