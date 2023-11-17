let secretNumber = parseInt(Math.random() * 1001);
let guess = Number(prompt(`Guess a number`));
let counter = 0;

while (guess !== secretNumber) {
  counter++;
  if (guess === -1) {
    alert(`You have given up! The number was ${secretNumber}`);
    guess = secretNumber;
    break;
  } else if (guess === secretNumber) {
    alert(`${guess}! You got it right! Guesses:${counter}`);
  } else if (guess > secretNumber) {
    alert(`Too high from ${guess}. Guess again! Guesses:${counter}`);
  } else if (guess < secretNumber) {
    alert(`Too low from ${guess}. Guess again! Guesses:${counter}`);
  } else {
    guess = Number(prompt(`Guess a number`));
  }
}
