const body = document.querySelector('body');

body.onload = assignWinnerButton;

let message = ["Wiiinner!!:)","Loooser!!:(", "Loooser!!:("];

let randomList = [], winner = "Wiiinner!!:)";

function assignWinnerButton() {
	let n = message.length, i;
	while (n) {
		i = Math.floor(Math.random() * n);
		randomList.push(message.splice(i, 1)[0]);
		--n;
	}
	return randomList;
}

let idBtn;

function winnerLooser(id) {
	let btn = document.getElementById(id);
	let index = id.valueOf();
	btn.innerHTML = randomList[index];
	idBtn = id;
	flashLoop();
}

function flashLoop() {
	let btn = document.getElementById(idBtn);
	if (btn.innerHTML === winner) {
		flashWinner();
	} else {
		flashLooser();
	}
}

function flashWinner() {
	let flashGreen = document.getElementById(idBtn);
	flashGreen.className = flashGreen.className === "btn btn-outline-secondary"? "btn btn-outline-success" : "btn btn-outline-secondary";
}

function flashLooser() {
	let flashRed = document.getElementById(idBtn);
	flashRed.className =  flashRed.className === "btn btn-outline-secondary"? "btn btn-outline-danger" : "btn btn-outline-secondary";
}


