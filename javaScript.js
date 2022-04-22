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

                /* Target Each individual row/cell for color change */
                gridCell.addEventListener('mouseover', () => {
                    console.log(
                        gridCell.parentElement.className +
                        " " + 
                        gridCell.className);
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
