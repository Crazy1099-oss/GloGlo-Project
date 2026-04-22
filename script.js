function game() {
    const secretNumber = 25;
    let attempts = 10;

    function play(currentAttempts) {
        const userInput = +prompt(`Угадай число от 1 до 100. Осталось попыток: ${currentAttempts}`);

        if (userInput === null) {
            alert("Игра окончена. До свидания!");
            return;
        }

        const userNumber = Number(userInput);

        if (isNaN(userNumber)) {
            alert("Введи число!");
            play(currentAttempts);
            return;
        }

        if (userNumber === secretNumber) {
            if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
                const newGame = createGame();
                newGame(10);
            } else {
                alert("Спасибо за игру!");
            }
            return; 
        }

        const nextAttempts = currentAttempts - 1;

        if (nextAttempts === 0) {
            if (confirm(`Попытки закончились. Загаданное число было ${secretNumber}. Хотите сыграть еще?`)) {
                const newGame = createGame();
                newGame(10);
            } else {
                alert("Спасибо за игру!");
            }
            return;
        }

        if (userNumber < secretNumber) {
            alert(`Загаданное число больше, осталось попыток: ${nextAttempts}`);
            play(nextAttempts);
        } else {
            alert(`Загаданное число меньше, осталось попыток: ${nextAttempts}`);
            play(nextAttempts);
        }
    }

    return play;
}

const startGame = game();
startGame(10);