function startTimer() {
    const timer = Number (document.querySelector("#cookMinutes").value);
    let amountTime = (timer * 60) + Number (document.querySelector("#cookSeconds").value);

    function calculateTime() {
        const countdown = document.querySelector("#countdown");

        let minutes = Math.floor(amountTime / 60);
        let seconds = amountTime % 60;

        amountTime--;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        countdown.textContent = `${minutes} : ${seconds}`;

        if (amountTime < 0) {
            stopTimer();
            amountTime = 0;
        }

        function stopTimer() {
            clearInterval(timerId);
        }
    }

    let timerId = setInterval(calculateTime, 1000);
}
const button = document.querySelector("#startBtn");
button.addEventListener("click", function () {
    startTimer();
})
    
