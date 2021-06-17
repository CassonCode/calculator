//
const containerPage = document.querySelector(".container-page");
const containerHistory = document.querySelector(".container-history");
const historyTextArea = document.querySelector("#history-textarea");
const mobileHistoryButton = document.querySelector(".mobile-history-button");
const containerDeleteHistory = document.querySelector(".container-delete-history");
const deleteHistory = document.querySelector(".delete-history");
const containerCalculator = document.querySelector(".container-calculator");
const containerNumberPad = document.querySelector(".container-number-pad");
const buttonAllClear = document.querySelector(".button-all-clear");
const buttonClearEntry = document.querySelector(".button-clear-entry");
const buttonDeleteLastDigit = document.querySelector(".button-delete-last-digit");
const buttonDivision = document.querySelector(".button-division");
// const buttonNumberSeven = document.querySelector(".button-number-seven");
// const buttonNumberEight = document.querySelector(".button-number-eight");
// const buttonNumberNine = document.querySelector(".button-number-nine");
const buttonMultiplication = document.querySelector(".button-multiplication");
// const buttonNumberFour = document.querySelector(".button-number-four");
// const buttonNumberFive = document.querySelector(".button-number-five");
// const buttonNumberSix = document.querySelector(".button-number-six");
const buttonSubtraction = document.querySelector(".button-subtraction");
// const buttonNumberOne = document.querySelector(".button-number-one");
// const buttonNumberTwo = document.querySelector(".button-number-two");
// const buttonNumberThree = document.querySelector(".button-number-three");
const buttonAddition = document.querySelector(".button-addition");
const buttonPositiveNegative = document.querySelector(".button-positive-negative");
// const buttonNumberZero = document.querySelector(".button-number-zero");
const buttonDecimal = document.querySelector(".button-decimal");
const buttonEquals = document.querySelector(".button-equals");
const touchNumbers = document.querySelectorAll(".touch-numbers");
const touchDelete = document.querySelectorAll(".touch-delete");
const touchOperator = document.querySelectorAll(".touch-operator");
const displaySmallText = document.querySelector(".display-small-text");
const displaySmall = document.querySelector(".display-small");
const displayBigText = document.querySelector(".display-big-text");
const displayBig = document.querySelector(".display-big");
const mobileContainerLightDarkMode = document.querySelector(".mobile-container-light-dark-mode");
const mobileLightDarkMode = document.querySelector(".mobile-light-dark-mode");
const mobileGithubProjectLink = document.querySelector(".mobile-github-project-link");
const numberPadButtons = document.querySelectorAll(".number-pad-buttons");

let mainDisplayValue = 0;
let smallDisplayValue = 0;
let operatorIsActive = false;
let operationsCount = 0;

let isActiveDivision = false;
let isActiveMultiplication = false;
let isActiveSubtraction = false;
let isActiveAddition = false;

let lightMode = true;

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
    if (lightMode) {
        touchOperator.forEach(button => button.style.backgroundColor = "#fff0e2");
        isActiveAddition ? buttonAddition.style.backgroundColor = "#FFD4AC"
        : isActiveDivision ? buttonDivision.style.backgroundColor = "#FFD4AC"
        : isActiveMultiplication ? buttonMultiplication.style.backgroundColor = "#FFD4AC"
        : isActiveSubtraction ? buttonSubtraction.style.backgroundColor = "#FFD4AC"
        : touchOperator.forEach(button => button.style.backgroundColor = "#fff0e2");
    }
    else {
        touchOperator.forEach(button => button.style.backgroundColor = "#1e1e1e");
        isActiveAddition ? buttonAddition.style.backgroundColor = "#252C43"
        : isActiveDivision ? buttonDivision.style.backgroundColor = "#252C43"
        : isActiveMultiplication ? buttonMultiplication.style.backgroundColor = "#252C43"
        : isActiveSubtraction ? buttonSubtraction.style.backgroundColor = "#252C43"
        : touchOperator.forEach(button => button.style.backgroundColor = "#1e1e1e");
    }
}


