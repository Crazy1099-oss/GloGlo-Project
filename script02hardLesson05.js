let arr = [
    "52", "62", "31", "4",
    "96", "25", "11", "44",
    "62", "85", "23", "34",
    "49", "41", "2", "70",
]

for (let i = 0; i < arr.length; i++) {
    let arrNumber = arr[i];

    if (arrNumber.startsWith('2') || arrNumber.startsWith('4')) {
        console.log(arrNumber)
    }
}

console.log('--------------второе задание--------------')

for (let number = 2; number <= 100; number++) {
    let numberIsTrue = true;

    for (let numberDel = 2; numberDel * numberDel <= number; numberDel++) {
        if (number % numberDel === 0) {
            numberIsTrue = false;
            break; 
        }
    }

    if (numberIsTrue) {
        console.log('Простое число ->',number);
    }
}