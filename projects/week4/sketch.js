let patternVal = 'twill';

let pHeight = 22;
let pWidth = 48;

let currentColor=0;
let fillColors = ["#66204B", "#B04C4C", "#DF3641", "#FBABAB", "#F95D24", "#E5A3CD", "#CC4792", "#F2EDA5", "#ffffaa","#FDDD28", "#9BAB33", "#6B826C", "#0b6000", "#ACC6A1", "#9FBCD6", "#79B5CD", "#3176AB", "#063892", "#142260", "#80938F", "#15656C", "#9BCAD9", "#81AFDC", "#176BA0", "#6D337F", "#CECDEC", "#30124E", "#333F4D", "#0D0F12", "#546072", "#546072", "#525F6A", "#E5E5D9", "#ffffea","#C5A074"]
let warpColor = [];
let weftColor= [];

function setup() {
  pixelDensity(1);
  createCanvas(900, 800);
  noLoop();
  
  stroke("#C5C2C7");
  strokeWeight(1);
  
  textAlign(CENTER);
  patternSelect = createSelect();
  patternSelect.position(520, 10);
  for(let i = 0; i< names.length; i++){
    patternSelect.option(names[i]);
  }
  patternSelect.selected('twill');
  patternSelect.changed(patternSelected);
  
  for(let i=0; i<48; i++){
    warpColor.push(dark)
  }
  for(let i=0; i<22; i++){
    weftColor.push(light)
  }
}

function draw() {
  background("#D8DEDF");
  fill("#34344A")
 
  //Patern UI
  patternSelected();
  
  //Color UI
  colorWarp();
  colorWeft();
  palette();
}

function patternSelected() {
  patternVal = patternSelect.value();
  
  threadingUI();
  treddlingUI();
  tieUpUI();
  pattern();
}

function colorWarp(){
  for(let i=0; i<pWidth; i++){
    fill(warpColor[i]);
    rect(15+(i*8), 60, 8, 30)
  }
}

function colorWeft(){
  for(let i=0; i<pHeight; i++){
    fill(weftColor[i])
    rect(410, 100+(i*8), 30, 8)
  }
}

function palette(){
  for(let i=0; i<fillColors.length; i++){
    fill(fillColors[i]);
    rect(520 +(int(i/7)*33), 50+((i%7)*33), 30, 30)
  }
}

function mouseClicked() {
  //color palette
  if((mouseX>520&&mouseX<520+7*33)&&(mouseY>50&&mouseY<281)){
currentColor = fillColors[int((mouseY-50)/33)+int((mouseX-520)/33)*7]
      // (int((mouseY-50)/33)+(int((mouseX-520)/33) ))];
  }
  else
    //warp
    if((mouseX>15&&mouseX<399)&&(mouseY>60&&mouseY<90)){
    warpColor[int((mouseX-15)/8)] = currentColor;
    colorWarp();
    pattern();
  }
  else 
    
 //weft   
    if((mouseX>410&&mouseX<440)&&(mouseY>50&&mouseY<281)){
    weftColor[int((mouseY-100)/8)] = currentColor;
    colorWeft();
    pattern();
  }
}

function mouseDragged(){
  if((mouseX>15&&mouseX<399)&&(mouseY>60&&mouseY<90)){
    warpColor[int((mouseX-15)/8)] = currentColor;
    colorWarp();
    pattern();
  }
  else if((mouseX>410&&mouseX<440)&&(mouseY>50&&mouseY<281)){
    weftColor[int((mouseY-100)/8)] = currentColor;
    colorWeft();
    pattern();
  }
}

function colorPattern(tieUpVals,x, y){
  let len = patterns[patternVal].threadingPattern[0].length;

  for(let i=0; i<tieUpVals.length; i++){
    let val = tieUpVals[i];
    if(patterns[patternVal].threadingPattern[val][x%len]==1){
      fill(warpColor[x]);
      break;
    } else {fill(weftColor[y])}
  }
}




