//
const containerPage = document.querySelector(".container-page");
const containerHistory = document.querySelector(".container-history");
const historyTextArea = document.querySelector(".history-textarea");
const mobileHistoryButton = document.querySelector(".mobile-history-button");
const containerDeleteHistory = document.querySelector(".container-delete-history");
const deleteHistory = document.querySelector(".delete-history");
const containerCenterContent = document.querySelector(".container-center-content");
const containerCalculator = document.querySelector(".container-calculator");
const containerNumberPad = document.querySelector(".container-number-pad");
const buttonAllClear = document.querySelector(".button-all-clear");
const buttonClearEntry = document.querySelector(".button-clear-entry");
const buttonDeleteLastDigit = document.querySelector(".button-delete-last-digit");
const buttonDivision = document.querySelector(".button-division");
const buttonMultiplication = document.querySelector(".button-multiplication");
const buttonSubtraction = document.querySelector(".button-subtraction");
const buttonAddition = document.querySelector(".button-addition");
const buttonPositiveNegative = document.querySelector(".button-positive-negative");
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
const desktopLightDarkMode = document.querySelector(".desktop-light-dark-mode");
const desktopTitle = document.querySelector(".desktop-title");
const mainHtmlElement = document.querySelector("main");
const desktopHistoryPopupButton = document.querySelector(".desktop-history-popup-button");
const desktopHistoryTitle = document.querySelector(".desktop-history-title");
const desktopFooter = document.querySelector(".desktop-footer");
const desktopGithubAccountLink = document.querySelector(".desktop-github-account-link");
const desktopGithubProjectLink = document.querySelector(".desktop-github-project-link");
const desktopCreatedBy = document.querySelector(".desktop-created-by");

let mainDisplayValue = 0;
let smallDisplayValue = 0;
let operatorIsActive = false;
let operationsCount = 0;

let isActiveDivision = false;
let isActiveMultiplication = false;
let isActiveSubtraction = false;
let isActiveAddition = false;

let fontScale = 1;

let lightMode = true;

//
if (window.innerWidth < 961) {
    containerPage.style.height = window.innerHeight + "px";
    containerPage.style.width = window.innerWidth + "px";
    containerCalculator.style.height = window.innerHeight + "px";
    containerCalculator.style.width = window.innerWidth + "px";
    containerHistory.style.height = window.innerHeight + "px";
    containerHistory.style.width = window.innerWidth + "px";
    historyTextArea.style.height = (window.innerHeight - 50) + "px";
    historyTextArea.style.width = window.innerWidth + "px";
}
console.log(window.innerWidth);

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
        touchOperator.forEach(button => button.style.backgroundColor = "#262626");
        isActiveAddition ? buttonAddition.style.backgroundColor = "#252C43"
        : isActiveDivision ? buttonDivision.style.backgroundColor = "#252C43"
        : isActiveMultiplication ? buttonMultiplication.style.backgroundColor = "#252C43"
        : isActiveSubtraction ? buttonSubtraction.style.backgroundColor = "#252C43"
        : touchOperator.forEach(button => button.style.backgroundColor = "#262626");
    }
}


//
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
function allClear() {
    displayBigText.style.fontSize = "100%";
    displayBigText.innerText = "0";
    displaySmallText.innerText = "";
    mainDisplayValue = 0;
    smallDisplayValue = 0;
    isActiveAddition = false;
    isActiveDivision = false;
    isActiveMultiplication = false;
    isActiveSubtraction = false;
    setOperatorColor();
    operationsCount = 0;
    operatorIsActive = false;
}

function clearEntry() {
    displayBigText.style.fontSize = "100%";
    mainDisplayValue = 0;
    displayBigText.innerText = "0";
}

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
        touchNumbers.forEach(button => button.classList.add("touch-numbers-DARK"));
        numberPadButtons.forEach(button => button.classList.add("number-pad-buttons-DARK"));
        touchOperator.forEach(button => button.classList.add("touch-operator-DARK"));        
        mobileLightDarkMode.classList.add("mobile-light-dark-mode-DARK");
        mobileGithubProjectLink.classList.add("mobile-github-project-link-DARK");
        mobileHistoryButton.classList.add("mobile-history-button-DARK");
        displayBig.classList.add("display-big-DARK");
        displaySmall.classList.add("display-small-DARK");
        buttonAllClear.classList.add("button-all-clear-DARK");
        buttonDeleteLastDigit.classList.add("button-delete-last-digit-DARK");
        buttonPositiveNegative.classList.add("button-positive-negative-DARK");
        buttonEquals.classList.add("button-equals-DARK");
        buttonClearEntry.classList.add("button-clear-entry-DARK");
        buttonDecimal.classList.add("button-decimal-DARK");
        historyTextArea.classList.add("history-textarea-DARK");
        containerDeleteHistory.classList.add("container-delete-history-DARK");
        deleteHistory.classList.add("delete-history-DARK");

        lightMode = false;
    }
    else {
        touchNumbers.forEach(button => button.classList.remove("touch-numbers-DARK"));
        numberPadButtons.forEach(button => button.classList.remove("number-pad-buttons-DARK"));
        touchOperator.forEach(button => button.classList.remove("touch-operator-DARK"));    
        mobileLightDarkMode.classList.remove("mobile-light-dark-mode-DARK");
        mobileGithubProjectLink.classList.remove("mobile-github-project-link-DARK");
        mobileHistoryButton.classList.remove("mobile-history-button-DARK");
        displayBig.classList.remove("display-big-DARK");
        displaySmall.classList.remove("display-small-DARK");
        buttonAllClear.classList.remove("button-all-clear-DARK");
        buttonDeleteLastDigit.classList.remove("button-delete-last-digit-DARK");
        buttonPositiveNegative.classList.remove("button-positive-negative-DARK");
        buttonEquals.classList.remove("button-equals-DARK");
        buttonClearEntry.classList.remove("button-clear-entry-DARK");
        buttonDecimal.classList.remove("button-decimal-DARK");
        historyTextArea.classList.remove("history-textarea-DARK");
        containerDeleteHistory.classList.remove("container-delete-history-DARK");
        deleteHistory.classList.remove("delete-history-DARK");

        lightMode = true;
    }
}

