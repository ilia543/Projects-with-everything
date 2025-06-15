const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correctAnswer: 3
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: ["K2", "Mount Everest", "Mount Kilimanjaro", "Mount Fuji"],
        correctAnswer: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.querySelector('.question');
const answerButtons = document.querySelectorAll('.answer-btn');
const scoreDisplay = document.querySelector('.score');
const nextButton = document.querySelector('.next-button');
const resetButton = document.querySelector('.reset-button');
const resultContainer = document.querySelector('.result');
const questionContainer = document.querySelector('.question-container');

const loadQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false; // Enable buttons when the question is loaded
        button.style.backgroundColor = "#4CAF50"; // Reset button color
    });
};

const handleAnswerClick = (event) => {
    const selectedAnswerIndex = Array.from(answerButtons).indexOf(event.target);
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswerIndex === currentQuestion.correctAnswer) {
        score++;
        event.target.style.backgroundColor = "#4CAF50"; // Green for correct
    } else {
        event.target.style.backgroundColor = "#f44336"; // Red for incorrect
    }

    // Disable all buttons after an answer is selected
    answerButtons.forEach(button => button.disabled = true);

    scoreDisplay.textContent = `Score: ${score}`;
    resultContainer.style.display = 'block'; // Show the result section
    nextButton.style.display = 'inline-block'; // Show the next button
};

const showNextQuestion = () => {
    resultContainer.style.display = 'none'; // Hide result section
    nextButton.style.display = 'none'; // Hide the next button

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionContainer.style.display = 'none'; // Hide question section
        resultContainer.innerHTML = `
            <p>Game Over!</p>
            <p>Your final score: ${score} out of ${questions.length}</p>
        `;
        resultContainer.style.display = 'block';
    }
};

const resetGame = () => {
    score = 0;
    currentQuestionIndex = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    questionContainer.style.display = 'block'; // Show question section
    loadQuestion();
    resultContainer.style.display = 'none'; // Hide result section
    nextButton.style.display = 'none'; // Hide the next button
};

answerButtons.forEach(button => button.addEventListener('click', handleAnswerClick));
nextButton.addEventListener('click', showNextQuestion);
resetButton.addEventListener('click', resetGame);

// Initializing the game
loadQuestion();
