class Academy {
    constructor(name, members, color) {
        this.name = name;
        this.members = members;
        this.color = color;
        Academy.arr.push(this);
    }
    
    get pixels() {
        return this.members / 5;
    }

    get col() {
        return `<div style="height: 80px; width: ${this.pixels * 3}px; background: ${this.color};box-shadow: 0px 0px 30px white; border-radius: 20px;">
                    <h2>${this.name}</h2>
                    <p>${this.members}</p>
                </div>`;
    }

    static render() {
        let div = document.getElementById("analitikamain");
        Academy.arr.forEach(academy => {
            div.insertAdjacentHTML("beforeend", academy.col);
        });
    }
}

Academy.arr = [];

new Academy('GOA', 1200, "green");
new Academy('Novatori', 600, "yellow");
new Academy('Step', 500, "blue");
new Academy('Programkursebi', 300, "white");
new Academy('Khan', 200, "lightgreen");
new Academy('Smart', 100, "gray");


Academy.render();



// minigame animation

const myBox = document.getElementById("myBox");

const amount = 10;
let x = 0;
let y = 0;
let timeoutId = null;

document.addEventListener("keydown", event => {
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }

    switch(event.key) {
        case "წ":
        case "w":
            y -= amount;
            myBox.textContent = "📈";
            break;
        case "ს":
        case "s":
            y += amount;
            myBox.textContent = "📉";
            break;
        case "ა":
        case "a":
            x -= amount;
            myBox.textContent = "⬅️";
            break;
        case "დ":
        case "d":
            x += amount;
            myBox.textContent = "➡️";
            break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
});

document.addEventListener("keyup", event => {
    timeoutId = setTimeout(() => {
        myBox.textContent = "💸";
        timeoutId = null;
    }, 2000);
});

