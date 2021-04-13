const container = document.getElementById("container");

for (i = 0; i < 16 * 16; i++) {
  const div = document.createElement("div");
  div.style.backgroundColor = random_rgba();
  div.style.width = "30px";
  div.style.height = "30px";

  container.appendChild(div);
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
