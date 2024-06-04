#!/usr/bin/env node

class Book {
	constructor(title, author, year){
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary(){
		return `${this.title} was written by ${this.author} by ${this.year}`;
	}
}

// Magazine Subclass
class Magazine extends Book{
	constructor(title, author, year, month){
		super(title, author, year);
		this.month = month;
	}
}

// instantiate magazine
const mag1 = new Magazine("Mag One", "Nawal Nitsua", 1975, "June");

console.log(mag1);
console.log("");
console.log(mag1.getSummary());
