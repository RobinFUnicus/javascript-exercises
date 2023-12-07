const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(sumArray) {
	let sum = 0;
  sumArray.forEach(number => {
    sum += number
  });
  return sum;
};

const multiply = function(mulArray) {
  let product = 1;
  mulArray.forEach(num =>{
    product *= num;
  });
  return product;
};

const power = function(x, y) {
  let final = x;
  for (let index = 1; index < y; index++) {
    final *= x;
  }
  return final;
};

const factorial = function(x) {
  if(x === 0) return 1;
  let final = 1;
	for (let index = x; index > 0; index--) {
    final *= index;
  }
  return final;
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
