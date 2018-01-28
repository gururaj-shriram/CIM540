var canvasX = 400;
var canvasY = 400;

var rocketBodyX = 200;
var rocketBodyY = 325;
var windowX = rocketBodyX;

var stars = {};
var numStars = 50;

function setup() {
  createCanvas(canvasX, canvasY);
  background('black');
  createStars();
}
function draw() {
  // Reset background
  background('black');

  // Stars
  populateStars();

  // Reset strokes
  stroke('black');
  strokeWeight(1);
  fill('white');

  // Set up changed y variables
  var windowY = rocketBodyY - 25;
  var finTopY = rocketBodyY + 15;
  var finBottomY = rocketBodyY + 40;

  // Reset sketch if the space ship has exceeded bounds
  if (rocketBodyY <= -125) {
    rocketBodyY = 450;
    createStars();
  }

  // Ship Body
  ellipse(rocketBodyX, rocketBodyY, 40, 125);

  // Window
  fill('#7EC0EE')
  ellipse(windowX, windowY, 20, 20)

  // Fins
  fill('red');
  triangle(rocketBodyX - 18, finTopY, rocketBodyX - 12, finBottomY, rocketBodyX - 40, finBottomY + 5);
  triangle(rocketBodyX + 18, finTopY, rocketBodyX + 12, finBottomY, rocketBodyX + 40, finBottomY + 5);

  // Fire
  fill('#E25822');
  arc(rocketBodyX, rocketBodyY + 50, 25, 30, 0, PI);

  // Move everything up
  rocketBodyY -= 3;
}

function createStars() {
  var i;

  stars = {};

  for (i = 0; i < numStars; i++) {
    var x = Math.floor(Math.random() * canvasX);
    var y = Math.floor(Math.random() * canvasY);
    stars[x] = y;
  }
}

function populateStars() {
  stroke('white');
  strokeWeight(3);

  // Iterate through dictionary and create the points
  Object.keys(stars).forEach(function(key) {
    point(key, stars[key]);
  });
}
