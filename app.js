// Retrieve html elements
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

// Hold values of the numbers currently being used
let mainDisplayValue = 0;
let smallDisplayValue = 0;

// Knows whether or not an operator is being used
let operatorIsActive = false;

// Number of operations have been used since page load or last "all clear"
let operationsCount = 0;

// Keeps track of which operator is being used
let isActiveDivision = false;
let isActiveMultiplication = false;
let isActiveSubtraction = false;
let isActiveAddition = false;

// Default relative size for display font
let fontScale = 1;

// Keeps track of whether or not light mode is active
let lightMode = true;


// Set app size for mobile and tablet devices
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


// (Mobile only) Slide history container over calculator upon tapping the "history" button
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


// Reusable function that helps prevent number from overflowing on display
function setCurrentNumberFontSize(number) {
    if (number.length < 9) {
        displayBigText.style.fontSize = "100%";
        fontScale = 1;
    }
    if (number.length === 9 && fontScale === 1) {
        displayBigText.style.fontSize = "90%";
        fontScale = 2;
    }
    else if (number.length === 10 && fontScale === 2) {
        displayBigText.style.fontSize = "82%";
        fontScale = 3;
    }
    else if (number.length === 11 && fontScale === 3) {
        displayBigText.style.fontSize = "75%";
        fontScale = 4;
    }
}


// Makes all operations seen as inactive
function setOperatorsInactive() {
    isActiveDivision = false;
    isActiveMultiplication = false;
    isActiveSubtraction = false;
    isActiveAddition = false;
}


// Makes specific operation seen as active
function setDivisionActive() {
    isActiveDivision = true;
    isActiveMultiplication = false;
    isActiveSubtraction = false;
    isActiveAddition = false;
}
function setMultiplicationActive() {
    isActiveDivision = false;
    isActiveMultiplication = true;
    isActiveSubtraction = false;
    isActiveAddition = false;
}
function setSubtractionActive() {
    isActiveDivision = false;
    isActiveMultiplication = false;
    isActiveSubtraction = true;
    isActiveAddition = false;
}
function setAdditionActive() {
    isActiveDivision = false;
    isActiveMultiplication = false;
    isActiveSubtraction = false;
    isActiveAddition = true;
}


// Reusable function that performs operations on two numbers
function divide(num1, num2) {
    smallDisplayValue = num1 / num2;
    setDivisionActive();
}
function multiply(num1, num2) {
    smallDisplayValue = num1 * num2;
    setMultiplicationActive();
}
function subtract(num1, num2) {
    smallDisplayValue = num1 - num2;
    setSubtractionActive();
}
function add(num1, num2) {
    smallDisplayValue = num1 + num2;
    setAdditionActive();
}


// Performs operation on two numbers, then resizes the main display to prevent overflow
function operate(operator, num1, num2) {
    operator === buttonDivision.value ? divide(num1, num2)
    : operator === buttonMultiplication.value ? multiply(num1, num2)
    : operator === buttonSubtraction.value ? subtract(num1, num2)
    : add(num1, num2);
    setCurrentNumberFontSize(smallDisplayValue);
    console.log(smallDisplayValue);
    operatorIsActive = true;
}


