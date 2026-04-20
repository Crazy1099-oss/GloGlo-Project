const lang = prompt("Язык ru или en:")

const daysWeek = {
    ru: [
        'пн',
        'вт',
        'ср',
        'чт',
        'пт',
        'сб',
        'вс'
    ],

    en: [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
    ],
}

// 1 способ (a)
if (lang == 'ru') {
    console.log("1 способ (a)", daysWeek.ru);
} else {
    console.log("1 способ (a)", daysWeek.en);
}



// 2 способ (b)
switch (lang) {
    case 'ru':
        currentDays = daysWeek.ru;
        console.log("2 способ (b)", daysWeek.ru);
        break;
    case 'en':
        currentDays = daysWeek.en;
        console.log("2 способ (b)", daysWeek.en);
        break;
}


// 3 способ (c)

/*


 Мгогомерный массив уже был реализован выше и значения выводятся из него

const lang = prompt("Язык сайта ru или en:")

const daysWeek = {
    ru = ['пн','вт','ср','чт','пт','сб','вс'],
    en = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], 
}

console.log(daysWeek[lang])


*/


let namePerson = prompt("Ваше имя:")

namePerson = namePerson === "Артем" ? "Директор" :
    namePerson === "Александр" ? "Преподователь" :
        "студент"

console.log("Статус:", namePerson)





//Пример создания массива через метод Map

const products = new Map();

products.set('ягоды', ['клубника', 'малина', 'черника', 'ежевика']);
products.set('фрукты', ['яблоко', 'груша', 'банан', 'апельсин']);
products.set('овощи', ['огурец', 'помидор', 'перец', 'морковь']);

console.log(products.get('ягоды')); // ['клубника', 'малина', 'черника', 'ежевика']

// Добавляем новый элемент в категорию
products.get('фрукты').push('манго');

// Проверяем, есть ли категория
console.log(products.has('овощи')); // true

// Перебор всех категорий и их содержимого
for (let [category, items] of products) {
  console.log(`Категория: ${category}`);
  console.log('Список:', items.join(', '));
}