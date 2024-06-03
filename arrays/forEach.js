#!/usr/bin/node

const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(squareNumbers);
numbers.forEach(display);

function squareNumbers(element, index, array){
	array[index] = Math.pow(element, 2);
}

function tripleNumbers(element, index, array){
	array[index] = element * 3;
}

function doubleNumbers(element, index, array){
	array[index] = element * 2;
}

function display(element){
	console.log(element);
}
