var input;
var inputText = "";
var prevInput = "";

var submitButton;
var speaker;

var answer = "";
var answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not to tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

function getAnswer() {
  inputText = input.value();
  // If we have a new input
  if (inputText != "" && inputText != prevInput) {
    prevInput = inputText;
    answer = random(answers);
    speaker.speak(answer);
  } else {
    answer = "";
    speaker.speak("Enter a new question");
  }
}

function setup() {
  createCanvas(640, 500);
  speaker = new p5.Speech();
  speaker.speak("Welcome to the Magic 8 Ball. Enter a Yes or No question to foretell your future.")

  textAlign(CENTER, CENTER);

  input = createInput();
  input.position(width/3, 125);

  submitButton = createButton("Ask the Magic 8 Ball");
  submitButton.position(input.x + input.width + 5, 125);
  submitButton.mousePressed(getAnswer);
}

function draw() {

  var circleCenterX = width / 2;
  var circleCenterY = height / 2;
  var diameterInner = 325;

  background(255);
  fill(0);
  ellipse(circleCenterX, circleCenterY, 450, 450);
  stroke(255);
  strokeWeight(3);
  ellipse(circleCenterX, circleCenterY, diameterInner, diameterInner);
  strokeWeight(0);

  if (answer != "") {
    fill("blue");

    rect(
      (circleCenterX - diameterInner / 2 + circleCenterX) / 2 - 30,
      (circleCenterY - diameterInner / 2 + circleCenterY) / 2 - 30,
      2 * diameterInner / 3 + 5,
      2 * diameterInner / 3 + 5
    )

    fill(0);
    textSize(30);
    text(
      answer,
      (circleCenterX - diameterInner / 2 + circleCenterX) / 2 - 30,
      (circleCenterY - diameterInner / 2 + circleCenterY) / 2 - 30,
      2 * diameterInner / 3,
      2 * diameterInner / 3
    )
  } else {
    fill(255);
    textSize(300);
    text(
      "8",
      circleCenterX,
      circleCenterY
    )
  }
}
