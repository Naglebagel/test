//Boolean

let doorsOpen = true;

doorsOpen = false;

doorsOpen = !doorsOpen;

// ! = not

1 > 2
1 < 2
1 >= 2
1 <= 2

1 == 1
// triple equals is the more strict, even checks data type
1 === 1

//conditionals
let a = 1;


if (a > 2){
	//some code 
}	else if (a === 2){
	//some code
} else {
	//some code
}

// && (and) operator and || (or) operator

5 === 5 && 10 === 10 --> // evaluates to true
5 === 4 && 10 === 10 --> // evaluates to false
// to evaluate true whole statemnet must be true, otherwise will evaluate false

5 === 5 || 4 > 6 --> // if one is true then its all true

null || 5;

null || 0;

const input = 'sdaswer';
const username = input || "bnsdfbncecu";
