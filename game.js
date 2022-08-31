const totalTime = 4049;
var t = 0;
var speed = 0;
var speedD = 0;
var lastSpeed = -1;
document.getElementById("tD").innerHTML = t;
var i = 0;

function setttominus15() {
    t = -15;
}

setInterval(function() {
    speed = totalTime*2.319/(totalTime - t); //miles per hour
    speedD = Math.round(10*speed) / 10;
    if(lastSpeed != speedD) {
        document.getElementById("mphD").innerHTML = speedD;
        lastSpeed = speedD;
    }
    t += 1/30;
    i++
    if(i % 30 == 0) {
        document.getElementById("tD").innerHTML = Math.round(t);
    }
}, 33.35);