//
const containerPage = document.querySelector(".container-page");
const containerHistory = document.querySelector(".container-history");
const historyTextArea = document.querySelector("#history-textarea");
const mobileHistoryButton = document.querySelector(".mobile-history-button");
const containerCalculator = document.querySelector(".container-calculator");
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

buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonClearEntry.addEventListener("touchstart", () => {
    buttonClearEntry.style.backgroundColor = "#FF4444";
});
buttonClearEntry.addEventListener("touchend", () => {
    buttonClearEntry.style.backgroundColor = "#F4F4F4";
});
buttonDeleteLastNumber.addEventListener("touchstart", () => {
    buttonDeleteLastNumber.style.backgroundColor = "#FF4444";
});
buttonDeleteLastNumber.addEventListener("touchend", () => {
    buttonDeleteLastNumber.style.backgroundColor = "#F4F4F4";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});
buttonAllClear.addEventListener("touchstart", () => {
    buttonAllClear.style.backgroundColor = "#FF4444";
});
buttonAllClear.addEventListener("touchend", () => {
    buttonAllClear.style.backgroundColor = "#FFDDDD";
});