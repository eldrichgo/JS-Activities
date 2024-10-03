const secretNumber = Math.round(Math.random() * 10);
var attempts = 0;
var guessedNumber = 0;

console.log("Welcome to the secret number guessing game!");

do {
    guessedNumber = prompt("Guess the secret number (between 0 and 10): ");
    attempts++;
    if (guessedNumber > secretNumber) {
        console.log("Too high!");
    } else if (guessedNumber < secretNumber) {
        console.log("Too low!");
    }
    console.log("It took you " + attempts + " attempts.");
} while (guessedNumber != secretNumber);
console.log("Congratulations! You guessed the correct number: " + secretNumber + ".");
