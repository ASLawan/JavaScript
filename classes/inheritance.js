#!/usr/bin/node

//Constructor
function Book(title, author, year){
	this.title = title;
	this.author = author;
	this.year = year;
}

//getSummary
Book.prototype.getSummary = function(){
	return `${this.title} was written by ${this.author} in ${this.year}`;
}

//Magazine constructor inheriting from Book
function Magazine(title, author, year, month){
	Book.call(this, title, author, year);
	this.month = month;
}
// inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//instantiate magazine 
const mag1 = new Magazine('Mag one', 'John Doe', '1993', 'June');

// Use Magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
console.log("")
console.log(mag1.getSummary());
