let animals = ['cat', 'dog', 'parrot', 'cow', 'ferret', 'elephant', 'pikachu', 'snorlax', 'deer', 'lion', 'puma', 'pig', 'chicken', 'lamb', 'eel', 'goldfish'];


for (var i = 0; i < animals.length; i++) {
	if (animals[i] === 'pikachu' || animals[i] === 'snorlax')  {
		animals[i] = animals[i] + ' is a pokemon!';
	}
	else {
		animals[i] = animals[i] + ' is an animal';
	}
}

console.log(animals);