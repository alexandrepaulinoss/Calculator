var addButton = document.getElementById("addButton");
var subtractButton = document.getElementById("subtractButton");
var multiplyButton = document.getElementById("multiplyButton");
var divideButton = document.getElementById("divideButton");
var clearButton = document.getElementById("clearButton");
var listElement = document.getElementById("operationsList");
var inputElement = document.querySelector('#value input')
var operationsList = [];
var total = 0;

function renderOperations() {
    listElement.innerHTML = '';

    for (operation of operationsList) {
        var itemListElement = document.createElement('li');
        var operationText = document.createTextNode(operation);
        itemListElement.appendChild(operationText);
        listElement.appendChild(itemListElement);
    }
}
renderOperations();

function executeOperation(operation) {
    console.log('Operation: ' + operation);
    var value = Number(inputElement.value);

    if (value != 0) {
        if (operation === '+') {
            total += value;
        } else if (operation === '-') {
            total -= value;
        } else if (operation === '*') {
            total *= value;
        } else if (operation === '/') {
            total /= value;
        }
    }

    operationsList.push(`${value} ${operation}    (Total = ${total})`);
    inputElement.value = '';

    console.log(`Total ${total}`);
    renderOperations();
    inputElement.focus();
}


function clearOperation() {
    inputElement.value = '';
    total = 0;
    operationsList.push('*** CLEAR ***');
    operationsList.push('-------------');
    console.log('*** CLEAR ***');
    renderOperations();
    inputElement.focus();
}

addButton.onclick = function() { executeOperation('+') };
subtractButton.onclick = function() { executeOperation('-') };
multiplyButton.onclick = function() { executeOperation('*') };
divideButton.onclick = function() { executeOperation('/') };
clearButton.onclick = clearOperation;