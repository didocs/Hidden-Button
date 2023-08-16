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
        flashWinner(id);
    } else {
        btn.innerText = "Loooser!!:(";
        btn.style.backgroundColor = "red";
        flashLooser(id);;
    }
}

function flashWinner(id) {
    let btnW = document.getElementById(id);
    var toggleWinner = function() {
        btnW.style.backgroundColor = btnW.style.backgroundColor === "green" ? "lightgray" : "green";
        setTimeout(toggleWinner, 700);
    }
    toggleWinner();
}

function flashLooser(id) {
    let btnL = document.getElementById(id);
    var toggleLooser = function() {
        btnL.style.backgroundColor = btnL.style.backgroundColor === "red" ? "lightgray" : "red";
        setTimeout(toggleLooser, 700);
    }
    toggleLooser();
}

function restart() {
    location.reload();
}
