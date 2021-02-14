// Elements to Control
const timer				= document.getElementById('timer');
const checkbox			= document.getElementById('online-switch');
const timerController 	= document.getElementById('timer-controller');
const tossupController	= document.getElementById('tossup');
const bonusController	= document.getElementById('bonus');
const resetController	= document.getElementById('reset');

const team1Score		= document.getElementById('team1-score');
const team1TossupAdd	= document.getElementById('team1-tossup');
const team1TossupRemove	= document.getElementById('team1-tossup-remove');
const team1BonusAdd		= document.getElementById('team1-bonus');
const team1BonusRemove	= document.getElementById('team1-bonus-remove');

const team2Score		= document.getElementById('team2-score');
const team2TossupAdd	= document.getElementById('team2-tossup');
const team2TossupRemove	= document.getElementById('team2-tossup-remove');
const team2BonusAdd		= document.getElementById('team2-bonus');
const team2BonusRemove	= document.getElementById('team2-bonus-remove');

const timerOver = new Audio('https://raw.githubusercontent.com/Mastermind497/ScienceBowlTimer/main/assets/timerOver.mp3');

var online = false;

// Checkbos Event Listener
// If The Checkbox becomes checked, use online values. 
// Else, use the default values
checkbox.addEventListener('change', function(event) {
	console.log(event, "Clicked");
	if (checkbox.checked) {
		tossupController.innerHTML = "Tossup (7s)";
		bonusController.innerHTML = "Bonus (22s)";
		online = true;
	} else {
		tossupController.innerHTML = "Tossup (5s)";
		bonusController.innerHTML = "Bonus (20s)";
		online = false;
	}
});

var countdown;

// Takes Length in Seconds
function startTimer(length) {
	length *= 100;
	end();
	countdown = setInterval(function() {
		length--;
		var temp = length.toString();
		while (temp.length < 4) temp = "0" + temp;
		var toDisplay = temp.substring(0, 2) + ":" + temp.substring(2);
		timer.innerHTML = toDisplay;
		if (length == 0) {
			console.log('Time\'s Up!');
			timerOver.play();
			timerController.style.backgroundColor = "#FF1807";
			console.log('Background color changed');
			clearInterval(countdown);
			// Do whatever when the time is up;
			//
			// TODO Flash Red
		}
	}, 10);
}

function end() {
	clearInterval(countdown);
	timer.innerHTML = "00:00";
	timerController.style.backgroundColor = "#FFFFFF";
	console.log('The Countdown has been reset');
}

const tossupOnline		= 7;
const tossupInPerson	= 5;

function tossupTimer() {
	if (online) {
		startTimer(tossupOnline);
	} else {
		startTimer(tossupInPerson);
	}
}

const bonusOnline	= 22;
const bonusInPerson	= 20;

function bonusTimer() {
	if (online) {
		startTimer(bonusOnline);
	} else {
		startTimer(bonusInPerson);
	}
}

// Scoring Capabilities
var team1ScoreValue = 0;
var team2ScoreValue = 0;

function updateScore() {
	team1Score.innerHTML = team1ScoreValue;
	team2Score.innerHTML = team2ScoreValue;
}

function addTossup1() {
	team1ScoreValue += 4;
	updateScore();
}

function addTossup2() {
	team2ScoreValue += 4;
	updateScore();
}
function addBonus1() {
	team1ScoreValue += 10;
	updateScore();
}
function addBonus2() {
	team2ScoreValue += 10;
	updateScore();
}

function removeTossup1() {
	team1ScoreValue -= 4;
	updateScore();
}

function removeTossup2() {
	team2ScoreValue -= 4;
	updateScore();
}
function removeBonus1() {
	team1ScoreValue -= 10;
	updateScore();
}
function removeBonus2() {
	team2ScoreValue -= 10;
	updateScore();
}
