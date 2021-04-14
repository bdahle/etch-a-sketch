const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");
resetButton.onclick = resetGrid;
const gridDimensions = 600;

function removeTiles() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function addTiles(tileSize, gridSize) {
  for (i = 0; i < gridSize * gridSize; i++) {
    const tile = document.createElement("div");
    tile.style.backgroundColor = random_rgba();
    tile.style.width = `${tileSize}px`;
    tile.style.height = `${tileSize}px`;

    tile.addEventListener("mouseover", function (e) {
      this.style.backgroundColor = "red";
    });

    container.appendChild(tile);
  }
}

function makeGrid(gridSize = 16) {
  removeTiles();
  let tileSize = gridDimensions / gridSize;
  container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
  addTiles(tileSize, gridSize);
}

makeGrid();

function resetGrid() {
  let gridSize = parseInt(prompt("New grid size", 16));
  makeGrid(gridSize);
}

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}
