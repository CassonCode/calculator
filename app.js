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


//
mobileHistoryButton.addEventListener("touchstart", () => {
    mobileHistoryButton.style.backgroundColor = "#AFAFAF";
});
mobileHistoryButton.addEventListener("touchend", () => {
    mobileHistoryButton.style.backgroundColor = "#F4F4F4";
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
buttonDivision.addEventListener("touchstart", () => {
    buttonDivision.style.backgroundColor = "#6599FF";
});
buttonDivision.addEventListener("touchend", () => {
    buttonDivision.style.backgroundColor = "#F4F4F4";
});
buttonNumberSeven.addEventListener("touchstart", () => {
    buttonNumberSeven.style.backgroundColor = "#AFAFAF";
});
buttonNumberSeven.addEventListener("touchend", () => {
    buttonNumberSeven.style.backgroundColor = "#fff";
});
buttonNumberEight.addEventListener("touchstart", () => {
    buttonNumberEight.style.backgroundColor = "#AFAFAF";
});
buttonNumberEight.addEventListener("touchend", () => {
    buttonNumberEight.style.backgroundColor = "#fff";
});
buttonNumberNine.addEventListener("touchstart", () => {
    buttonNumberNine.style.backgroundColor = "#AFAFAF";
});
buttonNumberNine.addEventListener("touchend", () => {
    buttonNumberNine.style.backgroundColor = "#fff";
});
buttonMultiplication.addEventListener("touchstart", () => {
    buttonMultiplication.style.backgroundColor = "#6599FF";
});
buttonMultiplication.addEventListener("touchend", () => {
    buttonMultiplication.style.backgroundColor = "#F4F4F4";
});
buttonNumberFour.addEventListener("touchstart", () => {
    buttonNumberFour.style.backgroundColor = "#AFAFAF";
});
buttonNumberFour.addEventListener("touchend", () => {
    buttonNumberFour.style.backgroundColor = "#fff";
});
buttonNumberFive.addEventListener("touchstart", () => {
    buttonNumberFive.style.backgroundColor = "#AFAFAF";
});
buttonNumberFive.addEventListener("touchend", () => {
    buttonNumberFive.style.backgroundColor = "#fff";
});
buttonNumberSix.addEventListener("touchstart", () => {
    buttonNumberSix.style.backgroundColor = "#AFAFAF";
});
buttonNumberSix.addEventListener("touchend", () => {
    buttonNumberSix.style.backgroundColor = "#fff";
});
buttonSubtraction.addEventListener("touchstart", () => {
    buttonSubtraction.style.backgroundColor = "#6599FF";
});
buttonSubtraction.addEventListener("touchend", () => {
    buttonSubtraction.style.backgroundColor = "#F4F4F4";
});
buttonNumberOne.addEventListener("touchstart", () => {
    buttonNumberOne.style.backgroundColor = "#AFAFAF";
});
buttonNumberOne.addEventListener("touchend", () => {
    buttonNumberOne.style.backgroundColor = "#fff";
});
buttonNumberTwo.addEventListener("touchstart", () => {
    buttonNumberTwo.style.backgroundColor = "#AFAFAF";
});
buttonNumberTwo.addEventListener("touchend", () => {
    buttonNumberTwo.style.backgroundColor = "#fff";
});
buttonNumberThree.addEventListener("touchstart", () => {
    buttonNumberThree.style.backgroundColor = "#AFAFAF";
});
buttonNumberThree.addEventListener("touchend", () => {
    buttonNumberThree.style.backgroundColor = "#fff";
});
buttonAddition.addEventListener("touchstart", () => {
    buttonAddition.style.backgroundColor = "#6599FF";
});
buttonAddition.addEventListener("touchend", () => {
    buttonAddition.style.backgroundColor = "#F4F4F4";
});
buttonPositiveNegative.addEventListener("touchstart", () => {
    buttonPositiveNegative.style.backgroundColor = "#AFAFAF";
});
buttonPositiveNegative.addEventListener("touchend", () => {
    buttonPositiveNegative.style.backgroundColor = "#F4F4F4";
});
buttonNumberZero.addEventListener("touchstart", () => {
    buttonNumberZero.style.backgroundColor = "#AFAFAF";
});
buttonNumberZero.addEventListener("touchend", () => {
    buttonNumberZero.style.backgroundColor = "#fff";
});
buttonDecimal.addEventListener("touchstart", () => {
    buttonDecimal.style.backgroundColor = "#AFAFAF";
});
buttonDecimal.addEventListener("touchend", () => {
    buttonDecimal.style.backgroundColor = "#F4F4F4";
});
buttonEquals.addEventListener("touchstart", () => {
    buttonEquals.style.backgroundColor = "#6599FF";
});
buttonEquals.addEventListener("touchend", () => {
    buttonEquals.style.backgroundColor = "#DCE8FF";
});