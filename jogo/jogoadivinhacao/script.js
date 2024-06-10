document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const gameScreen = document.getElementById('game-screen');
    const resultScreen = document.getElementById('result-screen');

    const welcomeForm = document.getElementById('welcome-form');
    const usernameInput = document.getElementById('username');
    const playerNameSpan = document.getElementById('player-name');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const feedback = document.getElementById('feedback');

    const resultPlayerNameSpan = document.getElementById('result-player-name');
    const correctNumberSpan = document.getElementById('correct-number');
    const attemptsCountSpan = document.getElementById('attempts-count');
    const playAgainButton = document.getElementById('play-again-button');

    let playerName = '';
    let correctNumber = 0;
    let attempts = 0;

    welcomeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        playerName = usernameInput.value.trim();
        if (playerName) {
            startGame();
        }
    });

    guessButton.addEventListener('click', () => {
        const guess = parseInt(guessInput.value, 10);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            feedback.textContent = 'Por favor, insira um número válido entre 1 e 100.';
        } else {
            attempts++;
            if (guess < correctNumber) {
                feedback.textContent = 'Tente um número maior.';
            } else if (guess > correctNumber) {
                feedback.textContent = 'Tente um número menor.';
            } else {
                endGame();
            }
        }
    });

    playAgainButton.addEventListener('click', () => {
        resetGame();
    });

    function startGame() {
        correctNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        playerNameSpan.textContent = playerName;
        feedback.textContent = '';
        guessInput.value = '';
        showScreen(gameScreen);
    }

    function endGame() {
        resultPlayerNameSpan.textContent = playerName;
        correctNumberSpan.textContent = correctNumber;
        attemptsCountSpan.textContent = attempts;
        showScreen(resultScreen);
    }

    function resetGame() {
        showScreen(welcomeScreen);
    }

    function showScreen(screen) {
        welcomeScreen.classList.remove('visible');
        gameScreen.classList.remove('visible');
        resultScreen.classList.remove('visible');
        screen.classList.add('visible');
    }

    showScreen(welcomeScreen);
});
