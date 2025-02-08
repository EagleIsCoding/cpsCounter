// CPS Counter

const cpsButton = document.getElementById('startCPS');
const scoreCounter = document.getElementById('scoreCounter');
const cpsTimer = document.getElementById('cpsTimer');
const cps = document.getElementById('cps');

scoreCounter.textContent = `Score: 0`;
cpsTimer.textContent = `Time: 0s`;

let isStarted = false;
let isFinished = false;
let score = 0;
let cpsCounter = 0;
let timerInterval;

/**
 *  Starts the timer and updates the display
 * @param {*} duration 
 * @param {*} display 
 */
function startTimer(duration, display) {
    if (!isStarted && !isFinished) {
        isStarted = true;
        isFinished = false;
        score = 0;
        cps.textContent = ``;
        display.textContent = `Time: ${duration}s`;
        timerInterval = setInterval(() => {
            duration++;
            display.textContent = `Time: ${duration}s`;
            if (duration >= 5) {
                clearInterval(timerInterval);
                isStarted = false;
                isFinished = true; 
                cpsCounter = score / 5;
                cps.textContent = `Click/s: ${cpsCounter}`;
                setTimeout(() => {
                    isFinished = false; 
                }, 2000);
            }
        }, 1000);
    }
}

/**
 * Event listener for the button that increments the score
 */
cpsButton.addEventListener('click', () => {
    if (isFinished || !isStarted) {
        startTimer(0, cpsTimer);
    }
    if (!isFinished) {
        score++;
        scoreCounter.textContent = `Score: ${score}`;
    }
});