/*
제목 : 나의 자취방
처음 제가 저축한 돈으로 대출을 받아 마련한 자취방을 p5.js로 그려보았습니다.
현재 거주중인 자취방의 평명도를 그려보았습니다.
*/

function setup() {
  createCanvas(800, 1100);
}

/* dashedLine 함수 출처
https://forum.processing.org/two/discussion/13585/drawing-dotted-line-around-a-rect-ie-dotted-stroke */
function dashedLine(x1, y1, x2, y2, l, g) {
    var pc = dist(x1, y1, x2, y2) / 100;
    var pcCount = 1;
    var lPercent = gPercent = 0;
    var currentPos = 0;
    var xx1 = yy1 = xx2 = yy2 = 0;
 
    while (int(pcCount * pc) < l) {
        pcCount++
    }
    lPercent = pcCount;
    pcCount = 1;
    while (int(pcCount * pc) < g) {
        pcCount++
    }
    gPercent = pcCount;
 
    lPercent = lPercent / 100;
    gPercent = gPercent / 100;
    while (currentPos < 1) {
        xx1 = lerp(x1, x2, currentPos);
        yy1 = lerp(y1, y2, currentPos);
        xx2 = lerp(x1, x2, currentPos + lPercent);
        yy2 = lerp(y1, y2, currentPos + lPercent);
        if (x1 > x2) {
            if (xx2 < x2) {
                xx2 = x2;
            }
        }
        if (x1 < x2) {
            if (xx2 > x2) {
                xx2 = x2;
            }
        }
        if (y1 > y2) {
            if (yy2 < y2) {
                yy2 = y2;
            }
        }
        if (y1 < y2) {
            if (yy2 > y2) {
                yy2 = y2;
            }
        }
 
        line(xx1, yy1, xx2, yy2);
        currentPos = currentPos + lPercent + gPercent;
    }
}

function draw() {
  background(220);
  
  fill(255);
  strokeWeight(20);
  
  // 방 전체 영역
  rect(100, 100, 600, 900);
  
  // 화장실 영역
  rect(400, 100, 300, 300);
  
  strokeWeight(4);
  // 정문
  rect(260, 92, 100, 16);
  arc(360, 108, 200, 200, HALF_PI, PI, PIE);
  
  // 부엌 영역
  // 부엌 창문
  rect(170, 92, 40, 8);
  rect(130, 100, 80, 8);
  line(170, 88, 170, 104);
  // 싱크대
  rect(108, 108, 120, 270);
  rect(128, 210, 80, 80);
  // 가스레인지
  ellipse(173, 148, 30, 30);
  line(153, 148, 165, 148);
  line(180, 148, 192, 148);
  line(173, 128, 173, 141);
  line(173, 168, 173, 155);
  // 수도 꼭지
  ellipse(128, 240, 10, 10);
  rect(128, 245, 20, 10);
  ellipse(128, 260, 10, 10);
  // 부엌 문
  rect(108, 390, 150, 18);
  line(200, 399, 350, 399);
  dashedLine(250, 390, 400, 390, 5, 5);
  dashedLine(250, 408, 400, 408, 5, 5);
  
  
  // 화장실 영역
  // 화장실 창문
  rect(540, 92, 40, 8);
  rect(500, 100, 80, 8);
  line(540, 88, 540, 104);
  // 화장실문
  rect(392, 230, 16, 100);
  arc(392, 330, 200, 200, PI, PI+HALF_PI, PIE);
  // 변기
  line(420, 115, 510, 115);  // 상단 가로
  line(420, 115, 420, 140);  // 좌측세로
  line(510, 115, 510, 140);  // 우측 세로
  line(420, 140, 510, 140);  // 하단 가로
  line(425, 140, 431, 189);  // 좌측 커버
  arc(465, 180, 70, 85, HALF_PI, PI*0.9);  // 좌측 커버
  line(505, 140, 499, 189);  // 우측 커버
  arc(465, 180, 70, 85, PI-PI*0.9, HALF_PI);  // 우측 커버
  // 세탁기
  line(550, 115, 670, 115);  // 상단
  line(550, 230, 670, 230);  // 하단
  line(550, 115, 550, 230);  // 좌측
  line(670, 115, 670, 230);  // 우측
  ellipse(610, 162.5, 80, 80);
  rect(570, 210, 80, 10);
  // 거울
  rect(680, 250, 10, 80);
  // 수도 꼭지
  ellipse(680, 280, 10, 10);
  rect(660, 285, 20, 10);
  ellipse(680, 300, 10, 10);
  
  
  // 방 영역
  // 냉장고
  rect(108, 420, 130, 130);
  rect(238, 420, 110, 20);
  arc(238, 440, 220, 220, 0, HALF_PI, PIE);
  // 책상1
  rect(430, 408, 150, 80);
  // 전자레인지
  rect(440, 416, 60, 50);
  // 밥솥
  arc(530, 440, 80, 40, HALF_PI+PI, 0);
  arc(530, 440, 80, 40, 0, HALF_PI);
  arc(530, 440, 30, 40, PI, HALF_PI+PI);
  arc(530, 440, 30, 40, HALF_PI, PI);
  ellipse(532, 440, 20, 10);
  // 행거
  rect(670, 520, 10, 250);
  dashedLine(620, 532, 685, 532, 1, 10);
  dashedLine(620, 532, 620, 757, 1, 10);
  dashedLine(620, 757, 685, 757, 1, 10);
  dashedLine(685, 532, 685, 757, 1, 10);
  // 서랍
  rect(108, 570, 100, 80);
  rect(600, 408, 80, 80);
  // 메인 책상
  noFill();
  rect(168, 700, 240, 110);
  rect(138, 700, 30, 110);
  // 의자
  ellipse(280, 690, 70, 70);
  line(260, 670, 300, 710);
  line(300, 670, 260, 710);
  // 접이식 식탁
  rect(118, 710, 8, 90);
  ellipse(128, 755, 10, 110);
  // 침대
  arc(168, 840, 20, 20, PI, PI+HALF_PI);
  line(158, 840, 158, 960);
  arc(168, 960, 20, 20, HALF_PI, PI);
  line(168, 830, 498, 830);
  line(168, 970, 498, 970);
  arc(498, 840, 20, 20, PI+HALF_PI, 0);
  line(508, 840, 508, 960);
  arc(498, 960, 20, 20, 0, HALF_PI);
  // 베개
  arc(178, 865, 20, 20, PI, PI+HALF_PI);
  line(168, 865, 168, 935);
  arc(178, 935, 20, 20, HALF_PI, PI);
  line(178, 855, 188, 855);
  line(178, 945, 188, 945);
  arc(188, 865, 20, 20, PI+HALF_PI, 0);
  line(198, 865, 198, 935);
  arc(188, 935, 20, 20, 0, HALF_PI);
  // 이불
  arc(228, 840, 20, 20, PI, PI+HALF_PI);
  line(218, 840, 218, 960);
  arc(228, 960, 20, 20, HALF_PI, PI);
  dashedLine(248, 830, 248, 970, 5, 15);
  // 방 창문
  fill(255);
  rect(400, 992, 150, 8);
  rect(250, 1000, 300, 8);
  line(400, 986, 400, 1004);
}