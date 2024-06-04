#!/usr/bin/node

//Constructor
function Book(title, author, year){
	this.title = title;
	this.author = author;
	this.year = year;
}

// getSummary prototype
Book.prototype.getSummary = function(){
	return `The book titled '${this.title}' was written by ${this.author} in ${this.year}`;
	}

// getAge
Book.prototype.getAge = function(){
	const years = new Date().getFullYear() - this.year;
	return `'${this.title}' is ${years} years old!`;
}

//Revise book
Book.prototype.revise = function(newYear){
	this.year = newYear;
	this.revised = true;
}

const book1 = new Book("Book one", "Lawan Austin", "1973");
const book2 = new Book("Book two", "Laiven Desmon", "1965");

console.log(book1);
book1.revise(1982);
console.log(book1);
