#!/usr/bin/node

//Object of prototypes
const bookProtos = {
	getSummary: function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
	},

	getAge: function(){
		const years = new Date().getFullYear() - this.year;
		return `${this.title} is ${years} years old.`;
	}
};

//Object create
//format one
const book1 = Object.create(bookProtos);
book1.title = 'Book one';
book1.author = 'Lawan Austin';
book1.year = '1986';

//book two
const book2 = Object.create(bookProtos);
book2.title = 'Book two';
book2.author = 'Wirba Kingsley';
book2.year = '1974';

//book three
const book3 = Object.create(bookProtos, {
	title: { value: 'Book three' },
	author: { value: 'Laiven Desmon' },
	year: { value: '1978' }
});

console.log(book1);
console.log("");
console.log(book1.getSummary());
console.log("");
console.log(book2);
console.log("");
console.log(book2.getSummary());
console.log("");
console.log(book3)
console.log(book3.getSummary());
