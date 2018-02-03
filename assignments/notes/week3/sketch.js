// variable examples
var number = 1;
var letter = 'a';
var string = "string";
var bool = true;
var backgroundColor = "white";
var noseColor = "black"

var button;
var button2;

var sel;
var eyeColor = "white";
var eyeColorList = ["blue", "green", "brown"];

var centerX = 200;
var centerY = 200;

function mousePressed() {
  backgroundColor = "blue";
}

function mouseReleased() {
  backgroundColor = "red";
}

function setup() {
  console.log("Debug message");
  createCanvas(400, 400);
  button = createButton("Click Me");
  button.mousePressed(() => {
    noseColor = "green";
  });

  button2 = createButton("No Click Me").mousePressed(() => {
    noseColor = "black";
  });

  sel = createSelect();

  for (var color of eyeColorList) {
    sel.option(color);
  }

  sel.changed(() => {
    eyeColor = sel.value();
  });

  // background(255);
}

function draw() {
  // reset background every frame
  background(backgroundColor);
  centerX = mouseX;
  centerY = mouseY;

  // draw eyes and glasses (rectangles and circles)
  stroke(0);
  strokeWeight(1);
  fill("white");
  rect(centerX + 25, centerY - 100, 100, 100);
  rect(centerX - 150, centerY - 100, 100, 100);

  // Eye 1
  fill(eyeColor);
  var xOffset = map(mouseX, 0, width, -20, 20);
  var yOffset = map(mouseY, 0, width, -20, 20);

  // console.log("xOffset: " + xOffset);
  ellipse(centerX - 100 + xOffset, centerY - 50 + yOffset, 50, 50);

  // Eye 2
  ellipse(centerX + 75 + xOffset, centerY - 50 + yOffset, 50, 50);

  fill("white");
  // mole
  strokeWeight(5);
  point(centerX, centerY);

  // mouth
  arc(centerX - 10, centerY + 50, 80, 80, 0, PI);

  // nose
  noStroke();
  fill(noseColor);
  triangle(centerX - 10, centerY, centerX + 15, centerY + 25, centerX - 35, centerY + 25);
}
