let plot = new PlotManager();
let canvas;

function setup() {
  canvas = createCanvas(100, 100);
  noFill();
  noLoop();
  // pixelDensity(3);
  // strokeWeight(4);
  plotSetUp();
}

function draw() {  
  background(255, 255, 255)
  stroke(0, 0, 0)
  // filter(THRESHOLD, 0.5)
  ellipse(width/2, height/2, 80)
}

// function canvasToImg(){
//   // let canvas = document.getElementById('defaultCanvas0');
//   var image = new Image();
//   image.id = "pic";
//   image.src = canvas.toDataURL();
//   document.getElementById('saved_images').appendChild(image);
// }

function plotSetUp(){
  //draw a 2 unit line in the positive X for each point
  plot.setUnits(2);
  plot.addAbsoluteGoTo();
  plot.addPenDown();
  plot.addRelativeGoTo(2, 0);
  plot.addPenUp();
}

