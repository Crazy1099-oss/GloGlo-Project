document.addEventListener("DOMContentLoaded", function () {
    const aside = document.querySelector('aside.books');
    const books = Array.from(aside.querySelectorAll('.book'));

    const order = [1, 2, 3, 4, 5, 6];
    const orderedBooks = order.map(num => books.find(b => b.querySelector('h2 a').textContent.includes(`Книга ${num}`)));
    orderedBooks.forEach(book => aside.appendChild(book));

    document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

    const book3Title = aside.querySelector('.book h2 a');
    if (book3Title) {
        book3Title.textContent = book3Title.textContent.replace('Пропопипы', 'Прототипы');
    }

    const adv = document.querySelector('.adv');
    if (adv) {
        adv.remove();
    }

    const book2 = aside.querySelector('.book:nth-child(2)');
    const chaptersBook2 = Array.from(book2.querySelectorAll('li.chapter'));
    const orderBook2 = [
        'Введение',
        'Предисловие',
        'Глава 1: Введение в программирование',
        'Глава 2: Введение в JavaScript',
        'Глава 3: Введение в "Вы не знаете JavaScript"',
        'Приложение A: Благодарности!'
    ];

    const orderedChaptersBook2 = orderBook2.map(title => chaptersBook2.find(li => li.textContent.trim() === title));
    const ulBook2 = book2.querySelector('ul');

    const book5 = aside.querySelector('.book:nth-child(5)');
    const chaptersBook5 = Array.from(book5.querySelectorAll('li'));

    const orderBook5 = [
        'Введение',
        'Предисловие',
        'Глава 1: Асинхронность: Сейчас и Тогда',
        'Глава 2: Колбеки',
        'Глава 3: Обещания',
        'Глава 4: Генераторы',
        'Глава 5: Производительность программы',
        'Глава 6: Бенчмаркинг и настройка',
        'Приложение A: Библиотека: asynquence',
        'Приложение B: Расширенные асинхронные шаблоны',
        'Приложение C: Благодарности!'
    ];

    const orderedChaptersBook5 = orderBook5.map(title => chaptersBook5.find(li => li.textContent.trim() === title));

    const ulBook5 = book5.querySelector('ul');
    ulBook5.innerHTML = '';

    orderedChaptersBook5.forEach(li => ulBook5.appendChild(li));

    const book6 = aside.querySelector('.book:nth-child(6)');
    const ulBook6 = book6.querySelector('ul');
    const appA = Array.from(ulBook6.children).find(li => li.textContent.trim() === 'Приложение A: Благодарности!');

    if (appA) {
        const newChapter = document.createElement('li');
        newChapter.textContent = 'Глава 8: За пределами ES6';
        ulBook6.insertBefore(newChapter, appA);

        let insertAfterThis;
        for (let i = ulBook6.children.length - 1; i >= 0; i--) {
            if (ulBook6.children[i].textContent.trim().startsWith('Глава')) {
                insertAfterThis = ulBook6.children[i];
                break;
            }
        }

        if (insertAfterThis && insertAfterThis.nextSibling !== appA) {
            ulBook6.insertBefore(newChapter, appA);
            console.log("Вставил перед приложением");
        } else if (insertAfterThis) {
            ulBook6.insertBefore(newChapter, insertAfterThis.nextSibling);
            console.log("Вставил после последней главы");
        } else {
            ulBook6.appendChild(newChapter);
            console.log("Вставил в конец");
        }
    }
})