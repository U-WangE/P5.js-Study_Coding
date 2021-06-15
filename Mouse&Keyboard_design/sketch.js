var cnt; // 붓의 형태를 관여하는 변수

function setup() {
  createCanvas(400, 400);
  cnt = 0;
  background(220);
}

function draw() {
  // space키를 누르면 cnt증가
  if(keyIsPressed && keyCode == 32)
    cnt+=1;
  if(cnt == 3) // 붓의 종류 3가지
    cnt = 0;
  
  
  if(cnt == 0) { // 'space' 시 선 모양 변경
    stroke(0); // 기본 색
    
    if(keyCode == 82) // 'R' 붓 색 Red로 변경
      stroke(255, 0, 0);
    else if(keyCode == 71) // 'G' 붓 색 Green로 변경
      stroke(0, 255, 0);
    else if(keyCode == 66) // 'B' 붓 색 Blue로 변경
      stroke(0, 0, 255);
    
    if(mouseIsPressed) {
      // 마우스 클릭시 붓으로 그릴 수 있음
      strokeWeight(5);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  } else if(cnt == 1) {
    fill(0);
    
    if(keyCode == 82)
      fill(255, 0, 0);
    else if(keyCode == 71)
      fill(0, 255, 0);
    else if(keyCode == 66)
      fill(0, 0, 255);
    
    if(mouseIsPressed) {
      noStroke();
      ellipse(mouseX, mouseY, 20, 20);
    }
  } else if(cnt == 2) {
    fill(0,20);
    
    if(keyCode == 82)
      fill(255, 0, 0, 20);
    else if(keyCode == 71)
      fill(0, 255, 0, 20);
    else if(keyCode == 66)
      fill(0, 0, 255, 20);
    
    if(mouseIsPressed) {
      noStroke();
      ellipse(mouseX, mouseY, 30, 30);
      ellipse(mouseX + 10, mouseY + 10, 15, 15);
    }
  }
}