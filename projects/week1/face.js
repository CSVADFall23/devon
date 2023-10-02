// this is a p5.js sketch see here: https://editor.p5js.org/de-vo13/full/SgjUZ-YtW

function setup() {
    createCanvas(550, 500);
    ellipseMode(CENTER);
    angleMode(DEGREES);
    noFill();
  }
  
  function draw() {
    background(213, 216, 135);
    
    //Left
    var lEyeX= 200;
    arc(lEyeX, lEyeX, 100, 40, 15, 165); //bottom lid
    arc(lEyeX, lEyeX-10, 100, 40, 190, 350); //top lid
    arc(lEyeX-10, lEyeX, 100, 40, 15, 165); //2nd bottom
    arc(lEyeX+5, lEyeX-20, 100, 40, 190, 350); //2nd top lid
    arc(lEyeX, lEyeX-5, 20, 50, 0, 360); //pupil
  
  
    
    //Right
    var rEyeX= 350;
    arc(rEyeX, lEyeX, 100, 40, 15, 165); //bottom lid
    arc(rEyeX, lEyeX-10, 100, 40, 190, 350); //top lid
    arc(rEyeX-10, lEyeX, 100, 40, 15, 165); //2nd bottom
    arc(rEyeX+5, lEyeX-20, 100, 40, 190, 350); //2nd top lid
    arc(rEyeX, lEyeX-5, 20, 50, 0, 360); //pupil
    
    //Nose
    arc(280, 260, 100, 30, 80, 270); //L
  
    //mouth
    arc(280, 300, 130, 40, 15, 165); //
    
    // arc(275, 350, 400, 600,180, 0);
  
  }