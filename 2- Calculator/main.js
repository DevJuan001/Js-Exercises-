const buttons = document.querySelector(".buttons button");
const clearButton = document.querySelector(".clearButton");
const display = document.querySelector(".display");

let currentInput = ""; // Almacena el número o expresión actual
let operator = null; // Almacena el operador actual
let previousInput = ""; // Almacena el número anterior

clearButton.addEventListener("click", () => {
    if (display.value === "") {
        alert("No hay nada que limpiar");
    } else {
        // Limpiar Todo
        currentInput = "";          
        operator = null   
        previousInput = "";  
        display.value = "";
    }
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "."){
        currentInput += value;
        display.value = currentInput;
    }else if (value === "=") {
        // Calcular el resultado
        if (operator && previousInput !== "" && currentInput !== "") {
            const result = calculate(Number(previousInput), Number(currentInput), operator);
            display.value = result;
            currentInput = result.toString();
            previousInput = "";
            operator = null;
        }
    } else {
        // Si es un operador (+, -, *, /)
        if (currentInput !== "") {
            if (previousInput === "") {
                previousInput = currentInput;
            } else if (operator) {
                // Calcular el resultado parcial
                previousInput = calculate(Number(previousInput), Number(currentInput), operator).toString();
            }
            operator = value;
            currentInput = "";
            display.value = previousInput;
        }
    }
});
function calculate(num1, num2){
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Error";
        default:
            return error;
    }

    }
});
