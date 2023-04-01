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
    case 'X':
      return multiply(l,r);
    case '/':
      return divide(l,r);
    default:
      return 'Invalid Operation';
  }
}

const numpad = {
  dot: '.',
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

function updateDisplay(e) {
  if (newNumber || display.textContent === '0') {
    if (e.target.id === 'dot') {
      display.textContent = '0.';
    } else {
      display.textContent = numpad[e.target.id];
    }
    newNumber = false;
  } else {
    if (e.target.id === 'dot' && display.textContent.includes('.')) {
      return;
    }
    display.textContent += numpad[e.target.id];
  }
}

let left, right, op;

let prevButton;

let newNumber = true;
let chainOp = false;
let opPrevClicked = false;

const display = document.querySelector('#display');
const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('#equals');
const clear = document.querySelector('#ce');

numButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    opPrevClicked = false;
    prevButton = e.target;
    updateDisplay(e);
  });
});

opButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (opPrevClicked) {
      if (prevButton.textContent === e.target.textContent) {
        return;
      } else {
        op = e.target.textContent;
      }
    } else {
      newNumber = true;
      if (chainOp) {
        right = parseFloat(display.textContent);
        left = operate(op, left, right);
        display.textContent = left;
      } else {
        left = parseFloat(display.textContent);
      }
      op = e.target.textContent;
    }
    chainOp = true;
    opPrevClicked = true;
    prevButton = e.target;
  });
});

equalsButton.addEventListener('click', (e) => {
  right = parseFloat(display.textContent);
  result = operate(op, left, right);
  display.textContent = result;
  newNumber = true;
  chainOp = false;
  opPrevClicked = false;
  prevButton = e.target;
});

clear.addEventListener('click', (e) => {
  display.textContent = '0';
  newNumber = true;
  chainOp = false;
  opPrevClicked = false;
  prevButton = e.target;
});