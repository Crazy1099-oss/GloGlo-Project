const btnInput = document.getElementById("btn")
const input = document.getElementById("text")
const square = document.getElementById("square")

const rangeInput = document.getElementById('range');
const circle = document.getElementById('circle');
const span = document.getElementById("range-span")

btnInput.addEventListener('click', function () {
    const color = input.value.trim();

    if (color) {
        square.style.backgroundColor = color;
    }
});



rangeInput.addEventListener('input', function () {
    const size = rangeInput.value + '%';
    circle.style.width = size;
    circle.style.height = size;
    span.textContent = rangeInput.value
});