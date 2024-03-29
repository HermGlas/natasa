var finish = 850;

var xA = 10;
var yA = 75;
var snelheidA = 2;

var xB = xA;
var yB = yA + 150;
var snelheidB = 0;
var acceleratieB = 0.01;

function setup() {
  var myCanvas = createCanvas(900,300);
  myCanvas.parent('processing');
  frameRate(20);
  textFont("Monospace");
  textSize(40);  
}

function draw() {
  background('gainsboro');
  noStroke();
  fill('silver');
  rect(0,0,900,150); 
  fill('black');
  text("A: x="+xA+" v="+snelheidA,10,150);
  text("B: x="+round(xB)+" v="+round(10*snelheidB)/10,10,300);
  tekenAuto(xA,yA,'cadetblue');
  tekenAuto(xB,yB,'tomato');
  xA += snelheidA;
  xB += snelheidB;
  snelheidB += acceleratieB;
  xA = constrain(xA,0,finish);
  xB = constrain(xB,0,finish);
}

function tekenAuto(x,y,kleur) {
  push();
  translate(x,y);
  strokeWeight(5);
  stroke(0);
  fill(kleur);
  beginShape();
  vertex(0,0);
  vertex(30,0);
  vertex(50,-20);
  vertex(80,-20);
  vertex(100,0);
  vertex(120,0);
  vertex(120,20);
  vertex(0,20);
  endShape(CLOSE);
  strokeWeight(10);
  fill(255);
  ellipse(30,25,25);
  ellipse(90,25,25);
  pop();
}
