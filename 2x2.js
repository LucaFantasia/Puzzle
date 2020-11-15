var level11Moves = 0;
var level12Moves = 0;

function level11() {
    levelSelected = 11;
    levelTable.innerHTML = "";
    buildTable(2, 2);
    rows = 2;
    document.getElementById("11").innerHTML = "";
    document.getElementById("12").innerHTML = "2";
    document.getElementById("13").innerHTML = "1";
    document.getElementById("14").innerHTML = "3";
    movesNew = 0;
    h3.innerHTML = movesNew + " moves <br> Best: " + level11Moves + " moves";
}

function level12() {
    levelSelected = 12;
    levelTable.innerHTML = "";
    buildTable(2, 2);
    rows = 2;
    document.getElementById("11").innerHTML = "";
    document.getElementById("12").innerHTML = "1";
    document.getElementById("13").innerHTML = "3";
    document.getElementById("14").innerHTML = "2";
    movesNew = 0;
    h3.innerHTML = movesNew + " moves <br> Best: " + level12Moves + " moves";
}

function button11() {
    buttonClicked = "11";
}
function button12() {
    buttonClicked = "12";
}
function button13() {
    buttonClicked = "13";
}
function button14() {
    buttonClicked = "14";
}

levelTable.addEventListener("click", function () {
    if (rows === 2) {
        if (document.getElementById("11").innerHTML === "") {
            if (buttonClicked === "12" || buttonClicked == "13") {
                document.getElementById("11").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 11) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level11Moves + " moves";
                } else if (levelSelected === 12) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level12Moves + " moves";
                }
            }
        } else if (document.getElementById("12").innerHTML === "") {
            if (buttonClicked === "11" || buttonClicked == "14") {
                document.getElementById("12").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 11) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level11Moves + " moves";
                } else if (levelSelected === 12) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level12Moves + " moves";
                }
            }
        } else if (document.getElementById("13").innerHTML === "") {

            if (buttonClicked === "11" || buttonClicked == "14") {
                document.getElementById("13").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 11) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level11Moves + " moves";
                } else if (levelSelected === 12) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level12Moves + " moves";
                }
            }
        } else if (document.getElementById("14").innerHTML === "") {
            if (buttonClicked === "12" || buttonClicked == "13") {
                document.getElementById("14").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 11) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level11Moves + " moves";
                } else if (levelSelected === 12) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level12Moves + " moves";
                }
            }
        } else {
            console.log("No button was clicked");
        }
        if (document.getElementById("11").innerHTML === "1" && document.getElementById("12").innerHTML === "2" && document.getElementById("13").innerHTML === "3") {
            if (levelSelected === 11) {
                if (level11Moves === 0) {
                    level11Moves = movesNew;
                    h3.innerHTML = movesNew + " moves <br> Best: " + level11Moves + " moves";
                } else if (movesNew < level11Moves) {
                    level11Moves = movesNew;
                    h3.innerHTML = movesNew + " moves <br> Best: " + level11Moves + " moves";
                } else {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level11Moves + " moves";
                }
                document.getElementById("level11").style.backgroundColor = "#00FF00";
            } else if (levelSelected === 12) {
                if (level12Moves === 0) {
                    level12Moves = movesNew;
                    h3.innerHTML = movesNew + " moves <br> Best: " + level12Moves + " moves";
                } else if (movesNew < level12Moves) {
                    level12Moves = movesNew;
                    h3.innerHTML = movesNew + " moves <br> Best: " + level12Moves + " moves";
                } else {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level12Moves + " moves";
                }
                document.getElementById("level12").style.backgroundColor = "#00FF00";
            }
        }
    }

});