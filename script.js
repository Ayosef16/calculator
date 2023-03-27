const currentDisplay = document.querySelector('.current-display');
const previousDisplay = document.querySelector('.previous-display');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');



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
let firstOperator = '';


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
    }
};

function changeDisplay(e) {
    firstNumber += e.target.textContent;
    currentDisplay.textContent = firstNumber;
};

function getOperator(e) {
    firstOperator = e.target.textContent;
    previousDisplay.textContent = `${firstNumber} ${firstOperator}`;
    currentDisplay.textContent = 0;
};

function getResult() {
    let answer = operate(first,second,sign);
    display.textContent = answer;
};

function clearResult() {
    window.location.reload();
};

number.forEach(number => number.addEventListener('click',changeDisplay));
operator.forEach(operator => operator.addEventListener('click', getOperator));
equal.addEventListener('click', getResult);
clear.addEventListener('click',clearResult);