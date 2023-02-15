// Linardos, Caitlin Lab3 -- exercise 2
// smiley face with function and if-else

  function setup() {
    createCanvas(400, 400);
}

  function draw() {
    background(220);

// This is where I am calling the function to create the smiley face
  creepySmileyFace();
}

// This is the whole function for the Smiley face and the if-else statements that are responsible for the color change.

  function creepySmileyFace() {
  
// These are the if-else statements responsible for the color changes
  if (mouseX < 50) {
      fill("#DA00FF");} 
  else if (mouseX >= 50 && mouseX < 150) {
      fill("rgb(120,255,120)");}
  else if (mouseX >= 150 && mouseX < 300) {
      fill("rgb(88,192,255)"); } 
  else {
      fill("pink");  }

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
