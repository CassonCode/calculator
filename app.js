const containerPage = document.querySelector(".container-page");
const containerHistory = document.querySelector(".container-history");
const historyTextArea = document.querySelector("#history-textarea");
const mobileHistoryButton = document.querySelector(".mobile-history-button");
const containerCalculator = document.querySelector(".container-calculator");
const buttonAllClear = document.querySelector(".button-all-clear");

containerPage.style.height = window.innerHeight + "px";
containerPage.style.width = window.innerWidth + "px";

containerCalculator.style.height = window.innerHeight + "px";
containerCalculator.style.width = window.innerWidth + "px";

containerHistory.style.height = window.innerHeight + "px";
containerHistory.style.width = window.innerWidth + "px";

historyTextArea.style.height = (window.innerHeight - 50) + "px";
historyTextArea.style.width = window.innerWidth + "px";

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