// https://youtu.be/dGCoo9DS864

// obra de MARIO BALLOCCO   


let img;
let diameter = 70;
let colorEllip1;
let colorEllip2;
let resetButton;

function preload() {
  img = loadImage("data/art.jpg");
}

function setup() {
  createCanvas(800, 400);
  colorEllip1 = color('#EDE3F5');
  colorEllip2 = color('#F5E3E4');
  noStroke();
  
}

function draw() {
  background('#E3E8E3');
   
  // Dibuja la imagen a la izquierda
  image(img, 0, 0, 400, 400);
  
  // Rectángulos 1 
  fill(159, 184, 234);
  drawRectangles(1);

  // Rectángulos 2
  fill(214, 147, 147); 
  drawRectangles(2);
  
  // Dibujar elipses utilizando ciclos FOR anidados
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let x = 460 + i * 95;
      let y = 55 + j * 100;
      let distance = dist(mouseX, mouseY, x, y);
      let size = map(distance, 0, 200, diameter * 1.5, diameter * 0.5);
      
      if (distance < 100) {
        fill(colorEllip1);
      } else {
        fill(colorEllip2);
      }
      
      drawEllipse(x, y, size);
    }
  }
  
  // Usar la función que retorna un valor
  let avgColor = getAverageColor(colorEllip1, colorEllip2);
  fill(avgColor);
  rect(400, 0, 400, 20);
}

// Función que NO retorna un valor
function drawEllipse(x, y, size) {
  ellipse(x, y, size);
}

// Función que RETORNA un valor
function getAverageColor(color1, color2) {
  let r = (red(color1) + red(color2)) / 2;
  let g = (green(color1) + green(color2)) / 2;
  let b = (blue(color1) + blue(color2)) / 2;
  return color(r, g, b);
}

// Función para dibujar rectángulos
function drawRectangles(set) {
  if (set === 1) {
    rect(750, 35, width+40, 40);
    rect(630, 135, width+135, 40);
    rect(535, 235, width+235, 40);
    rect(440, 330, width+330, 40);
    rect(440, height - 40, 40, 40);
    rect(535, height - 135, 40, 135);
    rect(630, height - 235, 40, 235);
    rect(725, height - 330, 40, 330);
  } else {
    rect(400, 35, 330, 40);
    rect(400, 135, 235, 40);
    rect(400, 235, 135, 40);
    rect(400, 330, 40, 40);
    rect(440, 0, 40, 330);
    rect(535, 0, 40, 235);
    rect(630, 0, 40, 135);
    rect(725, 0, 40, 40);
  }
}

function mouseMoved() {
  colorEllip1 = color(255 * (1 - mouseX / width), random(255), random(255));
  colorEllip2 = color(255 * (mouseX / width), random(255), random(255));
}

function keyPressed() {
  if (key === ' ') {
    diameter = random(80, 150);
  }
}

function resetSketch() {
  diameter = 70;
  colorEllip1 = color('#EDE3F5');
  colorEllip2 = color('#F5E3E4');
}
