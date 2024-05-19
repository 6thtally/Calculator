let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = '';

function append(number) {
    if (['+', '-', '*', '/'].includes(number)) {
        if (currentNumber === '' && previousNumber !== '') {
            operation = number;
            return;
        }

        if (previousNumber === '') {
            previousNumber = currentNumber;
        } else {
            calculate();
            previousNumber = display.value;
        }
        operation = number;
        currentNumber = '';
    } else {
        currentNumber += number;
        display.value = currentNumber;
    }
}

function calculate() {
    if (previousNumber === '' || currentNumber === '' || operation === '') {
        return;
    }
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }

    display.value = result;
    previousNumber = result.toString();
    currentNumber = '';
    operation = '';
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operation = '';
}

function deleteLast() {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
}

