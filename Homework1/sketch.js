function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}

function draw() {
  print(mills());
  noFill(); 
  // 선 색상
  storke(255,200,0); 
  line(0, 0, 100, 100);
}


// 터치가 있으면 ...
  if (touches.length > 0) {
    for (let i = 0; i < touches.length; i++) {
      // 터치의 현재 x,y 위치
      let xpos = touches[i].x;
      let ypos = touches[i].y;
      // 현재 x,y - 이전 x,y 연결 선 그리기
      if (prevs[i]) {
      line(xpos, ypos, prevs[i].x, prevs[i].y); 
      // 이전 x,y 업데이트
      prevs[i] = {
        x: xpos,
        y: ypos,
      };
    }
  }
}


// 이전 위치-선 연결되는 문제 
// 손가락 모두 떼면 초기화 
function mouseReleased() {
  if (touches.length === 0) {
    prevs = [];
  }
}

function mousePressed() {
  if (millis() - lastTap < 300) {
    background(50);
  }
  lastTap = millis();
  
}