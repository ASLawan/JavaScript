#!/usr/bin/node

const person = {
	firstName: "Austin",
	lastName: "Lawan",
	age: 32,
	role: "Software Engineer",
}

let properties = [];

for (let property in person){
	properties.push(person[property]);
}

console.log(properties);
