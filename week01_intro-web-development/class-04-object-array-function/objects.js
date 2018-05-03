
var squirtle = {
    name: 'Squirtle',
    type: 'Water',
    attack: 30,
    defence: 10,
    evolved: false,
    play: function() {
        return 'I like to play';
    }
};

console.log(squirtle.name, squirtle.type);

squirtle.name = 'Super Squirtle';
squirtle.evolved = true;

squirtle['type'] = 'Wet Sand';

console.log(squirtle.play);
console.log(squirtle.play());