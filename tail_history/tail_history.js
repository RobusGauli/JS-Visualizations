var balls = [];
function setup() {
  createCanvas(600, 500);
  

}

function draw() {
  background(0);
  
  
 for(var i = 0; i< balls.length; i++){
   
   
  balls[i].show();
  balls[i].move();
 }
  
}

function mousePressed(){
 balls.push(new Ball()); 
}