// (For "operator" buttons only) Performs operation based on selected operator, sets new text for the small display
let previousOperator = "";
function solveUsingOperatorButton(operator, num1, num2) {
    if (operator === buttonDivision.value) {
        setDivisionActive();
    }
    else if (operator === buttonMultiplication.value) {
        setMultiplicationActive();
    }
    else if (operator === buttonSubtraction.value) {
        setSubtractionActive();
    }
    else if (operator === buttonAddition.value) {
        setAdditionActive();
    }

    if (operationsCount > 0) {
        if (operator !== previousOperator && previousOperator !== "") {
            operate(previousOperator, num1, num2);
        }
        else {
            operate(operator, num1, num2);
        }
        setSmallDisplay(operator, smallDisplayValue);
        console.log(smallDisplayValue);
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
    previousOperator = operator;
    operatorIsActive = true;
    operationsCount++;
}


// (For "equals" button only) Performs operation based on selected operator, sets new text for the small display
function solveUsingEqualsButton(operator, num1, num2) {
    if (operatorIsActive) {
        if (operator !== previousOperator && previousOperator !== "") {
            operate(previousOperator, num1, num2);
        }
        else {
            operate(operator, num1, num2);
        }
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
    setOperatorsInactive();
    previousOperator = operator;
}


// Sets new text for main display when entering a digit
function setMainDisplay() {
    if (!(displayBigText.innerText === `Can't ${buttonDivision.value} By 0`)) {
        setCurrentNumberFontSize(displayBigText.innerText);
        if (displayBigText.innerText === "0") {
            displayBigText.innerText = this.value;
        }
        else if (displayBigText.innerText.length < 12) {
            if (operatorIsActive) {
                if (mainDisplayValue === smallDisplayValue) {
                    displayBigText.innerText = this.value;
                }
                else {
                    displayBigText.innerText += this.value;
                }
            }
            else {
                if (mainDisplayValue === smallDisplayValue && displayBigText.innerText !== "0.") {   
                    displayBigText.innerText = this.value;
                }
                else {
                    displayBigText.innerText += this.value;
                }
            }
        }
        else if (displaySmallText.innerText.includes(" ")) {
            displayBigText.innerText = this.value;
        }

        if (displayBigText.innerText.includes(".")) {
            mainDisplayValue = parseFloat(displayBigText.innerText);
        }
        else {
            mainDisplayValue = parseInt(displayBigText.innerText);
        }
    }
}


// Reusable function that changes the text for the small display
function setSmallDisplay(operator, num1) {
        mainDisplayValue = num1;

        if (num1.length < 12) {
            displayBigText.innerText = mainDisplayValue + "";
            displaySmallText.innerText = smallDisplayValue + " " + operator;
        }
        else {
            if (displaySmallText.innerText.includes(".")) {
                displayBigText.innerText = parseFloat(num1) + "";
                displayBigText.style.fontSize = "100%";
                displaySmallText.innerText = parseFloat(num1) + " " + operator;
                fontScale = 1;
            }
            else {
                displayBigText.innerText = parseInt(num1) + "";
                displayBigText.style.fontSize = "100%";
                displaySmallText.innerText = parseInt(num1) + " " + operator;
                fontScale = 1;
            }
        }
}


// Appends a decimal to the current number if the current number is an integer
function addDecimal() {
    if (!(displayBigText.innerText === `Can't ${buttonDivision.value} By 0`)) {
        if (!displayBigText.innerText.includes(".")) {
            displayBigText.innerText += ".";
        }
    }    
}


// Changes sign of current number
function changePositiveOrNegative() {
    if (!(displayBigText.innerText === `Can't ${buttonDivision.value} By 0`)) {
        mainDisplayValue *= -1;
        displayBigText.innerText = mainDisplayValue + "";
    }
}


// Clears and resets everything except for the history
function allClear() {
    displayBigText.style.fontSize = "100%";
    displayBigText.innerText = "0";
    displaySmallText.innerText = "";
    mainDisplayValue = 0;
    smallDisplayValue = 0;
    setOperatorsInactive();
    operationsCount = 0;
    operatorIsActive = false;
}


// Clears and resets the main display 
function clearEntry() {
    displayBigText.style.fontSize = "100%";
    mainDisplayValue = 0;
    displayBigText.innerText = "0";
}


// Deletes the one's place digit
function deleteLastDigit() {
    if (!(displayBigText.innerText === `Can't ${buttonDivision.value} By 0`)) {
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
}


// Toggles "dark mode" css classes
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


// (Mobile devices only) Toggles "dark mode" 
function changeLightDarkModeMobile() {
    changeLightDarkMode();

    if (lightMode) {
        touchNumbers.forEach(number => number.style.backgroundColor = "#fff");
        touchOperator.forEach(operator => operator.style.backgroundColor = "#fff0e2");
        touchDelete.forEach(button => button.style.backgroundColor = "#fff0e2");
        buttonAllClear.style.backgroundColor = "#FFDDDD";
        buttonPositiveNegative.style.backgroundColor = "#fff0e2";
        buttonDecimal.style.backgroundColor = "#fff0e2";
        buttonEquals.style.backgroundColor = "#DCE8FF";
    }
    else {
        touchNumbers.forEach(number => number.style.backgroundColor = "#161616");
        touchOperator.forEach(operator => operator.style.backgroundColor = "#262626");
        touchDelete.forEach(button => button.style.backgroundColor = "#262626");
        buttonAllClear.style.backgroundColor = "#310E0E";
        buttonPositiveNegative.style.backgroundColor = "#262626";
        buttonDecimal.style.backgroundColor = "#262626";
        buttonEquals.style.backgroundColor = "#0E1628";
    }
}


// (Desktop only) Toggles "dark mode"
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
        desktopHistoryPopupButton.classList.remove("desktop-history-popup-button-DARK");
        desktopHistoryPopupButton.classList.remove("desktop-history-popup-button-selected-DARK");
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
        desktopHistoryPopupButton.classList.add("desktop-history-popup-button-DARK");
        if (desktopHistoryPopupButton.classList.contains("desktop-history-popup-button-selected")) {
            desktopHistoryPopupButton.classList.add("desktop-history-popup-button-selected-DARK");
        }
    }
}


// (Mobile devices only) Changes background color of buttons while they're being touched
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
        return this.classList.contains("touch-numbers") ? this.style.backgroundColor = "#161616"
    : this.classList.contains("button-all-clear") ? this.style.backgroundColor = "#310E0E"
    : this.classList.contains("touch-delete") ? this.style.backgroundColor = "#262626"
    : this.classList.contains("touch-operator") ? this.style.backgroundColor = "#262626"
    : this.classList.contains("button-equals") ? this.style.backgroundColor = "#0E1628"
    : this.style.backgroundColor = "#262626";
    }
}


