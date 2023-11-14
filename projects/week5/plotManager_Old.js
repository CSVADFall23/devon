class PlotManager{
  constructor(){
    this.img;
    this.settings ="";
    this.motionSequence="";
    this.density;
  } 
 
  //Motion Sequence Functions
  getMotionSequence(){
    return this.motionSequence;
  }

  clearMotionSquence(){
    this.motionSequence ="";
  }

  addPenPositionUp(){
    this.motionSequence += "ad.pendup()\n";
  }

  addPenPositionDown(){
    this.motionSequence += "ad.pendown()\n";
  }

  // encodes sequence: penUp(), moveTo(x, y)
  addAbsoluteMoveTo(x="pixelX", y="pixelY"){
    this.motionSequence += "ad.moveto(" +x + "," + y + ")\n";
  }

  // encodes sequence: penUp(), moveTo(pointX+x, pointY+y)
  addRelativeMoveTo(deltax, deltay){
    this.motionSequence += "ad.move(" + deltax +", " + deltay +")\n";
  }

  // encodes sequence: penDown(), lineTo(x, y)
  addAbsoluteLineTo(x="pixelX", y="pixelY"){
    this.motionSequence += "ad.lineto(" + x + "," + y + ")\n";
  }

   // encodes sequence: penDown(), lineTo(x, y)
   addRealtiveLineTo(deltax, deltay){
    this.motionSequence += "ad.line(" + deltax +", " + deltay +")\n";
   }

  // encodes sequence: 
  addAbsoluteGoTo(x="pixelX", y="pixelY"){
    this.motionSequence += "ad.goto(" +x + "," + y + ")\n";
  }

  // encodes sequence: 
  addRelativeGoTo(deltax, deltay){
    this.motionSequence += "ad.go("+ deltax +", " + deltay +")\n";
  }

  addPenUp(){
    this.motionSequence += "ad.penup() \n";
  }

  addPenDown(){
    this.motionSequence += "ad.pendown()\n";
  }
  //Setting functions
  
  // 0 = inch, 1 = cm, 2 = mm
  // each pixel processed as an independent command so 1 pixel = 1 unit step
  setUnits(valueIn){
    this.settings += "ad.options.units = " + valueIn +"\n";
  }

  //File generation functions
  //TODO add bounds checking?
  processImage(){
    loadPixels();
    let out ="";
    let d = pixelDensity()*pixelDensity();
    console.log(d)
    let pixMod= 4.0;
    console.log(pixels)

    //for every pixel in image traverse check if on or off 
    // console.log(height, width);
    for(let j=0; j<height*d; j++){
      for(let i=0; i<width*d; i++){
        // if(i==0){
        //   out+="ad.moveto("+i + "," + j +")\n";
        // }
        let index = 4*((j*(width*d))+(i))
        // console.log(index)
        // pixels[index] = 255;
        // pixels[index+1] = 0;
        // pixels[index+2] = 0;

        if((pixels[index] == 0 && pixels[index+1] ==0) && (pixels[index+2] ==0)){
          // console.log("black")
          let motion = this.motionSequence;
          motion = motion.replace(/pixelX/g, (i/d));
          motion = motion.replace(/pixelY/g, (j/d));          
          out += motion;
        } 
        // else {
        //   out += "ad.goto(" +i + "," + j+ ")\n";
        // }
      }
    }
    updatePixels();
    return out;
    //maybe check neighbors for pixels desnity?? 
  }
  

  generateCode(){
    let intro = "import sys\nfrom pyaxidraw import axidraw \nad = axidraw.AxiDraw()  # Initialize class\nad.interactive()\nconnected = ad.connect()    # Open serial port to AxiDraw\nif not connected: \n    sys.exit() # end script\n";
    let settings = this.settings + "ad.update() \n";
    let body = this.processImage();
    // console.log(body);
    let outro = "ad.goto(0, 0) # Return home \nad.disconnect() # Close serial port to AxiDraw"

    let out = intro + settings + body + outro;
    return out;
  }

//   function generateCode(layers){
//     // let gcFile = new createWriter("test.gcode");
//     let pointsInLayer = layers.pointsInLayer;
//     let layerHeight = layers.layerHeight;
//     let nozSize = layers.nozSize;
  
//     let x2 =layers.layers[0].points[0].x/modifier; 
//     let y2 =layers.layers[0].points[0].y/modifier;
//     let extrusion = 0;
//     let intro = ";;; START GCODE ;;;\nM82 ;absolute extrusion mode\nG28 ;Home\nG1 X207.5 Y202.5 Z20 F10000 ;Move X and Y to center, Z to 20mm high"
    

    
//     let outro = ";;; === END GCODE ===\nM83 ;Set to Relative Extrusion Mode\nG28 Z ;Home Z\n; === DEPRESSURIZE ===\nG91\nG91\nG1 E-1300 F4000\nG90\nG90\n ";
//     // gcFile.write(outro);
//     console.log(intro+body+outro);
//     let gcode = intro+body+outro;
//     return gcode;
//     // writeFile(gcode);
//     // gcFile.close();
// }

}