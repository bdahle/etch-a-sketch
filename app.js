const container = document.getElementById("container");

const gridDimensions = 600;
let gridSize = 16;
let tileSize = gridDimensions / gridSize;
container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;

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
