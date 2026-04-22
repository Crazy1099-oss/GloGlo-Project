function game() {
    const Number = 25;

    function play() {
        const userInput = +prompt("Угадай число от 1 до 100");

        if (userInput === null) {
            alert("Игра окончена");
            return;
        }

        if (isNaN(userNumber)) {
            alert("Введи число!");
            play();
            return;
        }

        if (userNumber === secretNumber) {
            alert("Вы угадали!!!");
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