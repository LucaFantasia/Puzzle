var level21Moves = 0;
var level22Moves = 0;

function level21() {
    levelSelected = 21;
    levelTable.innerHTML = "";
    buildTable(3, 3);
    rows = 3;
    document.getElementById("21").innerHTML = "";
    document.getElementById("22").innerHTML = "1";
    document.getElementById("23").innerHTML = "3";
    document.getElementById("24").innerHTML = "4";
    document.getElementById("25").innerHTML = "2";
    document.getElementById("26").innerHTML = "6";
    document.getElementById("27").innerHTML = "7";
    document.getElementById("28").innerHTML = "5";
    document.getElementById("29").innerHTML = "8";
    movesNew = 0;
    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
}

function level22() {
    levelSelected = 22;
    levelTable.innerHTML = "";
    buildTable(3, 3);
    rows = 3;
    document.getElementById("21").innerHTML = "2";
    document.getElementById("22").innerHTML = "3";
    document.getElementById("23").innerHTML = "6";
    document.getElementById("24").innerHTML = "1";
    document.getElementById("25").innerHTML = "";
    document.getElementById("26").innerHTML = "5";
    document.getElementById("27").innerHTML = "4";
    document.getElementById("28").innerHTML = "7";
    document.getElementById("29").innerHTML = "8";
    movesNew = 0;
    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
}

function button21() {
    buttonClicked = "21";
}
function button22() {
    buttonClicked = "22";
}
function button23() {
    buttonClicked = "23";
}
function button24() {
    buttonClicked = "24";
}
function button25() {
    buttonClicked = "25";
}
function button26() {
    buttonClicked = "26";
}
function button27() {
    buttonClicked = "27";
}
function button28() {
    buttonClicked = "28";
}
function button29() {
    buttonClicked = "29";
}

levelTable.addEventListener("click", function () {
    if (rows === 3) {
        if (document.getElementById("21").innerHTML === "") {
            if (buttonClicked === "22" || buttonClicked === "24") {
                document.getElementById("21").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 21) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
                } else if (levelSelected === 22) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
                }
            }
        } else if (document.getElementById("22").innerHTML === "") {
            if (buttonClicked === "21" || buttonClicked === "23" || buttonClicked === "25") {
                document.getElementById("22").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 21) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
                } else if (levelSelected === 22) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
                }
            }
        } else if (document.getElementById("23").innerHTML === "") {
            if (buttonClicked === "22" || buttonClicked === "26") {
                document.getElementById("23").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 21) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
                } else if (levelSelected === 22) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
                }
            }
        } else if (document.getElementById("24").innerHTML === "") {
            if (buttonClicked === "21" || buttonClicked === "25" || buttonClicked === "27") {
                document.getElementById("24").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 21) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
                } else if (levelSelected === 22) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
                }
            }
        } else if (document.getElementById("25").innerHTML === "") {
            if (buttonClicked === "22" || buttonClicked === "24" || buttonClicked === "26" || buttonClicked === "28") {
                document.getElementById("25").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 21) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
                } else if (levelSelected === 22) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
                }
            }
        } else if (document.getElementById("26").innerHTML === "") {
            if (buttonClicked === "23" || buttonClicked === "25" || buttonClicked === "29") {
                document.getElementById("26").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 21) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
                } else if (levelSelected === 22) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
                }
            }
        } else if (document.getElementById("27").innerHTML === "") {
            if (buttonClicked === "24" || buttonClicked === "28") {
                document.getElementById("27").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 21) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
                } else if (levelSelected === 22) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
                }
            }
        } else if (document.getElementById("28").innerHTML === "") {
            if (buttonClicked === "25" || buttonClicked === "27" || buttonClicked === "29") {
                document.getElementById("28").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 21) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
                } else if (levelSelected === 22) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
                }
            }

        } else if (document.getElementById("29").innerHTML === "") {
            if (buttonClicked === "26" || buttonClicked === "28") {
                document.getElementById("29").innerHTML = document.getElementById(buttonClicked).innerHTML;
                document.getElementById(buttonClicked).innerHTML = "";
                movesNew++;
                if (levelSelected === 21) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
                } else if (levelSelected === 22) {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
                }
            }
        }
        if (document.getElementById("21").innerHTML === "1" && document.getElementById("22").innerHTML === "2" && document.getElementById("23").innerHTML === "3" && document.getElementById("24").innerHTML === "4" && document.getElementById("25").innerHTML === "5" && document.getElementById("26").innerHTML === "6" && document.getElementById("27").innerHTML === "7" && document.getElementById("28").innerHTML === "8") {
            if (levelSelected === 21) {
                if (level21Moves === 0) {
                    level21Moves = movesNew;
                    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
                } else if (movesNew < level21Moves) {
                    level21Moves = movesNew;
                    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
                } else {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level21Moves + " moves";
                }
                document.getElementById("level21").style.backgroundColor = "#00FF00";
            } else if (levelSelected === 22) {
                if (level22Moves === 0) {
                    level22Moves = movesNew;
                    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
                }
                else if (movesNew < level22Moves) {
                    level22Moves = movesNew;
                    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
                } else {
                    h3.innerHTML = movesNew + " moves <br> Best: " + level22Moves + " moves";
                }
                document.getElementById("level22").style.backgroundColor = "#00FF00";
            }
        }
    }
});

