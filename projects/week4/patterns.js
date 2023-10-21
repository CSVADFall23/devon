let dark = "#34344A"
let light = "#FEF5EF"

let names = ['twill', 'diamond'];

let patterns = {'twill':{
                  threadingPattern: [[1,0,0,0], [0,1,0,0], [0,0,1,0],[0,0,0,1]],
                  tieUpPattern: [[1,0,0,1], [1,1,0,0],[0,1,1,0], [0,0,1,1]],
                  treddlingPattern: [[1,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,1]]}, 
                'diamond': {
                  threadingPattern:[[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], 
                                    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0], 
                                    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
                                    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]],
                  tieUpPattern: [[0, 0, 1, 1], 
                                 [0, 1, 1, 0],
                                 [1, 1, 0, 0], 
                                 [1, 0, 0, 1]],
                  treddlingPattern:[[1,0,0,0],
                                    [0,1,0,0], 
                                    [0,0,1,0], 
                                    [0,0,0,1],
                                    [1,0,0,0],
                                    [0,1,0,0], 
                                    [0,0,1,0], 
                                    [0,0,0,1],
                                    [1,0,0,0],
                                    [0,1,0,0], 
                                    [0,0,1,0], 
                                    [0,0,0,1], 
                                    [0,0,1,0], 
                                    [0,1,0,0], 
                                    [1,0,0,0],
                                    [0,0,0,1],
                                    [0,0,1,0], 
                                    [0,1,0,0], 
                                    [1,0,0,0],
                                    [0,1,0,0], 
                                    [0,0,1,0], 
                                    [0,0,0,1]]
                }
               };



function threadingUI(){
  let size =8;
  let len = patterns[patternVal].threadingPattern[0].length;
  // print(len);
  for(let x=0; x<pWidth; x++){
    for(let y=0; y<4; y++){
      if (patterns[patternVal].threadingPattern[y][x%len]) { fill(dark)} else {fill(light)}
      square((x*size)+15, (y*size)+10, size);
    }
  }
}

function tieUpUI(){
  let size =8;
  for(let x=0; x<4; x++){
    for(let y=0; y<4; y++){
      if (patterns[patternVal].tieUpPattern[y][x%4]) { fill(dark)} else {fill(light)}
      square((x*size)+460, (y*size)+10, size);
    }
  }
}

function treddlingUI(){
  let size =8;
  let len = patterns[patternVal].treddlingPattern.length;
  for(let x=0; x<4; x++){
    for(let y=0; y<pHeight; y++){
      if (patterns[patternVal].treddlingPattern[y%len][x]) { fill(dark)} else {fill(light)}
      square((x*size)+460, (y*size)+100, size);
    }
  }
}

function pattern(){
  let size =8;
  for(let y=0; y<pHeight; y++){
    let tieUpVal = getLift(y); //get what treddle val is on --> turn into 'on' tie ups 
    for(let x=0; x<pWidth; x++){
     colorPattern(tieUpVal, x, y);
     square((x*size)+15, (y*size)+100, size);
    }
  }
}

function getLift(y){
  let treddle = 0;
  let len = patterns[patternVal].treddlingPattern.length;
  for(let i=0; i <4; i++){
    if(patterns[patternVal].treddlingPattern[y%len][i]==1){treddle =i;}
  }
  
  let out=[];
  for(let i =0; i<4; i++){
    if(patterns[patternVal].tieUpPattern[i][treddle]==1){append(out, i);}
  }
  return out;
}