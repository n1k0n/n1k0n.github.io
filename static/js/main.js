function displayOnNewWindow(text) {
    let newWin = window.open("about:blank", "hello", "width=300,height=600");
    newWin.document.write(text);
}

btn1.onclick = function () {
    words = inputForm.value.split(' ').filter(word => word.length <= 5);
    displayOnNewWindow(words);
}

btn2.onclick = function () {

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

function zfill2(object) {
    return object.toString().padStart(2, '0')
}

function format_time(date) {
    return `${zfill2(date.getHours())}:${zfill2(date.getMinutes())}:${zfill2(date.getSeconds())}`
}

setInterval(() => {
    scrollBy(0, 100)
}, 10000)

setInterval(() => {
    document.title = format_time(new Date())
}, 1000)

