import { gameValidation } from "./gameVal.js";

let arenaArray = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
let currentTurn = "blue";
let columnCount = 0;
const con = document.querySelector("#container");
const header = document.createElement("h1");
const turnStatus = document.createElement("h2");
header.textContent = "Tic Tac Toe";
turnStatus.textContent = "RED's turn";
con.appendChild(header);
con.appendChild(turnStatus);

arenaArray.forEach(() => {
    columnCount = columnCount + 1;
    const button = document.createElement("button");
    const br = document.createElement("br");
    button.textContent = "_";
    if (columnCount === 3) {
        con.appendChild(button);
        con.appendChild(br);
        columnCount = 0;
    } else {
        con.appendChild(button);
    }
    button.addEventListener("click", () => {
        if (button.style.background === "blue" || button.style.background === "red") {
            console.log("can't go here");
        } else {
            if (currentTurn === "blue") {
                currentTurn = "red";
                button.textContent = "X";
                turnStatus.textContent = "BLUE's turn";
                button.setAttribute("class", "red");
            } else {
                currentTurn = "blue";
                button.textContent = "O";
                turnStatus.textContent = "RED's turn";
                button.setAttribute("class", "blue");
            }
        }
        gameValidation(currentTurn, turnStatus);
    });
});