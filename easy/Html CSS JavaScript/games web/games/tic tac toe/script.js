const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('.reset');
const statusDisplay = document.querySelector('.status');

let currentPlayer = 'X';
let gameActive = true;
let board = ['', '', '', '', '', '', '', '', ''];

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const [a, b, c] of winPatterns) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            statusDisplay.textContent = `${currentPlayer} Wins!`;
            return;
        }
    }

    if (!board.includes('')) {
        gameActive = false;
        statusDisplay.textContent = "It's a draw!";
    }
};

const handleCellClick = (event) => {
    const index = event.target.dataset.index;

    if (board[index] || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    checkWinner();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
    statusDisplay.textContent = '';
};

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);
