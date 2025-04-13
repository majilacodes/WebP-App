function calculate() { 
    let num1 = parseFloat(prompt("Enter the first number:")); 
    let num2 = parseFloat(prompt("Enter the second number:")); 
     
    if (isNaN(num1) || isNaN(num2)) { 
        alert("Please enter valid numbers."); 
        return; 
    } 
     
    let operation = prompt("Choose operation: +, -, *, /, %"); 
    let result; 
     
    switch (operation) { 
        case '+': 
            result = num1 + num2; 
            break; 
        case '-': 
            result = num1 - num2; 
            break; 
        case '*': 
            result = num1 * num2; 
            break; 
        case '/': 
            if (num2 === 0) { 
                alert("Division by zero is not allowed."); 
                return; 
            } 
            result = num1 / num2; 
            break; 
        case '%': 
            if (num2 === 0) { 
                alert("Modulo by zero is not allowed."); 
                return; 
            } 
            result = num1 % num2; 
            break; 
        default: 
            alert("Invalid operation. Please enter +, -, *, /, or %."); 
            return; 
    } 
     
    alert(`Result: ${result}`); 
}