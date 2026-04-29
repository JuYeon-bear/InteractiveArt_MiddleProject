let px, py;
let pd = 10;

function preload(){
  map = loadImage('Map.png');
}

function setup() {
  //크기가 커서 줄임
  createCanvas(1408, 768);
  image(map, 0, 0, 1408, 768);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) px -= 3;
  if (keyIsDown(RIGHT_ARROW)) px += 3;
  if (keyIsDown(UP_ARROW)) py -= 3;
  if (keyIsDown(DOWN_ARROW)) py += 3;

  fill(255, 255, 0);
  ellipse(px, py, pd);

}

function mousePressed(){
  let c = get(mouseX, mouseY);

  let r = red(c);
  let g = green(c);
  let b = blue(c);

  console.log("("+mouseX+", "+mouseY+"), ("+r+", "+g+", "+b+")");
}