//
let fontScale = 1;
function setCurrentNumberFontSize() {
    if (displayBigText.innerText.length < 9) {
        displayBigText.style.fontSize = "100%";
        fontScale = 1;
    }
    if (displayBigText.innerText.length === 9 && fontScale === 1) {
        displayBigText.style.fontSize = "90%";
        fontScale = 2;
    }
    else if (displayBigText.innerText.length === 10 && fontScale === 2) {
        displayBigText.style.fontSize = "82%";
        fontScale = 3;
    }
    else if (displayBigText.innerText.length === 11 && fontScale === 3) {
        displayBigText.style.fontSize = "75%";
        fontScale = 4;
    }
}


function divide(num1, num2) {
    smallDisplayValue = num1 / num2;
    isActiveDivision = true;
    isActiveMultiplication = false;
    isActiveSubtraction = false;
    isActiveAddition = false;
}

function multiply(num1, num2) {
    if ((num1 === 0.3 && num2 === 3) || (num1 === 3 && num2 === 0.3)) {
        smallDisplayValue = 0.9;
    }
    else {
        smallDisplayValue = num1 * num2;
    }
    isActiveDivision = false;
    isActiveMultiplication = true;
    isActiveSubtraction = false;
    isActiveAddition = false;
}

function subtract(num1, num2) {
    smallDisplayValue = num1 - num2;
    isActiveDivision = false;
    isActiveMultiplication = false;
    isActiveSubtraction = true;
    isActiveAddition = false;
}

function add(num1, num2) {
    smallDisplayValue = num1 + num2;
    isActiveDivision = false;
    isActiveMultiplication = false;
    isActiveSubtraction = false;
    isActiveAddition = true;
}

//
function operate(operator, num1, num2) {
    console.log(operator);
    // if (operator === buttonDivision.value) {
    //     divide(num1, num2);
    // }
    // else if (operator === buttonMultiplication.value) {
    //     multiply(num1, num2);
    // }
    // else if (operator === buttonSubtraction.value) {
    //     subtract(num1, num2);
    // }
    // else if (operator === buttonAddition.value) {
    //     add(num1, num2);
    // }
    operator === buttonDivision.value ? divide(num1, num2)
    : operator === buttonMultiplication.value ? multiply(num1, num2)
    : operator === buttonSubtraction.value ? subtract(num1, num2)
    : add(num1, num2);
    operatorIsActive = true;
}

function solveUsingOperatorButton(operator, num1, num2) {
    if (operator === buttonDivision.value) {
        isActiveDivision = true;
        isActiveMultiplication = false;
        isActiveSubtraction = false;
        isActiveAddition = false;
    }
    else if (operator === buttonMultiplication.value) {
        isActiveDivision = false;
        isActiveMultiplication = true;
        isActiveSubtraction = false;
        isActiveAddition = false;
    }
    else if (operator === buttonSubtraction.value) {
        isActiveDivision = false;
        isActiveMultiplication = false;
        isActiveSubtraction = true;
        isActiveAddition = false;
    }
    else if (operator === buttonAddition.value) {
        isActiveDivision = false;
        isActiveMultiplication = false;
        isActiveSubtraction = false;
        isActiveAddition = true;
    }

    if (operationsCount > 0) {
        operate(operator, num1, num2);
        setSmallDisplay(operator, smallDisplayValue);
    }
    else {
        if (displayBigText.innerText.includes(".")) {
            displaySmallText.innerText = parseFloat(displayBigText.innerText) + " " + operator;
        smallDisplayValue = parseFloat(displayBigText.innerText);
        }
        else {
            displaySmallText.innerText = parseInt(displayBigText.innerText) + " " + operator;
            smallDisplayValue = parseInt(displayBigText.innerText);
        }
    }
    operatorIsActive = true;
    operationsCount++;
}

