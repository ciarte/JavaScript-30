const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.height = "600";
canvas.width = "800";
ctx.strokeStyle = "#f94144";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0; //rainbow line
let direcction = true;

function draw(e) {
  if (!isDrawing) return;
  // console.log(e);
  // console.log([1].offsetHeigth);
  ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direcction = !direcction;
  }
  if (direcction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", (e) => {
  isDrawing = false;
});
