const GRID_MAX = 100, 
        GRID_MIN = 1;


/*
Generate 
*/
function gridGen(size) {
    let grid = document.querySelector(".grid");

    for(let a = 1; a <= size; a++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add("row" + a);
        gridRow.style.display = "flex";

        for( let b = 1; b <= size; b++) {
            let gridCell = document.createElement('div');
            gridCell.classList.add("cell" + b);
            gridCell.setAttribute('style', "background-color: blue; width: 25px; height: 25px");
            gridRow.appendChild(gridCell);
        }
        
        grid.appendChild(gridRow);
        
    }
}

/*
Verify that the users grid input is a valid size.
E.G. between 1-100. If valid, generate the grid.
*/
function gridInCheck(size = 16) {
    if (size <= GRID_MAX && size >= GRID_MIN) {
        gridGen(size);
        return true;
    }
    else
        return false;
}

gridGen(4);