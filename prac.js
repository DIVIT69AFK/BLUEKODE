function add() {
    let num1 = parseFloat(document.getElementById("id1").value);
    let num2 = parseFloat(document.getElementById("id2").value);
    let result = num1 + num2;
    document.getElementById("result-value").textContent = result;
}

function subtract() {
    let num1 = parseFloat(document.getElementById("id1").value);
    let num2 = parseFloat(document.getElementById("id2").value);
    let result = num1 - num2;
    document.getElementById("result-value").textContent = result;
}

function multiply() {
    let num1 = parseFloat(document.getElementById("id1").value);
    let num2 = parseFloat(document.getElementById("id2").value);
    let result = num1 * num2;
    document.getElementById("result-value").textContent = result;
}

function divide() {
    let num1 = parseFloat(document.getElementById("id1").value);
    let num2 = parseFloat(document.getElementById("id2").value);
    let result = num1 / num2;
    document.getElementById("result-value").textContent = result;
}
