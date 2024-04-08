const parents = document.getElementById("parent");
const change = document.getElementById("change");
const HEX = "ABCDEF012345678";

const generatedColor = document.getElementById("color-text");
function changeColor() {
  let color = "";
  for (let index = 0; index < 6; index++) {
    const randomness = Math.floor(Math.random() * HEX.length);
    color += HEX[randomness];
    parents.style.backgroundColor = `#${color}`;
  }
}
setInterval(() => {
  changeColor();
}, 2000);
