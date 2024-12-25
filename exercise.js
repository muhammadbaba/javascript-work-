console.log(document.body.innerHTML='Muhammad Baba Muhammad');

console.log('Hello World');

console.log(Math.round((2095 + 799) * 0.1) / 100)

alert('Items (' + (1 + 1) +'):  $' + (2095 + 799) / 100);


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Simple Calculator Program

// Function to perform the calculation
function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
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
      // Check for division by zero
      if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
      }
      result = num1 / num2;
      break;
    default:
      return "Error: Invalid operator.";
  }

  return `The result of ${num1} ${operator} ${num2} is ${result}`;
}

// Example usage
const number1 = parseFloat(prompt("Enter the first number:"));
const operator = prompt("Enter the operator (+, -, *, /):");
const number2 = parseFloat(prompt("Enter the second number:"));

const output = calculate(number1, number2, operator);
alert(output);
console.log(output);


// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even.`;
  } else {
    return `${number} is odd.`;
  }
}

// Example usage
const inputNumber = parseInt(prompt("Enter a number:"));
const result = checkEvenOrOdd(inputNumber);
alert(result);
console.log(result);


// Function to calculate the sum of all numbers in an array

function sumNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
