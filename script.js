const display = document.querySelector('.display');
const numbers = document.querySelector('.numbers');



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
let operator;
let second;

function operate(a,b,c) {
    switch (c) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
    }
};

function changeDisplay(e) {
    display.textContent = e.target.textContent;
};

numbers.addEventListener('click',changeDisplay);