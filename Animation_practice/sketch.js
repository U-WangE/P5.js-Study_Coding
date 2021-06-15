//예술가와 디자이너를 위한 아트코딩
//김혜란
//7주차: 연속이미지파일을 활용한 애니메이션 1_ 나비이동

var img1, img2, img3, img4, img5, img6;

var cnt = 1;

function setup() {
  createCanvas(500, 500);

  frameRate(6);
  img1 = loadImage('dog1.png');
  img2 = loadImage('dog2.png');
  img3 = loadImage('dog4.png');
  img4 = loadImage('dog5.png');
  img5 = loadImage('dog6.png');
  img6 = loadImage('dog7.png');

}

function draw() {
  
  background(255);

  if (cnt == 1) {
    image(img1, 0, 0);
    cnt++;
  } else if (cnt == 2) {
    image(img2, 0, 0);
    cnt++;
  }else if (cnt == 3) {
    image(img3, 0, 0);
    cnt++;
  }else if (cnt == 4) {
    image(img4, 0, 0);
    cnt++;
  }else if (cnt == 5) {
    image(img5, 0, 0);
    cnt++;
  }else if (cnt == 6) {
    image(img6, 0, 0);
    cnt = 1;
  }
  
}