
const person = {
	age: 28,
	name: 'David',
	weight: 165,
	eyes: blue,


	greet() {
		console.log('My name is ' + this.name)
	},

	mydeets() {
		console.log('Hi, Im' + this.name +'!' + 'I weigh' + this.weight + ' lbs.' + 'my eyes are '+ this.eyes + ' and I am' + this.age + ' old')
	}

};



function utilCalc(pnm, gas, water) {
	this.pnm = pnm;
	this.gas = gas;
	this.water=water;
	this.calc = function() {
		result = (pnm + gas + water) / 3;
	return result;
	}}

console.log(utilCalc(20,30,50));


//the value of const does not change if you don't need to reassign use const
//if you need to reassign use let
/*
Primitives: Strings,

 */