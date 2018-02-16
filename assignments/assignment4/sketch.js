var pics = [];

var targetPosX = [100, 300, 500];
var targetPosY = [100, 300];

var outputText = "Where's the Python?";
var winText = "You win! You're a wizard!";
var loseText = "You lose :(";

var correctPicNum;

function preload() {
  pics.push(loadImage("assets/c++.png"),
  loadImage("assets/java.jpg"),
  loadImage("assets/javascript.png"),
  loadImage("assets/p5js.png"),
  loadImage("assets/python.png"),
  loadImage("assets/sql.png"));

  correctPicNum = 4;
}

function setup() {
  createCanvas(601, 600);
}

function draw() {

  background(255);
  rectMode(CENTER);
  imageMode(CENTER);

  textSize(32);
  text(outputText, 50, 450);

  for (var row = 0; row < targetPosY.length; row++) {
    for (var col = 0; col < targetPosX.length; col++) {
      var picNum = col + row * targetPosX.length;

      if (mouseX > targetPosX[col] - 100 &&
        mouseX < targetPosX[col] + 100 &&
        mouseY > targetPosY[row] - 100 &&
        mouseY < targetPosY[row] + 100) {

          image(pics[picNum], targetPosX[col], targetPosY[row]);

          if (picNum == correctPicNum) {
            textSize(24);
            text(winText, 50, 505);
          } else {
            textSize(24);
            text(loseText, 50, 505);
          }
        } else {
          rect(targetPosX[col], targetPosY[row], 200, 200);
        }
      }
    }
  }
