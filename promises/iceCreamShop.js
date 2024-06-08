#!/usr/bin/env node

const stock = {
	fruit: ["Apple", "Banana", "Carrot", "Mango", "Strawberry"],
	liquid: ["Water", "Ice"],
	holder: ["Cone", "Cup", "Stick"],
	topping: ["Chocoloate", "Peanut"],
}

let isShopOpen = true;

function time(ms){
	return new Promise((resolve, reject) => {
		if (isShopOpen){
			setTimeout(resolve, ms);
		} else {
			reject(console.log("Shop is not yet open!"));
		}
	});
}


async function kitchen(){
	try{
		await time(2000);
		console.log(`${stock.fruit[2]} has been selected!`);

		await time(0000);
		console.log("Start the production process");

		await time(2000);
		console.log("Selected fruit has been chopped");

		await time(1000);
		console.log(`${stock.liquid[0]} and ${stock.liquid[1]} have been added to the chopped fruit.`);

		await time(1000);
		console.log("Ice machine started");

		await time(2000);
		console.log(`${stock.holder[0]} has been selected as holder.`);

		await time(3000);
		console.log(`${stock.topping[0]} has been selected as topping`);
		await time(2000);
		console.log("Ice cream is served. Enjoy!");
	}
	catch(error){
		console.log("Customer left!", error);
	}
	finally{
		console.log("\nWe're closed for the day. See you tomorrow!")
	}
}


kitchen();
