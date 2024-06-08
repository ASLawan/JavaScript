#!/usr/bin/env node

let stock = {
	fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
	liquid: ["Water", "Ice"],
	holder: ["Cone", "Cup", "Stick"],
	toppings: ["Chocolate", "Peanuts"],

};

let order = (fruit_name, call_production) => {
	setTimeout(() => {
		console.log(`${stock.fruits[fruit_name]} was selected!`);
		call_production();
	}, 2000);
};

let production = () => {
	setTimeout(() => {
		console.log("Production has started!");

		setTimeout(() => {
			console.log(`The selected fruit has been chopped!`);

			setTimeout(() => {
				console.log(`${stock.liquid[0]} and ${stock.liquid[1]} have been added.`);
				setTimeout(() => {
					console.log("The machine has started");
					
					setTimeout(() => {
						console.log(`${stock.holder[0]} has been selected as the holder`);

						setTimeout(() => {
							console.log(`${stock.toppings[1]} has been selected as the topping`);

							setTimeout(() => {
								console.log("Ice cream has been served!");
							}, 2000);
						}, 3000);

					}, 2000);
				}, 1000);
			}, 1000);
		}, 2000);
	}, 000);
};

order(0, production);
