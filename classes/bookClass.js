#!/usr/bin/env node

class Book {
	constructor(title, author, year){
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

	getAge(){
		const years = new Date().getFullYear() - this.year;
		return `${this.title} is ${years} years old!.`;
	}

	revise(newYear){
		this.year = newYear;
		this.revised = true;
	}
}

//Instantiate objects
const book1 = new Book("Book one", "Lawan Austin", "1950");

console.log(book1);
console.log("");
book1.revise(1990);
console.log(book1);

