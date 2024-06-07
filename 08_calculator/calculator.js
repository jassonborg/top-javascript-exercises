const myArray = [];

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let total = 0;
  
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  
  return total;
};

const multiply = function(array) {
  //total shouldn't be 0 otherwise result will be 0
  let total = 1;
  
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  
  return total;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
	let total = 1;
  for (let i = 2; i <= a; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
