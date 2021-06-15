/*
마우스 이벤트 1회
키보드 이벤트 1회
산술 연산 2회
좌표값 활용(위치, 크기, 컬러)
채우기, 외곽선 변화 2회
-----------------------------
형태 그림
원근감 표현 (색, 위치, 형태 등의 변화)
-----------------------------
화면 클릭 시 시작

마우스 (왼쪽 클릭)
  나무 -> 나무 반토막 -> 나무 밑둥
키보드 ('r')
  나무 밑둥, 나무 반토막 -> 나무
이동
  - 원근감
    top -> bottom
    =far -> near
색
  - 외곽선 Left->Right
  - 채우기 top->bottom
형태 변환
    외곽선 ('l')
      있음, 없음
    채우기 ('c')
      있음, 없음
*/

var clickCount = -1;
var outLine = 0;
var fillColor = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  var Color_MouseX = 255*(mouseX/400.0);
  var Color_MouseY = 255*(mouseY/400.0);
  var randomColor_red = random(0, 256);
  var randomColor_green = random(0, 256);
  var randomColor_blue = random(0, 256);
  
  translate(mouseX,mouseY);
  scale(mouseY/100.0);
  
  // 외각선 키보드 'l'로
  if(outLine == 0) // 검은색 선
    stroke(0);
  else if(outLine == 1) // 마우스 위치에 따라 변경
    stroke(Color_MouseY,Color_MouseX,(Color_MouseY+Color_MouseX)/2.0);
  else if(outLine == 2) // 랜덤 변경
    stroke(randomColor_red,randomColor_green,randomColor_blue);
  else if(outLine == 3) // 색 없음
    noStroke();
  
  // 도형 내부 키보드 'c'로 변경
  if(fillColor == 0) // 마우스 Y의 위치에 따라 흑백 변경
    fill(Color_MouseY);
  else if(fillColor == 1) // 마우스 위치에 따라 변경
    fill(Color_MouseY,Color_MouseX,(Color_MouseY+Color_MouseX)/2.0);
  else if(fillColor == 2) // 랜덤 변경
    fill(randomColor_red,randomColor_green,randomColor_blue);
  else if(fillColor == 3) // 색 없음
    noFill();
  
  // 마우스 클릭시 도형 변환
  if (clickCount == -1){
    background(220);
    text("화면을 클릭해 주세요.", -50, 0);
  } else if(clickCount%3 == 0)
    tree();
  else if(clickCount%3 == 1)
    halfTree();
  else
    root();
}

//clickCount
function mousePressed() {
  clickCount++;
}

//나무
function tree() {
  rect(-7,0,14,50);
  triangle(0,10,20,30,-20,30);
  triangle(0,0,20,20,-20,20);
  triangle(0,-10,20,10,-20,10);
}

function halfTree() {
  rect(-7,20, 14, 30);
  triangle(0,10,20,30,-20,30);
  quad(-14,14,8,8,20,20,-20,20);
}

function root() {
  quad(-7,40,7,30,7,50,-7,50);
}

//spaceBar
function keyTyped() {
  // reset
  if(key == 'r') {
    clickCount = 0;
  }
  
  // line
  if(key == 'l') {
    outLine += 1;
    if(outLine == 4)
      outLine = 0;
  }
  
  // fill
  if(key == 'f') {
    fillColor += 1;
    if(fillColor == 4)
      fillColor = 0;
  }
}