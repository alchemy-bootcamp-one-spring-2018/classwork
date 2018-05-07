/* exported remainder */

function remainder(x, y) {
  const remainder = x % y;

  return {
      value: remainder,
      description: 'The remainder of ' + x + ' divided by ' + y + ' is: ' + remainder
  };
}