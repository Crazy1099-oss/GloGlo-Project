const week = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
];

const currentDate = new Date();
const currentDayIndex = currentDate.getDay();
const currentDayName = week[currentDayIndex];
const root = document.getElementById('root')

week.forEach(day => {
    let formattedDay = `<span class='day'>${day}</span>`;


    if (day === currentDayName) {
        formattedDay = `<b>${day}</b>`;
    }

    const dayIndex = week.indexOf(day);
    if (dayIndex === 0 || dayIndex === 6) {
        formattedDay = `<i>${formattedDay}</i>`;
    }

    root.innerHTML += `${formattedDay}`
});

//немного не понял как вывести в консоль текст с разными стилями :(
//в интернете нашел только метод %c но он не работает в консоли...