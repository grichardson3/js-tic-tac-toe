const resetGame = (currentTurn, turnStatus) => {
    const b = document.querySelectorAll("button");

    b.forEach((tile) => {
        tile.setAttribute("disabled", "");
    });
    setTimeout(() => {
        b.forEach((tile) => {
            if (currentTurn === "red") {
                turnStatus.textContent = "BLUE's Turn";
            } else {
                turnStatus.textContent = "RED's Turn";
            }
            tile.textContent = "_";
            tile.removeAttribute("class");
            tile.removeAttribute("disabled");
            console.clear();
        });
    }, 3000);
}

export const gameValidation = (currentTurn, turnStatus) => {
    const b = document.querySelectorAll("button");

    if ((b[0].className === "red" && b[3].className === "red" && b[6].className === "red") || (b[1].className === "red" && b[4].className === "red" && b[7].className === "red") || (b[2].className === "red" && b[5].className === "red" && b[8].className === "red") || (b[0].className === "red" && b[1].className === "red" && b[2].className === "red") || (b[3].className === "red" && b[4].className === "red" && b[5].className === "red") || (b[6].className === "red" && b[7].className === "red" && b[8].className === "red") || (b[0].className === "red" && b[4].className === "red" && b[8].className === "red") || (b[2].className === "red" && b[4].className === "red" && b[6].className === "red")) {
        console.log("RED wins");
        turnStatus.textContent = "RED wins!";
        resetGame(currentTurn, turnStatus);
    } else if ((b[0].className === "blue" && b[3].className === "blue" && b[6].className === "blue") || (b[1].className === "blue" && b[4].className === "blue" && b[7].className === "blue") || (b[2].className === "blue" && b[5].className === "blue" && b[8].className === "blue") || (b[0].className === "blue" && b[1].className === "blue" && b[2].className === "blue") || (b[3].className === "blue" && b[4].className === "blue" && b[5].className === "blue") || (b[6].className === "blue" && b[7].className === "blue" && b[8].className === "blue") || (b[0].className === "blue" && b[4].className === "blue" && b[8].className === "blue") || (b[2].className === "blue" && b[4].className === "blue" && b[6].className === "blue")) {
        console.log("BLUE wins");
        turnStatus.textContent = "BLUE wins!";
        resetGame(currentTurn, turnStatus);
    } else if (b[0].className && b[1].className && b[2].className && b[3].className && b[4].className && b[5].className && b[6].className && b[7].className && b[8].className) {
        console.log("tie");
        turnStatus.textContent = "Tie game";
        resetGame(currentTurn, turnStatus);
    }
}