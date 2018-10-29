
const person = {
	age: 28,
	name: 'David',
	weight: 165,
	eyes: 'blue',


	greet() {
		console.log('My name is ' + this.name)
	},

	myDeets() {
		console.log('Hi, I am ' + this.name +'!' + ' I weigh ' + this.weight + ' lbs.' + ' my eyes are '+ this.eyes + ' and I am ' + this.age + ' old')
	},

};



function utilCalc(pnm, gas, water) {
	internet = 32;
	result = (pnm + gas + water + internet) / 3;
	return result;
}

function greeter(name, age, eyecolor, weight) {
	return 'Hello ' + name + 'you have ' + eyecolor + 'eyes and weigh ' + weight + ' lbs.';
}


//the value of const does not change if you don't need to reassign use const
//if you need to reassign use let
/*
Primitives: Strings,

 */