
var snake;
var food;
function setup() {
  createCanvas(600, 600)
  frameRate(15);
  grid = new Grid();
  snake = new Snake();
  food = new Food(grid);
}

function draw() {
  background(0);
  grid.show();
  snake.show();
  snake.update();
  food.show();
  snake.eats(food);
  
  
}

function keyPressed(){
  if (keyCode == UP_ARROW && snake.dir_y != 1) {
    snake.dir_x = 0;
    snake.dir_y = -1;
  } else if (keyCode == DOWN_ARROW && snake.dir_y != -1) {
    snake.dir_x = 0;
    snake.dir_y = 1;
  }else if (keyCode == LEFT_ARROW && snake.dir_x != 1){
     snake.dir_x = -1;
     snake.dir_y = 0;
  }else if (keyCode ==RIGHT_ARROW && snake.dir_x != -1){
     snake.dir_x = 1;
     snake.dir_y = 0;
  }
}