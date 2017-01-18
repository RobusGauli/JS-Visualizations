var balls = [];
var protection = 0;
function setup() {
createCanvas(600, 600);
  //run the block until the counter reaches 20
  
  while (balls.length < 900){
     //create anew ball object
     var ball = new Ball(random(width), random(height));
     var overlapping = false;
     for (var i = 0; i < balls.length; i++){
       var other = balls[i];
      var d = dist(ball.x, ball.y, other.x, other.y);
      if(d < ball.rad + other.rad){
       overlapping = true;
       break;
        
      }
       
     }
    
    if(!overlapping){
      balls.push(ball);
    }
    
  protection += 1;
  if (protection > 10000){
   break; 
  }
  }
  
}

function draw() {
  background(0);
  
  for(var i=0; i < balls.length; i++){
   balls[i].show(); 
  }
 
  
}