// (Desktop only) Toggles css classes that allow the history container to slide in and out of view
function displayHistoryDesktop() {
    if (containerCalculator.classList.contains("desktop-calculator-slide-left")) {
        containerCalculator.classList.remove("desktop-calculator-slide-left");
        containerCalculator.classList.add("desktop-calculator-slide-right");
        containerHistory.classList.remove("desktop-history-slide-right");
        containerHistory.classList.add("desktop-history-slide-left");
        desktopHistoryPopupButton.textContent = "Hide  History";
        desktopHistoryPopupButton.classList.add("desktop-history-popup-button-selected");
        containerCenterContent.classList.add("container-center-content-expand");
        if (!lightMode) {
            desktopHistoryPopupButton.classList.add("desktop-history-popup-button-selected-DARK");
        }
        else {
            desktopHistoryPopupButton.classList.remove("desktop-history-popup-button-selected-DARK");
        }
    }
    else {
        containerCalculator.classList.add("desktop-calculator-slide-left");
        containerCalculator.classList.remove("desktop-calculator-slide-right");
        containerHistory.classList.add("desktop-history-slide-right");
        containerHistory.classList.remove("desktop-history-slide-left");
        desktopHistoryPopupButton.textContent = "Show History";
        desktopHistoryPopupButton.classList.remove("desktop-history-popup-button-selected");
        containerCenterContent.classList.remove("container-center-content-expand");
        if (!lightMode) {
            desktopHistoryPopupButton.classList.remove("desktop-history-popup-button-selected-DARK");
        }
    }
}


// Stores and displays the previous calculations in the history textarea
historyTextArea.value = "No History";
function changeHistoryTextarea() {
    let currentHistory = historyTextArea.value;
    let newHistory = displaySmallText.innerText;
    historyTextArea.value = newHistory + "\r\n\r\n" + currentHistory;
}


// Prevents display numbers from overflowing
function fitAnswerToDisplay() {
    if (smallDisplayValue.toString().length > 10) {
        let decimalIndex = smallDisplayValue.toString().indexOf(".");
        let digitsBeforeDecimal = smallDisplayValue.toString().slice(0, decimalIndex);
        if (digitsBeforeDecimal.length > 6 || (!smallDisplayValue.toString().includes(".") && smallDisplayValue.toString().length > 12)) {
            smallDisplayValue = smallDisplayValue.toExponential(2);
            mainDisplayValue = smallDisplayValue;
            displaySmallText.innerText = displaySmallText.innerText.slice(0, displaySmallText.innerText.indexOf("="));
            displaySmallText.innerText = displaySmallText.innerText 
                                            + " " + buttonEquals.value 
                                            + " " + mainDisplayValue;
            displayBigText.innerText = mainDisplayValue + "";
        }
    }
}



//----------------------------------------------------------------------------------------------------------------------------
//  Event Listeners

