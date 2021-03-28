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
    const invalidMoveText = document.createElement("span");
    const br = document.createElement("br");

    button.textContent = "_";
    invalidMoveText.textContent = "Can't go here";
    invalidMoveText.setAttribute("id", "invalidMove");

    if (columnCount === 3) {
        con.appendChild(button);
        con.appendChild(br);
        columnCount = 0;
    } else {
        con.appendChild(button);
    }
    button.addEventListener("click", () => {
        if (button.style.background === "blue" || button.style.background === "red") {
            con.appendChild(invalidMoveText);
            console.log("can't go here");
        } else {
            if (currentTurn === "blue") {
                if (document.querySelector("#invalidMove")) {
                    con.removeChild(document.querySelector("#invalidMove"));
                }
                currentTurn = "red";
                button.textContent = "X";
                turnStatus.textContent = "BLUE's turn";
                button.setAttribute("style", "background: red; color: white;");
            } else if (currentTurn === "red") {
                if (document.querySelector("#invalidMove")) {
                    con.removeChild(document.querySelector("#invalidMove"));
                }
                currentTurn = "blue";
                button.textContent = "O";
                turnStatus.textContent = "RED's turn";
                button.setAttribute("style", "background: blue; color: white;");
            }
        }
        gameValidation(currentTurn, turnStatus);
    });
});