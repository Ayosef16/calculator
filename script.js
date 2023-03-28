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
let operator = undefined;


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

//Create a function that can append the numbers

function appendNumber(number) {
    if(number.textContent === '.' && firstNumber.toString().includes('.')) return
    firstNumber += number.textContent;
};

//Make a update display function, that changes what is showing in the screen

function updateDisplay() {
    currentDisplay.textContent = firstNumber;
    if (secondNumber !== '') {
        previousDisplay.textContent = `${secondNumber} ${operator}`;
    }
};

//Make a function that when u choose an operator, it moves the first input and the operator to a secondary display

function chooseOperator(op) {
    if (firstNumber === '') return
    if (secondNumber !== '') {
        getResult();
    }
    operator = op.textContent;
    secondNumber = firstNumber;
    firstNumber = '';
};

//Make a function to show the result on the current display

function getResult() {
    if(operator === '÷' && parseFloat(firstNumber) === 0) {
        alert("can't divide by zero!")
        clearResult();
        return
    }
    if(firstNumber !== '' && secondNumber !== '' && operator !== undefined) {
        let firstScreen = parseFloat(firstNumber);
        let secondScreen = parseFloat(secondNumber);
        firstNumber = +operate(operator,secondScreen,firstScreen).toFixed(3);
        secondNumber = '';
        operator = undefined;
    }
};

//Make a function to clear the calculator

function clearResult() {
    currentDisplay.textContent = '';
    previousDisplay.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = undefined;
};

//Make a function to delete the last number

function deleteNumber() {
    firstNumber = firstNumber.toString().slice(0,-1);
};

//Make the event listener events

numberButtons.forEach(button => button.addEventListener('click', () => {
    appendNumber(button);
    updateDisplay();
}));

operatorButtons.forEach(button => button.addEventListener('click', () => {
    chooseOperator(button);
    updateDisplay();
}));

equalButton.addEventListener('click', () => {
    getResult();
    updateDisplay();
});

clearButton.addEventListener('click', () => {
    clearResult();
    updateDisplay();
});

deleteButton.addEventListener('click', () => {
    deleteNumber();
    updateDisplay();
});

