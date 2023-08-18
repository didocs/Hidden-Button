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
    let btn = document.getElementById(id);
    if (winnerBtn === Number(id)) {
        btn.innerText = "Wiiinner!!:)";
        btn.style.backgroundColor = "green";
        flashButton(id);
    } else {
        btn.innerText = "Loooser!!:(";
        btn.style.backgroundColor = "red";
        flashButton(id);
    }
}

function flashButton(id) {
    let btn = document.getElementById(id);
    var toggleColor = function() {
    	btn.style.backgroundColor = btn.style.backgroundColor === "green" ? "lightgray" : "green";
        btn.style.backgroundColor = btn.style.backgroundColor === "red" ? "lightgray" : "red";
        setTimeout(toggleColor, 700);
    }
    toggleColor();
}

function restart() {
    location.reload();
}
