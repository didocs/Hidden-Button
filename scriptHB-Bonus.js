let noButtons, winnerBtn, noClicks = 0;

let game = document.getElementById("buttonGame");

function generateButtons() {
    ++noClicks;
    if (noClicks > 1) {
        restart();
    }
    noButtons = parseInt(document.getElementById("textBox").value);
    winnerBtn = Math.floor(Math.random() * noButtons);
    if (noButtons < 1) {
        alert("Must be at least one button!");
        return;
    }
    for (let i = 0; i < noButtons; ++i) {
        let newButton = document.createElement("button");
        let winnerBtn = Math.floor(Math.random() * noButtons);
        newButton.innerText = "$$$";
        newButton.id = i;
        newButton.classList.add("roundish");
        newButton.addEventListener("click", function() {
            winnerLooser(newButton.id)
        });
        game.appendChild(newButton);
    }
}

function winnerLooser(id) {
    Number(id) === winnerBtn ? flashButton(id, "Wiiinner!!:)", "green") : flashButton(id, "Looser!!:(", "red");
}

function flashButton(id, text, color) {
	let bgColor = color;
    let btn = document.getElementById(id);
    btn.style.backgroundColor = color;
    btn.innerText = text;
    var toggleColor = function() {
        btn.style.backgroundColor =  btn.style.backgroundColor === bgColor ? "lightgray" :bgColor;
        setTimeout(toggleColor, 700);
    }
    toggleColor();
}

function restart() {
    location.reload();
}
