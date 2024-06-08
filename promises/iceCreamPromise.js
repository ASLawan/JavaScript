#!/usr/bin/env node

let stock = {
	fruit: ["Strawberry", "Mango", "Apple", "Melon"],
	liquid: ["Water", "Ice"],
	holder: ["Cone", "Cup", "Stick"],
	topping: ["Chocolate", ""]
}

let isShopOpen = false;

let order = (time, work) => {
	return new Promise( (resolve, reject) => {
		if (isShopOpen) {
			setTimeout( () => {
				resolve(work());
			}, time);
		} else {
			reject(console.log("We're closed for now!"));
		}
	});
};

order(2000, () => console.log(`${stock.fruit[0]} has been selected!`))
	
	.then(() => {
		return order(000, () => {
			console.log("Production has started!")
		});
	})

	.then(() => {
		return order(2000, () => {
			console.log("The selected fruit has been chopped!")
		});
	})

	.then(() => {
		return order(1000, () => {
			console.log(`${stock.liquid[0]} and ${stock.liquid[1]} have been added.`)
		});
	})

	.then(() => {
		return order(1000, () => {
			console.log("Production machine started and running!")
		});
	})

	.then(() => {
		return order(2000, () => {
			console.log(`${stock.holder[0]} has been selected as holder`);
		});
	})

	.then(() => {
		return order(3000, () => {
			console.log(`${stock.topping[0]} has been selected as topping.`)
		});
	})

	.then(() => {
		return order(2000, () => {
			console.log("Ice cream is served. Enjoy!")
		});
	}).catch(() => {
		console.log("Customer left!")
	})

	.finally(() => {
		console.log("\nWe're closed for the day. See you tomorrow!")
	});
