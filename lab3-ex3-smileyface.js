// Linardos, Caitlin Lab 3 Exercise 3
// Creepy Smiley face with multiple functions and modifided to accpet parameter 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  sizeChange(4);
  creepySmileyFace("rgb(250,250,4)");
}

function creepySmileyFace(color) {
  // These are the if-else statements responsible for the color changes
  if (mouseX < 50) {
    fill("#FF9800");
  } else if (mouseX >= 50 && mouseX < 150) {
    fill("#FF1100");
  } else if (mouseX >= 150 && mouseX < 300) {
    fill("#00FF0A");
  } else {
    fill(color);
  }

  // This is the code used to create the actual smiley face

  ellipse(55, 55, 100);

  fill("black");
  ellipse(70, 40, 13, 40);
  ellipse(40, 40, 13, 40);

  // push () pop() is used to allow only this section of code to have a strokeWeight of 5
  push();
  noFill();
  strokeWeight(5);
  arc(57, 57, 80, 80, 0, 16);
  pop();
}
// I added this function also which is a series of if-else statements that changes the size of the smiley face.
function sizeChange(size) {
  if (mouseX < 50) {
    scale(1);
  } else if (mouseX >= 50 && mouseX < 150) {
    scale(2);
  } else if (mouseX >= 150 && mouseX < 300) {
    scale(3);
  } else {
    scale(size);
