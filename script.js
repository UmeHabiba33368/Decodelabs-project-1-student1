/* =========================
   HTML COURSE PROGRESS
========================= */

let mathProgress = 70;


/* =========================
   GET HTML ELEMENTS
========================= */

let welcomeMessage =
    document.getElementById("welcomeMessage");

let continueButton =
    document.getElementById("continueButton");

let mathProgressText =
    document.getElementById("mathProgress");

let mathProgressBar =
    document.getElementById("mathProgressBar");

let statusMessage =
    document.getElementById("statusMessage");


/* =========================
   CONTINUE COURSE BUTTON
========================= */

continueButton.addEventListener("click", function () {

    if (mathProgress < 100) {

        mathProgress = mathProgress + 10;

    }


    mathProgressText.textContent =
        "Progress: " + mathProgress + "%";


    mathProgressBar.style.width =
        mathProgress + "%";


    welcomeMessage.textContent =
        "Keep learning!";


    statusMessage.textContent =
        "Mathematics progress is now "
        + mathProgress
        + "%.";

});

