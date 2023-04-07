const screen = document.querySelector('.calculator-screen');
const allClear = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');
const equalSign = document.querySelector('.equal-sign');
const numbers = document.querySelectorAll('.number');
console.log(numbers)
const operators = document.querySelectorAll('.operator');

// variabel
let prevValue = '';
let calculationOperator = '';
let currentInput = '0';

// tambah event listeners ke button number
numbers.forEach(number => {
  number.addEventListener('click', () => {
    inputNumber(number.value);
    updateScreen(currentInput);
  })
})

// tambah event listener ke button decimal
decimal.addEventListener('click', () => {
  inputDecimal();
  updateScreen(currentInput);
})

// tambah event listeners ke button operator 
operators.forEach(operator => {
  operator.addEventListener('click', () => {
    inputOperator(operator.value);
  })
})

// tambah event listener ke button equal sign
equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentInput);
})

// tambah event listener ke button AC 
allClear.addEventListener('click', () => {
  clearAll();
  updateScreen(currentInput);
})

// handle input
function inputNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
}

function inputDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
  }
}

function inputOperator(operator) {
  if (calculationOperator === '') {
    prevValue = currentInput;
  } else {
    calculate();
  }
  calculationOperator = operator;
  currentInput = '0';
}

function calculate() {
  let result = '';
  switch (calculationOperator) {
    case '+':
      result = parseFloat(prevValue) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(prevValue) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(prevValue) * parseFloat(currentInput);
      break;
    case '/':
      result = parseFloat(prevValue) / parseFloat(currentInput);
      break;
    default:
      return;
  }
  currentInput = result.toString();
  calculationOperator = '';
}

function clearAll() {
  prevValue = '';
  calculationOperator = '';
  currentInput = '0';
}

// Update calculator screen
function updateScreen(number) {
  screen.value = number;
}

