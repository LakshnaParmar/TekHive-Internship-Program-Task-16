// script.js
let hr = 0;
let min = 0;
let sec = 0;
let milisec = 0;
let timer;

function start() {
    if (!timer) {
        timer = setInterval(run, 10); // Update every 10 milliseconds
    }
}

function run() {
    milisec++;
    if (milisec === 100) {
        milisec = 0;
        sec++;
    }
    if (sec === 60) {
        sec = 0;
        min++;
    }
    if (min === 60) {
        min = 0;
        hr++;
    }

    document.getElementById('hr').textContent = (hr < 10) ? "0" + hr : hr;
    document.getElementById('min').textContent = (min < 10) ? "0" + min : min;
    document.getElementById('sec').textContent = (sec < 10) ? "0" + sec : sec;
    document.getElementById('milisec').textContent = (milisec < 10) ? "0" + milisec : milisec;
}

function stop() {
    clearInterval(timer);
    timer = false;
}

function reset() {
    clearInterval(timer);
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;
    document.getElementById('hr').textContent = "00";
    document.getElementById('min').textContent = "00";
    document.getElementById('sec').textContent = "00";
    document.getElementById('milisec').textContent = "00";
}
