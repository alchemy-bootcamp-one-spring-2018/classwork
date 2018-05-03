
var types = [
    'Water',
    'Earth',
    'Fire'
];

var squirtle = {
    name: 'Squirtle',
    type: 'Water',
    attack: 30,
    defence: 10,
    evolved: false,
    address: {
        city: 'Portland',
        street: 'NW 10th'
    },
    favoriteFoods: ['banana', 'orange']
};

var turtlely = {
    name: 'Turtlely',
    type: 'Water',
    attack: 30,
    defence: 10,
    evolved: false
};

var gastly = {
    name: 'Gastly',
    type: 'Ghost',
    attack: 30,
    defence: 0,
    evolved: false
}

var pikachou = {
    name: 'Pikachou',
    type: 'Electric',
    attack: 200000000,
    defence: 1000000,
    evolved: true
}

var pokemon = [
    squirtle,
    gastly,
    pikachou
];

// console.log(pokemon[0]);
// console.log(pokemon[1]);
// console.log(pokemon[2]);

for(var i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i]);
}

var found;
for(var j = 0; j < pokemon.length; j++) {
    const each = pokemon[j];
    if(each.name === 'Pikachou') {
        found = each;
        break;
    }
}
console.log('found by looping:', found);

var dictionary = {
    'Squirtle': squirtle,
    'Gastly': gastly,
    'Pikachou': pikachou
}

var pokemonByType = {
    'Water': [squirtle, turtlely],
    'Electric': [gastly]
}

const search = 'Pikachou';
console.log('found by dictionary', dictionary[search]);
