var body, table, row, cell, button, nums, numsDisplayed;
var randomNum, h2, empty, numDisplay;
var tempCount = 1;
var buttonID = 1;
var nums = [1,2,3,4,5,6,7,8];
var numsDisplayed = [false,false,false,false,false,false,false,false];

function createGrid() {
    body = document.getElementsByTagName("body")[0];
    table = document.createElement("table");

    for(r = 0; r < 3; r++) {
        row = document.createElement("tr");
        for(c = 0; c < 3; c++) {
            cell = document.createElement("td");
            button = document.createElement("button");
            button.setAttribute("id", buttonID);
            button.setAttribute("onclick", "buttonClick(" + buttonID + ")");
            button.setAttribute("class", "nums");
            buttonID++;
            cell.appendChild(button);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    row = document.createElement("tr");
    cell = document.createElement("td");
    cell.setAttribute("class","options");
    cell.setAttribute("colspan","3");
    button = document.createElement("button");
    button.setAttribute("class","reset");
    button.setAttribute("id", "reset");
    cell.appendChild(button);
    row.appendChild(cell);
    table.appendChild(row);
    body.appendChild(table);
}

function emptyCell() {
    empty = Math.floor(Math.random() * nums.length + 1);
    document.getElementById(empty).innerHTML = "";
}

function generateNums() {
    document.getElementById("reset").innerHTML = "Reset Puzzle";
    do{
        randomNum = Math.floor(Math.random() * nums.length);
    } while(numsDisplayed[randomNum] === true);

    numsDisplayed[randomNum] = true;
    if(tempCount === empty) {
        tempCount++;
    }
    numDisplay = randomNum + 1;
    document.getElementById(tempCount).innerHTML = numDisplay;
    tempCount++;
}

createGrid();
emptyCell();
for(i = 0; i < 8; i++) {
    generateNums();
}

document.getElementById("reset").addEventListener("click", function() {
    document.body.style.backgroundColor = "#FFFFFF";
    emptyCell();
    numsDisplayed = [false,false,false,false,false,false,false,false];
    tempCount = 1;
    for(i = 0; i < 8; i++) {
        generateNums();
    }
});

function buttonClick(num) {
    document.getElementById(empty).innerHTML = document.getElementById(num).innerHTML;
    empty = num;
    document.getElementById(empty).innerHTML = "";

    if(document.getElementById(1).innerHTML == 1 && document.getElementById(2).innerHTML == 2 && document.getElementById(3).innerHTML == 3 && document.getElementById(4).innerHTML == 4 && document.getElementById(5).innerHTML == 5 && document.getElementById(6).innerHTML == 6 && document.getElementById(7).innerHTML == 7 && document.getElementById(8).innerHTML == 8) {
        document.body.style.backgroundColor = "#00FF00";
    }

}