let num = 266219
let strNum = num.toString()
let lastNum = 1

for (let i = 0; i < strNum.length; i++) {
    lastNum = lastNum * parseInt(strNum[i])
}

console.log("Результат умнажения: ",lastNum)
console.log("Результата в степень 3: ",lastNum ** 3)