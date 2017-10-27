
function setup() {
  createCanvas(1000, 500);
  background(188, 188, 188);
  noCursor();
}

function draw() {
  if (mouseIsPressed) {
    fill(random(0,255),random(0,255),random(0,255),random(100,255));
    stroke(random(0,255),random(0,255),random(0,255));
    ellipse(mouseX, mouseY, 80, 80);
     } 

   else {
    fill(random(0,255),random(0,255),random(0,255),random(100,255));
    stroke(random(0,255),random(0,255),random(0,255));
    rect(mouseX, mouseY, 80, 80);
      }

  

}
