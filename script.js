const title = prompt("1. Как называется ваш проект?");
console.log(title);

const screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);

const screenPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);

const adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);

const service1 = prompt("2. Какой дополнительный тип услуги нужен?");
console.log(service1);

const servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);

const service2 = prompt("3. Какой дополнительный тип услуги нужен?");
console.log(service2);

const servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);


let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = 0;
console.log("Итого:", fullPrice);


switch (fullPrice >= 0) {
    case fullPrice >= 30000:
        servicePercentPrice = fullPrice - (fullPrice * 10 / 100)
        console.log("Итого:", servicePercentPrice)
        break;
    case fullPrice >= 15000 && fullPrice < 30000:
        servicePercentPrice = fullPrice - (fullPrice * 5 / 100)
        console.log("Итого:", servicePercentPrice)
        break;
    case fullPrice < 15000 && fullPrice < 0:
        console.log("Скидка не предусмотрена")
        break;
    case fullPrice == 0:
        console.log("Заказ на сумму 0 рублей невозможен")
        break;
}