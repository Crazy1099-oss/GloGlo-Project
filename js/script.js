const titleElement = document.getElementsByTagName('h1')[0];

const handlerButtons = document.getElementsByClassName('handler_btn')[0];
const handlerButtonsReset = document.getElementsByClassName('handler_btn')[1];

const plusButton = document.querySelector('.screen-btn');
const percentItems = document.querySelectorAll('.other-items.percent');
const numberItems = document.querySelectorAll('.other-items.number');

const rangeInput = document.querySelector('.rollback input[type="range"]');
const rangeValueSpan = document.querySelector('.rollback .range-value')

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOuther = document.getElementsByClassName('total-input')[2]
const fullToutalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]
const totalScreensInput = document.getElementsByClassName('total-input')[5];

let screenBlocks = document.querySelectorAll('.screen');

// console.log('Заголовок:', titleElement);
// console.log('Кнопки "Рассчитать/Сброс":', handlerButtons);
// console.log('Кнопка "+":', plusButton);
// console.log('Элементы .percent:', percentItems);
// console.log('Элементы .number:', numberItems);
// console.log('Инпут range:', rangeInput);
// console.log('Span .range-value:', rangeValueSpan);
// console.log('Инпуты .total-input:', totalInputs);
// console.log('Блоки .screen:', screenBlocks);

const appDate = {
    title: '',
    screens: [],
    servicesPercent: {},
    rollback: 0,
    rollbackPrice: 0,
    totalScreensCount: 0,

    screenPrice: 0,
    servicePrice1: 0,
    servicePrice2: 0,

    servicesNumber: {},
    servicePricesPersent: 0,
    servicePricesNumber: 0,

    fullPrice: 0,
    discountedPrice: 0,
    adaptive: false,
    isValidString: function (str) {
        return typeof str === 'string' && str.trim() !== '' && /[a-zа-яё]/i.test(str);
    },

    isValidNumber: function (num) {
        return !isNaN(num) && num > 0;
    },

    showResult: function () {
        total.value = appDate.screenPrice;
        totalCountOuther.value = +appDate.servicePricesPersent + +appDate.servicePricesNumber;
        fullToutalCount.value = appDate.fullPrice;
        totalCountRollback.value = appDate.rollbackPrice;
    },

    addScreens: function () {
        screenBlocks = document.querySelectorAll('.screen')

        screenBlocks.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            const count = +input.value || 0;

            appDate.screens.push({
                id: index,
                name: selectName,
                price: +select.value * count,
                count: count
            })
        })
    },

    addPrices: function () {
        appDate.fullPrice = appDate.screenPrice + appDate.servicePricesNumber;

        appDate.totalScreensCount = 0;

        appDate.screens.forEach(screen => {
            appDate.totalScreensCount += screen.count;
        });

        if (appDate.rollback > 0) {
            appDate.rollbackPrice = appDate.fullPrice * (1 - appDate.rollback / 100);
        } else {
            appDate.rollbackPrice = appDate.fullPrice;
        }
    },

    getAllServicePrices: function () {
        for (let screen of appDate.screens) {
            appDate.screenPrice += +screen.price
        }

        for (let key in appDate.servicesNumber) {
            appDate.servicePricesNumber += appDate.servicesNumber[key]
        }

        for (let key in appDate.servicesPercent) {
            appDate.servicePricesPersent += appDate.screenPrice * (appDate.servicesPercent[key] / 100);
        }

        appDate.fullPrice = +appDate.screenPrice + appDate.servicePricesNumber
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

    addTitle: function () {
        document.title = titleElement.textContent
    },


    addScreenBlock: function () {
        const cloneScreens = screenBlocks[0].cloneNode(true) // добавленте клона
        screenBlocks[screenBlocks.length - 1].after(cloneScreens)
    },

    setRollback: function () {
        const value = rangeInput.value;

        rangeValueSpan.textContent = value + '%';
        appDate.rollback = +value;
    },

    showResult: function () {
        total.value = appDate.screenPrice;
        totalCount.value = appDate.totalScreensCount;
        totalCountOuther.value = appDate.servicePricesPersent + appDate.servicePricesNumber;
        fullToutalCount.value = appDate.fullPrice;
        totalCountRollback.value = appDate.rollbackPrice;
    },

    init: function () {
        appDate.addTitle();
        handlerButtons.addEventListener('click', appDate.start);
        plusButton.addEventListener('click', appDate.addScreenBlock);

        rangeInput.addEventListener('input', appDate.setRollback);
    },

    addServices: function () {
        percentItems.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appDate.servicesPercent[label.textContent] = +input.value
            }
        })

        numberItems.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appDate.servicesNumber[label.textContent] = +input.value
            }
        })
        console.log(appDate)
    },

    isValidScreens: function () {
        screenBlocks = document.querySelectorAll('.screen');

        let isValid = true;

        screenBlocks.forEach(screen => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');

            const selectValue = select.value;
            const inputValue = input.value;

            if (!selectValue || selectValue === '0' || inputValue.trim() === '' || +inputValue <= 0) {
                isValid = false;
            }
        });

        return isValid;
    },


    start: function () {

        if (!appDate.isValidScreens()) {
            alert('Заполните все типы экранов и их количество');
            return;
        }

        appDate.screens = [];
        appDate.servicesPercent = {};
        appDate.servicesNumber = {};
        appDate.screenPrice = 0;
        appDate.servicePricesNumber = 0;
        appDate.servicePricesPersent = 0;

        appDate.addScreens();
        appDate.addServices();
        appDate.getAllServicePrices();
        appDate.addPrices(); // ← новый метод
        appDate.showResult();
    }
}

appDate.init();