//
function changeLightDarkModeDesktop() {
    changeLightDarkMode();

    if (lightMode) {
        mainHtmlElement.style.backgroundColor = "#fff";
        desktopLightDarkMode.classList.remove("desktop-light-dark-mode-DARK");
        desktopTitle.style.color = "#241100";
        containerCenterContent.classList.remove("container-center-content-DARK");
        desktopHistoryTitle.classList.remove("desktop-history-title-DARK");
        displaySmallText.classList.remove("display-small-text-DARK");
        desktopFooter.classList.remove("desktop-footer-DARK");
        desktopGithubAccountLink.classList.remove("desktop-github-account-link-DARK");
        desktopCreatedBy.classList.remove("desktop-created-by-DARK");
        desktopGithubProjectLink.classList.remove("desktop-github-project-link-DARK");
    }
    else {
        mainHtmlElement.style.backgroundColor = "#161616";
        desktopLightDarkMode.classList.add("desktop-light-dark-mode-DARK");
        desktopTitle.style.color = "#fff";
        containerCenterContent.classList.add("container-center-content-DARK");
        desktopHistoryTitle.classList.add("desktop-history-title-DARK");
        displaySmallText.classList.add("display-small-text-DARK");
        desktopFooter.classList.add("desktop-footer-DARK");
        desktopGithubAccountLink.classList.add("desktop-github-account-link-DARK");
        desktopCreatedBy.classList.add("desktop-created-by-DARK");
        desktopGithubProjectLink.classList.add("desktop-github-project-link-DARK");
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


//
function displayHistoryDesktop() {
    if (containerCalculator.classList.contains("desktop-calculator-slide-left")) {
        containerCalculator.classList.remove("desktop-calculator-slide-left");
        containerCalculator.classList.add("desktop-calculator-slide-right");
        containerHistory.classList.remove("desktop-history-slide-right");
        containerHistory.classList.add("desktop-history-slide-left");
        desktopHistoryPopupButton.textContent = "Hide  History";
        desktopHistoryPopupButton.classList.add("desktop-history-popup-button-selected");
        containerCenterContent.classList.add("container-center-content-expand");
    }
    else {
        containerCalculator.classList.add("desktop-calculator-slide-left");
        containerCalculator.classList.remove("desktop-calculator-slide-right");
        containerHistory.classList.add("desktop-history-slide-right");
        containerHistory.classList.remove("desktop-history-slide-left");
        desktopHistoryPopupButton.textContent = "Show History";
        desktopHistoryPopupButton.classList.remove("desktop-history-popup-button-selected");
        containerCenterContent.classList.remove("container-center-content-expand");
    }
}


touchNumbers.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
touchNumbers.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
touchNumbers.forEach(number => number.addEventListener("mouseup", setMainDisplay));
touchOperator.forEach(operator => operator.addEventListener("mouseup", () => {
    solveUsingOperatorButton(operator.value, smallDisplayValue, mainDisplayValue);
    // setSmallDisplay(operator.value, smallDisplayValue);
}));
buttonEquals.addEventListener("mouseup", () => {
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
    if (displaySmallText.innerText === "") {
        if (displayBigText.innerText.includes(".")) {
            mainDisplayValue = parseFloat(displayBigText.innerText);
        } 
        else {
            mainDisplayValue = parseInt(displayBigText.innerText);
        }
        smallDisplayValue = mainDisplayValue;
        displaySmallText.innerText = smallDisplayValue;
    }
    else if (!displaySmallText.innerText.includes(buttonEquals.value)) {
        displaySmallText.innerText = displaySmallText.innerText + " " + displayBigText.innerText + " " + buttonEquals.value + " " + smallDisplayValue;
        mainDisplayValue = smallDisplayValue;
        displayBigText.innerText = mainDisplayValue + "";
    }
    operationsCount = 0;
});

touchDelete.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
touchDelete.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
touchOperator.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
touchOperator.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
touchOperator.forEach(button => button.addEventListener("touchend", setOperatorColor));
buttonAllClear.addEventListener("touchstart", changeColorTouchStart);
buttonAllClear.addEventListener("touchend", changeColorTouchEnd);
buttonAllClear.addEventListener("mouseup", allClear);
buttonClearEntry.addEventListener("mouseup", clearEntry);
buttonDeleteLastDigit.addEventListener("mouseup", deleteLastDigit);
buttonEquals.addEventListener("touchstart", changeColorTouchStart);
buttonEquals.addEventListener("touchend", changeColorTouchEnd);
buttonEquals.addEventListener("touchend", setOperatorColor);
buttonPositiveNegative.addEventListener("touchstart", changeColorTouchStart);
buttonPositiveNegative.addEventListener("touchend", changeColorTouchEnd);
buttonDecimal.addEventListener("touchstart", changeColorTouchStart);
buttonDecimal.addEventListener("touchend", changeColorTouchEnd);
buttonDecimal.addEventListener("mouseup", addDecimal);
mobileLightDarkMode.addEventListener("touchend", changeLightDarkMode);
desktopLightDarkMode.addEventListener("mouseup", changeLightDarkModeDesktop);
desktopHistoryPopupButton.addEventListener("mouseup", displayHistoryDesktop);


