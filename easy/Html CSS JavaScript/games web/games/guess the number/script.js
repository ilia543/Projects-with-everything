const submitButton = document.querySelector('.submit');
const resetButton = document.querySelector('.reset');
const guessInput = document.getElementById('guess');
const messageDisplay = document.querySelector('.message');

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const checkGuess = () => {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess === secretNumber) {
        messageDisplay.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
        messageDisplay.style.color = 'green';
        guessInput.disabled = true;
    } else if (userGuess < secretNumber) {
        messageDisplay.textContent = "Too low! Try again.";
        messageDisplay.style.color = 'orange';
    } else {
        messageDisplay.textContent = "Too high! Try again.";
        messageDisplay.style.color = 'orange';
    }
    guessInput.value = '';
};

const resetGame = () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    messageDisplay.textContent = '';
    guessInput.disabled = false;
    guessInput.value = '';
};

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);