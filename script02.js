const lang = document.documentElement.lang

const daysWeek = [
    ru = [
        'пн',
        'вт',
        'ср',
        'чт',
        'пт',
        'сб',
        'вс'
    ],

    en = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
    ],
]

if (lang == 'ru') {
    console.log(daysWeek[0]);
} else {
    console.log(daysWeek[1]);
}

let namePerson = prompt("Ваше имя:")

namePerson = namePerson === "Артем" ? "Директор" :
    namePerson === "Александр" ? "Преподователь" :
        "студент"

console.log("Статус:", namePerson)