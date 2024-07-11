// Generating a random number
let randomNum = Math.floor(Math.random() * 20 + 1);
document.getElementById("guess").textContent = randomNum;

// Status Area
let message = document.querySelector(".message");

// Reset Button 
document.querySelector("#again").addEventListener("click", () => {
    location.reload();
});

// Attempt Counter
let initialAttempt = 0;
let finalResult = document.getElementById("score");

// Verifying Output 
let inputBtn = document.getElementById("input");
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
    initialAttempt++;
    finalResult.textContent = initialAttempt;
    let guessOutput = parseInt(inputBtn.value, 10);
    if (guessOutput === randomNum) {
        message.textContent = "😊 It is the Correct Number";
    } else if (guessOutput < randomNum) {
        message.textContent = "😔 It is too low";
    } else {
        message.textContent = "😎 It is too high";
    }
});
