let gd = [],
  gd_C = [];
let maxX = 400;
var state = 0;
var rain_pos = 0;
var rain_type = 0;

// setup 
function setup() {
  createCanvas(600, 300);
  ground();
  background(220);
}


// draw
function draw() {
  noStroke();

  // 하늘
  sky();

  stroke(0);  // <- stroke
  // 땅
  fill(20, 200, 100);  // <- fill
  for (var i = 0; i < 250; i++) {  // <- for
    fill(gd_C[i][0], gd_C[i][1], gd_C[i][2], gd_C[i][3]);  // <- fill
    triangle(gd[i][0], gd[i][1], gd[i][2], gd[i][3], gd[i][4], gd[i][5]);  // <- triangle
  }
  for (var i = 250; i < 450; i++) {  // <- for
    fill(gd_C[i][0], gd_C[i][1], gd_C[i][2], gd_C[i][3]);  // <- fill
    ellipse(gd[i][0], gd[i][1], gd[i][2], gd[i][3]);  // <- ellipse
  }

  // 나무
  tree();

  // 비
  if (mouseIsPressed) {  // <- mouse 입력, if
    // 왼쪽 구름 비
    if ((mouseX > 0 && mouseX < 300) && (mouseY > 0 && mouseY < 200)) {  // <- if
      for (var i = 0; i < width / 2; i += width / 2 / 30) {  // <- for
        stroke(0, 255, 0);  // <- stroke
        rain_type++;
        rain_pos += 15 + random(13);

        if (rain_pos > height) {  // <- if
          rain_pos = 0;
        }

        // 비오는 애니메이션
        if (rain_type % 2 == 0) {  // <- if
          line(i, rain_pos - 30, i, rain_pos);  // <- line
          line(i, rain_pos - 150, i, rain_pos - 120);  // <- line
        } else {
          line(i, rain_pos + 30, i, rain_pos + 60);  // <- line
          line(i, rain_pos - 50, i, rain_pos - 30);  // <- line
        }
      }
    }
    
    // 중앙 구름 비
    if ((mouseX > 250 && mouseX < 475) && (mouseY > 0 && mouseY < 200)) {  // <- if
      for (var i = 250; i < 475; i += 225 / 30) {  // <- for
        stroke(255, 255, 0);  // <- stroke
        rain_type++;
        rain_pos += 15 + random(13);

        if (rain_pos > height) {  // <- if
          rain_pos = 0;
        }

        // 비오는 애니메이션
        if (rain_type % 2 == 0) {  // <- if
          line(i, rain_pos - 30, i, rain_pos);  // <- line
          line(i, rain_pos - 150, i, rain_pos - 120);  // <- line
        } else {
          line(i, rain_pos + 30, i, rain_pos + 60);  // <- line
          line(i, rain_pos - 50, i, rain_pos - 30);  // <- line
        }
      }
    }
    
    // 움직이는 동그라미 : 네모땅 클릭시
    if ((mouseX > 0 && mouseX < 400) && (mouseY > 200 && mouseY < 300)) {  // <- if
      ellipse(mouseX,mouseY,25+random(20), 25+random(20));  // <- ellipse
      ellipse(pmouseX,pmouseY,25+random(20), 25+random(20));  // <- ellipse
    }
    
    // 움직이는 세모 : 동그라미땅 클릭시
    if ((mouseX > 400 && mouseX < 600) && (mouseY > 200 && mouseY < 300)) {  // <- if
      triangle(mouseX+random(30),mouseY+random(30),mouseX-random(30),mouseY+random(30),mouseX+random(30),mouseY-random(30));  // <- triangle
      triangle(pmouseX+random(30),pmouseY+random(30),pmouseX+random(30),pmouseY-random(30),pmouseX-random(30),pmouseY-random(30));  // <- triangle
    }
  }
}

