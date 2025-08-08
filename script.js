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

function onNumberClick(event) {
    const target = event.target;
    const number = target.classList[1];

    display.textContent = display.textContent + number;
}

function onOperatorClick(event) {
    const target = event.target;

    selectedOperator = +target.classList[1];

    switch (selectedOperator) {
        case ADD:
            display.textContent += "+";
            break;
        case SUB:
            display.textContent += "-";
            break;
        case MUL:
            display.textContent += "*";
            break;
        case DIV:
            display.textContent += "/";
            break;
        default:
            display.textContent += "+";
    }
}

let firstOperand = null;
let secondOperand = null;
let selectedOperator = null;

const display = document.querySelector("#display");

const buttons = document.querySelectorAll(".num");
buttons.forEach(
    (button) => button.addEventListener("click", onNumberClick)
);

const operators = document.querySelectorAll("#operators > *");
operators.forEach(
    (operator) => operator.addEventListener("click", onOperatorClick)
);