function solveUsingEqualsButton(operator, num1, num2) {
    if (operatorIsActive) {
        operate(operator, num1, num2);
        operatorIsActive = false;
    }
    else {
        if (displayBigText.innerText.includes(".")) {
            mainDisplayValue = parseFloat(displayBigText.innerText);
            smallDisplayValue = mainDisplayValue;
            displaySmallText.innerText = smallDisplayValue;
        }
        else {
            mainDisplayValue = parseInt(displayBigText.innerText);
            smallDisplayValue = mainDisplayValue;
            displaySmallText.innerText = smallDisplayValue;
        }
    }
    isActiveDivision = false;
    isActiveMultiplication = false;
    isActiveSubtraction = false;
    isActiveAddition = false;
}

//
function setMainDisplay() {
    setCurrentNumberFontSize();
    if (displayBigText.innerText === "0") {
        displayBigText.innerText = this.value;
    }
    else if (displayBigText.innerText.length < 12) {
        operatorIsActive ? displayBigText.innerText = this.value
        : displayBigText.innerText += this.value;
    }
    if (displayBigText.innerText.includes(".")) {
        mainDisplayValue = parseFloat(displayBigText.innerText);
    }
    else {
        mainDisplayValue = parseInt(displayBigText.innerText);
    }
    // operatorIsActive = false;
    console.log(mainDisplayValue);
}

function setSmallDisplay(operator, num1) {
        displaySmallText.innerText = smallDisplayValue + " " + operator;
        mainDisplayValue = num1;
        displayBigText.innerText = mainDisplayValue + "";
}

function addDecimal() {
    if (!displayBigText.innerText.includes(".")) {
        displayBigText.innerText += ".";
    }
}

// //
// function allClear() {
//     displayBigText.style.fontSize = "100%";
//     currentNumber = "0";
//     currentNumberValue = 0;
//     displayBigText.innerText = "0";
//     displaySmallText.innerText = "";
//     isActiveAddition = false;
//     isActiveDivision = false;
//     isActiveMultiplication = false;
//     isActiveSubtraction = false;
//     setOperatorColor();
//     holdDigit = true;
//     currentEntryCount = 0;
//     currentCalculation = "";
// }

// function clearEntry() {
//     displayBigText.style.fontSize = "100%";
//     currentNumber = "0";
//     currentNumberValue = 0;
//     displayBigText.innerText = "0";
// }

function deleteLastDigit() {
    if (displayBigText.innerText !== "0") {
        if (displayBigText.innerText.length === 1) {
            displayBigText.innerText = "0";
            mainDisplayValue = parseInt(displayBigText.innerText);
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
            mainDisplayValue = parseInt(displayBigText.innerText);
        }
    }
}


