function Snake()
{
 this.grid = new Grid();
 this.pos = createVector((this.grid.cols/2 * (this.grid.step)), (this.grid.rows/2 * (this.grid.step)));
 this.vel = createVector(floor(random(-2, 2)), 0);
  
  this.dir_x = 1;
  this.dir_y = 0;
  
 this.show = function(){
   fill(255);
  rect(this.pos.x, this.pos.y, this.grid.step, this.grid.step);
  
 }
 this.update = function(){
  
  this.pos.x += (this.grid.step * this.dir_x);
  this.pos.y += (this.grid.step * this.dir_y);
   
 }
 
 this.move = function(){
  if(key == 'w'){
  this.dir_x = 0 ;
  this.dir_y = -1;
  }
 }
  
}