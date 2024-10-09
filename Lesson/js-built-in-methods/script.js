// Calculate the square root of a given number
const number = 16;
const squareRoot = Math.sqrt(number);
console.log(`Square root of ${number} is ${squareRoot}`);

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Random number between 1 and 10: ${randomNumber}`);

// Convert a string representation of a number to an actual number
const strNumber = '42';
const parsedNumber = parseInt(strNumber);
console.log(`Parsed number: ${parsedNumber}`);

// Check if a value is not a number
const notANumber = 'Hello';
console.log(`Is "${notANumber}" not a number? ${isNaN(notANumber)}`);

// Convert a number to a string
const num = 42;
const str = num.toString();
console.log(`Number as a string: ${str}`);

