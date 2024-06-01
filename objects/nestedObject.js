#!/usr/bin/node

const person = {
	firstName: "Lawan",
	lastName: "Austin",
	age: 32,
	role: "Backend Engineer",
	myCars: {
		car1: "Ford",
		car2: "Toyota",
		car3: "Mercedes",
	},
	fullName: function(){
		return this.firstName + " " + this.lastName;
	},

}


console.log(`My favorite name is ${person.fullName()}, I am a ${person.role}.`);
console.log(`My favorite car is ${person.myCars.car2}`);
