var centerX = 250;
var centerY = 250;

var carnival;
var party;
var bgImage;

var carnivalButton;
var partyButton;
var showHide;
var hiding = false;

function preload() {
  carnival = loadImage("assets/carnival.jpg");
  party = loadImage("assets/party.jpg");
}

function setup() {
  createCanvas(500, 500);
  bgImage = carnival;

  carnivalButton = createButton("Going to Carnival");
  carnivalButton.position(10, 10);
  carnivalButton.mousePressed(() => {
    bgImage = carnival;
  });

  partyButton = createButton("Going to a Party");
  partyButton.position(130, 10);
  partyButton.mousePressed(() => {
    bgImage = party;
  });

  showHide = createButton("Show/Hide Clown");
  showHide.position(250, 10);
  showHide.mousePressed(() => {
    hiding = !hiding;
  });

}

function draw() {

  background(255);
  image(bgImage, 0, 0);

  if (!hiding) {

    fill(255, 255, 255);

    strokeWeight(1);
    //face
    ellipse(centerX, centerY, 100, 100);
    //nose
    ellipse(centerX, centerY + 10, 20, 20);
    //eyes
    ellipse(centerX - 10, centerY - 10, 10, 20);
    ellipse(centerX + 10, centerY - 10, 10, 20);

    // Mouth
    rectMode(CENTER);
    rect(centerX, centerY + 30, 50, 15, 5);
    rect(centerX, centerY + 30, 50, 1, 1);

    noFill();
    // Beard
    strokeWeight(4);
    arc(centerX, centerY, 100, 100, 0, PI);

    if (mouseX < width / 2) {
      stroke("green");
    } else {
      stroke("blue")
    }

    // Hair
    strokeWeight(30);
    arc(centerX, centerY, 100, 100, PI, TWO_PI);

    noFill();
  }
}
