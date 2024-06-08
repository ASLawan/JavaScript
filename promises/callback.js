#!/usr/bin/env node

function one(callback1, callback2){
	console.log("Congratulations for completing Foundations!");
	callback1();
	callback2();
}

function two(){
	console.log("Welcome to Short Specialization");
}

function three(){
	console.log("You are going to graduate as a Backend Engineer!");
}


one(two, three);
