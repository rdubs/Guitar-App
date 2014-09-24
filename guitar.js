/**
 *
 */

var noteMappings = ['A', 'A-Sharp', 'B', 'C', 'C-Sharp', 'D', 'D-Sharp', 'E', 'F', 'F-Sharp', 'G', 'G-Sharp'];

var A_SHARP = 1;
var C = 3;
var D_SHARP = 6;
var F = 8;
var G_SHARP = 11;
var SIZE_OF_CHROMATIC_SCALE = 12;

var INITIAL_TOP = 12;
var INITIAL_LEFT = -6;
var NUM_ROWS = 19;
var NUM_COLUMNS = 6;

var FIRST_FRET_NOTES = [F, A_SHARP, D_SHARP, G_SHARP, C, F]; //Notes in first fret starting from the 6th string going down to 1st string.

var buttons = new Array();
var guitarFretContainer = document.getElementById('guitar-fret-container');
var currentFret;
var answerDiv = document.getElementById('footer');

//initialize sounds
var correctAnswerSound = new Audio('mario_coin.wav');
var wrongAnswerSound = new Audio('yoshi_spitting.wav');

//Create buttons in column major format.
for (var col = 0; col < NUM_COLUMNS; col++) {

	var currPosition = FIRST_FRET_NOTES[col];

	for (var row = 0; row < NUM_ROWS; row++) {
		var btn = document.createElement('button');
		btn.style.top = INITIAL_TOP + row * 40 + 'px';
		btn.style.left = INITIAL_LEFT + col * 40 + 'px';
		btn.style.display = 'none';
		guitarFretContainer.appendChild(btn);
		buttons.push(btn);
		btn.note = noteMappings[currPosition % SIZE_OF_CHROMATIC_SCALE];
		currPosition++;
	};
};
var btn = buttons[Math.floor(Math.random() * (buttons.length))];
btn.style.display = '';
currentFret = btn.note;

//add onClick function to all answer buttons.
var answerButtons = document.getElementById('buttons').getElementsByTagName('button');
for (var i = 0; i < answerButtons.length; i++) {
	answerButtons[i].onclick = checkIfRight;
}

function playSound(soundfile) {
  document.getElementById("dummy").innerHTML=
    "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function checkIfRight() {
	if (this.id === currentFret) {
		answerDiv.style.color = 'green';
		answerDiv.innerHTML = 'YOU ARE A MUSICAL GENIUS';
		correctAnswerSound.play();
		//hide current fret and pick new one.
		btn.style.display = 'none';
		btn = buttons[Math.floor(Math.random() * (buttons.length))];
		btn.style.display = '';
		currentFret = btn.note;
	} else {
		answerDiv.style.color = 'red';
		answerDiv.innerHTML = 'YOU SUCK';
		wrongAnswerSound.play();
	}
}







