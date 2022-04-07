let displayValue = null;
let firstValue = null;
let secondValue = null;
let currentOperation = null;
let resetInput = false;

const numberButton = document.querySelectorAll(".numBtn");
const display = document.querySelector(".screen");
const operators = document.querySelectorAll(".oper");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const del = document.getElementById("del");
const pointBtn = document.getElementById("point");

pointBtn.addEventListener('click', () => appendPoint());
del.addEventListener('click', () => deleteNumber());
clear.addEventListener('click', () => clearAll());
equals.addEventListener('click', () => evaluate());
numberButton.forEach((button) =>
    button.addEventListener('click', () => addNumber(button.textContent))
);
operators.forEach((operator) => 
    operator.addEventListener('click', () => setOperator(operator.textContent))
);

function deleteNumber(){
    display.textContent = display.textContent
    .toString()
    .slice(0, -1)
}

function clearAll(){
    display.textContent = '';
    firstValue = null;
    secondValue = null;
    displayValue = null;
    currentOperation = null;
    resetInput = false;
};

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

function appendPoint() {
    if (resetInput) resetScreen()
    if (display.textContent === '')
      display.textContent = '0'
    if (display.textContent.includes('.')) return
        display.textContent += '.'
  }

function evaluate(){
    if(currentOperation === null) return;
    secondValue = display.textContent;
    displayValue = operate(firstValue, secondValue, currentOperation)
    display.textContent = displayValue;
    firstValue = displayValue;
    secondValue = null;
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