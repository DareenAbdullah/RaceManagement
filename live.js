const startingMinutes = .1;
let time = startingMinutes * 60;
const countDown = document.getElementById('startSignal');
var interval; //fpr the start signal

var intervalRace; //for the stopwatch
var milliSec = 00;
var seconds = 00;
var appendMilli = document.getElementById("seconds");
var appendSeconds = document.getElementById("tens");
var buttonReset = document.getElementById("button-reset");

var intervalRace2; //for the stopwatch
var milliSec2 = 00;
var seconds2 = 00;
var appendMilli2 = document.getElementById("seconds2");
var appendSeconds2 = document.getElementById("tens2");
var buttonReset2 = document.getElementById("button-reset2");


//Code for the startSignal
function startSignal(){
  if (time == 0){
    countDown.innerHTML = "start";
    countDown.style.cssText = "background-color:rgba(238, 88, 68, 0.933)";
    time = startingMinutes * 60;
  }
  else{
    interval = setInterval(updateCountdown, 1000);
  }
}

function updateCountdown(){
  if (time > 0){
    if (time == 4){ //Begin playing the mario sound track at this moment
      new Audio('marioKart.mp3').play();
    }
    const minutes = Math.floor(time / 60);
    let seconds  = time % 60;

    countDown.innerHTML = `${seconds}`;
    time--
  }
  else{
    countDown.innerHTML = "GO!!";
    countDown.style.cssText = "background-color:#267609";
    countDown.addEventListener("click", startSignal);
    clearInterval(interval);

	/*start the stop watches*/
	intervalRace = setInterval(startTimer);
	intervalRace2 = setInterval(startTimer2);
	  
	document.addEventListener('keyup', function(event) {
		if (event.code === 'Enter') {
			clearInterval(intervalRace);
			seconds = seconds;
			milliSec = milliSec;
			appendMilli.innerHTML = milliSec;
			appendSeconds.innerHTML = seconds;
		}
	});
	  
	document.addEventListener('keyup', function(event) {
		if (event.code === 'Enter') {
			clearInterval(intervalRace2);
			seconds2 = seconds2;
			milliSec2 = milliSec2;
			appendMilli2.innerHTML = milliSec2;
			appendSeconds2.innerHTML = seconds2;
		}
	});
	  
  }
}

function startTimer(){
	seconds++;
	if (seconds < 9) {
		appendSeconds.innerHTML = "0" + seconds;
	}
	if (seconds > 9){
		appendSeconds.innerHTML = seconds;
	}
	if (seconds > 99){
		milliSec++;
		appendMilli.innerHTML = "0" + milliSec;
		seconds = 0;
		appendSeconds.innerHTML = "0" + 0;
	}
	if (milliSec > 9){
		appendMilli.innerHTML = milliSec;
	}
}

function startTimer2(){
	seconds2++;
	if (seconds2 < 9) {
		appendSeconds2.innerHTML = "0" + seconds2;
	}
	if (seconds2 > 9){
		appendSeconds2.innerHTML = seconds2;
	}
	if (seconds2 > 99){
		milliSec2++;
		appendMilli2.innerHTML = "0" + milliSec2;
		seconds2 = 0;
		appendSeconds2.innerHTML = "0" + 0;
	}
	if (milliSec2 > 9){
		appendMilli2.innerHTML = milliSec2;
	}
}

buttonReset.onclick = function(){
	clearInterval(intervalRace);
	seconds = seconds;
	milliSec = milliSec;
	appendMilli.innerHTML = milliSec;
	appendSeconds.innerHTML = seconds;

	clearInterval(intervalRace2);
	seconds2 = "00";
	milliSec2 = "00";
	appendMilli2.innerHTML = milliSec2;
	appendSeconds2.innerHTML = seconds2;
}
