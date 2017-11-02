
function setup() {

  createCanvas(1000, 500);

  background(188, 188, 188);

}

function draw() {

  if (mouseIsPressed) {

    fill(random(0,255),random(0,255),random(0,255));

    stroke(random(0,255),random(0,255));

    ellipse(mouseX, mouseY, 10, 10);
     } 
  
  if (keyIsDown(69)) { // e for red

    fill(255,0,0);

    stroke(255,0,0);

    ellipse(mouseX, mouseY, 10, 10);
  }

  if (keyIsDown(85)) { // u for blue
    
        fill(0,0,255);
    
        stroke(0,0,255);
    
        ellipse(mouseX, mouseY, 10, 10);
      }

  if (keyIsDown(89)) { // y for green
    
        fill(0,255,0);
    
        stroke(0,255,0);
    
        ellipse(mouseX, mouseY, 10, 10);
      }
  
  if (keyIsDown(87)) { // w for white

    fill(255,255,255);

    stroke(255,255,255);

    ellipse(mouseX, mouseY, 10, 10);
  }

  if (keyIsDown(81)) { // q for black
    
        fill(0,0,0);
    
        stroke(0,0,0);
    
        ellipse(mouseX, mouseY, 10, 10);
      }

  if (keyIsDown(73)) { // i for purple
    
        fill(179, 102, 255);
    
        stroke(179, 102, 255);
    
        ellipse(mouseX, mouseY, 10, 10);
      }

  if (keyIsDown(82)) { // r for orange
    
        fill(255, 153, 51);
    
        stroke(255, 153, 51);
    
        ellipse(mouseX, mouseY, 10, 10);
      }

  if (keyIsDown(84)) { // t for yellow
    
        fill(255, 255, 0);
    
        stroke(255, 255, 0);
    
        ellipse(mouseX, mouseY, 10, 10);
      }

  if (keyIsDown(65)) { // a for erase
    
        fill(188, 188, 188);
    
        stroke(188, 188, 188);
    
        ellipse(mouseX, mouseY, 10, 10);
      }

  if (keyIsDown(32)) {
    clear();
    setup();
   }
}
