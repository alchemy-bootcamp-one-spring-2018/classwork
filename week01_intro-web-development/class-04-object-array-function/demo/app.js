/* globals students */
/* exported makePairs */

var tries = 0;

function makePairs() {
    // takes no parameters
    var copy = students.slice();

    // takes a css selector, and returns a node list, which is array-like
    // var pairs = document.querySelectorAll('.pair');

    for(var i = 0; i < 9; i++) {

        // randomly select first student
        var studentOne = randomStudent(copy);
        // randomly select second student
        var studentTwo = randomStudent(copy);

        // write pair to dom
        document.getElementById('pair-' + i).textContent = studentOne + ' - ' + studentTwo;

        // pairs[i].textContent = studentOne + ' - ' + studentTwo;
    }

    tries++;
    document.getElementById('tries').textContent = tries;

    // no return value, dom is just updated
}

function randomStudent(listOfStudents) {
    // takes no parameters

    // get a random integer between 0 and length of students array
    var index = getRandomIndex(listOfStudents.length);
    
    // gets that student from the array by the integer as index
    var student = listOfStudents[index];

    // remove that student from the array
    listOfStudents.splice(index, 1);

    // return the randomly selected student
    return student;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}