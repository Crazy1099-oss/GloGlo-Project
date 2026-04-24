let title = prompt("1. Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");

let screenPrice;
let servicePrice1;
let servicePrice2;

let allServicePrices = 0;
let fullPrice = 0;

do {
    screenPrice = prompt("Сколько будет стоить данная работа?");

    //Добавил проверку для null и ввода числа на подобие -> 112руб.
    if (screenPrice === null) {
        alert("Пожалуйста введите стоимость работы");
        continue;
    }

    screenPrice = screenPrice.trim();
    screenPrice = parseFloat(screenPrice);

    if (isNaN(screenPrice) || screenPrice <= 0) {
        alert("Введите положительную сумму к проекту");
    }
} while (isNaN(screenPrice) || screenPrice <= 0);

let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("2. Какой дополнительный тип услуги нужен?");

do {
    servicePrice1 = prompt("Сколько это будет стоить?");

    //Добавил проверку для null и ввода числа на подобие -> 112руб.
    if (servicePrice1 === null) {
        alert("Пожалуйста введите стоимость работы");
        continue;
    }

    servicePrice1 = servicePrice1.trim();
    servicePrice1 = parseFloat(servicePrice1);
    console.log(servicePrice1);

    if (isNaN(servicePrice1) || servicePrice1 <= 0) {
        alert("Введите положительную сумму к проекту");
    }
} while (isNaN(servicePrice1) || servicePrice1 < 0);

let service2 = prompt("3. Какой дополнительный тип услуги нужен?");

do {
    servicePrice2 = prompt("Сколько это будет стоить?");

    //Добавил проверку для null и ввода числа на подобие -> 112руб.
    if (servicePrice2 === null) {
        alert("Пожалуйста введите стоимость работы");
        continue;
    }

    servicePrice2 = servicePrice2.trim();
    servicePrice2 = parseFloat(servicePrice2);

    if (isNaN(servicePrice2) || servicePrice2 <= 0) {
        alert("Введите положительную сумму к проекту");
    }
} while (isNaN(servicePrice2) || servicePrice2 < 0);

function getAllServicePrices() {
    allServicePrices = servicePrice1 + servicePrice2;
    console.log("Сумма всех дополнительных услуг:", allServicePrices);
}

function getFullPrice() {
    fullPrice = screenPrice + allServicePrices;
    console.log("Сумма стоимости верстки и стоимости дополнительных услуг:", fullPrice);
}

function getTitle() {
    return title.toUpperCase();
}

function getServicePercentPrices() {
    let discountedPrice;
    if (fullPrice >= 30000) {
        discountedPrice = fullPrice - (fullPrice * 0.10);
        console.log("Скидка 10%", discountedPrice);
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
        discountedPrice = fullPrice - (fullPrice * 0.05);
        console.log("Скидка 5%", discountedPrice);
    } else if (fullPrice > 0 && fullPrice < 15000) {
        discountedPrice = fullPrice;
        console.log("Скидка не предусмотрена");
    } else {
        discountedPrice = 0;
        console.log("Заказ на сумму 0 рублей невозможен");
    }
    return discountedPrice;
}

getAllServicePrices();
getFullPrice();
console.log("Название проекта:", getTitle());

console.log("Типы экранов для разработки: ", screens);
console.log("Итоговая стоимость с учётом скидки: ", getServicePercentPrices());