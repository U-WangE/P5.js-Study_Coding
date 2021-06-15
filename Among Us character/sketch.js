let x = 0;

function setup() {
  createCanvas(640, 740);
}

function draw() {
  let k =[100,100,100]; // 회색 (RGB: 100,100,100)
  let g = [150,150,150]; // 회색 (RGB: 150,150,150)
  let d = [75, 75, 75]; // 검정 (RGB: 75,75,75)
  let b = [50, 50, 50]; // 검정 (RGB: 50,50,50)
  let B = [0, 0, 0]; // 검정 (RGB: 0,0,0)
  let W = [200, 200, 200]; // 회색 (RGB: 200,200,200)
  let G = [255, 255, 255]; // 횐색 (RGB: 255, 255, 255)

  let value = [ /*31X37*/
    W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,
    W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,
    W,W,W,W,W,W,W,W,W,W,B,B,B,B,B,B,B,B,W,W,W,W,W,W,W,W,W,W,W,W,W,
    W,W,W,W,W,W,W,W,B,B,d,d,d,d,d,d,d,d,B,B,B,W,W,W,W,W,W,W,W,W,W,
    W,W,W,W,W,W,B,B,d,d,d,d,d,d,d,d,d,d,d,d,d,B,W,W,W,W,W,W,W,W,W,
    W,W,W,W,W,B,d,d,d,d,d,d,B,B,B,B,B,d,d,d,d,d,B,W,W,W,W,W,W,W,W,
    W,W,W,W,B,B,B,B,B,B,B,B,W,W,g,g,g,B,d,d,d,d,B,W,W,W,W,W,W,W,W,
    W,W,W,B,G,G,G,G,G,G,G,G,G,W,W,g,g,k,B,d,d,d,b,B,W,W,W,W,W,W,W,
    W,W,W,B,G,G,G,G,G,G,G,G,G,W,W,g,g,k,k,B,d,d,b,B,W,W,W,W,W,W,W,
    W,W,B,G,G,G,G,G,G,G,G,G,G,W,W,g,g,g,k,B,d,d,b,B,W,W,W,W,W,W,W,
    W,W,B,G,G,G,G,G,G,G,G,G,W,W,W,g,g,g,k,B,d,d,b,B,B,B,B,B,W,W,W,
    W,W,B,W,G,G,G,G,G,G,W,W,W,W,g,g,g,g,k,B,d,d,b,B,d,d,d,d,B,W,W,
    W,W,B,W,W,W,W,W,W,W,W,W,W,g,g,g,k,k,k,B,d,d,b,B,d,d,d,d,B,W,W,
    W,W,W,B,W,W,W,W,W,W,W,g,g,g,g,k,k,k,k,B,d,d,b,B,b,d,d,d,B,W,W,
    W,W,W,W,B,g,g,g,g,g,g,g,g,g,k,k,k,k,B,d,d,d,b,B,b,b,d,d,B,W,W,
    W,W,W,W,B,B,B,g,g,g,g,k,k,k,k,B,B,B,d,d,d,d,b,B,b,b,b,b,B,W,W,
    W,W,W,W,B,d,d,B,B,B,B,B,B,B,B,d,d,d,d,d,d,d,b,B,b,b,b,b,B,W,W,
    W,W,W,W,B,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,b,b,B,b,b,b,b,B,W,W,
    W,W,W,W,B,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,b,b,B,b,b,b,b,B,W,W,
    W,W,W,W,B,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,b,b,b,B,b,b,b,b,B,W,W,
    W,W,W,W,B,b,d,d,d,d,d,d,d,d,d,d,d,d,d,d,b,b,b,B,b,b,b,b,B,W,W,
    W,W,W,W,B,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,B,b,b,b,b,B,W,W,
    W,W,W,W,B,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,B,b,b,b,b,B,W,W,
    W,W,W,W,W,B,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,B,b,b,b,B,W,W,W,
    W,W,W,W,W,B,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,B,B,B,B,W,W,W,W,
    W,W,W,W,W,B,b,b,b,B,b,b,b,b,b,b,b,b,b,b,b,b,b,B,W,W,W,W,W,W,W,
    W,W,W,W,W,W,B,b,b,b,B,B,b,b,b,b,b,b,b,b,b,b,B,W,W,W,W,W,W,W,W,
    W,W,W,W,W,W,B,b,b,b,b,B,B,B,B,B,B,B,b,b,b,b,B,W,W,W,W,W,W,W,W,
    W,W,W,W,W,W,B,b,b,b,b,B,W,W,W,W,W,B,b,b,b,b,B,W,W,W,W,W,W,W,W,
    W,W,W,W,W,W,B,b,b,b,b,B,W,W,W,W,W,B,b,b,b,b,B,W,W,W,W,W,W,W,W,
    W,W,W,W,W,W,B,b,b,b,b,B,W,W,W,W,W,B,b,b,b,b,B,W,W,W,W,W,W,W,W,
    W,W,W,W,W,W,W,B,B,B,B,d,d,d,d,d,d,d,B,B,B,B,d,d,d,W,W,W,W,W,W,
    W,W,W,W,W,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,W,W,W,
    W,W,W,W,W,W,W,W,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,W,W,W,W,W,W,W,
    W,W,W,W,W,W,W,W,W,W,W,W,d,d,d,d,d,d,d,d,W,W,W,W,W,W,W,W,W,W,W,
    W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,
    W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,W,
  ];

  let w = width / 31;
  noStroke();

  for (let i = 0; i < 37; i++) {
    for (let j = 0; j < 31; j++) {
      fill(value[x][0], value[x][1], value[x][2]);
      rect(j * w, i * w, 30, 30);
      x++;

      if (x >= 1147) x = 0;
    }
  }
}
