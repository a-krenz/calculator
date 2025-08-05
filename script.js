const ADD = 0;
const SUB = 1;
const MUL = 2;
const DIV = 3;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, firstOperand, secondOperand) {
    let operatorFunction;

    switch (operator) {
        case ADD:
            operatorFunction = add;
            break;
        case SUB:
            operatorFunction = subtract;
            break;
        case MUL:
            operatorFunction = multiply;
            break;
        case DIV:
            operatorFunction = divide;
            break;
        default:
            operatorFunction = add;
    }

    return operatorFunction(firstOperand, secondOperand);
}

function displayNumber(event) {
    const target = event.target;
    const number = target.classList[1];

    display.textContent = display.textContent + number;
}

let firstOperand;
let secondOperand;
let operator;

const display = document.querySelector("#display");

const buttons = document.querySelectorAll(".num");
buttons.forEach(
    (button) => button.addEventListener("click", displayNumber)
);