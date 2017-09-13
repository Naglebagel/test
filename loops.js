// loops

const arr = [1, 2, 3];

for(let i = 0; i < arr.length; i++){
	console.log(arr[i]);
};

// loop to display odd or even number
const arr = [1, 2, 3];

for(let i = 0; i < arr.length; i++){
	if (arr[i] % 2 === 0){
		console.log(arr[i] + ' is even')
	}
	else {
		console.log(arr[i] + ' is odd')
	};
};

// loop to empty array, and leave a message
// of each item we are removing on each pass

const arr = [1, 2, 3];

// can also use .pop to do this

for(let i = 0; i < 3; i++){
	const shiftItem = arr.shift();
	console.log(shiftItem + ' is leaving the array')
};

//looping through objects (objects keys)
// use the for in loop

const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true
};

//key in the for loop is a variable standing for the key(property) in the turtle object
//key can be called whatever you want

for (let key in turtle){
	console.log(key, ' this is temp')
	console.log(turtle[key])
}

//for in loop for turtle, on each key value pair
// add on the message Kowabunga

const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true
};


for (let key in turtle){
	turtle[key] += ' kowabunga';
	console.log(key , ': ' , turtle[key])
	// console.log(key + ': ' + turtle[key] + ' kowabunga')
}

for (let i = 0; i < 21; i++){
	if (i % 2 === 0){
		console.log(i + ' is even')
	}
	else{
		console.log(i + ' is odd')
	}
}

// array looping down from 100 adding even numbers to 
// current value of myBagOfBeans
let myBagOfBeans = 50

for (let i = 100; i >= 0; i--){
	if (i % 2 === 0) {
		myBagOfBeans = myBagOfBeans + i
	}
	console.log(myBagOfBeans)
};

// for loop to push an array to multiple different arrays
const rename = ['cheese', 'pepperoni', 'sausage', 'coca cola', 'lemonade', 'dough', 'beer', 'wine', 'ranch', 'blue cheese', 'bbq sauce'];
const drinks = [];
const food = [];
const sauce = [];
for (let i = 0; i < rename.length; i++){
	const item = rename[i]
	if (item === 'cheese' || item === 'pepperoni' || item === 'sausage' || item === 'dough' || item === 'blue cheese'){
		food.push(item)
	}
	else if (item === 'coca cola' || item === 'lemonade' || item === 'beer' || item === 'wine'){
		drinks.push(item)
	}
	else if (item === 'ranch' || item === 'bbq sauce'){
		sauce.push(item)
	}
};

//for loop pushing nonNumbers to a new array
const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30];

const nonNumbers = [];

for (let i = 0; i < mixedArray.length; i++){
	const prop = mixedArray[i]
	if (prop === 'taco' || prop === 'burrito' || prop === 'Whats the deal with airplane peanuts' || prop === {barry: "Mannilow",} || prop === "Old" + "Crow" + "Medicine Show" || prop === "I want the calzone from pizanos" || prop === "Death blow" || prop === "Firestorm" || prop === "48"){
		nonNumbers.push(prop)
	}
}

//for loop pushing items making a cheese burger or spaghetti to a new array
const food = ['bun', "jalepeno cheddar", "elk", "beef", "1954 ford mustang", 1.14, 1.23, 'hot dog', "gary clark jr", " I'lll never fall in love again", "mustard", "ketchup", 30, 50, 80, "grilled onions", "egg", "Dr. Suess"];

const dinner = [];

for (let i = 0; i < food.length; i++){
	const prop = food[i]
	if (prop === 'bun' || prop === "jalepeno cheddar" || prop === "elk" || prop === "beef" || prop === "mustard" || prop === "ketchup" || prop === "grilled onions" || prop === "egg"){
		dinner.push(prop)
	}
}

// for in loop to list following objects and print to console

const colorObjects = {red: 'red', blue: 'blue', cyan: 'cyan'}

for (let key in colorObjects){
	console.log(key , 'this is key')
	console.log(colorObjects[key])
}

const seinfeld = {cosmo: "kramer", jerry: "Seinfeld", george: "constanza", elaine: "bennis"}

for (let key in seinfeld){
	console.log(key , 'this is key')
	console.log(seinfeld[key])
}

const profile = {name: "Elon Musk", occupation: "space man", hobbies: ["paypal", "space X", "rocket science"]}

for (let key in profile){
	console.log(key , 'this is key')
	console.log(profile[key])
}

// for loop or for in loop to print out properties of 
// object or value of the indexin the array, Above code
// write a comment what loop used and why


//using a for loop as this is an array not an object

const oldTime = ["benton flippen", "carter family", "roscoe Holcomb", "gus cannon", "Tommy Jarrell"];

for (let i = 0; i < oldTime.length; i++){
	console.log(oldTime[i])
}

//using a for in loop because this is an object with key's

const sandwhich = {name: "sunday morning special", bread: "ciabatta", cheese: "pepper jack", green: "arugala", redStuff: "cherry tomatoes", heated: true}

for (let key in sandwhich){
	console.log(key, ' this is key')
	console.log(sandwhich[key])
}

//using a for loop because this is an array with index numebrs

const zeppelin = ["In through the out door", "Zep 1", "Zep 2", "Zep3", "Zep4", "Physical Graffiti"];

for (let i = 0; i < zeppelin.length; i++){
	console.log(zeppelin[i])
}


