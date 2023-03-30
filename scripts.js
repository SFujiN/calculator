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

let left, right, op;

const display = document.querySelector('#display');
const button_zero = document.querySelector('#zero');

button_zero.addEventListener('click', () => {
  let result = parseInt(display.textContent);
  if (result != 0)
  console.log(result);
});
