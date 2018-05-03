

function run() {
    console.log('the function is running');
}

// how many changes? 1
function reverse(word) {
    return word.split('').reverse().join('-');
}

// how many changes? 4
'banana'.split('').reverse().join('-');
'orange'.split('').reverse().join('-');
'apple'.split('').reverse().join('-');
'cherry'.split('').reverse().join('-');


console.log(reverse('banana'));
console.log(reverse('orange'));
console.log(reverse('apple'));
console.log(reverse('cherry'));


