display = document.querySelector(".display").textContent
display = ''
clearInput()

function add(a, b) {
    return (parseInt(a) + parseInt(b));
}

function subtract(a, b) {
    return (a - b);
}

function divide(a, b) {
    return (a / b)
}

function multiply(a, b) {
    return (a * b)
}

function operate(a, operator, b) {

    if (operator == '*') {
        return multiply(a, b)
    }
    else if (operator == '-') {
        return subtract(a, b)
    }
    else if (operator == '+') {
        return add(a, b)
    }
    else if (operator == '/') {
        return divide (a, b)
    }
}

function input(a) {
    display = document.querySelector(".display");
    display.textContent += a;
}

function clearInput() {
    display = document.querySelector(".display");
    display.textContent = ""
}

clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', () => {
    clearInput()
})

oneButton = document.querySelector(".one")
oneButton.addEventListener('click', () => {
    input(1)
})

twoButton = document.querySelector(".two")
twoButton.addEventListener('click', () => {
    input(2)
})

threeButton = document.querySelector(".three")
threeButton.addEventListener('click', () => {
    input(3)
})

fourButton = document.querySelector(".four")
fourButton.addEventListener('click', () => {
    input(4)
})

fiveButton = document.querySelector(".five")
fiveButton.addEventListener('click', () => {
    input(5)
})

sixButton = document.querySelector(".six")
sixButton.addEventListener('click', () => {
    input(6)
})

sevenButton = document.querySelector(".seven")
sevenButton.addEventListener('click', () => {
    input(7)
})

eightButton = document.querySelector(".eight")
eightButton.addEventListener('click', () => {
    input(8)
})

nineButton = document.querySelector(".nine")
nineButton.addEventListener('click', () => {
    input(9)
})

zeroButton = document.querySelector(".last-button")
zeroButton.addEventListener('click', () => {
    input(0)
})

plusButton = document.querySelector(".add")
plusButton.addEventListener('click', () => {
    input(" + ")
})

divideButton = document.querySelector(".divide")
divideButton.addEventListener('click', () => {
    input(" / ")
})

multiplyButton = document.querySelector(".multiply")
multiplyButton.addEventListener('click', () => {
    input(" * ")
})

subtractButton = document.querySelector(".subtract")
subtractButton.addEventListener('click', () => {
    input(" - ")
})

equalButton = document.querySelector(".equals")
equalButton.addEventListener('click', () => {
    display = document.querySelector(".display").textContent
    console.log(display)
    display = display.split(' ')
    console.log(display)
    result = operate(display[0], display[1], display[2])
    console.log(result)
    document.querySelector(".display").textContent = result
})

function parseInput() {
    
    return display
}