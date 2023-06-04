function calculator(num1, num2, operator) {
    var result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    console.log("Result:", result);
  }
  
  // Example usage:
  calculator(5, 3, "+"); // Addition: 5 + 3 = 8
  calculator(10, 4, "-"); // Subtraction: 10 - 4 = 6
  calculator(6, 2, "*"); // Multiplication: 6 * 2 = 12
  calculator(20, 5, "/"); // Division: 20 / 5 = 4
  calculator(8, 2, "%"); // Invalid operator
  