#!/usr/bin/node

const person = {
	firstName: "Lawan",
	lastName: "Austin",
	age: 32,
	fullName: function(){
		return this.firstName + " " + this.lastName;
	},
	course: "Software Emgineering",
	specialization: "Backend Development",
}

console.log(`My name is ${person.fullName()}, I am a ${person.course} student`);
console.log(`My age is: ${person.age}`)

const new_person = person;
new_person.age = 23;

console.log(`My old age is: ${person.age}`);
console.log(`My new age is: ${new_person.age}`);
