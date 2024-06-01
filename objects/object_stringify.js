#!/usr/bin/node

const person = {
	firstName: "Austin",
	lastName: "Lawan",
	age: 32,
	role: "CEO",
	company: "LaivTech Software Solutions",
	product: "Travel",
}

const myString = JSON.stringify(person);

console.log(myString);
