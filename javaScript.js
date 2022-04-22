/*
Create a size x size grid for the page.
Takes only a size of 1-100. Returns true/false.
*/
function gridGen(size) {
    let grid = document.querySelector(".grid");

    if(gridInCheck) {
        for(let a = 1; a <= size; a++) {
            let gridRow = document.createElement('div');
            gridRow.classList.add("row" + a);
    
            for( let b = 1; b <= size; b++) {
                let gridCell = document.createElement('div');
                gridCell.classList.add("cell" + b);

                /* Target Each individual cell for color change */
                gridCell.addEventListener('mouseover', () => {
                    cellChangeColor(gridCell);
                });

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
Change the color of the cell in their respective row.
By default, it will change from white to black.
*/
function cellChangeColor(gridCell) {
    gridCell.style.background = 'black';
}


/*
Verify that the users grid input is a valid size.
E.G. between 1-100. Returns true/false.
*/
function gridInCheck(size = 16) {
    const GRID_MAX = 100, GRID_MIN = 1;

    if (size <= GRID_MAX && size >= GRID_MIN) {
        return true;
    }
    else
        return false;
}

gridGen(16);


const btnInfo = document.querySelector("#info");

btnInfo.addEventListener('click', () => {
    const msgInfo = 
    `
    This is a \"Etch-A-Sketch\" pseudo clone!\n          
    Simply mouse overthe grid to change it from white to black.\n
    Clicking \"Erase\" Will wipe the entire grid.\n
    Clicking \"New Grid\" will allow you to make a new\n
    grid from size 1-100.\n\n
    Have fun!`;

    alert(msgInfo);
});