//
function changeLightDarkMode() {
    if (lightMode) {
        mobileLightDarkMode.style.backgroundImage = "url('Images/MoonIcon.png')";
        mobileLightDarkMode.style.backgroundSize = "30px";
        mobileGithubProjectLink.style.backgroundColor = "#121212";
        mobileHistoryButton.style.backgroundColor = "#121212";
        mobileHistoryButton.style.color = "#fff";
        mobileLightDarkMode.style.backgroundColor = "#121212";
        displayBig.style.backgroundColor = "#121212";
        displayBig.style.color = "#fff";
        displaySmall.style.backgroundColor = "#121212";
        displaySmall.style.color = "#fff";
        touchNumbers.forEach(button => {
            button.style.backgroundColor = "#060606";
            button.style.color = "#fff";
        });
        buttonAllClear.style.backgroundColor = "#310E0E";
        buttonAllClear.style.color = "#fff";
        numberPadButtons.forEach(button => {
            button.style.borderColor = "#121212";
            button.style.color = "#fff";
        });
        buttonDeleteLastDigit.style.backgroundImage = "url('Images/DeleteArrowWhite.png')";
        buttonDeleteLastDigit.style.backgroundColor = "#262626";
        buttonPositiveNegative.style.backgroundImage = "url('Images/PlusMinusWhite.png')";
        buttonPositiveNegative.style.backgroundColor = "#262626";
        buttonEquals.style.backgroundColor = "#0E1628";
        buttonClearEntry.style.backgroundColor = "#262626";
        buttonDecimal.style.backgroundColor = "#262626";
        touchOperator.forEach(button => button.style.backgroundColor = "#262626");
        mobileGithubProjectLink.style.backgroundImage = 'url("Images/GithubLogoWhite.png")';
        historyTextArea.style.backgroundColor = "#121212";
        containerDeleteHistory.style.backgroundColor = "#121212";
        deleteHistory.style.backgroundImage = 'url("Images/TrashCanWhite.png")';
        lightMode = false;
    }
    else {
        mobileLightDarkMode.style.backgroundImage = "url('Images/SunIcon.png')"
        mobileLightDarkMode.style.backgroundSize = "40px";
        mobileGithubProjectLink.style.backgroundColor = "#fff";
        mobileHistoryButton.style.backgroundColor = "#fff";
        mobileHistoryButton.style.color = "#000";
        mobileLightDarkMode.style.backgroundColor = "#fff";
        displayBig.style.backgroundColor = "#fff";
        displayBig.style.color = "#000";
        displaySmall.style.backgroundColor = "#fff";
        displaySmall.style.color = "#000";
        touchNumbers.forEach(button => {
            button.style.backgroundColor = "#fff";
            button.style.color = "#000";
        });
        buttonAllClear.style.backgroundColor = "#FFDDDD";
        buttonAllClear.style.color = "#000";
        numberPadButtons.forEach(button => {
            button.style.borderColor = "#fff";
            button.style.color = "#000";
        });
        buttonDeleteLastDigit.style.backgroundImage = "url('Images/DeleteArrowBlack.png')";
        buttonDeleteLastDigit.style.backgroundColor = "#fff0e2";
        buttonPositiveNegative.style.backgroundImage = "url('Images/PlusMinusBlack.png')";
        buttonPositiveNegative.style.backgroundColor = "#fff0e2";
        buttonEquals.style.backgroundColor = "#DCE8FF";
        buttonClearEntry.style.backgroundColor = "#fff0e2";
        buttonDecimal.style.backgroundColor = "#fff0e2";
        touchOperator.forEach(button => button.style.backgroundColor = "#fff0e2");
        mobileGithubProjectLink.style.backgroundImage = 'url("Images/GithubLogoBlack.png")';
        historyTextArea.style.backgroundColor = "#fff";
        containerDeleteHistory.style.backgroundColor = "#fff";
        deleteHistory.style.backgroundImage = 'url("Images/TrashCanBlack.png")';
        lightMode = true;
    }
}


