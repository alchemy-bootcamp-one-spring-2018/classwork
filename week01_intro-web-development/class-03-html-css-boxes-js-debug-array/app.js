/* exported guessWithWhile, guessWithFor, guessFavoriteColor */

'use strict';

var maxGuesses = 3;

function guessWithWhile() {
    console.log('game is running with for while');

    var correctAnswer = 'while';
    var correct = false;
    var i = maxGuesses;

    while(i > 0) {
        var answer = prompt('what is my favorite loop?');
        console.log('user guessed', answer);

        if(answer === correctAnswer) {
            correct = true;
            break;
        }

        i--;
    }

    console.log('last answer', answer);

    if(correct) {
        alert('you got it!');
    }
    else {
        alert('try again _while_ you\'re at it!');
    }
}

function guessWithFor() {
    console.log('game is running with for loop');
    var correctAnswer = 'for';

    // setup
    // what variables "transcend" the loop?
    var answer;
    var correct = false;

    // loop for guesses
    for(var i = 0; i < maxGuesses; i++) {
        answer = prompt('what my favorite loop?');
        console.log(answer);

        if(answer === correctAnswer) {
            correct = true;
            break;
        }
    }

    if(correct) {
        alert('yes, while is my favorite loop');
    }
    else {
        alert('Sorry, my favorite loop is while');
    }
}

var colorGuesses = 3;

function guessFavoriteColor() {
    var colorInput = document.getElementById('color');
    var response = document.getElementById('color-response');
    var color = colorInput.value;

    colorGuesses--;

    if(color === 'blue') {
        response.textContent = 'Close, but what blue?';
    }
    else if(color === 'steelblue') {
        response.textContent = 'OMG, how did you know? (Did you peek at source code?)';
    }
    else if(colorGuesses === 0) {
        response.textContent = 'Sorry you didn\'t get it, refresh page to try again';
        document.getElementById('color-btn').disabled = true;
    }
    else {
        response.textContent = 'Not even close';
    }
}