const display = document.querySelector('.display');
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

let first;
let sign;
let second;
let result;

function operate(a,b,c) {
    switch (c) {
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

function firstDisplay(e) {
    if(!first) {
        first = e.target.textContent;
    }
    else {
        first = first + e.target.textContent;
    }
     
     display.textContent = first;
};

function getOperator(e) {
    sign = e.target.textContent;
    result = first + " " + sign;
    display.textContent = result;
    number.forEach(number => number.removeEventListener('click',firstDisplay));
    number.forEach(number => number.addEventListener('click',secondDisplay));
    

};

function secondDisplay(e) {
    if(!second) {
        second = e.target.textContent
    }
    else {
        second = second + e.target.textContent;
    }
    display.textContent = result + " " + second;
};

function getResult() {
    let answer = operate(first,second,sign);
    display.textContent = answer;
};

function clearResult() {
    window.location.reload();
};

number.forEach(number => number.addEventListener('click',firstDisplay));
operator.forEach(operator => operator.addEventListener('click', getOperator));
equal.addEventListener('click', getResult);
clear.addEventListener('click',clearResult);