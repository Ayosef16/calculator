const currentDisplay = document.querySelector('.current-display');
const previousDisplay = document.querySelector('.previous-display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');



function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return a/b;
};

let firstNumber = '';
let secondNumber = '';
let operator = '';


function operate(operator,a,b) {
    switch (operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case 'x':
            return multiply(a,b);
            break;
        case '÷':
            return divide(a,b);
            break;
        default:
            return
    }
};

function appendNumber(number) {
    if(number === '.' && firstNumber.includes('.')) return
    firstNumber += number;
};

function deleteNumber() {
    firstNumber = firstNumber.toString().slice(0,-1);
}

function updateDisplay() {
    currentDisplay.textContent = firstNumber;
    if( operator != null) {
        previousDisplay.textContent = `${secondNumber} ${operator}`
    }
};

function chooseOperator(sign) {
    if(firstNumber === '') return
    if(secondNumber !== '') {
        getResult();
    }
    operator = sign;
    secondNumber = firstNumber;
    firstNumber = '';
};

function getResult() {
    currentDisplay.textContent = operate(operator,parseFloat(secondNumber),parseFloat(firstNumber));
    firstNumber = currentDisplay.textContent;
    operator = undefined;
    secondNumber = '';
};

function clearResult() {
    currentDisplay.textContent = '';
    previousDisplay.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = undefined;
};

numberButtons.forEach(button => button.addEventListener('click', () => {
    appendNumber(button.textContent);
    updateDisplay();
}));

operatorButtons.forEach(button => button.addEventListener('click', () => {
    chooseOperator(button.textContent);
    updateDisplay();
}));

equalButton.addEventListener('click', () => {
    getResult();
});

clearButton.addEventListener('click', () => {
    clearResult();
    updateDisplay();
});

deleteButton.addEventListener('click', () => {
    deleteNumber();
    updateDisplay();
});

