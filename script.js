const appDate = {
    title: '',
    screens: [],
    services: {},
    screenPrice: 0,
    servicePrice1: 0,
    servicePrice2: 0,
    allServicePrices: 0,
    fullPrice: 0,
    discountedPrice: 0,
    adaptive: false,
    isValidString: function (str) {
        return typeof str === 'string' && str.trim() !== '' && /[a-zа-яё]/i.test(str);
    },

    isValidNumber: function (num) {
        return !isNaN(num) && num > 0;
    },

    asking: function () {
        do {
            appDate.title = prompt("1. Как называется ваш проект?", "Калькулятор стоимости");
            if (!appDate.isValidString(appDate.title)) {
                alert("Пожалуйста, введите корректное название проекта (должен быть текст).");
            }
        } while (!appDate.isValidString(appDate.title));

        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;

            do {
                name = prompt("Какие типы экранов нужно разработать?");
                if (!this.isValidString(name)) {
                    alert("Пожалуйста, введите корректное название типа экрана (должен быть текст).");
                }
            } while (!this.isValidString(name));

            do {
                price = prompt("Сколько будет стоить данная работа?");
                price = parseFloat(price);
                if (!this.isValidNumber(price)) {
                    alert("Пожалуйста, введите корректную стоимость (положительное число).");
                }
            } while (!this.isValidNumber(price));

            this.screens.push({ id: i, name: name, price: price });
        }

        let result = appDate.screens.reduce(function (accumulator, item) {
            return accumulator + item.price;
        }, 0);
        appDate.screenPrice = result;

        appDate.adaptive = confirm("Нужен ли адаптив на сайте?");
        //веместо примера с урока просто создал новые ключи у объекта services что является решением для усложненного урока
        //appDate.services.service1 = prompt("2. Какой дополнительный тип услуги нужен?", "Слайдер");

        do {
            appDate.services.service1 = prompt("2. Какой дополнительный тип услуги нужен?", "Слайдер");
            if (!appDate.isValidString(appDate.services.service1)) {
                alert("Пожалуйста, введите корректное название проекта (должен быть текст).");
            }
        } while (!appDate.isValidString(appDate.services.service1));


        do {
            appDate.servicePrice1 = prompt("Сколько это будет стоить?");
            appDate.servicePrice1 = parseFloat(appDate.servicePrice1);
            if (!this.isValidNumber(appDate.servicePrice1)) {
                alert("Пожалуйста, введите корректную стоимость (положительное число).");
            }
        } while (!this.isValidNumber(appDate.servicePrice1));

        //веместо примера с урока просто создал новые ключи у объекта services что является решением для усложненного урока
        //appDate.services.service2 = prompt("3. Какой дополнительный тип услуги нужен?", "Анимации");

        do {
            appDate.services.service2 = prompt("3. Какой дополнительный тип услуги нужен?", "Анимации");
            if (!appDate.isValidString(appDate.services.service2)) {
                alert("Пожалуйста, введите корректное название проекта (должен быть текст).");
            }
        } while (!appDate.isValidString(appDate.services.service2));

        do {
            appDate.servicePrice2 = prompt("Сколько это будет стоить?");
            appDate.servicePrice2 = parseFloat(appDate.servicePrice2);
            if (!this.isValidNumber(appDate.servicePrice2)) {
                alert("Пожалуйста, введите корректную стоимость (положительное число).");
            }
        } while (!this.isValidNumber(appDate.servicePrice2));
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
        console.log("Стоимость экранов:", appDate.screenPrice)
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