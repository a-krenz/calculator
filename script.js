const ADD = 0;
const SUB = 1;
const MUL = 2;
const DIV = 3;

function add(a, b) {
    return round(a + b);
}

function subtract(a, b) {
    return round(a - b);
}

function multiply(a, b) {
    return round(a * b);
}

function divide(a, b) {
    return round(a / b);
}

function round(num) {
    return Math.round(num * 1000) / 1000;
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

function displayTerm() {
    display.textContent = firstOperand ?? "";

    if (selectedOperator !== null) {
        switch (selectedOperator) {
            case ADD:
                display.textContent += "+";
                break;
            case SUB:
                display.textContent += "−";
                break;
            case MUL:
                display.textContent += "×";
                break;
            case DIV:
                display.textContent += "÷";
                break;
            default:
                display.textContent += "+";


        }
    }

    display.textContent += secondOperand ?? "";
}

function onNumberClick(event) {
    const target = event.target;
    const number = +target.classList[1];

    if (!entersSecondOperand) {
        firstOperand = +`${firstOperand ?? ""}${number}`;
    } else {
        secondOperand = +`${secondOperand ?? ""}${number}`;
    }

    displayTerm();
}

function onOperatorClick(event) {
    if (secondOperand !== null) {
        onEqualsClick();
    }

    const target = event.target
    selectedOperator = +target.classList[1];

    entersSecondOperand = true;

    displayTerm();
}

function onEqualsClick() {
    const result = operate(selectedOperator, firstOperand, secondOperand);
    display.textContent = result;

    firstOperand = result;
    secondOperand = null;
    secondOperand = null;
    entersSecondOperand = false;
}


let firstOperand = null;
let secondOperand = null;
let selectedOperator = null;

let entersSecondOperand = false;

const display = document.querySelector("#display");

const buttons = document.querySelectorAll(".num");
buttons.forEach(
    (button) => button.addEventListener("click", onNumberClick)
);

const operators = document.querySelectorAll("#operators > *");
operators.forEach(
    (operator) => operator.addEventListener("click", onOperatorClick)
);

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", onEqualsClick);