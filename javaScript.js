/*
Change the color of the cell in their respective row.
By default, it will change from white to black.
*/
function cellChangeColor() {
    this.style.background = 'black';
}

/*
Set each cell to white, "erasing" all cells.
*/
function eraseCells() {
    const cells = document.querySelectorAll('[class*="cell"]');
    
    cells.forEach((cell) => {
        cell.style.background = 'white';
    })
}

/*
Display how to 'play' Etch-A-Sketch.
*/
function gameInfo() {
    const msgInfo = 
        `
        This is a \"Etch-A-Sketch\" pseudo clone!\n
        Simply mouse overthe grid to change it from white to black.\n
        Clicking \"Erase\" Will wipe the entire grid.\n
        Clicking \"New Grid\" will allow you to make a new
        grid from size 1-100.\n\n
        Have fun!`;

    alert(msgInfo);
}

/*
Create a size x size grid for the page with
rows and cells for each row.
Utilizes gridInCheck() to be sure the size is
a valid type/forat/range of 1-100.
Returns true/false.
*/
function gridGen(size) {
    let grid = document.querySelector(".grid");

    if(gridInCheck(size)) {
        for(let a = 1; a <= size; a++) {
            let gridRow = document.createElement('div');
            gridRow.classList.add("row" + a);
    
            for( let b = 1; b <= size; b++) {
                let gridCell = document.createElement('div');
                gridCell.classList.add("cell" + b);         
                gridCell.addEventListener('mouseover', cellChangeColor);
                gridRow.appendChild(gridCell);
            }
            grid.appendChild(gridRow);
        }
        return true;
        
    } else {
        return false;
    }
}

/*
Verify that the users grid input is a valid size and data type.
E.G. between 1-100. Returns true/false.
*/
function gridInCheck(size = 16) {
    const GRID_MAX = 100, GRID_MIN = 1;

    if (typeof size === 'number') {
        if (size <= GRID_MAX && size >= GRID_MIN) {
            return true;
        }
    }
    return false;
}

/*
Take in a user input and try to convert it to a number.
Upon a valid input, which is a number, erase the grid
and create a new one.
*/
function newGrid() {
    let newGridSize, 
        msgPrompt = "What Grid Size Would You Like?\n" +
                    "Enter a number from 1-100.",
        msgError = "You did not input a valid prompt!\n" +
                    "Please enter a number from 1-100!";

    do {
        newGridSize = Number(prompt(msgPrompt));

        if(!gridInCheck(newGridSize)) 
            alert(msgError);
        else
            break;

    } while (typeof newGridSize != NaN);

    removeGrid();
    gridGen(newGridSize);
}

/*
Delete all currently generated rows and thus the entire grid.
*/
function removeGrid() {
    const oldRow = document.querySelectorAll('[class*="row"]'); 
   
    oldRow.forEach((row) => {
        row.remove();
    });
    
}



gridGen(16);

const btnInfo = document.querySelector("#info");
const btnErase = document.querySelector('#erase');
const btnNewGrid = document.querySelector('#newGrid');

btnInfo.addEventListener('click', gameInfo);
btnErase.addEventListener('click', eraseCells);
btnNewGrid.addEventListener('click', newGrid);