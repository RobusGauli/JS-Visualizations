function Ball()
{
 this.pos = createVector((cols-1)/2*step, (rows-1) * step)
 
 this.show = function()
 {
  fill(255,123,0)
  rect(this.pos.x, this.pos.y, step, step);
 }
 
 this.move = function(){
  if(this.pos.y <= 0 )
  {
    this.pos.y = (rows-1) * step;
  }else{
    
  this.pos.y -= step;
  }
 }
 
  
  
}