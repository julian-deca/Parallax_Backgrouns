const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CAVVAS_WIDTH = (canvas.width = 800);
const CAVVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.scr = "backgroundLayers/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer1.scr = "backgroundLayers/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer1.scr = "/bacgroundLayers/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer1.scr = "/bacgroundLayers/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer1.scr = "/bacgroundLayers/layer-5.png";

function animate() {
  ctx.drawImage(backgroundLayer2, 0, 0);
  requestAnimationFrame(animate);
}
animate();