touchNumbers.forEach(number => number.addEventListener("mouseup", setMainDisplay));
touchOperator.forEach(operator => operator.addEventListener("mouseup", () => {
    solveUsingOperatorButton(operator.value, smallDisplayValue, mainDisplayValue);
}));
buttonEquals.addEventListener("mouseup", () => {
    if (isActiveDivision && mainDisplayValue === 0) {
        smallDisplayValue = 0;
        mainDisplayValue = 0;
        displaySmallText.innerText = "";
        displayBigText.innerText = `Can't ${buttonDivision.value} By 0`;
        return;
    }
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
    else if (!displaySmallText.innerText.includes(buttonEquals.value) && displaySmallText.innerText.includes(" ")) {
        if (smallDisplayValue.length < 12) {
            displaySmallText.innerText = displaySmallText.innerText 
                                        + " " + displayBigText.innerText 
                                        + " " + buttonEquals.value 
                                        + " " + smallDisplayValue;
            mainDisplayValue = smallDisplayValue;
            displayBigText.innerText = mainDisplayValue + "";
        }
        else {
            mainDisplayValue = smallDisplayValue;
            if (smallDisplayValue.toString().includes(".")) {
                let checkedDigit = 0;
                let decimalIndex = smallDisplayValue.toString().indexOf(".");
                let hasRepeat = false;
                let expForRounding = 1;
                
                for (let i = decimalIndex + 2; i < decimalIndex + 6; i++) {
                    checkedDigit = smallDisplayValue.toString().charAt(i - 1);
                    if (checkedDigit === smallDisplayValue.toString().charAt(i) && checkedDigit === smallDisplayValue.toString().charAt(i + 1)) {
                        hasRepeat = true;
                        smallDisplayValue *= 10 ** (expForRounding);
                        smallDisplayValue = Math.round(smallDisplayValue);
                        smallDisplayValue /= 10 ** (expForRounding);
                        smallDisplayValue = parseFloat(smallDisplayValue.toString().slice(0, i));
                        break;
                    }
                    expForRounding++;
                }
                if (hasRepeat) {
                    displaySmallText.innerText = displaySmallText.innerText
                                                + " " + displayBigText.innerText 
                                                + " " + buttonEquals.value 
                                                + " " + smallDisplayValue;
                    displayBigText.innerText = smallDisplayValue + "";
                }
                else if (smallDisplayValue.toString().slice(decimalIndex).length > 6) {
                    smallDisplayValue *= 1000000;
                    smallDisplayValue = Math.round(smallDisplayValue);
                    smallDisplayValue /= 1000000;
                    let secondHalfSmallDisplayValue = 0;
                    let firstHalfSmallDisplayValue = 0;
                    firstHalfSmallDisplayValue = parseFloat(smallDisplayValue.toString().slice(0, decimalIndex + 1));
                    secondHalfSmallDisplayValue = parseFloat(smallDisplayValue.toString().slice(decimalIndex, decimalIndex + 6));
                    smallDisplayValue = parseFloat(firstHalfSmallDisplayValue + "" + secondHalfSmallDisplayValue);
                    displaySmallText.innerText = displaySmallText.innerText
                                                + " " + displayBigText.innerText 
                                                + " " + buttonEquals.value 
                                                + " " + smallDisplayValue;
                    displayBigText.innerText = smallDisplayValue + "";
                }
                else {
                    if (smallDisplayValue.length > 12) {
                        displaySmallText.innerText = displaySmallText.innerText
                                            + " " + displayBigText.innerText 
                                            + " " + buttonEquals.value 
                                            + " " + Number.parseFloat(smallDisplayValue).toExponential(2);
                        displayBigText.innerText = Number.parseFloat(smallDisplayValue).toExponential(2) + "";
                    }
                    else {
                        displaySmallText.innerText = displaySmallText.innerText
                                            + " " + displayBigText.innerText 
                                            + " " + buttonEquals.value 
                                            + " " + smallDisplayValue;
                        displayBigText.innerText = smallDisplayValue + "";
                    }
                }
                mainDisplayValue = parseFloat(displayBigText.innerText);
            }
            else {
                displaySmallText.innerText = displaySmallText.innerText + " " + displayBigText.innerText + " " + buttonEquals.value + " " + smallDisplayValue;
                mainDisplayValue = smallDisplayValue;
                displayBigText.innerText = mainDisplayValue + "";
            }
        }
    }
    fitAnswerToDisplay();
    operationsCount = 0;
    deleteHistory.style.display = "block";
    if (historyTextArea.value === "No History") {
        historyTextArea.value = "";
    }
    historyTextArea.classList.add("history-textarea-with-content");
    changeHistoryTextarea();
});

numberPadButtons.forEach(button => button.addEventListener("touchstart", changeColorTouchStart));
numberPadButtons.forEach(button => button.addEventListener("touchend", changeColorTouchEnd));
buttonAllClear.addEventListener("mouseup", allClear);
buttonClearEntry.addEventListener("mouseup", clearEntry);
buttonDeleteLastDigit.addEventListener("mouseup", deleteLastDigit);
buttonPositiveNegative.addEventListener("mouseup", changePositiveOrNegative);
buttonDecimal.addEventListener("mouseup", addDecimal);
mobileLightDarkMode.addEventListener("touchend", changeLightDarkModeMobile);
desktopLightDarkMode.addEventListener("mouseup", changeLightDarkModeDesktop);
desktopHistoryPopupButton.addEventListener("mouseup", displayHistoryDesktop);
deleteHistory.addEventListener("mouseup", () => {
    historyTextArea.classList.remove("history-textarea-with-content");
    historyTextArea.value = "No History";
    deleteHistory.style.display = "none";
});