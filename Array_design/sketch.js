//예술가와 디자이너를 위한 아트코딩
//김혜란
//10주차: 배열로 모닥불 그리기 //11주차에서 다시 소개함

let x = 0;

function setup() {
  createCanvas(450, 450);
}

function draw() {
  let g = [200, 200, 200]; // 회색 (RGB: 200,200,200)
  let G = [100, 100, 100]; // 회색 (RGB: 100,100,100)
  let B = [0, 0, 0]; // 검정 (RGB: 0,0,0)
  let W = [255, 255, 255]; // 하양 (RGB: 255,255,255)

  let value = [
    /* 0~14*/ W,W,W,W,W,B,W,W,W,B,W,W,W,W,W,
    /*15~29*/ W,W,W,W,B,B,W,W,W,B,B,W,W,W,W,
    /*30~44*/ W,W,W,B,G,B,W,W,W,B,G,B,W,W,W,
    /*45~59*/ W,W,B,G,G,B,B,B,B,B,G,G,B,W,W,
    /*60~74*/ W,B,G,g,G,G,G,G,G,G,G,g,G,B,W,
    /*75~89*/ B,G,g,g,g,g,g,g,g,g,g,g,g,G,B,
   /*90~104*/ W,B,G,g,G,G,G,G,G,G,G,g,G,B,W,
  /*105~119*/ W,W,B,G,G,B,B,B,B,B,G,G,B,W,W,
  /*120~134*/ W,W,W,B,G,B,W,W,W,B,G,B,W,W,W,
  /*135~149*/ W,W,W,W,B,B,W,W,W,B,B,W,W,W,W,
  /*150~164*/ W,W,W,W,W,B,W,W,W,B,W,W,W,W,W,
  ];

  let w = width / 15;
  noStroke();

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 15; j++) {
      fill(value[x][0], value[x][1], value[x][2]);
      rect(j * w, i * w, 30, 30);
      x++;

      if (x >= 165) x = 0;
    }
  }
}
