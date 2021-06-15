function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(246, 187, 67, 255);

  fill(255,0,0,255); //R,G,B, A (alpha:투명도0-255)
  // 좌측 삼각형 색상 지정
  triangle(50,100, 250,100, 50,300);
  
  fill(0,255,255,255);
  // 우측 삼각형 색상 지정
  triangle(50,300, 250,100, 250,300);

}