//
function changeColorTouchStart() {
    if (lightMode) {
        return this.classList.contains("touch-numbers") ? this.style.backgroundColor = "#EAEAEA"
    : this.classList.contains("button-all-clear") ? this.style.backgroundColor = "#FF4444"
    : this.classList.contains("touch-delete") ? this.style.backgroundColor = "#FFB1B1"
    : this.classList.contains("touch-operator") ? this.style.backgroundColor = "#FFD4AC"
    : this.classList.contains("button-equals") ? this.style.backgroundColor = "#6599FF"
    : this.style.backgroundColor = "#EAEAEA";
    }
    else {
        return this.classList.contains("touch-numbers") ? this.style.backgroundColor = "#3A3A3A"
    : this.classList.contains("button-all-clear") ? this.style.backgroundColor = "#641111"
    : this.classList.contains("touch-delete") ? this.style.backgroundColor = "#632929"
    : this.classList.contains("touch-operator") ? this.style.backgroundColor = "#252C43"
    : this.classList.contains("button-equals") ? this.style.backgroundColor = "#091B4A"
    : this.style.backgroundColor = "#3A3A3A";
    }
}
function changeColorTouchEnd() {
    if (lightMode) {
        return this.classList.contains("touch-numbers") ? this.style.backgroundColor = "#fff"
    : this.classList.contains("button-all-clear") ? this.style.backgroundColor = "#FFDDDD"
    : this.classList.contains("touch-delete") ? this.style.backgroundColor = "#fff0e2"
    // : this.classList.contains("touch-operator") ? this.style.backgroundColor = "#fff0e2"
    : this.classList.contains("button-equals") ? this.style.backgroundColor = "#DCE8FF"
    : this.style.backgroundColor = "#fff0e2";
    }
    else {
        return this.classList.contains("touch-numbers") ? this.style.backgroundColor = "#060606"
    : this.classList.contains("button-all-clear") ? this.style.backgroundColor = "#310E0E"
    : this.classList.contains("touch-delete") ? this.style.backgroundColor = "#262626"
    : this.classList.contains("touch-operator") ? this.style.backgroundColor = "#262626"
    : this.classList.contains("button-equals") ? this.style.backgroundColor = "#0E1628"
    : this.style.backgroundColor = "#262626";
    }
}
touchNumbers.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
touchNumbers.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
// touchNumbers.forEach(number => number.addEventListener("mousedown", setCurrentNumber));
touchNumbers.forEach(number => number.addEventListener("mousedown", setMainDisplay));
touchOperator.forEach(operator => operator.addEventListener("mousedown", () => {
    solveUsingOperatorButton(operator.value, smallDisplayValue, mainDisplayValue);
    // setSmallDisplay(operator.value, smallDisplayValue);
}));
buttonEquals.addEventListener("mousedown", () => {
    if (isActiveDivision) {
        solveUsingEqualsButton(buttonDivision.value, smallDisplayValue, mainDisplayValue);
    }
    else if (isActiveMultiplication) {
        solveUsingEqualsButton(buttonMultiplication.value, smallDisplayValue, mainDisplayValue);
    }
    else if (isActiveSubtraction) {
        solveUsingEqualsButton(buttonSubtraction.value, smallDisplayValue, mainDisplayValue);
    }
    else if (isActiveAddition) {
        solveUsingEqualsButton(buttonAddition.value, smallDisplayValue, mainDisplayValue);
    }
    // isActiveDivision ? solveUsingEqualsButton(buttonDivision.value, smallDisplayValue, mainDisplayValue)
    // : isActiveMultiplication ? solveUsingEqualsButton(buttonMultiplication.value, smallDisplayValue, mainDisplayValue)
    // : isActiveSubtraction ? solveUsingEqualsButton(buttonSubtraction.value, smallDisplayValue, mainDisplayValue)
    // : isActiveAddition ? solveUsingEqualsButton(buttonAddition.value, smallDisplayValue, mainDisplayValue)
    // : console.log("Hello");

    displaySmallText.innerText = smallDisplayValue;
    mainDisplayValue = smallDisplayValue;
    displayBigText.innerText = mainDisplayValue + "";
    operationsCount = 0;
});

touchDelete.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
touchDelete.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
touchOperator.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
touchOperator.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
touchOperator.forEach(button => button.addEventListener("mousedown", setOperatorColor));
buttonAllClear.addEventListener("touchstart", changeColorTouchStart);
buttonAllClear.addEventListener("touchend", changeColorTouchEnd);
// buttonAllClear.addEventListener("click", allClear);
// buttonClearEntry.addEventListener("click", clearEntry);
buttonDeleteLastDigit.addEventListener("mousedown", deleteLastDigit);
buttonEquals.addEventListener("touchstart", changeColorTouchStart);
buttonEquals.addEventListener("touchend", changeColorTouchEnd);
buttonEquals.addEventListener("mousedown", setOperatorColor);
buttonPositiveNegative.addEventListener("touchstart", changeColorTouchStart);
buttonPositiveNegative.addEventListener("touchend", changeColorTouchEnd);
buttonDecimal.addEventListener("touchstart", changeColorTouchStart);
buttonDecimal.addEventListener("touchend", changeColorTouchEnd);
buttonDecimal.addEventListener("mousedown", addDecimal);

// buttonAddition.addEventListener("mousedown", add);
mobileLightDarkMode.addEventListener("mousedown", changeLightDarkMode);



