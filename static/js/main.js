function displayOnNewWindow(text) {
    let newWin = window.open("about:blank", "hello", "width=300,height=600");
    newWin.document.write(text);
}

function counter(iterable){
    const symbols ={}
    for (let symbol of iterable) {
        if (symbol in symbols){
            symbols[symbol]++
        }else{
            symbols[symbol] = 1
        }
    }
    return symbols
}

function zfill2(object) {
    return object.toString().padStart(2, '0')
}

function format_time(date) {
    return `${zfill2(date.getHours())}:${zfill2(date.getMinutes())}:${zfill2(date.getSeconds())}`
}

btn1.onclick = function () {
    words = inputForm.value.split(' ').filter(word => word.length <= 5);
    displayOnNewWindow(words);
}

btn2.onclick = function () {
    let MaxLetterCount = -Infinity
    let MaxLetter
    for (let [letter, letterCount] of Object.entries(counter(inputForm.value))){
        if (!letter.match(/^[a-zа-я]+$/i)){
            continue
        }
        if (letterCount > MaxLetterCount){
            MaxLetterCount = letterCount
            MaxLetter = letter
        }
    }
    displayOnNewWindow(inputForm.value.split(MaxLetter).join(''))
}

btn3.onclick = function () {
    textWithoutNumbers = inputForm.value.split(/[0-9]/).join('');
    displayOnNewWindow(textWithoutNumbers);
}

btn4.onclick = function () {
    document.body.style.background = exampleColorInput.value;
}

btn5.onclick = function () {
    const now = new Date()
    displayOnNewWindow(`${zfill2(now.getDate())}.${zfill2(now.getMonth())}.${now.getFullYear()}, ${format_time(now)}`)
}

btn6.onclick = () => {
    result.value = `${eval(calculator.value)}`
}

setInterval(() => {
    scrollBy(0, 100)
}, 10000)

setInterval(() => {
    document.title = format_time(new Date())
}, 1000)


