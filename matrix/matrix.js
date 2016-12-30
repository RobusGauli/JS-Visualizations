var cols;
var rows;
var step = 40;
var ball;
var enemies = [];
var count = 0
function setup() {
  createCanvas(600, 600);
  frameRate(8);
  cols = width/step;
  rows = height/step;
  ball = new Ball();
  for(var k = 0; k< rows; k++)
  {
   enemies.push(new Enemy(k*step)); 
    
  }
}

function draw() {
  background(0)
  console.log(count%100);
  count += 1;
  for(var y = 0; y < rows; y++){
    for(var x = 0; x < cols; x++){
        push();
        translate(x*step, y*step);
        noFill();
        stroke(255, 70);
        rect(0, 0, step, step);
        pop();
    }
  }
  
  ball.show();
  
  for(var k = 0; k< rows; k++)
  {
        enemies[k].show();
    //  enemies[k].move();
      enemies[k].edge();
    
  }
  
}
function mousePressed()
{
 ball.move(); 
  
}