let ballX;
let ballY;
const ballRadius = 30;
let dragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballX = width / 2;
  ballY = height / 2;
}

function draw() {
  background(240);
  noStroke();
  fill(250, 100, 100);
  circle(ballX, ballY, ballRadius * 2);
  cursor(dragging ? 'grabbing' : (dist(mouseX, mouseY, ballX, ballY) <= ballRadius ? 'grab' : 'default'));
}

function startDrag(x, y) {
  if (dist(x, y, ballX, ballY) <= ballRadius) {
    dragging = true;
    dragOffsetX = ballX - x;
    dragOffsetY = ballY - y;
  }
}

function moveBall(x, y) {
  if (!dragging) return;
  ballX = constrain(x + dragOffsetX, min(ballRadius, width / 2), max(width - ballRadius, width / 2));
  ballY = constrain(y + dragOffsetY, min(ballRadius, height / 2), max(height - ballRadius, height / 2));
}

function mousePressed() {
  startDrag(mouseX, mouseY);
  return false;
}

function mouseDragged() {
  moveBall(mouseX, mouseY);
  return false;
}

function mouseReleased() {
  dragging = false;
  return false;
}

function touchStarted() {
  if (touches.length > 0) startDrag(touches[0].x, touches[0].y);
  return false;
}

function touchMoved() {
  if (touches.length > 0) moveBall(touches[0].x, touches[0].y);
  return false;
}

function touchEnded() {
  dragging = false;
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  ballX = constrain(ballX, min(ballRadius, width / 2), max(width - ballRadius, width / 2));
  ballY = constrain(ballY, min(ballRadius, height / 2), max(height - ballRadius, height / 2));
}
