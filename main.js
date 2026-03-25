import * as operations from './calcOperations.js';

window.performCalculation = function(){
    const numA = parseFloat(document.getElementById("numberA").value)
    const numB = parseFloat(document.getElementById("numberB").value)
    const operation = document.getElementById("operation").value

    let result;
    switch (operation) {
        case 'add':
            result = operations.add(numA, numB);
            break;
        case 'subtract':
            result = operations.subtract(numA, numB);
            break;
        case 'multiple':
            result = operations.multiply(numA, numB);
            break;
        case 'divide':
            result = operations.divide(numA, numB);
            break;
        default:
            result = 'Invalide Operation'
    }
    document.getElementById("result").innerText = `Result: ${result}`;
};  