// 불 애니메이션은 마우스를 따라다닌다.
// 불은 마우스 포인트를 대  신한다
// 성냥과 불이 맞닿으면 성냥에 불이 켜진다
// 불이 켜진 성냥의 갯수 만큼 배경이 빨갛게 변한다
// 아무 곳이든 마우스 클릭하면 모든 불이 꺼지고, background(0);

let fire = [],
  on = [];
let animation, cnt = 0,
  index = 0, pcnt = 0,
  bgColor = 255;
var matchs = [];

function preload() {
  for (var i = 0; i < 4; i++) {
    matchs[i] = loadImage("match.png");
    on[i] = 0;
  }
}

function setup() {
  createCanvas(800, 400);
  animation = new Animate("fire", 9);
  frameRate(9);
}

function draw() {
  noCursor();
  background(255, bgColor, bgColor);

  for (var i = 0; i < 4; i++) {
    image(matchs[i], 100 + 200 * (i - 1), 100);
  }

  // 성냥과 불(마우스)가 닿게 되면, 성냥에 불이 켜진다. (순서 상관 X)
  for (var i = 0; i < 4; i++) {
    if (mouseX > 15 + i * 200 && mouseX < 85 + i * 200) {
      if (mouseY > 173) {
        if(on[i] == 0) {
          cnt++;
          bgColor = 255 - (cnt)*50;  // 불 켜진 성냥 하나당 배경 빨개짐
        }
        on[i] = 1;
      }
    }
    if (on[i] == 1) {
      if (on[i] == 1) {
        addAnimation(0 + i * 200, 160);
      }
    }
  }
  
  animation.display();
  
  if (mouseIsPressed) {  // 마우스 클릭시 불 꺼짐
    for(var i = 0; i < 4; i++) {
      on[i] = 0;
      cnt = 0;
      bgColor = 255;
    }
  }
}

function addAnimation(fixX, fixY) {
  for (var i = 0; i < this.counts; i++) {
    var filename = this.imagename + (i + 1) + ".png";
    fire[i] = loadImage(filename);
  }
  index = (index + 1) % fire.length;
  image(fire[index], fixX, fixY, 100, 100);
}

class Animate {
  constructor(imagePrefix, count) {
    this.imagename = imagePrefix;
    this.counts = count;

    for (var i = 0; i < this.counts; i++) {
      var filename = this.imagename + (i + 1) + ".png";
      fire[i] = loadImage(filename);
    }
  }

  display() {
    index = (index + 1) % fire.length;

    image(fire[index], mouseX - 50, mouseY - 50, 100, 100);
  }
}