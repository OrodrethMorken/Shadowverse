var f = 0.1;
var add = 3;
var sw = 3;

function setup(){
  createCanvas(400,400);
}

function draw(){
  background(0);
  for(let i = 0; i < width; i+=add){
    for(let j = 0; j < height; j+=add){
      let noiseVal = noise(i*f, j*f);
      let colorf = lerpColor(color(252, 240, 3), color(0), noiseVal);
      stroke(colorf);
      strokeWeight(sw);
      point(i,j);
    }
  }
}
