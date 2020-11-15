var levelTable = document.getElementById("levelTable");
var row, cell, button, h3;
var buttonID;
var buttonClicked;
var levelSelected;
var movesNew = 0;

function buildTable(rows, columns) {
    if (rows === 2) {
        buttonID = 11;
    } else if (rows === 3) {
        buttonID = 21;
    }
    for (r = 0; r < rows; r++) {
        row = document.createElement("tr");
        row.setAttribute("height", "150px");
        for (c = 0; c < columns; c++) {
            cell = document.createElement("td");
            cell.setAttribute("width", "150px");
            button = document.createElement("button");
            button.setAttribute("id", buttonID);
            button.setAttribute("class", "gridButton");
            button.setAttribute("onclick", "button" + buttonID + "()");
            buttonID++;
            cell.appendChild(button);
            row.appendChild(cell);

        }
        levelTable.appendChild(row);
    }
    row = document.createElement("tr");
    row.setAttribute("height", "50px");
    cell = document.createElement("td");
    cell.setAttribute("colspan", columns);
    h3 = document.createElement("h3");
    h3.innerHTML = movesNew + " moves <br> Best: # moves";
    cell.appendChild(h3);
    row.appendChild(cell);
    levelTable.appendChild(row);
}