let title = prompt("1. Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("2. Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("3. Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let servicePercentPrice = 0;
let allServicePrices = 0;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;


function getAllServicePrices() {
    return allServicePrices = servicePrice1 + servicePrice2
    console.log("Сумма всех дополнительных услуг:", allServicePrices)
}

function getFullPrice() {
    return fullPrice = screenPrice + allServicePrices
    console.log("Сумма стоимости верстки и стоимости дополнительных услуг:", allServicePrices)
}

function getTitle() {
    return title.toUpperCase();
}

function getServicePercentPrices() {
    if (fullPrice >= 30000) {
        servicePercentPrice = fullPrice - (fullPrice * 10 / 100);
        console.log("Скидка 10%", servicePercentPrice)
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
        servicePercentPrice = fullPrice - (fullPrice * 5 / 100);
        console.log("Скидка 5%", servicePercentPrice)
    } else if (fullPrice > 0 && fullPrice < 15000) {
        servicePercentPrice = fullPrice;
        console.log("Скидка не предусмотрена")
    } else {
        servicePercentPrice = 0;
        console.log("Заказ на сумму 0 рублей невозможен")
    }
    return servicePercentPrice;
}


getAllServicePrices()
getFullPrice()
getTitle()

console.log("Типы экранов для разработки: ", screens);
console.log("Итоговая стоимость с учётом отката: ", getServicePercentPrices());
