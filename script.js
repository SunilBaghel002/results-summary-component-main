const resultElement = document.querySelector(".result");
const continueBtn = document.querySelector(".btn");
const containerElement = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");
const summaryElement=document.querySelector(".summary")

continueBtn.addEventListener("click", () => {
    if (window.innerWidth <= 650) {
        summaryElement.classList.add("slide-down");
        containerElement.classList.add("trans")
        resetBtn.style.display = "block";
        resetBtn.classList.add("fade-in-reset");
    }
    else {
        containerElement.classList.add("movement", "trans");
        resultElement.classList.add("slider");
        continueBtn.classList.add("on-hover")

        setTimeout(() => {
            resetBtn.style.display = "block";
            resetBtn.classList.add("fade-in-up");
        }, 5000);
    }
});

resetBtn.addEventListener("click", () => {
    if (window.innerWidth <= 650) {
        summaryElement.classList.remove("slide-down");
        summaryElement.classList.add("slide-up-reverse");
        resetBtn.classList.remove("fade-in-reset");
        resetBtn.classList.add("fade-out-reset");
        containerElement.classList.remove("trans")

        setTimeout(() => {
            resetBtn.style.display = "none";
            resetBtn.classList.remove("fade-out-reset");
        }, 500);
    }
    else {
        resultElement.classList.add("reverse-slider");
        containerElement.classList.add("reverse-movement");
        continueBtn.classList.remove("on-hover")

        setTimeout(() => {
            containerElement.classList.remove("trans")
        }, 2500);

        setTimeout(() => {
            containerElement.classList.remove("movement", "reverse-movement");
            resultElement.classList.remove("slider", "reverse-slider");

            resetBtn.classList.remove("fade-in-up");
            resetBtn.classList.add("fade-out");
            setTimeout(() => {
                resetBtn.style.display = "none";
                resetBtn.classList.remove("fade-out");
            }, 1000);
        }, 5000);
    }
});