function ground() {
  // x : 0~400, y : 200~300
  // 세모땅
  for (var i = 0; i < 100; i++) {  // <- for
    gd[i] = [
      random(400),
      random(100) + 200,
      random(400),
      random(100) + 200,
      random(400),
      random(100) + 200,
    ];
    gd_C[i] = [random(255), random(255), random(255), 40];
  }
  for (var i = 100; i < 125; i++) {  // <- for
    gd[i] = [
      0,
      random(100) + 200,
      0,
      random(100) + 200,
      random(400),
      random(100) + 200,
    ];
    gd_C[i] = [random(255), random(255), random(255), 40];
  }
  for (var i = 125; i < 150; i++) {  // <- for
    gd[i] = [
      400,
      random(100) + 200,
      400,
      random(100) + 200,
      random(400),
      random(100) + 200,
    ];
    gd_C[i] = [random(255), random(255), random(255), 40];
  }
  for (var i = 150; i < 200; i++) {  // <- for
    gd[i] = [
      random(400),
      200,
      random(400),
      200,
      random(400),
      random(100) + 200,
    ];
    gd_C[i] = [random(255), random(255), random(255), 40];
  }
  for (var i = 200; i < 250; i++) {  // <- for
    gd[i] = [
      random(400),
      300,
      random(400),
      300,
      random(400),
      random(100) + 200,
    ];
    gd_C[i] = [random(255), random(255), random(255), 40];
  }

  // x : 400~600, y : 200~300
  // 동그라미 땅 : 왼쪽 -> 오른쪽 순서
  for (var i = 250; i < 350; i++) {  // <- for
    gd[i] = [random(50) + 400, random(100) + 200, random(50), random(50)];
    gd_C[i] = [random(255), random(255), random(255), 40];
  }
  for (var i = 350; i < 400; i++) {  // <- for
    gd[i] = [random(50) + 450, random(75) + 225, random(50), random(50)];
    gd_C[i] = [random(255), random(255), random(255), 40];
  }
  for (var i = 400; i < 430; i++) {  // <- for
    gd[i] = [random(50) + 500, random(50) + 250, random(50), random(50)];
    gd_C[i] = [random(255), random(255), random(255), 40];
  }
  for (var i = 430; i < 450; i++) {  // <- for
    gd[i] = [random(50) + 550, random(25) + 275, random(50), random(50)];
    gd_C[i] = [random(255), random(255), random(255), 40];
  }
}

function tree() {
  fill(random(255), random(255), random(100)); // 나무 기둥, fill
  rect(475, 200, 20, 50);  // <- rect

  fill(0, random(255), random(255)); // 위 나뭇잎, fill
  ellipse(485, 150, 100, 60);  // <- ellipse

  fill(0, random(255), random(255)); // 중간 나뭇잎, fill
  ellipse(485, 175, 100, 60);  // <- ellipse
  
  fill(0, random(255), random(255)); // 아래 나뭇잎, fill
  ellipse(485, 200, 80, 20);  // <- ellipse
}

function sky() {
  fill(255);  // <- fill
  rect(0, 0, 600, 200); // 하얀 하늘  // <- rect

  fill(0, 100, random(100) + 155); // 중앙 구름, fill
  arc(250, 0, 450, 300, 0, HALF_PI, PIE);  // <- arc

  fill(0, 0, random(100) + 155); // 왼쪽 구름, fill
  arc(0, 0, 600, 400, 0, HALF_PI, PIE);  // <- arc

  fill(150, 150, random(50) + 205); // 오른쪽 위 구름, fill
  arc(600, 0, 100, 100, HALF_PI, PI, PIE);  // <- arc

  fill(50, 150, random(50) + 205); // 오른쪽 중간 구름, fill
  arc(600, 200, 200, 50, PI, PI + HALF_PI, PIE);  // <- arc

  fill(100, 100, random(100) + 155); // 오른쪽 아래 구름, fill
  arc(600, 200, 300, 150, HALF_PI, PI, PIE);  // <- arc
}
