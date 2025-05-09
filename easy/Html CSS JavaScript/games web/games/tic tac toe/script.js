const divparent = document.getElementById('parent');

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');
const div7 = document.getElementById('div7');
const div8 = document.getElementById('div8');
const div9 = document.getElementById('div9');

const winnertext = document.getElementById('winnertext');
const but = document.getElementById('restartButton');

let count = 0;
let text = "";

function XO() {
    if (count % 2 === 0) {
        this.textContent = "X";
        this.classList.add("pointnon");
    } else {
        this.textContent = "O";
        this.classList.add("pointnon");
    }

    if (div1.textContent === div2.textContent && div1.textContent === div3.textContent && div1.textContent === "X") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "x is winner";

    } else if (div1.textContent === div2.textContent && div1.textContent === div3.textContent && div1.textContent === "O") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "o is winner";

    } else if (div4.textContent === div5.textContent && div4.textContent === div6.textContent && div4.textContent === "X") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "x is winner";

    } else if (div4.textContent === div5.textContent && div4.textContent === div6.textContent && div4.textContent === "O") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "o is winner";

    } else if (div7.textContent === div8.textContent && div7.textContent === div9.textContent && div7.textContent === "X") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "x is winner";

    } else if (div7.textContent === div8.textContent && div7.textContent === div9.textContent && div7.textContent === "O") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "o is winner";

    } else if (div1.textContent === div4.textContent && div1.textContent === div7.textContent && div1.textContent === "X") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "x is winner";

    } else if (div1.textContent === div4.textContent && div1.textContent === div7.textContent && div1.textContent === "O") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "o is winner";

    } else if (div2.textContent === div5.textContent && div2.textContent === div8.textContent && div2.textContent === "X") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "x is winner";

    } else if (div2.textContent === div5.textContent && div2.textContent === div8.textContent && div2.textContent === "O") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "o is winner";

    } else if (div3.textContent === div6.textContent && div3.textContent === div9.textContent && div3.textContent === "X") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "x is winner";

    } else if (div3.textContent === div6.textContent && div3.textContent === div9.textContent && div3.textContent === "O") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "o is winner";

    } else if (div1.textContent === div5.textContent && div1.textContent === div9.textContent && div1.textContent === "X") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "x is winner";

    } else if (div1.textContent === div5.textContent && div1.textContent === div9.textContent && div1.textContent === "O") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "o is winner";

    } else if (div3.textContent === div5.textContent && div3.textContent === div7.textContent && div3.textContent === "X") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "x is winner";

    } else if (div3.textContent === div5.textContent && div3.textContent === div7.textContent && div3.textContent === "O") {
        divparent.classList.add("pointnon");
        winnertext.textContent = "o is winner";

    } else if (count === 8) {
        winnertext.textContent = "it's draw";
        setTimeout(() => {
            reset();
        }, 1000);
    }

    count++;
}

div1.addEventListener('click', XO);
div2.addEventListener('click', XO);
div3.addEventListener('click', XO);
div4.addEventListener('click', XO);
div5.addEventListener('click', XO);
div6.addEventListener('click', XO);
div7.addEventListener('click', XO);
div8.addEventListener('click', XO);
div9.addEventListener('click', XO);

but.addEventListener('click', reset);

function reset() {
    count = 0;

    [div1, div2, div3, div4, div5, div6, div7, div8, div9].forEach(div => {
        div.textContent = '';
        div.classList.remove('pointnon');
    });

    divparent.classList.remove("pointnon");
    winnertext.textContent = "";
}
