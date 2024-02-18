let display = document.querySelector(".display input");

const clearToDisplay = () => {
    display.value = ''
}

function addToDisplay(input) {
    console.log(input)
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value) 
    } catch (error) {
        display.value = "Somethings went wrong"
    }
}
