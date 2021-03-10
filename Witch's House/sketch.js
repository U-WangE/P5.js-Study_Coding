/*컴공 4학년인데 for 정도는 써도 되겠죠?ㅎㅎ;;
16011034 박찬영
참고 Image : https://www.pinterest.co.kr/pin/790592909576452455/
*/
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(220);
  
  // row
  for(var i = 1; i < 30; i++) {
    line(10*i, 0 , 10*i, 300);
  }
  
  // col
  for(var i = 1; i < 30; i++) {
    line(0, 10 * i, 300, 10 * i);
  }
  
  // house
  fill(255);
  
  // bottom
  for (var i = 0; i < 30; i++) {
    rect(i*10, 290, 10, 10);
    rect(i*10, 280, 10, 10);
  }
  
  // wall
  for (var i = 2; i < 15; i++) {
    rect(30, 270-(10*i), 10, 10);
    rect(20, 270-(10*i), 10, 10);
  }
  
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 4; j++) {
      rect(10+(10*j), 260+(10*i), 10, 10);
    }
  }
  
  for (var i = 0; i < 5; i++) {
    rect(40+(10*i), 220, 10, 10);
  }
  
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 17; j++) {
      rect(90+(10*i), 270-(10*j), 10, 10);
    }
  }
  
  for (var i = 0; i < 18; i++) {
    rect(100+(10*i), 100, 10, 10);
  }
  
  for (var i = 0; i < 14; i++) {
    rect(120+(10*i), 90, 10, 10);
  }
  
  for (var i = 0; i < 8; i++) {
    rect(150+(10*i), 80, 10, 10);
  }
  
  // roof
  for (var i = 0; i < 2; i++) {
    rect(0, 110+(10*i), 10, 10);
    for (var j = 0; j < 6; j++) {
      rect(10+(10*j), 100+(10*i), 10, 10);
    }
    rect(70, 90+(10*i), 10, 10);
    rect(80, 80+(10*i), 10, 10);
    rect(90, 80+(10*i), 10, 10);
    rect(100, 70+(10*i), 10, 10);
    rect(110, 70+(10*i), 10, 10);
    rect(120, 60+(10*i), 10, 10);
    rect(130, 60+(10*i), 10, 10);
    rect(140, 60+(10*i), 10, 10);
    for (var j = 0; j < 8; j++) {
      rect(150+(10*j), 50+(10*i), 10, 10);
    }
    rect(230, 60+(10*i), 10, 10);
    rect(240, 60+(10*i), 10, 10);
    rect(250, 60+(10*i), 10, 10);
    rect(260, 70+(10*i), 10, 10);
    rect(270, 70+(10*i), 10, 10);
    rect(280, 80+(10*i), 10, 10);
    rect(290, 80+(10*i), 10, 10);
  }
  
  // Chimney
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      rect(240+(10*i), 10+(10*j), 10, 10);
    }
  }
  rect(260, 50, 10, 10);
  rect(270, 50, 10, 10);
  for (var i = 0; i < 4; i++) {
    rect(280, 30+(10*i), 10, 10);
  }
  

  fill(225);
  
  
  // Window
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 5; j++) {
      rect(210+(10*j), 150+(10*i), 10, 10);
    }
  }
  
  // door
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 6; j++) {
      rect(120+(10*j), 190+(10*i), 10, 10);
    }
  }
  rect(130, 180, 10, 10);
  rect(140, 180, 10, 10);
  rect(150, 180, 10, 10);
  rect(160, 180, 10, 10);

  fill(255);
  rect(130, 230, 10, 10);
  
    
  // Window line
  for (var i = 0; i < 5; i++) {
    rect(210+(10*i), 170, 10, 10);
    rect(210+(10*i), 200, 10, 10);
  }
  
  for (var i = 0; i < 8; i++) {
    rect(230, 150+(10*i), 10, 10);
  }
}