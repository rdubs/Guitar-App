/**
 *
 */

var INITIAL_TOP = 12;
var INITIAL_LEFT = -6;
var NUM_ROWS = 19;
var NUM_COLUMNS = 6;
var buttons = new Array(NUM_ROWS);
var guitarFretContainer = document.getElementById('guitar-fret-container');

var currentFret;

// Loop down the rows
for (var i = 0; i < NUM_ROWS; i++) {
	buttons[i] = new Array(NUM_COLUMNS);

	// Loop across columns
	for (var j = 0; j < NUM_COLUMNS; j++) {
		var btn = document.createElement('button');
		btn.style.marginTop = INITIAL_TOP + i * 40 + 'px';
		btn.style.left = INITIAL_LEFT + j * 40 + 'px';
		btn.style.display = 'none';
		guitarFretContainer.appendChild(btn);
		buttons[i][j] = btn;
		btn.note = 'A';
	};
};


currentFret = buttons[2][5];
currentFret.style.display = '';



['A', 'A#', 'Bb']