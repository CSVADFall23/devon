var line;

// amplitude
var a1;
var a2;
var a3;
var a4;

// frequency
var f1;
var f2;
var f3;
var f4;

// phase
var p1;
var p2;
var p3;
var p4;

// damping
var d1;
var d2;
var d3;
var d4;

var timeStamp=0;
var diff=0;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  stroke("#fff");
  noFill();
  strokeWeight(1);
  textSize(14);
  line = [];
  
  uiSetUp();
  
  a1 = 100;
  a2 = 100;
  a3 = 100;
  a4 = 100;
  
  f1 = 2;
  f2 = 6;
  f3 = 1.01;
  f4 = 3;
  
  p1 = PI / 16;
  p2 = 3 * PI / 6;
  p3 = 13 * PI / 16;
  p4 = PI;
  
  d1 = 0;
  d2 = 0;
  d3 = 0;
  d4 = 0;
} 

function draw() { 
  background("#332B2B"); 
  textVis();
  var t = ((millis()-diff) / 2000);
  a1 = sA1.value();
  a2 = sA2.value();
  a3 = sA3.value();
  a4 = sA4.value();
  
  translate(width/2, height/2);
    
  line.push({
    x: (a1*sin(t*f1+p1)*exp(-d1*t))+(a2*sin(t*f2+p2)*exp(-d2*t)),
    y: (a3*sin(t*f3+p3)*exp(-d3*t))+(a4*sin(t*f4+p4)*exp(-d4*t)),
  })
  
  drawVertices(line);
}

function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
   	vertex(vertices[i].x, vertices[i].y); 
  }
  endShape();
}

function uiSetUp(){
  textVis();
  sliderX = 45;
  sliderY = 40;
  space = 30;
    
  sA1 = createSlider(-200, 200, 80, 5) //0.8, 10, 6, 0.2);
  sA1.position(sliderX, sliderY);
  sA1.style('width', '100px');  
  sA2 = createSlider(-200, 200, 80, 5) //0.8, 10, 6, 0.2);
  sA2.position(sliderX, sliderY +space);
  sA2.style('width', '100px');  
  sA3 = createSlider(-200, 200, 80, 5) //0.8, 10, 6, 0.2);
  sA3.position(sliderX, sliderY +space*2);
  sA3.style('width', '100px');  
  sA4 = createSlider(-200, 200, 80, 5) //0.8, 10, 6, 0.2);
  sA4.position(sliderX, sliderY+space*3);
  sA4.style('width', '100px'); 
  
  
  // startButton = createButton('start');
  // startButton.position(110, sliderY+space*4);
  // startButton.mousePressed(start);
  stopButton = createButton('stop');
  stopButton.position(20, sliderY+space*4);
  stopButton.mousePressed(stop);
  resetButton = createButton('reset/start');
  resetButton.position(65, sliderY+space*4);
  resetButton.mousePressed(reset);
  
}

function reset(){
  background("#332B2B"); 
  line=[];
  loop();
}

function stop(){
  noLoop()
  timestamp = millis();
}

function start(){
  loop()
  diff = millis()-timeStamp;
}

function textVis(){
  fill("#fff")
  noStroke();
  textX = 20; 
  textY = 53;
  space =30;
  
  text('Amplitudes', textX, 30);
  text('1', textX, textY);
  text('2', textX, textY+space);
  text('3', textX, textY+space*2);
  text('4', textX, textY+space*3);

  stroke("#fff");
  noFill();
}