//
const containerPage = document.querySelector(".container-page");
const containerHistory = document.querySelector(".container-history");
const historyTextArea = document.querySelector("#history-textarea");
const mobileHistoryButton = document.querySelector(".mobile-history-button");
const containerCalculator = document.querySelector(".container-calculator");
const containerNumberPad = document.querySelector(".container-number-pad");
const buttonAllClear = document.querySelector(".button-all-clear");
const buttonClearEntry = document.querySelector(".button-clear-entry");
const buttonDeleteLastDigit = document.querySelector(".button-delete-last-digit");
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
let currentCalculationValue = 0;
let currentCalculation = "";

let currentEntryCount = 0;

let isActiveDivision = false;
let isActiveMultiplication = false;
let isActiveSubtraction = false;
let isActiveAddition = false;


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
function setOperatorColor() {
    touchOperator.forEach(button => button.style.backgroundColor = "#fff8f1");
    isActiveAddition ? buttonAddition.style.backgroundColor = "#fde6ce"
    : isActiveDivision ? buttonDivision.style.backgroundColor = "#fde6ce"
    : isActiveMultiplication ? buttonMultiplication.style.backgroundColor = "#fde6ce"
    : isActiveSubtraction ? buttonSubtraction.style.backgroundColor = "#fde6ce"
    : touchOperator.forEach(button => button.style.backgroundColor = "#fff8f1");;
}


//
function setActiveAdd() {
    isActiveAddition = true;
    isActiveDivision = false;
    isActiveMultiplication = false;
    isActiveSubtraction = false;
    setOperatorColor();
}


//
function add() {
    setActiveAdd();
    if (currentCalculation === "") {
        displaySmallText.innerText = currentNumberValue + " " + buttonAddition.value;
        currentCalculationValue = currentNumberValue;
        currentCalculation = displaySmallText.innerText;
        currentEntryCount = 2;
    }
    else if (currentEntryCount > 1) {
        // currentNumberValue = parseInt(displayBigText.innerText);
        currentCalculationValue += currentNumberValue;
        displaySmallText.innerText = currentCalculationValue + " " + buttonAddition.value;
        currentNumberValue = currentCalculationValue;
        displayBigText.innerText = currentNumberValue + "";
    }
}


//
let fontScale = 1;
function setCurrentNumberFontSize() {
    if (currentNumber.length < 9) {
        displayBigText.style.fontSize = "100%";
        fontScale = 1;
    }
    if (currentNumber.length === 9 && fontScale === 1) {
        displayBigText.style.fontSize = "90%";
        fontScale = 2;
    }
    else if (currentNumber.length === 10 && fontScale === 2) {
        displayBigText.style.fontSize = "82%";
        fontScale = 3;
    }
    else if (currentNumber.length === 11 && fontScale === 3) {
        displayBigText.style.fontSize = "75%";
        fontScale = 4;
    }
}

let holdDigit = true;
function setCurrentNumber() {
    setCurrentNumberFontSize();
    if (displayBigText.innerText === "0") {
        currentNumber = "";
    }
    if (holdDigit && (isActiveSubtraction === true || isActiveAddition === true || isActiveMultiplication === true || isActiveDivision === true)) {
        currentNumberValue = parseInt(this.value);
        currentNumber = this.value;
        displayBigText.innerText = currentNumber;
        holdDigit = false;
    }
    else if (currentNumber.length < 12 && !(isActiveSubtraction === true || isActiveAddition === true || isActiveMultiplication === true || isActiveDivision === true)) {
        currentNumber += this.value;
        displayBigText.innerText = currentNumber;
        currentNumberValue += parseInt(this.value);
    }
    else {
        currentNumber = this.value;
        displayBigText.innerText = currentNumber;
        currentNumberValue += parseInt(this.value);
    }
}

//
// function setCurrentCalculation() {
//     displaySmallText.innerText = currentNumber + this.value;
// }

//
function allClear() {
    displayBigText.style.fontSize = "100%";
    currentNumber = "0";
    currentNumberValue = 0;
    displayBigText.innerText = "0";
    displaySmallText.innerText = "";
    isActiveAddition = false;
    isActiveDivision = false;
    isActiveMultiplication = false;
    isActiveSubtraction = false;
    setOperatorColor();
    holdDigit = true;
    currentEntryCount = 0;
    currentCalculation = "";
}

function clearEntry() {
    displayBigText.style.fontSize = "100%";
    currentNumber = "0";
    currentNumberValue = 0;
    displayBigText.innerText = "0";
}

function deleteLastDigit() {
    if (displayBigText.innerText !== "0") {
        if (displayBigText.innerText.length === 1) {
            displayBigText.innerText = "0";
            currentNumber = displayBigText.innerText;
            currentNumberValue = parseInt(currentNumber);
        }
        else {
            if (displayBigText.innerText.length === 12) {
                displayBigText.style.fontSize = "82%";
                fontScale = 3;
            }
            else if (displayBigText.innerText.length === 11) {
                displayBigText.style.fontSize = "90%";
                fontScale = 2;
            }
            else if (displayBigText.innerText.length === 10) {
                displayBigText.style.fontSize = "100%";
                fontScale = 1;
            }
            displayBigText.innerText = displayBigText.innerText.slice(0, -1);
            currentNumber = displayBigText.innerText;
            currentNumberValue = parseInt(currentNumber);
        }
    }
}


//
function changeColorTouchStart() {
    return this.classList.contains("touch-numbers") ? this.style.backgroundColor = "#F4F4F4"
    : this.classList.contains("button-all-clear") ? this.style.backgroundColor = "#FF4444"
    : this.classList.contains("touch-delete") ? this.style.backgroundColor = "#FFB1B1"
    : this.classList.contains("touch-operator") ? this.style.backgroundColor = "#fde6ce"
    : this.classList.contains("button-equals") ? this.style.backgroundColor = "#6599FF"
    : this.style.backgroundColor = "#F4F4F4";
}
function changeColorTouchEnd() {
    return this.classList.contains("touch-numbers") ? this.style.backgroundColor = "#fff"
    : this.classList.contains("button-all-clear") ? this.style.backgroundColor = "#FFDDDD"
    : this.classList.contains("touch-delete") ? this.style.backgroundColor = "#fff8f1"
    : this.classList.contains("touch-operator") ? this.style.backgroundColor = "#fff8f1"
    : this.classList.contains("button-equals") ? this.style.backgroundColor = "#DCE8FF"
    : this.style.backgroundColor = "#fff8f1";
}
touchNumbers.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
touchNumbers.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
touchNumbers.forEach(number => number.addEventListener("mousedown", setCurrentNumber));
touchDelete.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
touchDelete.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
touchOperator.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
touchOperator.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
buttonAllClear.addEventListener("touchstart", changeColorTouchStart);
buttonAllClear.addEventListener("touchend", changeColorTouchEnd);
buttonAllClear.addEventListener("click", allClear);
buttonClearEntry.addEventListener("click", clearEntry);
buttonDeleteLastDigit.addEventListener("mousedown", deleteLastDigit);
buttonEquals.addEventListener("touchstart", changeColorTouchStart);
buttonEquals.addEventListener("touchend", changeColorTouchEnd);
buttonPositiveNegative.addEventListener("touchstart", changeColorTouchStart);
buttonPositiveNegative.addEventListener("touchend", changeColorTouchEnd);
buttonDecimal.addEventListener("touchstart", changeColorTouchStart);
buttonDecimal.addEventListener("touchend", changeColorTouchEnd);
buttonAddition.addEventListener("mousedown", add);


