'use strict'; 

function collectNerdFighter(event){
  console.log('collectNertFighter-event',event);
  event.preventDefault();

  var highScoreTable = document.getElementById('high-score-table');

  var fighter = event.target.fighter.value;
  console.log('fighter ', fighter);

  var score = parseInt(event.target.score.value);
  console.log('score ', score);

  var fighterRow = document.createElement('tr');
 
  var fighterColumn = document.createElement('td');
  fighterColumn.textContent = fighter;
  fighterRow.appendChild(fighterColumn);

  var scoreColumn = document.createElement('td');
  scoreColumn.textContent = score;
  fighterRow.appendChild(scoreColumn);

  highScoreTable.appendChild(fighterRow);
}

var createFighterForm = document.getElementById('high-score-form');

createFighterForm.addEventListener('submit', collectNerdFighter);
