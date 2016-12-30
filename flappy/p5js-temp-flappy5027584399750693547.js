var ball;
var walls = [];
var score = 0;  
function setup() {
  createCanvas(400, 600);
  ball = new Ball();
  
}

function draw() {
  background(0);
  
  if (frameCount % 50 == 0){
    walls.push(new Wall());
      
  }
  
 for (var i=0; i< walls.length; i++)
 {
   walls[i].show();
   walls[i].move();
   if (walls[i].hits(ball)){
      score = "Game Over";
     //background(255, 0, 0, 50);
   }
   
   if (walls[i].x < ball.pos.x && walls[i].passed == false)
   {
    score += 1; 
    walls[i].passed = true;
   }
   
   
 }
  
  ball.show();
  ball.update();
  if (ball.offScreen()){
     background(255, 0, 0, 80);
     
  }
  
  for(var j = walls.length-1; j >= 0; j--)
  {
   if (walls[j].offScreen()){
      walls.splice(j,1)
   }
  }
  
 
   textSize(80);
   fill(255 , 102, 153, 51);
   text(score.toString(), width/2, 90 );
}

function keyPressed(){
  
 if (key == ' ' || mousePressed){
    ball.up(); 
 }
 
 function mousePressed(){
    ball.up();   
   
 }
}