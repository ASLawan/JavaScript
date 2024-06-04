#!/usr/bin/env node

class Student {
	constructor(firstName, lastName, option, level, birthYear) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.option = option;
		this.level = level;
		this.birthYear = birthYear;
	}

	introduceStudent(){
		return `My name is ${this.firstName} ${this.lastName}. I am a level ${this.level} student studying ${this.option}.`;
	}

	getStudentAge(){
		const age = new Date().getFullYear() - this.birthYear;
		return age;
	}

	changeOption(newOption){
		this.option = newOption;
		this.optionChanged = true;
	}


}

const student1 = new Student("Austin", "Lawan", "Software Engineering", 2, 1993);

console.log(student1);
console.log("");
console.log(student1.introduceStudent());
student1.changeOption("DevOps Engineering");
console.log("")
console.log(student1.introduceStudent());
