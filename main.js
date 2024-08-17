let numberInput = document.querySelector("#getInput");
let startButton = document.querySelector(".startBtn");
let displayScreen = document.querySelector(".displayResultDiv");

startButton.addEventListener('click', () => {
    let number = parseInt(numberInput.value);
    
    if (number > 100) {
        alert("VERY LARGE NUMBER");
    }
    else {
        displayScreen.innerHTML = ""; // Clear the screen before displaying the new pattern
    
        for (let i = 1; i <= number; i++) {
            displayScreen.innerHTML += "*".repeat(i) + "<br>"; // Append each line with a line break
        }
    }
});
