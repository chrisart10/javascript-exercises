const add = function (operand1, operand2) {
  return operand1 + operand2;
};

const subtract = function (operand1, operand2) {
  return operand1 - operand2;
};

const sum = function ([...operands]) {
  let total = 0;
  for (let index = 0; index < operands.length; index++) {
    total += operands[index];
  }
  return total;
};

const multiply = function ([...operands]) {
  let total = operands[0];
  for (let index = 1; index < operands.length; index++) {
    total *= operands[index];
  }
  return total;
};

const power = function (operand1, operand2) {
  return operand1 ** operand2;
};

const factorial = function (operand) {
  if (operand == 0) return 1;
  let total = 1;
  for (let index = 2; index < operand + 1; index++) {
    total *= index;
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
