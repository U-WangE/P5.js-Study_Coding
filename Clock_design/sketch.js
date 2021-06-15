var num = 50/(1.7320508075);
var high = 50*(1.7320508075);
let secondsRadius;
let minutesRadius;
let hoursRadius;

function setup() {
  createCanvas(400, 400);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
}

function draw() {
  background(220);
  
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  
  translate(mouseX, mouseY);
  
  triangle(cos(h)*secondsRadius, sin(h)*secondsRadius+(num-high)/2, cos(h)*secondsRadius-25, sin(h)*secondsRadius+num/2, cos(h)*secondsRadius+25, sin(h)*secondsRadius+num/2)
  triangle(cos(h)*secondsRadius, sin(h)*secondsRadius-(num-high)/2, cos(h)*secondsRadius-25, sin(h)*secondsRadius-num/2, cos(h)*secondsRadius+25, sin(h)*secondsRadius-num/2)
  
  rect(cos(m)*secondsRadius-25,sin(m)*secondsRadius-25, 50, 50);
  
  ellipse(cos(s)*secondsRadius,sin(s)*secondsRadius, 50, 50);

  rotate(mouseX/50);
  triangle(0,num-high, -50,num, 50,num);
}