function game() {
    const secretNumber = 25;

    function play() {
        const userInput = prompt("Угадай число от 1 до 100");

        if (userInput === null) {
            alert("Игра окончена");
            return;
        }

        const userNumber = Number(userInput);

        if (isNaN(userNumber)) {
            alert("Введи число!");
            play(); // Рекурсивный вызов
            return;
        }

        if (userNumber === secretNumber) {
            alert("Поздравляю, Вы угадали!!!");
        } else if (userNumber < secretNumber) {
            alert("Загаданное число больше");
            play();
        } else {
            alert("Загаданное число меньше");
            play();
        }
    }

    return play;
}

const startGame = game();
startGame();