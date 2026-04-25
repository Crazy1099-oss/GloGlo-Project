const appDate = {
    title: '',
    screens: '',
    service1: '',
    service2: '',
    screenPrice: 0,
    servicePrice1: 0,
    servicePrice2: 0,
    allServicePrices: 0,
    fullPrice: 0,
    discountedPrice: 0,
    adaptive: false,
    asking: function () {
        appDate.title = prompt("1. Как называется ваш проект?");
        appDate.screens = prompt("Какие типы экранов нужно разработать?");

        do {
            appDate.screenPrice = prompt("Сколько будет стоить данная работа?");

            if (appDate.screenPrice === null) {
                alert("Пожалуйста введите стоимость работы");
                continue;
            }

            appDate.screenPrice = appDate.screenPrice.trim();
            appDate.screenPrice = parseFloat(appDate.screenPrice);

            if (isNaN(appDate.screenPrice) || appDate.screenPrice <= 0) {
                alert("Введите положительную сумму к проекту");
            }
        } while (isNaN(appDate.screenPrice) || appDate.screenPrice <= 0);

        appDate.adaptive = confirm("Нужен ли адаптив на сайте?");
        appDate.service1 = prompt("2. Какой дополнительный тип услуги нужен?");

        do {
            appDate.servicePrice1 = prompt("Сколько это будет стоить?");

            if (appDate.servicePrice1 === null) {
                alert("Пожалуйста введите стоимость работы");
                continue;
            }

            appDate.servicePrice1 = appDate.servicePrice1.trim();
            appDate.servicePrice1 = parseFloat(appDate.servicePrice1);

            if (isNaN(appDate.servicePrice1) || appDate.servicePrice1 <= 0) {
                alert("Введите положительную сумму к проекту");
            }
        } while (isNaN(appDate.servicePrice1) || appDate.servicePrice1 <= 0);

        service2 = prompt("3. Какой дополнительный тип услуги нужен?");

        do {
            appDate.servicePrice2 = prompt("Сколько это будет стоить?");

            if (appDate.servicePrice2 === null) {
                alert("Пожалуйста введите стоимость работы");
                continue;
            }

            appDate.servicePrice2 = appDate.servicePrice2.trim();
            appDate.servicePrice2 = parseFloat(appDate.servicePrice2);

            if (isNaN(appDate.servicePrice2) || appDate.servicePrice2 <= 0) {
                alert("Введите положительную сумму к проекту");
            }
        } while (isNaN(appDate.servicePrice2) || appDate.servicePrice2 < 0);
    },

    getAllServicePrices: function () {
        appDate.allServicePrices = appDate.servicePrice1 + appDate.servicePrice2;
    },

    getFullPrice: function () {
        appDate.fullPrice = appDate.screenPrice + appDate.allServicePrices;
    },

    getTitle: function () {
        return appDate.title.toUpperCase();
    },

    getServicePercentPrices: function () {
        if (appDate.fullPrice >= 30000) {
            appDate.discountedPrice = appDate.fullPrice - (appDate.fullPrice * 0.10);
        } else if (appDate.fullPrice >= 15000 && appDate.fullPrice < 30000) {
            appDate.discountedPrice = appDate.fullPrice - (appDate.fullPrice * 0.05);

        } else if (appDate.fullPrice > 0 && appDate.fullPrice < 15000) {
            appDate.discountedPrice = appDate.fullPrice;
        } else {
            appDate.discountedPrice = 0;
        }
        return appDate.discountedPrice;
    },

    logger: function () {
        console.log("Название проекта:", appDate.getTitle());
        console.log("Типы экранов для разработки:", appDate.screens);
        console.log("Дополнительные услуги 1:", appDate.servicePrice1, "Дополнительные услуги 2:", appDate.servicePrice2);
        console.log("Нужен ли адаптив?", appDate.adaptive ? "Да" : "Нет");
        if (appDate.fullPrice >= 30000) {
            console.log("Скидка: 10%");
        } else if (appDate.fullPrice >= 15000) {
            console.log("Скидка: 5%");
        } else {
            console.log("Скидка: не предусмотрена");
        }
        console.log("Итоговая стоимость без скидки:", appDate.fullPrice);
        console.log("Итоговая стоимость к оплате:", appDate.discountedPrice);
    },

    start: function () {
        appDate.asking();
        appDate.getAllServicePrices();
        appDate.getFullPrice();
        appDate.getServicePercentPrices();
        appDate.logger(); 
    }
}

appDate.start();