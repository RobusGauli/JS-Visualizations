function Wall(){
 this.spacing = random(50,80)
 this.center_pos = random(120, height-120)
 this.upper = this.center_pos - this.spacing;
 this.lower = height - this.center_pos-this.spacing;
 this.w = 30;
 this.x = width;
 this.r = 0;
 this.g = 255;
 
 this.passed = false;
 
 this.show = function(){
  fill(this.r, this.g, 0);
  rect(this.x, 0 , this.w, this.upper);
  rect(this.x, height-this.lower, this.w, this.lower);
 }
 
 this.move = function(){
  this.x -= 5; 
 }
 
 this.offScreen = function(){
  return (this.x < -20); 
 }
 
 this.hits = function(ball){
    
   if (ball.pos.x >= this.x-this.w/2 && ball.pos.x < this.x + this.w/2 ){
     if(ball.pos.y -17 <= this.upper || ball.pos.y + 17 >=height-this.lower){
       
       
      this.r= 255;
      this.g = 0;
      return true;
     }
   }
 }
  
}