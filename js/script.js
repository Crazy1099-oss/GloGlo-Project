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

    isValidString: (str) =>
        typeof str === 'string' && str.trim() !== '' && /[a-zа-яё]/i.test(str),

    isValidNumber: (num) =>
        !isNaN(num) && num > 0,

    addScreens: () => {
        screenBlocks = document.querySelectorAll('.screen');

        screenBlocks.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            const count = +input.value || 0;

            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * count,
                count: count
            });
        });
    },

    addPrices: () => {
        this.fullPrice =
            this.screenPrice +
            this.servicePricesNumber +
            this.servicePricesPersent;

        this.totalScreensCount = 0;

        this.screens.forEach(screen => {
            this.totalScreensCount += screen.count;
        });

        this.rollbackPrice = this.rollback > 0
            ? this.fullPrice * (1 - this.rollback / 100)
            : this.fullPrice;
    },

    getAllServicePrices: () => {
        this.screens.forEach(screen => {
            this.screenPrice += +screen.price;
        });

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPersent +=
                this.screenPrice * (this.servicesPercent[key] / 100);
        }

        this.fullPrice =
            this.screenPrice + this.servicePricesNumber;
    },

    addTitle: () => {
        document.title = titleElement.textContent;
    },

    addScreenBlock: () => {
        const cloneScreens = screenBlocks[0].cloneNode(true);
        screenBlocks[screenBlocks.length - 1].after(cloneScreens);
    },

    setRollback: () => {
        const value = rangeInput.value;

        rangeValueSpan.textContent = value + '%';
        this.rollback = +value;
    },

    showResult: () => {
        total.value = this.screenPrice;
        totalCount.value = this.totalScreensCount;
        totalCountOuther.value =
            this.servicePricesPersent + this.servicePricesNumber;
        fullToutalCount.value = this.fullPrice;
        totalCountRollback.value = this.rollbackPrice;
    },

    addServices: () => {
        percentItems.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        });

        numberItems.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
        });
    },

    isValidScreens: () => {
        screenBlocks = document.querySelectorAll('.screen');

        let isValid = true;

        screenBlocks.forEach(screen => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');

            if (
                !select.value ||
                select.value === '0' ||
                input.value.trim() === '' ||
                +input.value <= 0
            ) {
                isValid = false;
            }
        });

        return isValid;
    },

    disableInputs: () => {
        const textInputs = document.querySelectorAll('input[type="text"]');
        const selects = document.querySelectorAll('select');
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        textInputs.forEach(input => input.disabled = true);
        selects.forEach(select => select.disabled = true);
        checkboxes.forEach(cb => cb.disabled = true);

        handlerButtons.style.display = 'none';
        handlerButtonsReset.style.display = 'inline-block';
    },

    resetApp: () => {
        const textInputs = document.querySelectorAll('input[type="text"]');
        const selects = document.querySelectorAll('select');

        textInputs.forEach(input => {
            input.disabled = false;
            input.value = '';
        });

        selects.forEach(select => {
            select.disabled = true;
            select.selectedIndex = 0;
        });

        rangeInput.value = 0;
        rangeValueSpan.textContent = '0%';

        handlerButtons.style.display = 'inline-block';
        handlerButtonsReset.style.display = 'none';

        total.value = '';
        totalCount.value = '';
        totalCountOuther.value = '';
        fullToutalCount.value = '';
        totalCountRollback.value = '';

        appDate.screens = [];
        appDate.servicesPercent = {};
        appDate.servicesNumber = {};
        appDate.screenPrice = 0;
        appDate.servicePricesNumber = 0;
        appDate.servicePricesPersent = 0;
    },

    start: () => {
        if (!appDate.isValidScreens()) {
            alert('Заполните все типы экранов и их количество');
            return;
        }

        this.screens = [];
        this.servicesPercent = {};
        this.servicesNumber = {};
        this.screenPrice = 0;
        this.servicePricesNumber = 0;
        this.servicePricesPersent = 0;

        appDate.addScreens();
        appDate.addServices();
        appDate.getAllServicePrices();
        appDate.addPrices();
        appDate.showResult();
        appDate.disableInputs();
    },

    init: () => {
        appDate.addTitle();
        handlerButtonsReset.style.display = 'none';

        handlerButtonsReset.addEventListener('click', appDate.resetApp);
        handlerButtons.addEventListener('click', appDate.start)

        plusButton.addEventListener('click', appDate.addScreenBlock);
        rangeInput.addEventListener('input', appDate.setRollback);
    }
};

appDate.init();