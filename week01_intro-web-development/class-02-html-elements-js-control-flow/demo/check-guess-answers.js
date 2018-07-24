/* exported checkGuessAnswer */

// get the elements we need to use
var guessForm = document.getElementById('guess-form');
var guessResults = document.getElementById('guess-results');

// track "state" _across_ calls to checkGuessAnswer
var totalGuesses = 0;

function checkGuessAnswer() {
    var guess = guessForm.elements.number.value;

    // eslint-disable-next-line
    if(guess == 7) {
        // go ahead and end game and let user know they won
    }
    else {
        guessResults.innerText = 'Wrong';
        // now we can increment and hold onto the value across
        // calls to this function (this function only increases
        // the value, it doesn't initialize the value)
        totalGuesses = totalGuesses + 1;
        console.log(totalGuesses);
    }

    return false;
}