const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(arr) {
	let arrSum = 0
  for (let i= 0; i < arr.length; i++) {
    arrSum += arr[i]
  }
  return arrSum
};

const multiply = function(arr) {
  let mult = 1
  for (let i = 0; i < arr.length; i++) {
    mult *= arr[i]
  }
  return mult
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
  let fact = 1
	for (let i = 1; i <= num; i++) {
    fact *= i
  }
  return fact
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
