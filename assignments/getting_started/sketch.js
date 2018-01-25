var centerX = 200;
var centerY = 200;

function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(255);
}

function draw() {
  // put drawing code here

  // reset background every frame
  background(255);
  centerX = mouseX;
  centerY = mouseY;

  // draw eyes and glasses (rectangles and circles)
  stroke(0);
  strokeWeight(1);
  noFill();
  rect(centerX - 150, centerY - 100, 100, 100);
  ellipse(centerX - 100, centerY - 50, 50, 50);
  rect(centerX + 25, centerY - 100, 100, 100);
  ellipse(centerX + 75, centerY - 50, 50, 50);

  // mole
  strokeWeight(5);
  point(centerX, centerY);

  // mouth
  arc(centerX - 10, centerY + 50, 80, 80, 0, PI);

  // nose
  noStroke();
  fill('blue');
  triangle(centerX, centerY, centerX + 25, centerY + 25, centerX - 25, centerY + 25);
}
