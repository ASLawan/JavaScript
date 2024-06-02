#!/usr/bin/node

const myFriends = ["Joel", "Kingsley", "Patrick", "Thelma", "Desmond", "Capwell"];

const len = myFriends.length;

for (let i = 0; i < len; i++){
	console.log(`The name '${myFriends[i]}' is ${myFriends[i].length} letters long.`);
}
