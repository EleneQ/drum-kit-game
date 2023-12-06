function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  if (num1 !== 0 && num2 !== 0) {
    return num1 / num2;
  }
  return 0;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

console.log(calculator(2, 0, divide));
