let currentOperand = '';
let previousOperand = '';
let operation = null;

const display = document.getElementById('display');

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number;
  updateDisplay();
}

function chooseOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    compute();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = current === 0 ? 'Error' : prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation.toString();
  operation = null;
  previousOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  display.value = currentOperand;
}
