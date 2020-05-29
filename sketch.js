var snake;
var rez = 20;
var food;
var w;
var h;

function setup() {
  var canvas = createCanvas(1200, 400);

  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function draw() {
  background(199, 187, 247);
  scale(rez);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.display();

  if (snake.endGame()) {
    print("END GAME");
    background(200, 200, 200);
    noLoop();
  }

  noStroke();
  fill(rgb(245, 248, 0));
  rect(food.x, food.y, 1, 1);
}

function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-3, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(3, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 3);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -3);
  } else if (key == " ") {
    snake.grow();
  }
}
