//variables

let gridSize = document.getElementById('changeAmountSquare').value;
let colorValue = document.getElementById('color-square').value

const gridContainer = document.getElementById('container-drawn-zone');
const rangeSizeContainer = document.getElementById('changeAmountSquare')
const titleGridContainer = document.getElementById('tamañoCuadricula')
const colorContainer = document.getElementById('color-square')
//events
crearZonaDeDibujo(gridSize)

rangeSizeContainer.addEventListener('change', (e) => {
    gridSize = e.target.value
    crearZonaDeDibujo(e.target.value)
})
colorContainer.addEventListener('change', (e) => {
    colorValue = e.target.value
})
//llamadofunciones 




//functiones
function crearZonaDeDibujo(gridSize) {
    gridContainer.innerHTML = ''

    // Crear los elementos de la cuadrícula
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mousedown', dibujarColor)
        gridItem.addEventListener('mouseover', dibujarColor)

        gridContainer.appendChild(gridItem);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;


    titleGridContainer.innerHTML = `${gridSize} X ${gridSize}`

}

function dibujarColor(e) {
    e.target.style.backgroundColor = colorValue
}

function resetearCuadricula() {
    crearZonaDeDibujo(gridSize)
}