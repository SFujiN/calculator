function add(l, r) {
  return l + r;
}

function subtract(l, r) {
  return l - r;
}

function multiply(l, r) {
  return l * r;
}

function divide(l, r) {
  if (!r) {
    return NaN;
  }
  return l / r;
}

function operate(op, l, r) {
  switch (op) {
    case '+':
      return add(l,r);
    case '-':
      return subtract(l,r);
    case '*':
      return multiply(l,r);
    case '/':
      return divide(l,r);
    default:
      return 'Invalid Operation';
  }
}

function handleNumber(e) {
  let result = parseInt(display.textContent);
  result *= 10;
  switch(e.target.id) {
    case 'zero':
      break;
    case 'one':
      result += 1;
      break;
    case 'two':
      result += 2;
      break;
    case 'three':
      result += 3;
      break;
    case 'four':
      result += 4;
      break;
    case 'five':
      result += 5;
      break;
    case 'six':
      result += 6;
      break;
    case 'seven':
      result += 7;
      break;
    case 'eight':
      result += 8;
      break;
    case 'nine':
      result += 9;
      break;
    default:
      console.log('Error, non number button fired');
  }
  display.textContent = result;
}

let left, right, op;

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.num');

buttons.forEach((button) => {
  button.addEventListener('click', handleNumber);
});
