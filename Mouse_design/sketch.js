var eSize;
var lSize;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  //background(240);
  strokeWeight(4);

  noStroke();

  var cal1 = map(mouseX, 0, 400, 0, 255);
  var cal2 = map(mouseY, 0, 400, 0, 128);
  var cal3 = map((mouseX+mouseY)/2, 0, 400, 0, 255);
  var newVal2 = map(mouseY, 0,height,10,150);

  fill(cal1, cal2, cal3);
  ellipse(mouseX, mouseY, newVal2, newVal2);
  
  fill(cal3, cal1, cal2);
  ellipse(mouseX, mouseY, newVal2*0.7, newVal2*0.7);
  
  
  fill(cal2, cal3, cal1);
  ellipse(mouseX, mouseY, newVal2*0.4, newVal2*0.4);
}