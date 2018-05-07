/* globals remainder */
/* exported showRemainder */

function showRemainder() {
  const x = parseInt(document.getElementById('dividend').value);
  const y = parseInt(document.getElementById('divisor').value);
  const result = remainder(x, y);
  document.getElementById('remainder').textContent = result.value;
  document.getElementById('remainder-description').textContent = result.description;
}