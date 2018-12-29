const animals = ['cat', 'dog', 'parrot', 'cow', 'ferret', 'elephant', 'pikachu', 'snorlax', 'deer', 'lion', 'puma', 'pig', 'chicken', 'lamb', 'eel', 'goldfish'];


for (var i = 0; i < animals.length; i++) {
    animals[i] = i + 'is an animal';
}

console.log(animals)