let displayValue = null;
let firstValue = null;
let secondValue = null;
let currentOperation = null;
let resetInput = false;

const numberButton = document.querySelectorAll(".numBtn");
const display = document.querySelector(".screen");
const operators = document.querySelectorAll(".oper");
const equals = document.getElementById("equals");

equals.addEventListener('click', () => evaluate())
numberButton.forEach((button) =>
    button.addEventListener('click', () => addNumber(button.textContent))
);
operators.forEach((operator) => 
    operator.addEventListener('click', () => setOperator(operator.textContent))
);

function result(){
    if(secondValue === null) secondValue = display.textContent;
    displayValue = operate(firstValue, secondValue, currentOperation)
    display.textContent = displayValue;
    firstValue = displayValue;
}

function setOperator(operator){
    if(currentOperation !== null) evaluate()
    firstValue = display.textContent;
    display.textContent += " " +operator;
    currentOperation = operator;
    resetInput = true;
}

function addNumber(number){
    if (display.textContent === '0' || resetInput)
    resetScreen()
    display.textContent += number;
}

function resetScreen(){
    display.textContent = '';
    resetInput = false;
}

function evaluate(){
    if(currentOperation === null) return;
    secondValue = display.textContent;
    console.log(firstValue, secondValue);
    displayValue = operate(firstValue, secondValue, currentOperation)
    display.textContent = displayValue;
    firstValue = displayValue;
    secondValue = null;
    console.log(firstValue, secondValue);
    currentOperation = null;
}

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function divide(a, b){
    return a/b;
}

function multiply(a, b){
    return a*b;
}

function operate(num1, num2, operator){
    num1 = Number(num1);
    num2 = Number(num2);
    if(operator == "+"){
       return add(num1, num2);
    }else if(operator == "-"){
        return subtract(num1, num2);
    }else if(operator == "*"){
        return multiply(num1, num2);
    }else return divide(num1, num2);
}