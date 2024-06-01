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
