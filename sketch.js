function preload(){
  map = loadImage('Map.png');
}

function setup() {
  createCanvas(2816, 1536);
  image(map, 0, 0);
}

function draw() {
  //중심점
  stroke(255, 0, 0);
  strokeWeight(1);
  //가로
  line(0,384, 2816,384);
  line(0,768, 2816,768);
  line(0,1152, 2816,1152);
  //세로
  line(704,0, 704,1536);
  line(1408,0, 1408,1536);
  line(2112,0, 2112,1536);

  //맵



}
