const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((suma, actual) => suma + actual, 0);
	
};

const multiply = function(a) {
 return a.reduce((suma,actual) => suma * actual, 1 );
};

const power = function(a,b) {
  let val = 1;
	for (let i = 0; i < b; i++){
    val *= a;
  }
  return val;
};

const factorial = function(a) {
  let val = 1;
	for (let i = a; i > 0 ; i--)
  {
    val *= i;
  }
  return val;
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
