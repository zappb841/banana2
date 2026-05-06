let fonte;
let points = [];
let r = 1; let angle = 0; 
let sf = 0.2;

function preload() {
  fonte = loadFont("BowlbyOne-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  
  r = map(mouseX,0,width,1,80);
  sf = map(mouseY,0,height,0.01,0.2);
  
  points = fonte.textToPoints("Banana", 0, 220,90, {
                              sampleFactor:sf,
                              simplifyThreshold: 0
                              });
  
  for (let i=0; i<points.length; i++){
    fill(255,200,0)
    circle(points[i].x,points[i].y+r*sin(angle + i*10),10);
  }
  angle += 4; 
}
