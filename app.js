//
const containerPage = document.querySelector(".container-page");
const containerHistory = document.querySelector(".container-history");
const historyTextArea = document.querySelector("#history-textarea");
const mobileHistoryButton = document.querySelector(".mobile-history-button");
const containerCalculator = document.querySelector(".container-calculator");
const containerNumberPad = document.querySelector(".container-number-pad");
const buttonAllClear = document.querySelector(".button-all-clear");
const buttonClearEntry = document.querySelector(".button-clear-entry");
const buttonDeleteLastNumber = document.querySelector(".button-delete-last-number");
const buttonDivision = document.querySelector(".button-division");
const buttonNumberSeven = document.querySelector(".button-number-seven");
const buttonNumberEight = document.querySelector(".button-number-eight");
const buttonNumberNine = document.querySelector(".button-number-nine");
const buttonMultiplication = document.querySelector(".button-multiplication");
const buttonNumberFour = document.querySelector(".button-number-four");
const buttonNumberFive = document.querySelector(".button-number-five");
const buttonNumberSix = document.querySelector(".button-number-six");
const buttonSubtraction = document.querySelector(".button-subtraction");
const buttonNumberOne = document.querySelector(".button-number-one");
const buttonNumberTwo = document.querySelector(".button-number-two");
const buttonNumberThree = document.querySelector(".button-number-three");
const buttonAddition = document.querySelector(".button-addition");
const buttonPositiveNegative = document.querySelector(".button-positive-negative");
const buttonNumberZero = document.querySelector(".button-number-zero");
const buttonDecimal = document.querySelector(".button-decimal");
const buttonEquals = document.querySelector(".button-equals");
const touchNumbers = document.querySelectorAll(".touch-numbers");
const touchDelete = document.querySelectorAll(".touch-delete");
const touchOperator = document.querySelectorAll(".touch-operator");
const displaySmallText = document.querySelector(".display-small-text");
const displayBigText = document.querySelector(".display-big-text");

let currentNumberValue = 0;
let currentNumber = "0";
let currentCalculation;

let number1String = buttonNumberZero.value;
let number1 = parseInt(number1String);

//
containerPage.style.height = window.innerHeight + "px";
containerPage.style.width = window.innerWidth + "px";
containerCalculator.style.height = window.innerHeight + "px";
containerCalculator.style.width = window.innerWidth + "px";
containerHistory.style.height = window.innerHeight + "px";
containerHistory.style.width = window.innerWidth + "px";
historyTextArea.style.height = (window.innerHeight - 50) + "px";
historyTextArea.style.width = window.innerWidth + "px";


//
mobileHistoryButton.addEventListener("click", () => {
    if (containerHistory.classList.contains("mobile-hide-history")) {
        containerHistory.classList.remove("mobile-hide-history");
        containerHistory.classList.add("mobile-show-history");
    }
    else {
        containerHistory.classList.add("mobile-hide-history");
        containerHistory.classList.remove("mobile-show-history");
    }
});


//
function add(num1, num2) {
    return num1 + num2;
}


//
function setCurrentNumber() {
    if (displayBigText.innerText === "0") {
        currentNumber = "";
    }
    currentNumberValue += parseInt(this.value);
    currentNumber += this.value;
    displayBigText.innerText = currentNumber;
}

//
function setCurrentCalculation() {
    displaySmallText.innerText = currentNumber + this.value;
}

//
function allClear() {
    currentNumber = "0";
    currentNumberValue = 0;
    displayBigText.innerText = currentNumber;
    displaySmallText.innerText = "";
}


//
function changeColorTouchStart() {
    return this.classList.contains("touch-numbers") ? this.style.backgroundColor = "#DCDCDC"
    : this.classList.contains("button-all-clear") ? this.style.backgroundColor = "#FF4444"
    : this.classList.contains("touch-delete") ? this.style.backgroundColor = "#FFB1B1"
    : this.classList.contains("touch-operator") ? this.style.backgroundColor = "#BFD5FF"
    : this.classList.contains("button-equals") ? this.style.backgroundColor = "#6599FF"
    : this.style.backgroundColor = "#DCDCDC";
}
function changeColorTouchEnd() {
    return this.classList.contains("touch-numbers") ? this.style.backgroundColor = "#fff"
    : this.classList.contains("button-all-clear") ? this.style.backgroundColor = "#FFDDDD"
    : this.classList.contains("touch-delete") ? this.style.backgroundColor = "#F4F4F4"
    : this.classList.contains("touch-operator") ? this.style.backgroundColor = "#F4F4F4"
    : this.classList.contains("button-equals") ? this.style.backgroundColor = "#DCE8FF"
    : this.style.backgroundColor = "#F4F4F4";
}
touchNumbers.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
touchNumbers.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
touchNumbers.forEach(number => number.addEventListener("touchstart", setCurrentNumber));
touchDelete.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
touchDelete.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
touchOperator.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
touchOperator.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
buttonAllClear.addEventListener("touchstart", changeColorTouchStart);
buttonAllClear.addEventListener("touchend", changeColorTouchEnd);
buttonAllClear.addEventListener("click", allClear);
buttonEquals.addEventListener("touchstart", changeColorTouchStart);
buttonEquals.addEventListener("touchend", changeColorTouchEnd);
buttonPositiveNegative.addEventListener("touchstart", changeColorTouchStart);
buttonPositiveNegative.addEventListener("touchend", changeColorTouchEnd);
buttonDecimal.addEventListener("touchstart", changeColorTouchStart);
buttonDecimal.addEventListener("touchend", changeColorTouchEnd);


