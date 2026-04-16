console.log("----------Первое задание----------")
title = "GloGlo Project";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 1294889213757812;
rollback = 25;
fullPrice = 250000;
adaptive = false;

console.log("title:", title,
    "| screens:", screens,
    "| screenPrice:", screenPrice,
    "| rollback:", rollback,
    "| fullPrice:", fullPrice,
    "| adaptive:", adaptive);



console.log("----------Второе задание----------")
console.log("title:",typeof title,"| fullPrice:",typeof fullPrice,"| adaptive:",typeof adaptive)
console.log("Узнаем длинну строки:", screens.length)
console.log("Стоимость верстки экранов:", screenPrice,"рублей")
console.log("Стоимость разработки сайта:", fullPrice,"рублей")

screens = screens.toLowerCase();
let screensArray = screens.split(', ');
console.log("Массив:",screensArray);

let rollbackPercent = fullPrice * (rollback / 100);
console.log('Процент отката посреднику за работу:', rollbackPercent);