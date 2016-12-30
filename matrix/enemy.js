function Enemy(y)
{
  
 this.directions = [0, cols-1]
 this.pos = createVector(this.directions[floor(random(2))] * step, y )
 
 this.show = function(){
    
   fill(255, 20, 20);
   rect(this.pos.x, this.pos.y, step, step);
   
 }
 
 this.move = function()
 {
   
   //frameRate(floor(random(2,10)))
   this.pos.x += step;
   
 }
 
 this.edge = function(){
  if(this.pos.x > (rows-1)* step){
     this.pos.x = 0; 
  }
   
 }
  
  
  
}