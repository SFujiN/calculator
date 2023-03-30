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
  let result = display.textContent;
  switch(e.target.id) {
    case 'decimal-point':
      result += '.';
      break;
    case 'zero':
      if (result !== '0') {
        result += '0';
      }
      break;
    case 'one':
      if (result !== '0') {
        result += '1';
      } else {
        result = '1';
      }
      break;
    case 'two':
      if (result !== '0') {
        result += '2';
      } else {
        result = '2';
      }
      break;
    case 'three':
      if (result !== '0') {
        result += '3';
      } else {
        result = '3';
      }
      break;
    case 'four':
      if (result !== '0') {
        result += '4';
      } else {
        result = '4';
      }
      break;
    case 'five':
      if (result !== '0') {
        result += '5';
      } else {
        result = '5';
      }
      break;
    case 'six':
      if (result !== '0') {
        result += '6';
      } else {
        result = '6';
      }
      break;
    case 'seven':
      if (result !== '0') {
        result += '7';
      } else {
        result = '7';
      }
      break;
    case 'eight':
      if (result !== '0') {
        result += '8';
      } else {
        result = '8';
      }
      break;
    case 'nine':
      if (result !== '0') {
        result += '9';
      } else {
        result = '9';
      }
      break;
    default:
      console.log('Error, non number button fired');
  }
  display.textContent = result;
}

let left, right, op;

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.num');
const clear = document.querySelector('#ce')

buttons.forEach((button) => {
  button.addEventListener('click', handleNumber);
});

clear.addEventListener('click', () => {display.textContent = '0'});
