const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function addZero(value) {
    return value < 10 ? '0' + value : value;
}

function updateDateTime() {
    const now = new Date();

    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formatA = `Сегодня ${dayName}, ${day} ${month} ${year} года, ${hours} ${declOfNum(hours, ['час', 'часа', 'часов'])} ${minutes} ${declOfNum(minutes, ['минута', 'минуты', 'минут'])} ${seconds} ${declOfNum(seconds, ['секунда', 'секунды', 'секунд'])}`;

    const formatB = `${addZero(day)}.${addZero(now.getMonth() + 1)}.${year} - ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

    document.getElementById('formatA').textContent = formatA;
    document.getElementById('formatB').textContent = formatB;
}

setInterval(updateDateTime, 1000);
updateDateTime();
