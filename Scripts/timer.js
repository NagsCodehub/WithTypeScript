// namespace is the preferred keyword over module
var demo_timer;
(function (demo_timer) {
    var 
    // Basics properties
    timerId = -1, interval = 25, ms = 0, seconds = 0, minutes = 0, 
    // Kick the timer off with an interval
    startTimer = function () {
        if (timerId === -1) {
            timerId = window.setInterval('demo_timer.turnTimerOn()', interval);
        }
    }, 
    // Update the screen with the timer data
    displayTimer = function () {
        document.getElementById('milliseconds').innerHTML = ms.toString();
        document.getElementById('seconds').innerHTML = seconds.toString();
        document.getElementById('minutes').innerHTML = minutes.toString();
    }, 
    // Pause the timer
    pauseTimer = function () {
        window.clearInterval(timerId);
        timerId = -1;
    }, 
    // Reset the timer to 0
    clearTimer = function () {
        pauseTimer();
        ms = 0;
        seconds = 0;
        minutes = 0;
        displayTimer();
    }, 
    // Bootstrap everything
    init = function (startButton, pauseButton, clearButton) {
        document.getElementById(startButton).
            addEventListener("click", startTimer, false);
        document.getElementById(pauseButton).
            addEventListener("click", pauseTimer, false);
        document.getElementById(clearButton).
            addEventListener("click", clearTimer, false);
        displayTimer();
    };
    // Start counting
    function turnTimerOn() {
        ms += interval;
        if (ms >= 1000) {
            ms = 0;
            seconds += 1;
        }
        if (seconds >= 60) {
            ms = 0;
            seconds = 0;
            minutes += 1;
        }
        displayTimer();
    }
    demo_timer.turnTimerOn = turnTimerOn;
    ;
    window.onload = function () {
        init('startButton', 'pauseButton', 'clearButton');
    };
})(demo_timer || (demo_timer = {}));
