function Ball(x, y){
 this.x = x;
 this.y = y;
 this.rad = random(10, 60);
 this.r = random(255);
 this.g = random(255);
 this.b = random(255);
 
 this.show = function(){
   noStroke();
   fill(this.r, this.g, this.b, 100);
  ellipse(this.x, this.y, this.rad * 2, this.rad* 2);
  
 }
 
 this.isValid = function(ball){
  distance = dist(this.x, this.x, ball.x, ball.y);
  return distance > this.rad + ball.rad;
   
 }
 
 
  
  
  
}