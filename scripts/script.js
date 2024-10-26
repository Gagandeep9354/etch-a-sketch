const containerClass = document.getElementsByClassName("container")[0];
const resetButton = document.getElementById("reset");
const resizeButton = document.getElementById("resize");
const grids = document.getElementsByClassName('grids');
var gridSize = 16;
var currentOpacity = 0;

createGrid(gridSize);
resizeButton.addEventListener('click', () => {
    gridSize = prompt("Enter grid Size(Please Enter values between 1 and 100): ");
    currentOpacity = 0.1;
    createGrid(gridSize);
})

resetButton.addEventListener('click', () => {
    currentOpacity = 0.1;
    createGrid(gridSize);
})



function createGrid(gridSize) {
    containerClass.innerHTML = ' ';
    if (gridSize < 1) {
        gridSize = 1;
    } else if (gridSize > 100) {
        gridSize = 100;
    }
    let totalGrids = gridSize * gridSize;
    for (let i = 0; i < totalGrids; i++) {
        const newGrid = document.createElement("div");
        newGrid.classList.add('grids');
        newGrid.style.width = `${100/gridSize}%`;
        containerClass.appendChild(newGrid);
        
    }
    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mouseover', () => {
            grids[i].style.backgroundColor = randomRgbColor();
            if (currentOpacity < 1){
                currentOpacity += 0.01;
            }
            grids[i].style.opacity  = currentOpacity;
    });
    }
}

function randomRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}