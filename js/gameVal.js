const resetGame = (currentTurn, turnStatus) => {
    const b = document.querySelectorAll("button");
    const con = document.querySelector("#container");
    const timerText = document.createElement("span");
    let resetTimer = 3;

    timerText.setAttribute("id", "timerText");
    timerText.textContent = `Game resets in ${resetTimer}`;
    con.appendChild(timerText);

    b.forEach((tile) => {
        tile.setAttribute("disabled", "");
    });

    setTimeout(() => {
        resetTimer = 2;
        timerText.textContent = `Game resets in ${resetTimer}`;
        setTimeout(() => {
            resetTimer = 1;
            timerText.textContent = `Game resets in ${resetTimer}`;
            setTimeout(() => {
                con.removeChild(document.querySelector("#timerText"));
                b.forEach((tile) => {
                    if (currentTurn === "red") {
                        turnStatus.textContent = "BLUE's Turn";
                    } else {
                        turnStatus.textContent = "RED's Turn";
                    }
                    tile.textContent = "_";
                    tile.removeAttribute("style");
                    tile.removeAttribute("disabled");
                    console.clear();
                });
            }, 1000);
        }, 1000);
    }, 1000);
}

export const gameValidation = (currentTurn, turnStatus) => {
    const b = document.querySelectorAll("button");

    if ((b[0].style.background === "red" && b[3].style.background === "red" && b[6].style.background === "red") || (b[1].style.background === "red" && b[4].style.background === "red" && b[7].style.background === "red") || (b[2].style.background === "red" && b[5].style.background === "red" && b[8].style.background === "red") || (b[0].style.background === "red" && b[1].style.background === "red" && b[2].style.background === "red") || (b[3].style.background === "red" && b[4].style.background === "red" && b[5].style.background === "red") || (b[6].style.background === "red" && b[7].style.background === "red" && b[8].style.background === "red") || (b[0].style.background === "red" && b[4].style.background === "red" && b[8].style.background === "red") || (b[2].style.background === "red" && b[4].style.background === "red" && b[6].style.background === "red")) {
        turnStatus.textContent = "RED wins!";
        resetGame(currentTurn, turnStatus);
    } else if ((b[0].style.background === "blue" && b[3].style.background === "blue" && b[6].style.background === "blue") || (b[1].style.background === "blue" && b[4].style.background === "blue" && b[7].style.background === "blue") || (b[2].style.background === "blue" && b[5].style.background === "blue" && b[8].style.background === "blue") || (b[0].style.background === "blue" && b[1].style.background === "blue" && b[2].style.background === "blue") || (b[3].style.background === "blue" && b[4].style.background === "blue" && b[5].style.background === "blue") || (b[6].style.background === "blue" && b[7].style.background === "blue" && b[8].style.background === "blue") || (b[0].style.background === "blue" && b[4].style.background === "blue" && b[8].style.background === "blue") || (b[2].style.background === "blue" && b[4].style.background === "blue" && b[6].style.background === "blue")) {
        turnStatus.textContent = "BLUE wins!";
        resetGame(currentTurn, turnStatus);
    } else if (b[0].style.background && b[1].style.background && b[2].style.background && b[3].style.background && b[4].style.background && b[5].style.background && b[6].style.background && b[7].style.background && b[8].style.background) {
        turnStatus.textContent = "Tie game";
        resetGame(currentTurn, turnStatus);
    }
}