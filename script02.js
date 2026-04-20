function editTextStr(str) {
    let textStr = str.trim();

    if (textStr.length > 30) {
        textStr = textStr.slice(0, 30) + ('...')
    }
    
    return textStr
}

let endTextStr = editTextStr('    Мы боимся темноты, монстров, скрипа дверей в пустом доме.     ')
console.log(endTextStr)