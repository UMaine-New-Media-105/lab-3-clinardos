/// Linardos, Cairlin Lab 3 -- exercise 1
// Smiley face

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  
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
